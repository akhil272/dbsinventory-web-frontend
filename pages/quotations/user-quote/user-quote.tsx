import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import QuoteListCard from "@Components/QuoteListCard";
import StockCard from "@Components/StockCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserQuoteProps } from "@Store/quotations/types";
import { AddUserQuoteForm } from "@Utils/formTypes/QuotationFormData";
import { AddUserQuoteFormSchema } from "@Utils/schemas/QuotationSchema";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserQuote = ({
  loading,
  getUserQuoteById,
  userQuoteDetails,
  updateUserQuoteById,
}: UserQuoteProps) => {
  const router = useRouter();
  const {
    query: { userQuoteId },
  } = router;
  const id = Number(userQuoteId);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddUserQuoteForm>({
    resolver: yupResolver(AddUserQuoteFormSchema),
  });
  const onSubmit = handleSubmit((data) => updateQuote(data));
  const updateQuote = async (data) => {
    data.id = id;
    const response = await updateUserQuoteById(data);
    if (response.success) {
      toast.success("Quote updated successfully");
      getUserQuoteById({ id });
    } else {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    if (router.isReady) {
      getUserQuoteById({ id });
    }
  }, [getUserQuoteById, router.isReady]);
  if (loading) {
    return <LoadingAnimation message="Loading quotation. Please wait.." />;
  }

  return (
    <div>
      <QuoteListCard
        type="advanced"
        brand={userQuoteDetails?.userQuote?.brandName ?? "Error please refresh"}
        pattern={userQuoteDetails?.userQuote?.patternName ?? "-"}
        tyreSize={
          userQuoteDetails?.userQuote?.tyreSizeValue ?? "Error please refresh"
        }
        loadIndex={userQuoteDetails?.userQuote?.tyreLoadIndex ?? "-"}
        speedRating={userQuoteDetails?.userQuote?.tyreSpeedRating ?? "-"}
        notes={userQuoteDetails?.userQuote?.userNotes}
        quantity={userQuoteDetails?.userQuote?.quantity}
        id={userQuoteDetails?.userQuote?.id}
        price={userQuoteDetails?.userQuote?.quotePrice}
        adminComments={userQuoteDetails?.userQuote?.adminComments}
      />
      <div className="pt-4">
        <h1 className="font-bold text-md capitalize ">Enter quote price</h1>
      </div>
      <div className="py-2">
        <form className="space-y-5 " onSubmit={onSubmit}>
          <div className="flex-col space-y-2 justify-center">
            <InputField
              type="number"
              placeholder="Enter price"
              error={errors.quotePrice?.message}
              name="quotePrice"
              control={control}
            />
            <InputField
              type="text"
              placeholder="Enter comments"
              error={errors.adminComments?.message}
              name="adminComments"
              control={control}
            />
            <button
              className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {!userQuoteDetails?.exactStock && <p>No exact stock match found.</p>}
      {userQuoteDetails?.exactStock && (
        <div className="py-6">
          <h4 className="font-semibold text-md border-b-2 border-primary">
            Exact Match
          </h4>
          <StockCard
            key={userQuoteDetails?.exactStock.id}
            brand={userQuoteDetails?.exactStock.tyreDetail.pattern.brand.name}
            vendor={userQuoteDetails?.exactStock.vendor.name}
            tyreSize={userQuoteDetails?.exactStock.tyreDetail.tyreSize.value}
            patternName={userQuoteDetails?.exactStock.tyreDetail.pattern.name}
            dom={userQuoteDetails?.exactStock.dom}
            productLine={userQuoteDetails?.exactStock.productLine.name}
            transportMode={userQuoteDetails?.exactStock.transport.mode}
            purchaseDate={userQuoteDetails?.exactStock.purchaseDate}
            location={userQuoteDetails?.exactStock.location.name}
            quantity={userQuoteDetails?.exactStock.quantity}
            cost={userQuoteDetails?.exactStock.cost}
            stockId={userQuoteDetails?.exactStock.id}
            speedRating={userQuoteDetails?.exactStock.speedRating?.value}
            loadIndex={userQuoteDetails?.exactStock.loadIndex?.value}
            role="admin"
          />
        </div>
      )}

      {!userQuoteDetails?.stocks.length && (
        <p>No stocks found by brand and tyre size.</p>
      )}
      {userQuoteDetails?.stocks.length > 0 && (
        <div className="py-6">
          <h4 className="font-semibold text-md border-b-2 border-primary">
            Match by brand and tyre size
          </h4>
          {userQuoteDetails?.stocks?.map((stock) => (
            <StockCard
              key={stock.id}
              brand={stock.tyreDetail.pattern.brand.name}
              vendor={stock.vendor?.name}
              tyreSize={stock.tyreDetail?.tyreSize.value}
              patternName={stock.tyreDetail?.pattern.name}
              dom={stock.dom}
              productLine={stock.productLine?.name}
              transportMode={stock.transport.mode}
              purchaseDate={stock.purchaseDate}
              location={stock.location?.name}
              quantity={stock.quantity}
              cost={stock.cost}
              stockId={stock.id}
              speedRating={stock.speedRating?.value}
              loadIndex={stock.loadIndex?.value}
              role="admin"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserQuote;
