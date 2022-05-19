export type AddStockFormData = {
  dom: string;
  brand: {
    id: number;
    name: string;
    patterns: {
      id: number;
      name: string;
    }[];
  };
  pattern: string;
  quantity: number;
  cost: number;
  tyre_size: string;
};

// tyreSizes.map(({ size, ...rest }) => ({
//   ...rest,
//   name: size,
// }))
