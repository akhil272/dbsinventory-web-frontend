import AddService from "@Components/AddService";
import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import QuoteListCard from "@Components/QuoteListCard";
import SearchBox from "@Components/SearchBox";
import TextAreaInputField from "@Components/TextAreaInputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetQuoteProps } from "@Store/quotations/types";
import { UserQueryFormData } from "@Utils/formTypes/QuotationFormData";
import UserQuoteSchema from "@Utils/schemas/UserQuoteSchema";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const GetQuote = ({
  brands,
  tyreSizes,
  getBrands,
  getTyreSizes,
  patterns,
  createQuotation,
  getServices,
  services,
  loadIndexes,
  speedRatings,
  getLoadIndexes,
  getSpeedRatings,
  loadingQuotationState,
  loadingTyreData,
}: GetQuoteProps) => {
  const [userQuery, setUserQuery] = useState<UserQueryFormData[]>([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [userService, setUserService] = useState(false);
  const [count, setCount] = useState(1);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<UserQueryFormData>({ resolver: yupResolver(UserQuoteSchema) });
  const onSubmit = handleSubmit((data) => {
    data.id = count;
    setUserQuery([...userQuery, data]), reset();
    setCount(count + 1);
  });

  const handleSingleQuote = handleSubmit((data) => {
    setUserQuery([...userQuery, data]), reset();
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
  const onAddService = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setUserService(!userService);
  };
  const submitAllQuotes = async () => {
    const userQuotesPayload = {
      userQuotes: userQuery.map(
        ({
          brand,
          pattern,
          tyreSize,
          loadIndex,
          speedRating,
          id,
          ...query
        }) => ({
          brandName: brand?.name,
          patternName: pattern?.name,
          tyreSizeValue: tyreSize?.name,
          tyreLoadIndex: Number(loadIndex.name),
          tyreSpeedRating: speedRating?.name,
          ...query,
        })
      ),
      serviceIds: selectedServices?.map((service) => ({
        id: service.service.id,
      })),
    };

    const response = await createQuotation(userQuotesPayload);
    if (response.success) {
      toast.success("Quotation submitted successfully");
      setUserQuery([]);
      setSelectedServices([]);
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getBrands({ search: "" });
  }, [getBrands]);
  useEffect(() => {
    getLoadIndexes({ search: "" });
  }, [getLoadIndexes]);
  useEffect(() => {
    getSpeedRatings({ search: "" });
  }, [getSpeedRatings]);
  useEffect(() => {
    getServices({ search: "" });
  }, [getServices]);
  useEffect(() => {
    getTyreSizes({ search: "" });
  }, [getTyreSizes]);
  if (!brands?.length) return <LoadingAnimation message="Loading brands..." />;
  if (!tyreSizes?.length)
    return <LoadingAnimation message="Loading tyre sizes..." />;
  if (!speedRatings?.length)
    return <LoadingAnimation message="Loading speed ratings..." />;
  if (!loadIndexes?.length)
    return <LoadingAnimation message="Loading load indexes..." />;
  if (loadingTyreData) {
    return <LoadingAnimation message="Loading, please wait..." />;
  }
  if (loadingQuotationState) {
    return <LoadingAnimation message="Processing, please wait..." />;
  }
  const onRemove = (id: number) => {
    const newUserQuery = userQuery.filter((userQuery) => userQuery.id !== id);
    setUserQuery(newUserQuery);
  };
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
            placeholder="Enter brand name*"
            control={control}
            name={"brand"}
            data={brands}
            error={(errors.brand as any)?.message}
          />
          <SearchBox
            placeholder="Enter pattern name"
            control={control}
            name={"pattern"}
            data={patterns}
          />
          <SearchBox
            placeholder="Enter tyre size value*"
            control={control}
            name={"tyreSize"}
            data={tyreSizes?.map(({ value, id }) => ({
              name: value,
              id,
            }))}
            error={(errors.tyreSize as any)?.message}
          />
          <SearchBox
            placeholder="Enter speed rating"
            control={control}
            name={"speedRating"}
            data={speedRatings?.map(({ value, id }) => ({
              name: value,
              id,
            }))}
          />
          <SearchBox
            placeholder="Enter load index"
            control={control}
            name={"loadIndex"}
            data={loadIndexes?.map(({ value, id }) => ({
              name: String(value),
              id,
            }))}
          />
          <InputField
            control={control}
            name="quantity"
            placeholder="Enter quantity*"
            type="number"
            inputMode="numeric"
            error={errors.quantity?.message}
          />
          <TextAreaInputField
            control={control}
            name="userNotes"
            placeholder="Enter notes"
            error={errors.userNotes?.message}
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
              <h3 className="font-semibold text-lg ">User Quotation List</h3>
              {userQuery.map((query, index) => (
                <QuoteListCard
                  key={index}
                  index={index}
                  id={query.id}
                  isRemoveAllowed={true}
                  onRemove={onRemove}
                  brand={query?.brand?.name ?? "Error please refresh"}
                  pattern={query?.pattern?.name ?? "-"}
                  tyreSize={query?.tyreSize?.name ?? "Error please refresh"}
                  loadIndex={query?.loadIndex?.name ?? "-"}
                  speedRating={query?.speedRating?.name ?? "-"}
                  notes={query?.userNotes}
                  quantity={query?.quantity}
                />
              ))}
            </div>
            {userService && (
              <AddService
                services={services}
                setSelectedServices={setSelectedServices}
              />
            )}

            {userService ? (
              <button
                className="bg-primary w-full my-4 text-lg rounded-md font-medium text-center text-white p-2"
                onClick={submitAllQuotes}
              >
                Submit Quotation
              </button>
            ) : (
              <div className="flex space-x-1 py-2">
                <button
                  className="bg-pastel_green w-1/2 text-lg rounded-md font-medium text-center text-white p-2"
                  onClick={onAddService}
                >
                  Add Service
                </button>
                <button
                  className="bg-primary w-1/2  text-lg rounded-md font-medium text-center text-white p-2"
                  onClick={submitAllQuotes}
                >
                  Submit Quotation
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetQuote;
