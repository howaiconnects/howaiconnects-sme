-- Fix critical security vulnerabilities

-- 1. Create user_roles table with proper structure
CREATE TABLE IF NOT EXISTS public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role text NOT NULL DEFAULT 'user',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create policies for user_roles table
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage user roles" 
ON public.user_roles 
FOR ALL
USING (get_current_user_role() = 'admin');

-- 2. Make role field non-nullable in profiles with proper default
ALTER TABLE public.profiles 
ALTER COLUMN role SET DEFAULT 'user',
ALTER COLUMN role SET NOT NULL;

-- 3. Update profiles RLS policy to prevent users from updating their role
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can update their own profile (except role)" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id) 
WITH CHECK (
    auth.uid() = id AND 
    -- Prevent role updates through direct profile updates
    (OLD.role = NEW.role OR get_current_user_role() = 'admin')
);

-- 4. Create trigger to sync roles between tables
CREATE OR REPLACE FUNCTION public.sync_user_role_to_profile()
RETURNS TRIGGER AS $$
BEGIN
    -- Update profile role when user_roles changes
    UPDATE public.profiles 
    SET role = NEW.role, updated_at = now()
    WHERE id = NEW.user_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER sync_role_to_profile
    AFTER INSERT OR UPDATE OF role ON public.user_roles
    FOR EACH ROW
    EXECUTE FUNCTION public.sync_user_role_to_profile();

-- 5. Populate user_roles table with existing profile roles
INSERT INTO public.user_roles (user_id, role)
SELECT id, COALESCE(role, 'user')
FROM public.profiles
ON CONFLICT (user_id, role) DO NOTHING;

-- 6. Update admin_update_user_role function to work with user_roles table
CREATE OR REPLACE FUNCTION public.admin_update_user_role(target_user_id uuid, new_role text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Check if caller is admin
  IF public.get_current_user_role() != 'admin' THEN
    RAISE EXCEPTION 'Access denied: Only admins can update user roles';
  END IF;
  
  -- Validate role
  IF new_role NOT IN ('user', 'moderator', 'admin') THEN
    RAISE EXCEPTION 'Invalid role: %', new_role;
  END IF;
  
  -- Delete existing role for user
  DELETE FROM public.user_roles WHERE user_id = target_user_id;
  
  -- Insert new role
  INSERT INTO public.user_roles (user_id, role) 
  VALUES (target_user_id, new_role);
  
  -- Log the action
  INSERT INTO public.admin_audit_log (admin_user_id, action, target_user_id, details)
  VALUES (
    auth.uid(), 
    'role_update', 
    target_user_id, 
    jsonb_build_object('new_role', new_role, 'timestamp', now())
  );
END;
$$;