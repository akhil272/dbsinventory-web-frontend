import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateLoadIndexProps } from "@Store/tyre/types";
import { GenericFormData } from "@Utils/formTypes/AdminFormData";
import { CreateLoadIndex } from "@Utils/schemas/AdminSchema";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({ createLoadIndex }: CreateLoadIndexProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<GenericFormData>({
    resolver: yupResolver(CreateLoadIndex),
  });
  const onSubmit = handleSubmit((data) => createNewBrand(data));

  const createNewBrand = async (data: GenericFormData) => {
    const response = await createLoadIndex({
      value: Number(data.name),
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
    <div className="pb-4 ">
      <div className="items-center justify-center flex ">
        <img
          className="object-contain rounded-xl"
          src="/images/Create_Art.png"
        />
      </div>
      <div className="border-b-4 border-neutral-400  w-full">
        <h1 className="text-2xl  font-medium  tracking-wide uppercase ">
          Create load index
        </h1>
      </div>

      <form className="space-y-2 pt-6 " onSubmit={onSubmit}>
        <InputField
          control={control}
          name="name"
          placeholder="Load Index eg. 90"
          type="number"
          error={errors.name?.message}
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
