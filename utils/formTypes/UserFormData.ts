export type CreateUserFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
};

export type UpdateUserFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
};

export type RetryPhoneVerificationFormData = {
  phoneNumber: string;
  otp: string;
};
