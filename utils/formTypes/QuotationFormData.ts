export type AddUserQuoteForm = {
  quotePrice: number;
  adminComments: string;
};

export type UpdateQuotationForm = {
  validity: number;
  notes: string;
};

export type UpdateCustomerCategoryForm = {
  customerCategory: {
    id: number;
    name: string;
  };
};

export type UpdateQuotationStatusForm = {
  quotationStatus: {
    id: number;
    name: string;
  };
};
