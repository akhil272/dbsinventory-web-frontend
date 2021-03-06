import { ServicePayload } from "@Store/quotations/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddServiceSchema } from "@Utils/schemas/UserQuoteSchema";
import { useForm } from "react-hook-form";
import SearchBox from "./SearchBox";
import ServiceListCard from "./ServiceListCard";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

type AddServiceProps = {
  services: ServicePayload[];
  setSelectedServices: any;
};
type AddServiceFormData = {
  id: number;
  service: {
    id: number;
    name: string;
  };
};
const AddService = ({ services, setSelectedServices }: AddServiceProps) => {
  const [selectedService, setSelectedService] = useState([]);
  const [count, setCount] = useState(1);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<AddServiceFormData>({ resolver: yupResolver(AddServiceSchema) });
  const onSubmit = handleSubmit((data) => {
    data.id = count;
    const findDuplicate = selectedService.filter(
      (service) => service.service.name === data.service.name
    );
    if (findDuplicate.length > 0) {
      return toast.warning("Services already added");
    }
    setSelectedService([...selectedService, data]);
    setSelectedServices([...selectedService, data]);
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    reset();
    setCount(count + 1);
  });
  const onDelete = (serviceId: number) => {
    const filterService = selectedService.filter(
      (service) => service.id !== serviceId
    );
    setSelectedService(filterService);
    setSelectedServices(filterService);
  };
  return (
    <div>
      {selectedService?.length > 0 && (
        <>
          <h4 className="font-semibold text-lg">Service List </h4>
          <ServiceListCard onDelete={onDelete} serviceItems={selectedService} />
        </>
      )}
      <h4 className="font-semibold text-lg"> Add Service</h4>
      <form className="space-y-2 " onSubmit={onSubmit}>
        <div className="flex items-center ">
          <div className="w-2/3 pr-2">
            <SearchBox
              placeholder="Enter service"
              control={control}
              name={"service"}
              data={services}
              addValue={false}
            />
          </div>
          <div className="w-1/3 flex space-x-1 text-white ">
            <button
              onClick={onSubmit}
              className="w-1/2 rounded-md items-center justify-center flex py-2 bg-pastel_green"
            >
              <PlusOutlined className="text-white text-lg" />
            </button>
            <button
              onClick={onSubmit}
              className="w-1/2 rounded-md text-center py-2 bg-primary"
            >
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
