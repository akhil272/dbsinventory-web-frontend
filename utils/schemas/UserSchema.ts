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
