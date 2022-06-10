import ContactCard from "@Components/ContactCard";
import InputField from "@Components/InputField";
import QuotationCard from "@Components/QuotationCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateQuotationProps } from "@Store/quotations/types";
import { UpdateQuotationForm } from "@Utils/formTypes/QuotationFormData";
import { UpdateQuotationFrom } from "@Utils/schemas/QuotationSchema";
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
    formState: { errors },
  } = useForm<UpdateQuotationForm>({
    resolver: yupResolver(UpdateQuotationFrom),
  });
  const getContactOptions = async (data) => {
    console.log(data, "data");
    const response = await sendQuotationToUser({
      quotationId: id,
      whatsApp: data.whatsApp,
      email: data.email,
      sms: data.sms,
      callback: data.callback,
    });
    if (response.success) {
      toast.success("Quotation sent successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  const onSubmit = handleSubmit((data) => updateQuotation(data));
  const updateQuotation = async (data: UpdateQuotationForm) => {
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
  return (
    <div className="pt-10 py-4 space-y-2">
      <QuotationCard
        id={quotation?.id}
        count={quotation?.count}
        date={quotation?.created_at}
        notes={quotation?.notes}
        price={quotation?.price}
        status={quotation?.status}
        validity={quotation?.validity}
        name={`${quotation?.user.first_name} ${quotation?.user.last_name}`}
      />
      <form className="space-y-2 pb-2" onSubmit={onSubmit}>
        <p className="text-sm px-2 text-gray-500">
          Update validity and notes if any
        </p>
        <InputField
          placeholder="Enter validity"
          type="number"
          name="validity"
          control={control}
          error={errors.validity?.message}
        />
        <InputField
          placeholder="Enter notes about quotation"
          type="text"
          name="notes"
          control={control}
          error={errors.notes?.message}
        />
        <div className="flex w-full justify-center p-2 bg-primary text-white rounded-md text-sm">
          <button onClick={onSubmit}>Update</button>
        </div>
      </form>
      <ContactCard getContactOptions={getContactOptions} />
    </div>
  );
};

export default UpdateQuotation;
