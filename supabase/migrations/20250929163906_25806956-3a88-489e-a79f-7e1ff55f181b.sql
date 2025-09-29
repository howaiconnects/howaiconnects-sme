-- Add LinkedIn-specific columns to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS linkedin_id text,
ADD COLUMN IF NOT EXISTS linkedin_profile_url text,
ADD COLUMN IF NOT EXISTS linkedin_headline text,
ADD COLUMN IF NOT EXISTS linkedin_summary text,
ADD COLUMN IF NOT EXISTS linkedin_company text,
ADD COLUMN IF NOT EXISTS linkedin_position text,
ADD COLUMN IF NOT EXISTS provider text DEFAULT 'email',
ADD COLUMN IF NOT EXISTS provider_id text;

-- Create index for LinkedIn ID lookups
CREATE INDEX IF NOT EXISTS idx_profiles_linkedin_id ON public.profiles(linkedin_id);
CREATE INDEX IF NOT EXISTS idx_profiles_provider ON public.profiles(provider, provider_id);

-- Update the trigger function to handle LinkedIn OAuth data
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public 
AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    email, 
    full_name, 
    avatar_url,
    linkedin_id,
    linkedin_profile_url,
    linkedin_headline,
    linkedin_summary,
    linkedin_company,
    linkedin_position,
    provider,
    provider_id,
    role
  )
  VALUES (
    new.id, 
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url',
    new.raw_user_meta_data ->> 'sub',
    new.raw_user_meta_data ->> 'profile_url',
    new.raw_user_meta_data ->> 'headline',
    new.raw_user_meta_data ->> 'summary',
    new.raw_user_meta_data ->> 'company',
    new.raw_user_meta_data ->> 'position',
    COALESCE(new.raw_app_meta_data ->> 'provider', 'email'),
    new.raw_user_meta_data ->> 'provider_id',
    'user'
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = COALESCE(EXCLUDED.full_name, profiles.full_name),
    avatar_url = COALESCE(EXCLUDED.avatar_url, profiles.avatar_url),
    linkedin_id = COALESCE(EXCLUDED.linkedin_id, profiles.linkedin_id),
    linkedin_profile_url = COALESCE(EXCLUDED.linkedin_profile_url, profiles.linkedin_profile_url),
    linkedin_headline = COALESCE(EXCLUDED.linkedin_headline, profiles.linkedin_headline),
    linkedin_summary = COALESCE(EXCLUDED.linkedin_summary, profiles.linkedin_summary),
    linkedin_company = COALESCE(EXCLUDED.linkedin_company, profiles.linkedin_company),
    linkedin_position = COALESCE(EXCLUDED.linkedin_position, profiles.linkedin_position),
    provider = COALESCE(EXCLUDED.provider, profiles.provider),
    provider_id = COALESCE(EXCLUDED.provider_id, profiles.provider_id),
    updated_at = now();
  
  RETURN new;
END;
$$;