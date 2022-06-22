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
      toast.success(`Successfully updated brand name in the system.`);
      router.back();
    }
    if (!response.success) {
      toast.error(`Failed to update brand name. ${response.message}`);
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
        <h1 className="font-bold text-2xl pb-4">Update brand</h1>
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
      </div>
    </div>
  );
};

export default Update;
