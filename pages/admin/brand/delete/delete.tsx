import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateBrandProps } from "@Store/tyre/types";
import { GenericFormData } from "@Utils/formTypes/AdminFormData";
import { GenericSchema } from "@Utils/schemas/AdminSchema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Delete = ({ deleteBrand }) => {
  const router = useRouter();
  const {
    query: { brandId, brandName },
  } = router;
  const cancel = () => {
    router.back();
  };
  const confirmDelete = async () => {
    const response = await deleteBrand({ id: brandId });
    if (response.success) {
      toast.success("Brand deleted successfully.");
      router.back();
    }
    if (!response.success) {
      toast.error(`Failed to delete brand. ${response.message}`);
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
        <h1 className="font-bold text-2xl pb-4">Delete brand</h1>
      </div>

      <div>
        <div className="bg-white p-4 flex rounded-md mb-6 ">
          <div className="w-1/2 text-gray-400">
            <div>Brand</div>
          </div>
          <div className="w-1/2">
            <div>{brandName}</div>
          </div>
        </div>

        <div className="flex  space-x-2 items-center justify-center">
          <button
            className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-1"
            type="button"
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button
            className="bg-pastel_green w-full rounded-lg text-xl font-medium text-center text-white p-1"
            type="button"
            onClick={cancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
