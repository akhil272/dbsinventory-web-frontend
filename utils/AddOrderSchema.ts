import * as Yup from "yup";

const AddOrderSchema = Yup.object().shape({
  quantity: Yup.number().required("Required"),
  sold_price: Yup.number().required("Required"),
  customer_name: Yup.string().required("Required"),
});

export default AddOrderSchema;
