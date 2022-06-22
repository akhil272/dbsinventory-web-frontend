import * as Yup from "yup";
export const GenericSchema = Yup.object().shape({
  name: Yup.string().required(),
});

export const CreatePatternSchema = Yup.object().shape({
  brand: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a brand from drop down."),
  name: Yup.string().required().typeError("Please enter name for pattern"),
});
