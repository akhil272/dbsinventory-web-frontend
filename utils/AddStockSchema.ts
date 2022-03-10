import * as Yup from "yup";

const AddStockSchema = Yup.object().shape({
  product_line: Yup.string()
    .oneOf(
      ["PC", "TB", "2R"],
      `Product Line must be one of the either 'PC', 'TB', '2R' `
    )
    .required("Required"),
  brand: Yup.string().required("Required"),
  tyre_size: Yup.string()
    .required("Required")
    .matches(/^[0-9]+\/\d\dR\d\d$/, "Only accept 175/80R12 format"),
  pattern_name: Yup.string().required("Required"),
  dom: Yup.string().max(5, "Please enter in format 20/21").required("Required"),
  purchase_date: Yup.date().required("Required"),
  transport_mode: Yup.string().required("Required"),
  vendor: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  quantity: Yup.number().required("Required"),
  cost: Yup.number().required("Required"),
});

export default AddStockSchema;
