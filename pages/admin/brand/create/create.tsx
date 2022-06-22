import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { GenericFormData } from "@Utils/formTypes/AdminFormData";
import { GenericSchema } from "@Utils/schemas/AdminSchema";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({ createBrand }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<GenericFormData>({
    resolver: yupResolver(GenericSchema),
  });
  const onSubmit = handleSubmit((data) => createNewBrand(data));

  const createNewBrand = async (data: GenericFormData) => {
    const response = await createBrand({
      name: data.name,
    });
    if (response.success && response.data) {
      toast.success(`Successfully added ${data.name} to system.`);
      reset();
    }
    if (!response.success) {
      toast.error(`Failed to brand to system. ${response.message}`);
    }
  };

  return (
    <div className="pb-4">
      <div className="items-center justify-center flex ">
        <img
          className="object-contain rounded-xl"
          src="/images/Create_Stock.png"
        />
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-2xl pb-4">Add Brand</h1>
      </div>
      <div>
        <div>
          <form className="space-y-3" onSubmit={onSubmit}>
            <InputField
              control={control}
              name="name"
              placeholder="Enter brand name"
              type="text"
              error={errors.name?.message}
            />
            <button
              className="bg-primary w-full rounded-lg text-lg font-medium text-center text-white p-2"
              onClick={onSubmit}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
