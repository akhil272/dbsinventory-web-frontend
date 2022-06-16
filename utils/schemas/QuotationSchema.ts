import * as Yup from "yup";

export const AddUserQuoteFormSchema = Yup.object().shape({
  notes: Yup.string().notRequired().nullable(),
  quotePrice: Yup.number().typeError("You must enter a number").required(),
});

export const UpdateQuotationFrom = Yup.object().shape({
  notes: Yup.string().notRequired().nullable(),
  validity: Yup.number().typeError("You must enter a number").required(),
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
