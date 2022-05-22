import * as Yup from "yup";

const OrderToStockSchema = Yup.object().shape({
  customer_name: Yup.string().required("Required"),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  sold_price: Yup.number().typeError("You must enter a number").required(),
});

export default OrderToStockSchema;
