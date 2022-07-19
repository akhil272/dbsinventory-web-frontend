import ContactCard from "@Components/ContactCard";
import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import QuotationCard from "@Components/QuotationCard";
import ServiceCostTable from "@Components/ServiceCostTable";
import TextAreaInputField from "@Components/TextAreaInputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateQuotationProps } from "@Store/quotations/types";
import { UpdateQuotationForm } from "@Utils/formTypes/QuotationFormData";
import { UpdateQuotationFrom } from "@Utils/schemas/QuotationSchema";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateQuotation = ({
  getQuotationById,
  quotation,
  loading,
  updateQuotationById,
  sendQuotationToUser,
}: UpdateQuotationProps) => {
  const router = useRouter();
  const {
    query: { quotationId },
  } = router;
  const id = Number(quotationId);

  useEffect(() => {
    if (router.isReady) {
      getQuotationById({ id });
    }
  }, [getQuotationById, router.isReady]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UpdateQuotationForm>({
    resolver: yupResolver(UpdateQuotationFrom),
  });
  const getContactOptions = async (data) => {
    const response = await sendQuotationToUser({
      quotationId: id,
      whatsApp: data.whatsApp,
      email: data.email,
      sms: data.sms,
      callback: data.callback,
    });
    if (response.success) {
      toast.success("Quotation sent successfully");
      router.push("/quotations");
    } else {
      toast.error("Something went wrong");
    }
  };

  const onSubmit = handleSubmit((data) => updateQuotation(data));
  const updateQuotation = async (data: UpdateQuotationForm) => {
    reset();
    const response = await updateQuotationById({
      id,
      validity: data.validity,
      notes: data?.notes,
    });
    if (response.success) {
      toast.success("Quotation updated successfully");
      getQuotationById({ id });
    } else {
      toast.error(`Error updating quotation: ${response.message}`);
    }
  };
  if (loading) return <LoadingAnimation message="Loading, please wait..." />;
  return (
    <div className="pb-4 space-y-2">
      <QuotationCard
        id={quotation?.id}
        count={quotation?.count}
        date={quotation?.createdAt}
        notes={quotation?.notes}
        price={quotation?.price}
        status={quotation?.status}
        validity={quotation?.validity}
        name={`${quotation?.customer.user.firstName} ${quotation?.customer.user.lastName}`}
        customerCategory={quotation?.customer.customerCategory.name}
        quotationsCount={quotation?.customer.quotationsCount}
        phoneNumber={quotation?.customer.user.phoneNumber}
        services={quotation?.quotationServices}
      />
      {quotation?.quotationServices.length > 0 && (
        <div className="pb-4 pt-2">
          <div className="flex justify-between">
            <h4 className="text-gray-500 font-medium">Service Cost</h4>
            <Link
              href={{
                pathname: "/quotations/update/service-cost",
                query: { quotationId: quotation.id },
              }}
            >
              <a className="  text-primary ">Edit</a>
            </Link>
          </div>
          <ServiceCostTable quotationServices={quotation?.quotationServices} />
        </div>
      )}

      <form className="space-y-2 pb-4" onSubmit={onSubmit}>
        <h4 className="text-gray-500 font-medium">Validity And Notes</h4>
        <InputField
          placeholder="Enter validity"
          type="number"
          name="validity"
          inputMode="numeric"
          control={control}
          error={errors.validity?.message}
        />
        <TextAreaInputField
          placeholder="Enter notes about quotation"
          name="notes"
          control={control}
          error={errors.notes?.message}
        />
        <button
          className="flex w-full justify-center p-2 bg-primary text-white rounded-md text-sm "
          onClick={onSubmit}
        >
          Update
        </button>
      </form>
      <ContactCard getContactOptions={getContactOptions} />
    </div>
  );
};

export default UpdateQuotation;
