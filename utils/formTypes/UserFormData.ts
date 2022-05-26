export type CreateUserFormData = {
  first_name: string;
  last_name: string;
  email?: string;
  phone_number: string;
  roles: string;
};

export type UpdateUserFormData = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  roles?: string;
};
