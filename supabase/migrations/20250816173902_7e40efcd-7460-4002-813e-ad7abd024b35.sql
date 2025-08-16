-- Fix database function security issues: Add search_path to all functions
-- Update existing functions to have secure search_path setting

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$;

-- Create a security definer function to get current user role (prevents infinite recursion)
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT 
LANGUAGE SQL 
SECURITY DEFINER 
STABLE
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

-- Create user_roles table for proper role management (prevents privilege escalation)
CREATE TABLE IF NOT EXISTS public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role text NOT NULL DEFAULT 'user',
    assigned_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    assigned_at timestamp with time zone DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create policies for user_roles table
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Only admins can assign roles" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (
  public.get_current_user_role() = 'admin' AND
  role IN ('user', 'moderator', 'admin')
);

CREATE POLICY "Only admins can update roles" 
ON public.user_roles 
FOR UPDATE 
USING (public.get_current_user_role() = 'admin')
WITH CHECK (
  public.get_current_user_role() = 'admin' AND
  role IN ('user', 'moderator', 'admin')
);

CREATE POLICY "Only admins can delete roles" 
ON public.user_roles 
FOR DELETE 
USING (public.get_current_user_role() = 'admin');

-- Update profiles table to prevent direct role changes
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id)
WITH CHECK (
  auth.uid() = id AND 
  -- Prevent users from changing their own role
  (OLD.role = NEW.role OR public.get_current_user_role() = 'admin')
);

-- Add audit logging table for admin actions
CREATE TABLE IF NOT EXISTS public.admin_audit_log (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    action text NOT NULL,
    target_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    details jsonb,
    created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on audit log
ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Only admins can view audit logs" 
ON public.admin_audit_log 
FOR SELECT 
USING (public.get_current_user_role() = 'admin');

-- Function to log admin actions
CREATE OR REPLACE FUNCTION public.log_admin_action(
  action_type text,
  target_user uuid DEFAULT NULL,
  action_details jsonb DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.admin_audit_log (admin_user_id, action, target_user_id, details)
  VALUES (auth.uid(), action_type, target_user, action_details);
END;
$$;