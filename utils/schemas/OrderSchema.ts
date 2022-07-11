import * as Yup from "yup";

const OrderStockSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email().optional().nullable(),
  phoneNumber: Yup.object()
    .shape({
      name: Yup.string()
        .required()
        .matches(/^\+[1-9]\d{1,14}$/, {
          message: "Please enter phone number in the format +91XXXXXXXXXX",
        }),
    })
    .typeError("Please select a product line from drop down."),
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
