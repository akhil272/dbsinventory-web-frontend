import * as Yup from "yup";

const UserAuthSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default UserAuthSchema;
