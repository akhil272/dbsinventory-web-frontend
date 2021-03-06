import { DeleteBrandProps } from "@Store/tyre/types";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Delete = ({ deleteBrand }: DeleteBrandProps) => {
  const router = useRouter();
  const {
    query: { brandId, brandName },
  } = router;
  const cancel = () => {
    router.back();
  };
  const confirmDelete = async () => {
    const response = await deleteBrand({ id: Number(brandId) });
    if (response.success) {
      toast.success(`${brandName} deleted successfully.`);
      router.back();
    }
    if (!response.success) {
      toast.error(`Failed to delete ${brandName}. ${response.message}`);
    }
  };

  return (
    <div className="pb-4">
      <div className="items-center justify-center flex ">
        <img
          className="object-contain rounded-xl"
          src="/images/Delete_Art.png"
        />
      </div>
      <div className="border-b-4 border-neutral-400  w-full">
        <h1 className="text-2xl  font-medium  tracking-wide uppercase ">
          Delete brand
        </h1>
      </div>
      <div className="space-y-2 pt-6 ">
        <div className="bg-white p-2 flex rounded-md space-x-2 ">
          <div className="w-1/2 text-neutral-400">
            <div>Brand</div>
          </div>
          <div className="w-1/2 ">
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
