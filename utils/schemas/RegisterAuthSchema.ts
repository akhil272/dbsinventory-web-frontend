import * as Yup from "yup";

export const RegisterAuthSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email().optional(),
  phone_number: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
});

export const ValidateVerificationSchema = Yup.object().shape({
  phone_number:
    Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/),
  verification_code: Yup.string(),
});

export const LoginSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
  otp: Yup.string(),
});
