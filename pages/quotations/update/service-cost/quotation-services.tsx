import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import InputField from "@Components/InputField";
import { useRouter } from "next/router";
import TextAreaInputField from "@Components/TextAreaInputField";
import { toast } from "react-toastify";
import { UpdateQuotationServiceCostSchema } from "@Utils/schemas/QuotationSchema";
import { UpdateQuotationServiceCostForm } from "@Utils/formTypes/QuotationFormData";
import { QuotationServiceProps } from "@Store/quotations/types";
import LoadingAnimation from "@Components/LoadingAnimation";

type ServiceFormsProps = {
  id: number;
  name: string;
};

const QuotationService = ({
  quotation,
  getQuotationById,
  updateQuotationServiceCostById,
  loading,
}: QuotationServiceProps) => {
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

  function ServiceForms({ name, id }: ServiceFormsProps) {
    const {
      handleSubmit,
      control,
      setValue,
      reset,
      formState: { errors },
    } = useForm<UpdateQuotationServiceCostForm>({
      resolver: yupResolver(UpdateQuotationServiceCostSchema),
    });
    useEffect(() => {
      setValue("name", name);
      setValue("serviceId", id);
    });
    const onSubmit = handleSubmit((data) => updateServiceCost(data));
    const updateServiceCost = async (data: UpdateQuotationServiceCostForm) => {
      const response = await updateQuotationServiceCostById({
        id: data.serviceId,
        price: data.price,
        serviceNote: data.serviceNote.length < 1 ? null : `${data.serviceNote}`,
      });
      if (response.success) {
        toast.success(`Updated service cost for ${data.name}`);
        reset();
      } else {
        toast.error(`Failed to update service cost for ${data.name}`);
      }
    };
    if (loading) return <LoadingAnimation message="Loading, please wait" />;
    return (
      <form className="py-4" onSubmit={onSubmit}>
        <div className="space-y-2 ">
          <h4 className="text-md text-gray-500 underline">{name}</h4>
          <InputField
            control={control}
            name="price"
            placeholder={`Enter cost for ${name}`}
            type="number"
            inputMode="numeric"
            error={errors.price?.message}
          />
          <TextAreaInputField
            placeholder={`Enter note for ${name}`}
            name="serviceNote"
            control={control}
            error={errors.serviceNote?.message}
          />
          <div className="flex w-full justify-center p-2 bg-primary text-white rounded-md text-sm">
            <button onClick={onSubmit}>Update</button>
          </div>
        </div>
      </form>
    );
  }
  return (
    <div>
      <h2 className="font-bold text-2xl">Services:</h2>
      {quotation?.quotationServices?.map((serviceCostItem) => (
        <ServiceForms
          key={serviceCostItem.id}
          name={serviceCostItem.service.name}
          id={serviceCostItem.id}
        />
      ))}
      <div className="flex w-full justify-center p-2 bg-pastel_green text-white rounded-md text-sm">
        <button onClick={() => router.back()}>Update Completed</button>
      </div>
    </div>
  );
};
export default QuotationService;
