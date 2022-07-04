import * as Yup from "yup";

export const AddUserQuoteFormSchema = Yup.object().shape({
  notes: Yup.string().notRequired().nullable(),
  quotePrice: Yup.number()
    .typeError("You must enter a number")
    .required()
    .positive()
    .min(1),
});

export const UpdateQuotationFrom = Yup.object().shape({
  notes: Yup.string().notRequired().nullable(),
  validity: Yup.number()
    .typeError("You must enter a number")
    .required()
    .positive()
    .min(1),
});

export const UpdateCustomerCategoryFrom = Yup.object().shape({
  customerCategory: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please enter a customer type or select from drop down."),
});

export const UpdateQuotationStatusFrom = Yup.object().shape({
  quotationStatus: Yup.object()
    .shape({
      name: Yup.string().required(),
    })
    .typeError("Please enter a customer type or select from drop down."),
});

export const CreateUserSchema = Yup.object().shape({
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
  addressLine1: Yup.string().optional().nullable(),
  addressLine2: Yup.string().optional().nullable(),
});

export const UpdateQuotationServiceCostSchema = Yup.object().shape({
  price: Yup.number()
    .required()
    .typeError("Please enter cost")
    .positive()
    .min(1),
  serviceId: Yup.number().required(),
  name: Yup.string(),
  serviceNote: Yup.string().nullable(null).notRequired(),
});
