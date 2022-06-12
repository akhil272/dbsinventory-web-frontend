export type CreateStockFormData = {
  dom: number;
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
  quantity: number;
  cost: number;
  tyreSize: { id: number; value: string };
  purchaseDate: Date;
  productLine: { id: number; name: string };
  vendor: { id: number; name: string };
  location: { id: number; name: string };
  transport: { id: number; mode: string };
  tyreDetailId: { id: number };
  loadIndex: { id: number; value: string };
  speedRating: { id: number; value: string };
};

// tyreSizes.map(({ size, ...rest }) => ({
//   ...rest,
//   name: size,
// }))

export type UpdateStockFormData = {
  dom: string;
  quantity: number;
  cost: number;
  purchaseDate: Date;
};

export type SearchStocksFormData = {
  brand: {
    id: number;
    name: string;
  };
  searchTerm: string;
  tyreSize: { id: number; value: string };
};
