import * as Yup from "yup";

export const CreateUserSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email(),
  phone_number: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
  roles: Yup.string().required(),
});
