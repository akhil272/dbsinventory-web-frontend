import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import QuoteListCard from "@Components/QuoteListCard";
import SearchBox from "@Components/SearchBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetQuoteProps } from "@Store/quotations/types";
import UserQuoteSchema from "@Utils/schemas/UserQuoteSchema";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
type userQueryFormData = {
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
  tyre_size: { id: number; name: string };
  speed_rating?: string;
  quantity: number;
  notes?: string;
  load_index?: number;
};

const GetQuote = ({
  brands,
  tyreSizes,
  getBrands,
  getTyreSizes,
  patterns,
  createQuotation,
}: GetQuoteProps) => {
  const [userQuery, setUserQuery] = useState<userQueryFormData[]>([]);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<userQueryFormData>({ resolver: yupResolver(UserQuoteSchema) });
  const onSubmit = handleSubmit((data) => {
    setUserQuery([...userQuery, data]), reset();
  });

  const submitAllQuotes = async () => {
    const userQuotesPayload = {
      userQuotes: userQuery.map(
        ({ brand, pattern, tyre_size, load_index, ...query }) => ({
          brand: brand.name,
          pattern: pattern?.name,
          tyre_size: tyre_size.name,
          load_index: Number(load_index),
          ...query,
        })
      ),
    };

    const response = await createQuotation(userQuotesPayload);
    if (response.success) {
      toast.success("Quotation submitted successfully");
      setUserQuery([]);
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getBrands({ search: "" });
  }, [getBrands]);
  useEffect(() => {
    getTyreSizes({ search: "" });
  }, [getTyreSizes]);
  if (!brands.length) return <LoadingAnimation message="Please wait.." />;
  if (!tyreSizes.length) return <LoadingAnimation message="Please wait.." />;
  return (
    <div className="pt-4 flex justify-center">
      <div className="max-w-xl">
        <div>
          <div className="mt-12 items-center justify-center flex ">
            <img
              className="object-contain max-h-[600px]  mt-2 rounded-xl"
              src="/images/Get_Quote.png"
            />
          </div>
          <div className="pt-10 ">
            <h1 className="font-bold text-2xl capitalize pb-2">Get a quote</h1>
          </div>
          <div>
            <form className="space-y-2" onSubmit={onSubmit}>
              <SearchBox
                placeholder="Enter brand name"
                control={control}
                name={"brand"}
                data={brands}
              />
              <SearchBox
                placeholder="Enter patterns name"
                control={control}
                name={"pattern"}
                data={patterns}
              />
              <SearchBox
                placeholder="Enter tyre size name"
                control={control}
                name={"tyre_size"}
                data={tyreSizes.map(({ size, id }) => ({
                  name: size,
                  id,
                }))}
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
              <button
                className="bg-primary w-full rounded-lg text-lg font-medium text-center text-white p-2"
                onClick={onSubmit}
              >
                Add More
              </button>
            </form>
            {userQuery.length > 0 && (
              <>
                <div className="my-2">
                  <h2 className="font-semibold text-lg ">
                    User Quotation List
                  </h2>
                  {userQuery.map((query, index) => (
                    <QuoteListCard
                      key={index}
                      id={index + 1}
                      brand={query?.brand?.name ?? "Error please refresh"}
                      pattern={query?.pattern?.name ?? "-"}
                      tyre_size={
                        query?.tyre_size?.name ?? "Error please refresh"
                      }
                      load_index={query?.load_index ?? "-"}
                      speed_rating={query?.speed_rating ?? "-"}
                      notes={query.notes}
                      quantity={query.quantity}
                    />
                  ))}
                </div>
                <button
                  onClick={submitAllQuotes}
                  className="bg-primary w-full rounded-lg text-lg font-medium text-center text-white p-2"
                >
                  Submit Quotations
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
