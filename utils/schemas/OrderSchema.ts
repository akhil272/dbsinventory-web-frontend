import * as Yup from "yup";

const OrderStockSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^\+[1-9]\d{1,14}$/),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .positive()
    .min(1)
    .required("Required"),
  salePrice: Yup.number()
    .typeError("You must enter a number")
    .required()
    .positive()
    .min(1),
});

export default OrderStockSchema;
