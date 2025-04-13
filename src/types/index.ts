
export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  user_id?: string | null;  // Make user_id optional
};
