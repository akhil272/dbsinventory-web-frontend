import * as Yup from "yup";

const OrderStockSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  salePrice: Yup.number().typeError("You must enter a number").required(),
});

export default OrderStockSchema;
