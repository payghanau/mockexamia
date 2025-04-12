
-- Create a stored procedure to submit contact forms
CREATE OR REPLACE FUNCTION public.submit_contact_form(
  p_name TEXT,
  p_email TEXT,
  p_subject TEXT,
  p_message TEXT,
  p_user_id UUID
) RETURNS VOID AS $$
BEGIN
  INSERT INTO public.contact_messages (
    name,
    email,
    subject,
    message,
    user_id
  ) VALUES (
    p_name,
    p_email,
    p_subject,
    p_message,
    p_user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION public.submit_contact_form TO authenticated;
GRANT EXECUTE ON FUNCTION public.submit_contact_form TO anon;
