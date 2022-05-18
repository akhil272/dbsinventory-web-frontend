import AutoComplete from "@Components/AutoComplete";
import InputField from "@Components/InputField";
import { Combobox, Transition } from "@headlessui/react";
import {
  SelectorIcon,
  CheckIcon,
  PlusIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { TyresDataProps } from "@Store/tyre/types";
import CreateStockSchema from "@Utils/CreateStockSchema";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type formData = {
  tyre: string;
  brand: string;
};

const Stocks = ({ brands, getBrands, createBrand }: TyresDataProps) => {
  useEffect(() => {
    getBrands({ search: "" });
  }, [getBrands]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(CreateStockSchema) });
  const onSubmit = handleSubmit((data) => console.log("clicked", data));
  const handleLogin = (data) => {
    console.log(data, "data goes here");
  };

  return (
    <div className="pt-20">
      Stocks
      <div>
        <div className="fixed top-16 w-72">
          <form onSubmit={onSubmit}>
            <AutoComplete control={control} name={"brand"} data={brands} />
            <InputField
              control={control}
              name="tyre"
              placeholder="Enter brand number"
              type="text"
              error={undefined}
            />
            <button onClick={onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
