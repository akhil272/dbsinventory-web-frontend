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
    return <LoadingAnimation message="Loading orders. Please wait.." />;
  }

  return (
    <div className="pt-14">
      <QuoteListCard
        type="advanced"
        brand={userQuoteDetails?.userQuote?.brand ?? "Error please refresh"}
        pattern={userQuoteDetails?.userQuote?.pattern ?? "-"}
        tyre_size={
          userQuoteDetails?.userQuote?.tyre_size ?? "Error please refresh"
        }
        load_index={userQuoteDetails?.userQuote?.load_index ?? "-"}
        speed_rating={userQuoteDetails?.userQuote?.speed_rating ?? "-"}
        notes={userQuoteDetails?.userQuote?.notes}
        quantity={userQuoteDetails?.userQuote?.quantity}
        id={userQuoteDetails?.userQuote?.id}
        price={userQuoteDetails?.userQuote?.price}
        admin_comments={userQuoteDetails?.userQuote?.admin_comments}
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
              error={errors.price?.message}
              name="price"
              control={control}
            />
            <InputField
              type="text"
              placeholder="Enter comments"
              error={errors.admin_comments?.message}
              name="admin_comments"
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
      <div className="py-6">
        {!userQuoteDetails?.exactStock && <p>No exact stock match found.</p>}
        {userQuoteDetails?.exactStock && (
          <>
            <h4 className="font-semibold text-md border-b-2 border-primary">
              Exact Match
            </h4>
            <StockCard
              key={userQuoteDetails?.exactStock.id}
              brand={userQuoteDetails?.exactStock.tyreDetail.pattern.brand.name}
              vendor={userQuoteDetails?.exactStock.vendor?.name}
              tyre_size={userQuoteDetails?.exactStock.tyreDetail?.tyreSize.size}
              pattern_name={
                userQuoteDetails?.exactStock.tyreDetail?.pattern.name
              }
              dom={userQuoteDetails?.exactStock.dom}
              product_line={userQuoteDetails?.exactStock.product_line}
              transport_mode={userQuoteDetails?.exactStock.transport.mode}
              purchase_date={userQuoteDetails?.exactStock.purchase_date}
              location={userQuoteDetails?.exactStock.location?.name}
              quantity={userQuoteDetails?.exactStock.quantity}
              cost={userQuoteDetails?.exactStock.cost}
              stockId={userQuoteDetails?.exactStock.id}
              role="admin"
            />
          </>
        )}
      </div>
      <div className="py-6">
        {!userQuoteDetails?.stocks.length && (
          <p>No stocks found by brand and tyre size.</p>
        )}
        {userQuoteDetails?.stocks.length > 0 && (
          <>
            <h4 className="font-semibold text-md border-b-2 border-primary">
              Match by brand and tyre size
            </h4>
            {userQuoteDetails?.stocks?.map((stock) => (
              <StockCard
                key={stock.id}
                brand={stock.tyreDetail.pattern.brand.name}
                vendor={stock.vendor?.name}
                tyre_size={stock.tyreDetail?.tyreSize.size}
                pattern_name={stock.tyreDetail?.pattern.name}
                dom={stock.dom}
                product_line={stock.product_line}
                transport_mode={stock.transport.mode}
                purchase_date={stock.purchase_date}
                location={stock.location?.name}
                quantity={stock.quantity}
                cost={stock.cost}
                stockId={stock.id}
                role="admin"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default UserQuote;
