import * as Yup from "yup";

export const AddUserQuoteFormSchema = Yup.object().shape({
  notes: Yup.string().notRequired().nullable(),
  price: Yup.number().typeError("You must enter a number").required(),
});

export const UpdateQuotationFrom = Yup.object().shape({
  notes: Yup.string().notRequired().nullable(),
  validity: Yup.number().typeError("You must enter a number").required(),
});
