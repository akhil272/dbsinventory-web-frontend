import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateSpeedRatingProps } from "@Store/tyre/types";
import { GenericFormData } from "@Utils/formTypes/AdminFormData";
import { CreateSpeedRatingSchema } from "@Utils/schemas/AdminSchema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({ updateSpeedRating }: UpdateSpeedRatingProps) => {
  const router = useRouter();
  const {
    query: { speedRatingId, speedRatingValue },
  } = router;
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<GenericFormData>({
    resolver: yupResolver(CreateSpeedRatingSchema),
  });
  const onSubmit = handleSubmit((data) => updateExistingBrand(data));

  const updateExistingBrand = async (data: GenericFormData) => {
    const response = await updateSpeedRating({
      id: Number(speedRatingId),
      value: data.name,
    });
    if (response.success && response.data) {
      toast.success(`Successfully updated speed rating value to ${data.name}.`);
      router.back();
    }
    if (!response.success) {
      toast.error(`Failed to update ${data.name}. ${response.message}`);
    }
  };

  return (
    <div className="pb-4">
      <div className="items-center justify-center flex ">
        <img
          className="object-contain rounded-xl"
          src="/images/Update_Art.png"
        />
      </div>
      <div className="border-b-4 border-neutral-400  w-full">
        <h1 className="text-2xl  font-medium  tracking-wide uppercase ">
          Update speed rating
        </h1>
      </div>

      <form className="space-y-2  pt-6" onSubmit={onSubmit}>
        <InputField
          control={control}
          name="name"
          placeholder="Enter speed rating"
          type="text"
          error={errors.name?.message}
          defaultValue={String(speedRatingValue) ?? "N/A"}
        />
        <button
          className="bg-primary w-full rounded-lg text-lg font-medium text-center text-white p-2"
          onClick={onSubmit}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
