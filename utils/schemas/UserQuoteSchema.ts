import * as Yup from "yup";

const OrderToStockSchema = Yup.object().shape({
  brand: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please enter/select a brand from drop down."),
  vehicleBrand: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please enter/select a vehicle brand from drop down."),
  vehicleModel: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please enter/select a vehicle model from drop down."),
  tyreSize: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please enter/select a tyre size from drop down."),
  quantity: Yup.number()
    .positive()
    .typeError("You must enter a number")
    .required("Required"),
});

export default OrderToStockSchema;

export const AddServiceSchema = Yup.object().shape({
  service: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a product line from drop down."),
});

export const UserQuoteSchema = Yup.object().shape({
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
});
