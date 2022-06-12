import * as Yup from "yup";

const OrderToStockSchema = Yup.object().shape({
  speedRating: Yup.string().notRequired(),
  loadIndex: Yup.string().notRequired(),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
});

export default OrderToStockSchema;
