import * as Yup from "yup";

const CreateUserSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Password is to weak"
    ),
});

export default CreateUserSchema;
