import * as Yup from "yup";

const OrderToStockSchema = Yup.object().shape({
  speed_rating: Yup.string().notRequired(),
  load_index: Yup.string().notRequired(),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
});

export default OrderToStockSchema;
