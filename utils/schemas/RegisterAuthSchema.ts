import * as Yup from "yup";

export const RegisterAuthSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email(),
  phone_number: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
});

export const ValidateVerificationSchema = Yup.object().shape({
  verification_code: Yup.string().required("Required"),
});

export const LoginSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
  otp: Yup.string(),
});
