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
  tyreSize: { id: number; name: string };
  speedRating?: string;
  quantity: number;
  notes?: string;
  loadIndex?: number;
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

  const handleSingleQuote = handleSubmit((data) => {
    setUserQuery([...userQuery, data]), reset();
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });

  const submitAllQuotes = async () => {
    const userQuotesPayload = {
      userQuotes: userQuery.map(
        ({ brand, pattern, tyreSize, loadIndex, ...query }) => ({
          brandName: brand?.name,
          patternName: pattern?.name,
          tyreSizeValue: tyreSize?.name,
          loadIndex: Number(loadIndex),
          ...query,
        })
      ),
    };
    console.log(userQuotesPayload);
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
  if (!brands?.length) return <LoadingAnimation message="Please wait.." />;
  if (!tyreSizes?.length) return <LoadingAnimation message="Please wait.." />;

  return (
    <div>
      <div className="items-center justify-center flex ">
        <img
          className="object-contain  rounded-xl"
          src="/images/Get_Quote.png"
        />
      </div>
      <div className="pt-2 ">
        <h1 className="font-bold text-2xl capitalize pb-2">Get a quote</h1>
      </div>
      <div>
        <form className="space-y-2 " onSubmit={onSubmit}>
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
            name={"tyreSize"}
            data={tyreSizes?.map(({ value, id }) => ({
              name: value,
              id,
            }))}
          />
          <InputField
            control={control}
            name="speedRating"
            placeholder="Enter speed rating (optional)"
            type="text"
            error={errors.speedRating?.message}
          />
          <InputField
            control={control}
            name="loadIndex"
            placeholder="Enter load index (optional)"
            type="text"
            error={errors.loadIndex?.message}
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
          <div className="flex space-x-1 py-2">
            <button
              className="bg-pastel_green w-1/2 text-lg rounded-md font-medium text-center text-white p-2"
              onClick={onSubmit}
            >
              Add More
            </button>
            <button
              className="bg-primary w-1/2  text-lg rounded-md font-medium text-center text-white p-2"
              onClick={handleSingleQuote}
            >
              Submit
            </button>
          </div>
        </form>
        {userQuery.length > 0 && (
          <div className="pb-4">
            <div className="my-2">
              <h2 className="font-semibold text-lg ">User Quotation List</h2>
              {userQuery.map((query, index) => (
                <QuoteListCard
                  key={index}
                  id={index + 1}
                  brand={query?.brand?.name ?? "Error please refresh"}
                  pattern={query?.pattern?.name ?? "-"}
                  tyreSize={query?.tyreSize?.name ?? "Error please refresh"}
                  loadIndex={query?.loadIndex ?? "-"}
                  speedRating={query?.speedRating ?? "-"}
                  notes={query?.notes}
                  quantity={query?.quantity}
                />
              ))}
            </div>
            <button
              onClick={submitAllQuotes}
              className="bg-primary  w-full rounded-md text-lg font-medium text-center text-white p-2"
            >
              Submit Quotations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetQuote;
