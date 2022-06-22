import * as Yup from "yup";
export const GenericSchema = Yup.object().shape({
  name: Yup.string().required(),
});
