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

export const CreateSpeedRatingSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(/\(?[a-zA-Z]\)?\s\|\s[0-9]+\+?\skm\/h/i, {
      message: "Invalid speed rating. Please enter in the format: A | 120 km/h",
    }),
});

export const CreateLoadIndex = Yup.object().shape({
  name: Yup.number().required(),
});
