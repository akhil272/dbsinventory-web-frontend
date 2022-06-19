import { ServicePayload } from "@Store/quotations/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddServiceSchema } from "@Utils/schemas/UserQuoteSchema";
import { useForm } from "react-hook-form";
import SearchBox from "./SearchBox";
import ServiceListCard from "./ServiceListCard";
import { useState } from "react";

type AddServiceProps = {
  services: ServicePayload[];
  setSelectedServices: any;
};
type AddServiceFormData = {
  service: {
    id: number;
    name: string;
  };
};
const AddService = ({ services, setSelectedServices }: AddServiceProps) => {
  const [selectedService, setSelectedService] = useState([]);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<AddServiceFormData>({ resolver: yupResolver(AddServiceSchema) });
  const onSubmit = handleSubmit((data) => {
    setSelectedService([...selectedService, data]);
    setSelectedServices([...selectedService, data]);
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    reset();
  });
  return (
    <div>
      {selectedService.length > 0 && (
        <>
          <h4 className="font-semibold text-lg">Service List </h4>
          <ServiceListCard serviceItems={selectedService} />
        </>
      )}
      <h4 className="font-semibold text-lg"> Add Service</h4>
      <form className="space-y-2 " onSubmit={onSubmit}>
        <div className="flex items-center ">
          <div className="w-2/3 pr-2">
            <SearchBox
              placeholder="Enter brand name"
              control={control}
              name={"service"}
              data={services}
            />
          </div>
          <button
            onClick={onSubmit}
            className="w-1/3 rounded-md text-center py-2 bg-gray-300"
          >
            Add More
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
