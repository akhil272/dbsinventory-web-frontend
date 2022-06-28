import AutoComplete from "@Components/AutoComplete";
import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreatePatternProps } from "@Store/tyre/types";
import { CreatePatternFormData } from "@Utils/formTypes/AdminFormData";
import { CreatePatternSchema } from "@Utils/schemas/AdminSchema";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({
  createPattern,
  getBrands,
  createBrand,
  brands,
}: CreatePatternProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreatePatternFormData>({
    resolver: yupResolver(CreatePatternSchema),
  });
  const onSubmit = handleSubmit((data) => createNewBrand(data));

  const createNewBrand = async (data: CreatePatternFormData) => {
    const response = await createPattern({
      name: data.name,
      brandId: data.brand.id,
    });
    if (response.success && response.data) {
      toast.success(`Successfully added ${data.name} to system.`);
      reset();
    }
    if (!response.success) {
      toast.error(`Failed to pattern to system. ${response.message}`);
    }
  };

  useEffect(() => {
    getBrands({ search: "" });
  }, [getBrands]);

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
          Create pattern
        </h1>
      </div>

      <form className="space-y-2 pt-6 " onSubmit={onSubmit}>
        <AutoComplete
          placeholder="Enter brand name"
          onSuccess={() => getBrands({ search: "" })}
          create={createBrand}
          control={control}
          name={"brand"}
          data={brands}
          error={(errors.brand as any)?.message}
        />
        <InputField
          control={control}
          name="name"
          placeholder="Enter pattern name"
          type="text"
          error={errors.name?.message}
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
