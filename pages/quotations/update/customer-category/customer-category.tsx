import AutoComplete from "@Components/AutoComplete";
import LoadingAnimation from "@Components/LoadingAnimation";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateCustomerCategoryProps } from "@Store/customers/types";
import { UpdateCustomerCategoryForm } from "@Utils/formTypes/QuotationFormData";
import { UpdateCustomerCategoryFrom } from "@Utils/schemas/QuotationSchema";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateCustomerCategory = ({
  getCustomerCategories,
  createCustomerCategory,
  updateCustomerCategory,
  loading,
  customerCategories,
}: UpdateCustomerCategoryProps) => {
  const router = useRouter();
  const {
    query: {
      quotationId,
      customerId,
      customerName,
      customerPhoneNumber,
      quotationsCount,
      category,
    },
  } = router;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UpdateCustomerCategoryForm>({
    resolver: yupResolver(UpdateCustomerCategoryFrom),
  });
  const onSubmit = handleSubmit((data) => updateCustomer(data));

  const updateCustomer = async (data: UpdateCustomerCategoryForm) => {
    const response = await updateCustomerCategory({
      customerId: Number(customerId),
      customerCategoryId: data.customerCategory.id,
    });
    if (response.success) {
      toast.success("Customer category updated successfully");
      router.back();
    } else {
      toast.error(`Failed to update customer category: ${response.message}`);
    }
  };

  useEffect(() => {
    getCustomerCategories({ search: "" });
  }, [getCustomerCategories]);

  if (loading) {
    return <LoadingAnimation message="Please wait.." />;
  }

  return (
    <div className="pb-4">
      <div className="items-center justify-center flex ">
        <img
          className="object-contain rounded-xl"
          src="/images/Create_Stock.png"
        />
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-2xl pb-4">Update Customer Category</h1>
      </div>
      <div>
        <div className="space-y-4">
          <div className="bg-white p-4 flex rounded-md">
            <div className="w-1/2 text-gray-400">
              <div>Customer Name</div>
              <div>Phone Number</div>
              <div>Transactions Count</div>
              <div>Customer Category</div>
            </div>
            <div className="w-1/2">
              <div>{customerName}</div>
              <div>{customerPhoneNumber}</div>
              <div>{quotationsCount}</div>
              <div>{category}</div>
            </div>
          </div>
          <form className="space-y-3" onSubmit={onSubmit}>
            <AutoComplete
              placeholder="Enter customer category"
              onSuccess={() => getCustomerCategories({ search: "" })}
              create={createCustomerCategory}
              control={control}
              name={"customerCategory"}
              data={customerCategories}
              error={(errors.customerCategory as any)?.message}
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

export default UpdateCustomerCategory;
