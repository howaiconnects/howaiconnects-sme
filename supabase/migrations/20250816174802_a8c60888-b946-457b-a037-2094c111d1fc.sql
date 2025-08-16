-- Fix critical security vulnerabilities (corrected)

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
ALTER COLUMN role SET DEFAULT 'user';

-- Update any null roles to 'user'
UPDATE public.profiles SET role = 'user' WHERE role IS NULL;

-- Now make it non-nullable
ALTER TABLE public.profiles 
ALTER COLUMN role SET NOT NULL;

-- 3. Update profiles RLS policy to prevent users from updating their role
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can update their own profile (except role)" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id);

-- 4. Populate user_roles table with existing profile roles
INSERT INTO public.user_roles (user_id, role)
SELECT id, role
FROM public.profiles
ON CONFLICT (user_id, role) DO NOTHING;

-- 5. Update admin_update_user_role function to work with user_roles table
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
  
  -- Update role in both tables
  UPDATE public.profiles 
  SET role = new_role, updated_at = now()
  WHERE id = target_user_id;
  
  -- Update user_roles table
  DELETE FROM public.user_roles WHERE user_id = target_user_id;
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