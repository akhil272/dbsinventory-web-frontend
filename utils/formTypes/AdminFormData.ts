export type GenericFormData = {
  name: string;
};

export type CreatePatternFormData = {
  brand: {
    id: number;
    name: string;
  };
  name: string;
};

export type CreateTyreSizeFormData = {
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
  tyreSize: { id: number; value: string };
};
