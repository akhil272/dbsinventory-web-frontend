export type RegisterUserFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type VerifyUserOtpFormData = {
  otp: string;
};

export type LoginUserFormData = {
  phoneNumber: string;
  otp: string;
};
