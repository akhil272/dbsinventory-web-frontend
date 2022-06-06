import * as Yup from "yup";

export const CreateStockSchema = Yup.object().shape({
  product_line: Yup.object().shape({
    name: Yup.string().required().typeError("Please select from drop down"),
  }),
  brand: Yup.object().shape({
    name: Yup.string().required().typeError("Please select from drop down"),
    id: Yup.string().required().typeError("Please select from drop down"),
  }),

  dom: Yup.string()
    .max(4, "Please enter in format 2021")
    .required("You must enter DOM"),
  purchase_date: Yup.date().required(),
  speed_rating: Yup.string()
    .typeError("You must enter a valid speed rating")
    .nullable()
    .notRequired(),
  load_index: Yup.string()
    .typeError("You must enter a valid speed rating")
    .nullable()
    .notRequired(),

  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  cost: Yup.number().typeError("You must enter a number").required(),
});

export const UpdateStockSchema = Yup.object().shape({
  dom: Yup.string()
    .max(4, "Please enter in format 1921")
    .required("You must enter DOM"),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  cost: Yup.number().typeError("You must enter a number").required(),
  purchase_date: Yup.date().required(),
});
