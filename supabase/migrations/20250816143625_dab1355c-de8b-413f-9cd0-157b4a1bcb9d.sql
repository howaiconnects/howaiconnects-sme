-- Upgrade the 3 existing users to admin role
UPDATE public.profiles 
SET role = 'admin' 
WHERE id IN (
  '0a95de16-154f-4a01-8d9c-2a66cb23abbe',
  '5883bfa3-d15a-4706-82ed-72c9593881ad', 
  'ca8254f6-a4e3-4bfa-989e-3b30749aae6a'
);