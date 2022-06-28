import AutoComplete from "@Components/AutoComplete";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateTyreSizeProps } from "@Store/tyre/types";
import { CreateTyreSizeFormData } from "@Utils/formTypes/AdminFormData";
import { CreateTyreSizeSchema } from "@Utils/schemas/AdminSchema";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Create = ({
  createPattern,
  getBrands,
  createBrand,
  brands,
  createTyreDetailSize,
  getTyreDetails,
  tyreDetails,
}: CreateTyreSizeProps) => {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateTyreSizeFormData>({
    resolver: yupResolver(CreateTyreSizeSchema),
  });
  const router = useRouter();
  // const onSubmit = handleSubmit((data) => createNewTyreSize(data));

  // const createNewTyreSize = async (data: CreateTyreSizeFormData) => {
  //   const response = await createTyreDetailSize({
  //     tyreSizeValue: name,
  //     patternId: selectedPattern?.id,
  //   });
  //   if (response.success && response.data) {
  //     toast.success(`Successfully added ${data.brand} to system.`);
  //     reset();
  //   }
  //   if (!response.success) {
  //     toast.error(`Failed to pattern to system. ${response.message}`);
  //   }
  // };
  const selectedBrand = watch("brand");
  const selectedPattern = watch("pattern");
  const createPatternAction = async ({ name }) => {
    const response = await createPattern({ name, brandId: selectedBrand.id });
    if (response.success) {
      const { id, name, patterns } = selectedBrand;
      setValue("brand", {
        id,
        name,
        patterns: [
          ...patterns,
          { id: response.data.id, name: response.data.name },
        ],
      });
    }
    return response;
  };
  const createTyreSizeAction = async ({ name }) => {
    const response = await createTyreDetailSize({
      tyreSizeValue: name,
      patternId: selectedPattern?.id,
    });
    if (response.success) {
      router.back();
    }
    return response;
  };

  useEffect(() => {
    getBrands({ search: "" });
  }, [getBrands]);
  useEffect(() => {
    setValue("pattern", null);
  }, [selectedBrand]);
  useEffect(() => {
    getTyreDetails({ search: "" });
  }, [getTyreDetails]);

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
          Create Tyre size
        </h1>
      </div>

      <form className="space-y-2 pt-6 ">
        <AutoComplete
          placeholder="Enter brand name"
          onSuccess={() => getBrands({ search: "" })}
          create={createBrand}
          control={control}
          name={"brand"}
          data={brands}
          error={(errors.brand as any)?.message}
        />
        <AutoComplete
          placeholder="Enter pattern name"
          onSuccess={() => {
            getBrands({ search: "" });
          }}
          create={createPatternAction}
          control={control}
          name={"pattern"}
          data={selectedBrand?.patterns ?? []}
          error={(errors.pattern as any)?.message}
        />
        <AutoComplete
          placeholder="Enter tyre size eg. 265/65R17"
          onSuccess={() => getTyreDetails({ search: "" })}
          create={createTyreSizeAction}
          control={control}
          name={"tyreDetailId"}
          data={tyreDetails
            ?.filter((pattern) => pattern.patternId === selectedPattern?.id)
            .map(({ tyreSize, id }) => ({
              tyreSize,
              id,
            }))
            .map(({ tyreSize, id }) => ({
              name: tyreSize.value,
              id,
            }))}
          error={(errors.tyreSize as any)?.message}
        />
      </form>
    </div>
  );
};

export default Create;
