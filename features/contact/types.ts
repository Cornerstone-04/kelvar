export type ContactFields = {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>;
