import * as Yup from "yup";

export const CreateUserSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email(),
  phoneNumber: Yup.string()
    .required()
    .matches(/^\+[1-9]\d{1,14}$/, {
      message: "Please enter phone number in the format +91XXXXXXXXXX",
    }),
  role: Yup.string().required(),
});

export const UpdateUserSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email(),
  phoneNumber: Yup.string().matches(/^\+[1-9]\d{1,14}$/, {
    message: "Please enter phone number in the format +91XXXXXXXXXX",
  }),
  role: Yup.string(),
});

export const RetryPhoneVerificationSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(/^\+[1-9]\d{1,14}$/, {
    message: "Please enter phone number in the format +91XXXXXXXXXX",
  }),
  otp: Yup.string(),
});

export const UpdateUserProfileSchema = Yup.object().shape({
  firstName: Yup.string().optional(),
  lastName: Yup.string().optional(),
  email: Yup.string().email().optional(),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/, {
      message: "Please enter phone number in the format +91XXXXXXXXXX",
    }),
  addressLine1: Yup.string().optional().nullable(),
  addressLine2: Yup.string().optional().nullable(),
});
