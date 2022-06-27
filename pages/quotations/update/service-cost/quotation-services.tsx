import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";
import InputField from "@Components/InputField";
import { useRouter } from "next/router";
import TextAreaInputField from "@Components/TextAreaInputField";
import { toast } from "react-toastify";
import ServiceCostTable from "@Components/ServiceCostTable";

const QuotationService = ({
  quotation,
  getQuotationById,
  updateQuotationServiceCostById,
}) => {
  const router = useRouter();
  const {
    query: { quotationId },
  } = router;
  const id = Number(quotationId);
  const formSchema = Yup.object().shape({
    service: Yup.array().of(
      Yup.object().shape({
        price: Yup.number().required().typeError("Please enter cost"),
        name: Yup.string().required(),
        serviceId: Yup.number().required(),
        serviceNote: Yup.string().nullable(null).notRequired(),
      })
    ),
  });
  const formData = { resolver: yupResolver(formSchema) };
  const services = quotation?.quotationServices;
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm(formData);
  console.log(quotation);
  const onSubmit = handleSubmit((data) => addServiceCost(data));
  const addServiceCost = (data) => {
    data.service.map(async (service) => {
      const response = await updateQuotationServiceCostById({
        id: service.serviceId,
        price: service.price,
        serviceNote: service.serviceNote,
      });
      if (response.success) {
        toast.success(`Updated service cost for ${service.name}`);
      } else {
        toast.error(`Failed to update service cost for ${service.name}`);
      }
    });
    reset();
    router.back();
  };
  useEffect(() => {
    if (router.isReady) {
      getQuotationById({ id });
    }
  }, [getQuotationById, router.isReady]);

  useEffect(() => {
    services?.map((item, i) => {
      setValue(`service.${i}.name`, item.service.name);
      setValue(`service.${i}.serviceId`, item.id);
    });
  }, []);

  return (
    <div>
      <h2 className="font-bold text-2xl">Service cost</h2>
      <form onSubmit={onSubmit}>
        {services?.map((item, i) => {
          return (
            <div className="space-y-2 py-4" key={item.id}>
              <InputField
                control={control}
                name={`service.${i}.price`}
                placeholder={`Enter ${item.service.name} cost`}
                type="number"
                error={errors.service?.[i]?.price?.message}
              />
              <TextAreaInputField
                placeholder={`Enter service note for ${item.service.name}`}
                name={`service.${i}.serviceNote`}
                control={control}
                error={errors.service?.[i]?.serviceNote?.message}
              />
            </div>
          );
        })}

        <div className="flex w-full justify-center p-2 bg-primary text-white rounded-md text-sm">
          <button onClick={onSubmit}>Update</button>
        </div>
      </form>
    </div>
  );
};
export default QuotationService;
