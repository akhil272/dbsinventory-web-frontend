import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateBrandProps } from "@Store/tyre/types";
import { GenericFormData } from "@Utils/formTypes/AdminFormData";
import { GenericSchema } from "@Utils/schemas/AdminSchema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({ updateBrand }: UpdateBrandProps) => {
  const router = useRouter();
  const {
    query: { brandId, brandName },
  } = router;
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<GenericFormData>({
    resolver: yupResolver(GenericSchema),
  });
  const onSubmit = handleSubmit((data) => updateExistingBrand(data));

  const updateExistingBrand = async (data: GenericFormData) => {
    const response = await updateBrand({
      id: Number(brandId),
      name: data.name,
    });
    if (response.success && response.data) {
      toast.success(`Successfully updated brand name to ${data.name}.`);
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
      <div className="mt-2 border-b-2 border-slate-500  ">
        <h1 className="font-bold capitalize text-3xl">Update brand</h1>
      </div>

      <form className="space-y-2  pt-6" onSubmit={onSubmit}>
        <InputField
          control={control}
          name="name"
          placeholder="Enter brand name"
          type="text"
          error={errors.name?.message}
          defaultValue={String(brandName) ?? "N/A"}
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
