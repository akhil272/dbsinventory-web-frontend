import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateTransportProps } from "@Store/adminPanel/types";
import { GenericFormData } from "@Utils/formTypes/AdminFormData";
import { GenericSchema } from "@Utils/schemas/AdminSchema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({ updateTransport }: UpdateTransportProps) => {
  const router = useRouter();
  const {
    query: { transportId, transportMode },
  } = router;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GenericFormData>({
    resolver: yupResolver(GenericSchema),
  });
  const onSubmit = handleSubmit((data) => updateExistingTransport(data));

  const updateExistingTransport = async (data: GenericFormData) => {
    const response = await updateTransport({
      id: Number(transportId),
      mode: data.name,
    });
    if (response.success && response.data) {
      toast.success(`Successfully updated transport mode to ${data.name}.`);
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
          Update Transport
        </h1>
      </div>

      <form className="space-y-2  pt-6" onSubmit={onSubmit}>
        <InputField
          control={control}
          name="name"
          placeholder="Enter Transport mode"
          type="text"
          error={errors.name?.message}
          defaultValue={String(transportMode) ?? "N/A"}
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
