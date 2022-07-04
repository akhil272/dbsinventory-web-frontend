import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateLoadIndexProps } from "@Store/tyre/types";
import { GenericFormData } from "@Utils/formTypes/AdminFormData";
import { CreateLoadIndex } from "@Utils/schemas/AdminSchema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({ updateLoadIndex }: UpdateLoadIndexProps) => {
  const router = useRouter();
  const {
    query: { loadIndexId, loadIndexValue },
  } = router;
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<GenericFormData>({
    resolver: yupResolver(CreateLoadIndex),
  });
  const onSubmit = handleSubmit((data) => updateExistingBrand(data));

  const updateExistingBrand = async (data: GenericFormData) => {
    const response = await updateLoadIndex({
      id: Number(loadIndexId),
      value: Number(data.name),
    });
    if (response.success && response.data) {
      toast.success(`Successfully updated load index value to ${data.name}.`);
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
          Update load index
        </h1>
      </div>

      <form className="space-y-2  pt-6" onSubmit={onSubmit}>
        <InputField
          control={control}
          name="name"
          placeholder="Enter load index"
          type="number"
          inputMode="numeric"
          error={errors.name?.message}
          defaultValue={String(loadIndexValue) ?? "N/A"}
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
