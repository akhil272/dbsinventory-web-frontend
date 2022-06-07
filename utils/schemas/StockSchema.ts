import * as Yup from "yup";

export const CreateStockSchema = Yup.object().shape({
  product_line: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select from drop down."),
  brand: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a brand from drop down."),
  pattern: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a pattern from drop down."),
  tyre_detail_id: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a tyre size from drop down."),
  vendor: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a vendor from drop down."),
  transport: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a transport mode from drop down."),
  location: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a location from drop down."),
  dom: Yup.string()
    .max(4, "DOM must be in format 1920 WWYY")
    .required()
    .typeError("DOM is required."),
  purchase_date: Yup.date().required(),
  speed_rating: Yup.string()
    .typeError("You must enter a valid load index")
    .nullable()
    .notRequired(),
  load_index: Yup.string().max(2, "Load index must be in format XX").nullable(),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  cost: Yup.number().typeError("You must enter a number").required(),
});

export const UpdateStockSchema = Yup.object().shape({
  dom: Yup.string()
    .max(4, "Please enter in format 1921")
    .required("You must enter DOM"),
  quantity: Yup.number()
    .typeError("You must enter a number")
    .required("Required"),
  cost: Yup.number().typeError("You must enter a number").required(),
  purchase_date: Yup.date().required(),
});
