import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import UserQuoteSchema from "@Utils/schemas/UserQuoteSchema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
type userQueryFormData = {
  brand: string;
  pattern?: string;
  tyre_size: string;
  speed_rating?: string;
  quantity: number;
  notes?: string;
  load_index?: number;
};
const GetQuote = () => {
  const [userQuery, setUserQuery] = useState([]);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<userQueryFormData>({ resolver: yupResolver(UserQuoteSchema) });
  const onSubmit = handleSubmit((data) => {
    setUserQuery([...userQuery, data]), reset();
  });
  console.log(userQuery);
  return (
    <div>
      <form className="space-y-3" onSubmit={onSubmit}>
        <InputField
          control={control}
          name="brand"
          placeholder="Enter brand"
          type="text"
          error={errors.brand?.message}
        />
        <InputField
          control={control}
          name="pattern"
          placeholder="Enter pattern (optional)"
          type="text"
          error={errors.pattern?.message}
        />
        <InputField
          control={control}
          name="tyre_size"
          placeholder="Enter tyre size"
          type="text"
          error={errors.tyre_size?.message}
        />
        <InputField
          control={control}
          name="speed_rating"
          placeholder="Enter speed rating (optional)"
          type="text"
          error={errors.speed_rating?.message}
        />
        <InputField
          control={control}
          name="load_index"
          placeholder="Enter load index (optional)"
          type="text"
          error={errors.load_index?.message}
        />
        <InputField
          control={control}
          name="quantity"
          placeholder="Enter quantity"
          type="text"
          error={errors.quantity?.message}
        />
        <InputField
          control={control}
          name="notes"
          placeholder="Enter notes"
          type="text"
          error={errors.notes?.message}
        />
        <button onClick={onSubmit}>Get Quote</button>
      </form>
    </div>
  );
};

export default GetQuote;
