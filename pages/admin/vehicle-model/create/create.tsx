import AutoComplete from "@Components/AutoComplete";
import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateVehicleModelProps } from "@Store/adminPanel/types";
import { CreateVehicleModelFormData } from "@Utils/formTypes/AdminFormData";
import { CreateVehicleModelSchema } from "@Utils/schemas/AdminSchema";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({
  createVehicleModel,
  getVehicleBrands,
  createVehicleBrand,
  vehicleBrands,
}: CreateVehicleModelProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateVehicleModelFormData>({
    resolver: yupResolver(CreateVehicleModelSchema),
  });
  const onSubmit = handleSubmit((data) => createNewBrand(data));

  const createNewBrand = async (data: CreateVehicleModelFormData) => {
    const response = await createVehicleModel({
      model: data.model,
      vehicleBrandId: data.vehicleBrand.id,
    });
    if (response.success && response.data) {
      toast.success(`Successfully added ${data.model} to system.`);
      reset();
    }
    if (!response.success) {
      toast.error(`Failed to model to system. ${response.message}`);
    }
  };

  useEffect(() => {
    getVehicleBrands({ search: "" });
  }, [getVehicleBrands]);

  return (
    <div className="pb-4 ">
      <div className="items-center justify-center flex ">
        <img
          className="object-contain rounded-xl"
          src="/images/Create_Art.png"
        />
      </div>
      <div className="border-b-4 border-neutral-400  w-full">
        <h1 className="text-2xl  font-medium  tracking-wide uppercase ">
          Create vehicle model
        </h1>
      </div>

      <form className="space-y-2 pt-6 " onSubmit={onSubmit}>
        <AutoComplete
          placeholder="Enter vehicle brand name"
          onSuccess={() => getVehicleBrands({ search: "" })}
          create={createVehicleBrand}
          control={control}
          name={"vehicleBrand"}
          data={vehicleBrands?.map(({ id, vehicleBrand }) => ({
            name: vehicleBrand,
            id,
          }))}
          error={(errors.vehicleBrand as any)?.message}
        />
        <InputField
          control={control}
          name="model"
          placeholder="Enter model name"
          type="text"
          error={errors.model?.message}
          defaultValue=""
        />
        <button
          className="bg-primary w-full rounded-lg text-lg font-normal text-center text-white p-2"
          onClick={onSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Create;
