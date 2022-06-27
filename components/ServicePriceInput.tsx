import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputField from "./InputField";
import { useEffect } from "react";

type ServicePriceInputProps = {
  services: any;
};
const ServicePriceInput = ({ services }: ServicePriceInputProps) => {
  const JsSchema = Yup.object().shape({
    service: Yup.array().of(
      Yup.object().shape({
        price: Yup.number().required().typeError("Please enter cost"),
        name: Yup.string().required(),
        serviceId: Yup.number().required(),
      })
    ),
  });
  const optionsDf = { resolver: yupResolver(JsSchema) };

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm(optionsDf);

  const onSubmit = handleSubmit((data) => addServiceCost(data));
  const addServiceCost = (data) => {
    console.log(data);
    console.log(services);
    reset();
  };
  useEffect(() => {
    services.map((item, i) => {
      setValue(`service.${i}.name`, item.service.name);
      setValue(`service.${i}.serviceId`, item.id);
    });
  }, []);
  return (
    <div>
      <form className="space-y-3" onSubmit={onSubmit}>
        <p className="text-sm px-2 text-gray-500">Service cost</p>
        {services.map((item, i) => {
          return (
            <div key={item.id}>
              <InputField
                control={control}
                name={`service.${i}.price`}
                placeholder={`Enter ${item.service.name}`}
                type="number"
                error={errors.service?.[i]?.price?.message}
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
export default ServicePriceInput;
