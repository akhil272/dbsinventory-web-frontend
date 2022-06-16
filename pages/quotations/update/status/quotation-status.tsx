import ListBox from "@Components/ListBox";
import { UpdateQuotationStatusForm } from "@Utils/formTypes/QuotationFormData";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateQuotationStatusFrom } from "@Utils/schemas/QuotationSchema";

const data = [
  { id: 1, name: "PENDING" },
  { id: 2, name: "WAITING" },
  { id: 3, name: "FOLLOWUP" },
  { id: 4, name: "ACCEPTED" },
];

const QuotationStatus = ({ updateQuotationById }) => {
  const router = useRouter();
  const {
    query: { quotationId, status, customerName, customerPhoneNumber },
  } = router;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UpdateQuotationStatusForm>({
    resolver: yupResolver(UpdateQuotationStatusFrom),
  });
  const onSubmit = handleSubmit((data) => updateStatus(data));

  const updateStatus = async (data: UpdateQuotationStatusForm) => {
    const response = await updateQuotationById({
      id: quotationId,
      status: data.quotationStatus.name,
    });
    if (response.success) {
      toast.success("Quotation status updated successfully");
      router.back();
    } else {
      toast.error(`Failed to update quotation status: ${response.message}`);
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
        <h1 className="font-bold text-2xl pb-4">Update Quotation Status</h1>
      </div>
      <div>
        <div className="space-y-4">
          <div className="bg-white p-4 flex rounded-md">
            <div className="w-1/2 text-gray-400">
              <div>Customer Name</div>
              <div>Phone Number</div>
              <div>Quotation Status</div>
            </div>
            <div className="w-1/2">
              <div>{customerName}</div>
              <div>{customerPhoneNumber}</div>
              <div>{status}</div>
            </div>
          </div>
          <form className="space-y-3" onSubmit={onSubmit}>
            <ListBox
              control={control}
              name="quotationStatus"
              data={data}
              error={(errors.quotationStatus as any)?.message}
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

export default QuotationStatus;
