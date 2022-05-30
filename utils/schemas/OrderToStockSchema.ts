import * as Yup from "yup";

const OrderToStockSchema = Yup.object().shape({
  customer_name: Yup.string().required("Required"),
  customer_phone_number: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  sold_price: Yup.number().typeError("You must enter a number").required(),
});

export default OrderToStockSchema;
