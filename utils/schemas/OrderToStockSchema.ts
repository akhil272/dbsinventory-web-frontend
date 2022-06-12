import * as Yup from "yup";

const OrderToStockSchema = Yup.object().shape({
  customerName: Yup.string().required("Required"),
  customerPhoneNumber: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  salePrice: Yup.number().typeError("You must enter a number").required(),
});

export default OrderToStockSchema;
