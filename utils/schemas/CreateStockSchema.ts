import * as Yup from "yup";

const CreateStockSchema = Yup.object().shape({
  product_line: Yup.object()
    .typeError("Please select from drop down")
    .required("Required"),

  // brand: Yup.string().required("Required"),
  // tyre_size: Yup.string()
  //   .required("Required")
  //   .matches(/^[0-9]+\/\d\dR\d\d$/, "Only accept 175/80R12 format"),
  // pattern_name: Yup.string().required("Required"),
  dom: Yup.string()
    .max(4, "Please enter in format 2021")
    .required("You must enter DOM"),
  purchase_date: Yup.date().required(),
  // transport_mode: Yup.string().required("Required"),
  // vendor: Yup.string().required("Required"),
  // location: Yup.string().required("Required"),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  cost: Yup.number().typeError("You must enter a number").required(),
});

export default CreateStockSchema;
