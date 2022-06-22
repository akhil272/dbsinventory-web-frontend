import * as Yup from "yup";

export const RegisterAuthSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email().optional(),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/, {
      message: "Please enter phone number in the format +91XXXXXXXXXX",
    }),
  addressLine1: Yup.string().optional(),
  addressLine2: Yup.string().optional(),
});

export const VerifyUserOtpSchema = Yup.object().shape({
  otp: Yup.string(),
});

export const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/, {
      message: "Please enter phone number in the format +91XXXXXXXXXX",
    }),
  otp: Yup.string().min(4, "Invalid OTP").max(6, "Invalid OTP"),
});
