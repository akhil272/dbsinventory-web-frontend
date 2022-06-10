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
  tyre_size: { id: number; size: string };
  purchase_date: Date;
  product_line: { name: string };
  vendor: { id: number; name: string };
  location: { id: number; name: string };
  transport: { id: number; mode: string };
  tyre_detail_id: { id: number };
  load_index?: number;
  speed_rating?: string;
};

// tyreSizes.map(({ size, ...rest }) => ({
//   ...rest,
//   name: size,
// }))

export type UpdateStockFormData = {
  dom: string;
  quantity: number;
  cost: number;
  purchase_date: Date;
};

export type SearchStocksFormData = {
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
  tyre_size: { id: number; size: string };
};
