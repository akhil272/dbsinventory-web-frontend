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

export type UserQueryFormData = {
  brand: {
    id: number;
    name: string;
    patterns: {
      id: number;
      name: string;
    }[];
  };
  pattern: {
    id: number;
    name: string;
  };
  tyreSize: { id: number; name: string };
  speedRating?: { id: number; name: string };
  quantity: number;
  userNotes?: string;
  loadIndex?: { id: number; name: string };
};
