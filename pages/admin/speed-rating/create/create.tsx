import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateSpeedRatingProps } from "@Store/tyre/types";
import { GenericFormData } from "@Utils/formTypes/AdminFormData";
import { CreateSpeedRatingSchema } from "@Utils/schemas/AdminSchema";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({ createSpeedRating }: CreateSpeedRatingProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<GenericFormData>({
    resolver: yupResolver(CreateSpeedRatingSchema),
  });
  const onSubmit = handleSubmit((data) => createNewBrand(data));

  const createNewBrand = async (data: GenericFormData) => {
    const response = await createSpeedRating({
      value: data.name,
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
          Create speed rating
        </h1>
      </div>

      <form className="space-y-2 pt-6 " onSubmit={onSubmit}>
        <InputField
          control={control}
          name="name"
          placeholder="Speed rating [Y | 100 km/h]"
          type="text"
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
