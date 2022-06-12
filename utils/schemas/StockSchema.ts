import * as Yup from "yup";

export const CreateStockSchema = Yup.object().shape({
  productLine: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please select a product line from drop down."),
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
  tyreDetailId: Yup.object()
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
  purchaseDate: Yup.date().required(),
  speedRating: Yup.object()
    .shape({
      name: Yup.string(),
    })
    .notRequired()
    .nullable(),
  loadIndex: Yup.object()
    .shape({
      name: Yup.string(),
    })
    .notRequired()
    .nullable(),
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
  purchaseDate: Yup.date().required(),
});

export const StocksSearchSchema = Yup.object().shape({
  brand: Yup.object()
    .shape({
      name: Yup.string(),
    })
    .nullable()
    .notRequired(),

  tyreSize: Yup.object()
    .shape({
      name: Yup.string(),
    })
    .nullable()
    .notRequired(),
  searchTerm: Yup.string().notRequired().nullable(),
});
