import AddService from "@Components/AddService";
import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import QuoteListCard from "@Components/QuoteListCard";
import SearchBox from "@Components/SearchBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterUserFormData } from "@Utils/formTypes/AuthFormData";
import { UserQueryFormData } from "@Utils/formTypes/QuotationFormData";
import { RegisterAuthSchema } from "@Utils/schemas/AuthSchema";
import UserQuoteSchema from "@Utils/schemas/UserQuoteSchema";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateQuotation = ({
  users,
  loadingUsers,
  loadingTyreData,
  getUsers,
  brands,
  tyreSizes,
  getBrands,
  getTyreSizes,
  patterns,
  getServices,
  services,
  loadIndexes,
  speedRatings,
  getLoadIndexes,
  getSpeedRatings,
  createUserAndQuotation,
}) => {
  const [userQuery, setUserQuery] = useState<UserQueryFormData[]>([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [userService, setUserService] = useState(false);
  const [userData, setUserData] = useState(null);
  const {
    handleSubmit: handleSubmitUser,
    control: controlUser,
    reset: resetUser,
    formState: { errors: errorsUser },
  } = useForm<RegisterUserFormData>({
    resolver: yupResolver(RegisterAuthSchema),
  });
  const onUserSubmit = handleSubmitUser((data) => handleUserData(data));
  const handleUserData = (data: RegisterUserFormData) => {
    setUserData(data);
    toast.success("User data recorded successfully");
    resetUser();
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<UserQueryFormData>({ resolver: yupResolver(UserQuoteSchema) });
  const onSubmit = handleSubmit((data) => {
    setUserQuery([...userQuery, data]), reset();
  });
  const handleSingleQuote = handleSubmit((data) => {
    setUserQuery([...userQuery, data]), reset();
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
  const onAddService = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setUserService(!userService);
  };
  const submitAllQuotes = async () => {
    const userAndQuotationPayload = {
      userQuotes: userQuery.map(
        ({ brand, pattern, tyreSize, loadIndex, speedRating, ...query }) => ({
          brandName: brand?.name,
          patternName: pattern?.name,
          tyreSizeValue: tyreSize?.name,
          tyreLoadIndex: Number(loadIndex.name),
          tyreSpeedRating: speedRating?.name,
          ...query,
        })
      ),
      serviceIds: selectedServices?.map((service) => ({
        id: service.service.id,
      })),
      user: {
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        email: userData?.email,
        phoneNumber: userData?.phoneNumber,
        addressLine1: userData?.addressLine1,
        addressLine2: userData?.addressLine2,
      },
      userId: null,
    };
    const response = await createUserAndQuotation(userAndQuotationPayload);
    if (response.success) {
      toast.success("Quotation created successfully");
      setUserQuery([]);
      setSelectedServices([]);
      setUserData(null);
    } else {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getUsers({ search: "" });
  }, []);
  useEffect(() => {
    getBrands({ search: "" });
  }, [getBrands]);
  useEffect(() => {
    getLoadIndexes({ search: "" });
  }, [getLoadIndexes]);
  useEffect(() => {
    getSpeedRatings({ search: "" });
  }, [getSpeedRatings]);
  useEffect(() => {
    getServices({ search: "" });
  }, [getServices]);
  useEffect(() => {
    getTyreSizes({ search: "" });
  }, [getTyreSizes]);
  if (loadingUsers || loadingTyreData)
    return <LoadingAnimation message="Please wait.." />;
  return (
    <div>
      <div className="pt-2 ">
        <h1 className="font-bold text-2xl capitalize pb-2">Create user</h1>
      </div>
      <form className="space-y-5" onSubmit={onUserSubmit}>
        <div className="flex-col space-y-2 justify-center">
          <InputField
            control={controlUser}
            name="firstName"
            placeholder="Enter first name"
            type="text"
            error={errorsUser.firstName?.message}
          />
          <InputField
            control={controlUser}
            name="lastName"
            placeholder="Enter last name"
            type="text"
            error={errorsUser.lastName?.message}
          />
          <InputField
            control={controlUser}
            name="email"
            placeholder="Enter your email (optional)"
            type="email"
            error={errorsUser.email?.message}
          />
          <InputField
            control={controlUser}
            name="phoneNumber"
            placeholder="Enter your phone number"
            type="tel"
            error={errorsUser.phoneNumber?.message}
          />
          <InputField
            control={controlUser}
            name="addressLine1"
            placeholder="Enter your address line 1 [optional]"
            type="text"
            error={errorsUser.addressLine1?.message}
          />
          <InputField
            control={controlUser}
            name="addressLine2"
            placeholder="Enter your address line 2 [optional]"
            type="text"
            error={errorsUser.addressLine2?.message}
          />
        </div>
        <button
          disabled={userData}
          className={`${
            userData ? "bg-gray-300" : "bg-primary"
          } w-full rounded-lg text-lg font-medium text-center text-white p-2`}
          type="button"
          onClick={onUserSubmit}
        >
          {userData ? "User data recorded" : "Submit"}
        </button>
      </form>
      <div className="pt-2 ">
        <h1 className="font-bold text-2xl capitalize pb-2">Get a quote</h1>
      </div>
      <div>
        <form className="space-y-2 " onSubmit={onSubmit}>
          <SearchBox
            placeholder="Enter brand name"
            control={control}
            name={"brand"}
            data={brands}
            error={(errors.brand as any)?.message}
          />
          <SearchBox
            placeholder="Enter patterns name"
            control={control}
            name={"pattern"}
            data={patterns}
          />
          <SearchBox
            placeholder="Enter tyre size name"
            control={control}
            name={"tyreSize"}
            data={tyreSizes?.map(({ value, id }) => ({
              name: value,
              id,
            }))}
            error={(errors.tyreSize as any)?.message}
          />
          <SearchBox
            placeholder="Enter speed rating"
            control={control}
            name={"speedRating"}
            data={speedRatings?.map(({ value, id }) => ({
              name: value,
              id,
            }))}
          />
          <SearchBox
            placeholder="Enter load index"
            control={control}
            name={"loadIndex"}
            data={loadIndexes?.map(({ value, id }) => ({
              name: String(value),
              id,
            }))}
          />
          <InputField
            control={control}
            name="quantity"
            placeholder="Enter quantity"
            type="text"
            error={errors.quantity?.message}
          />
          <InputField
            control={control}
            name="userNotes"
            placeholder="Enter notes"
            type="text"
            error={errors.userNotes?.message}
          />
          <div className="flex space-x-1 py-2">
            <button
              className="bg-pastel_green w-1/2 text-lg rounded-md font-medium text-center text-white p-2"
              onClick={onSubmit}
            >
              Add More
            </button>
            <button
              className="bg-primary w-1/2  text-lg rounded-md font-medium text-center text-white p-2"
              onClick={handleSingleQuote}
            >
              Submit
            </button>
          </div>
        </form>
        {userQuery.length > 0 && (
          <div className="pb-4">
            <div className="my-2">
              <h3 className="font-semibold text-lg ">User Quotation List</h3>
              {userQuery.map((query, index) => (
                <QuoteListCard
                  key={index}
                  id={index + 1}
                  brand={query?.brand?.name ?? "Error please refresh"}
                  pattern={query?.pattern?.name ?? "-"}
                  tyreSize={query?.tyreSize?.name ?? "Error please refresh"}
                  loadIndex={query?.loadIndex?.name ?? "-"}
                  speedRating={query?.speedRating?.name ?? "-"}
                  notes={query?.userNotes}
                  quantity={query?.quantity}
                />
              ))}
            </div>
            {userService && (
              <AddService
                services={services}
                setSelectedServices={setSelectedServices}
              />
            )}

            {userService ? (
              <button
                className="bg-primary w-full my-4 text-lg rounded-md font-medium text-center text-white p-2"
                onClick={submitAllQuotes}
              >
                Submit Quotation
              </button>
            ) : (
              <div className="flex space-x-1 py-2">
                <button
                  className="bg-pastel_green w-1/2 text-lg rounded-md font-medium text-center text-white p-2"
                  onClick={onAddService}
                >
                  Add Service
                </button>
                <button
                  className="bg-primary w-1/2  text-lg rounded-md font-medium text-center text-white p-2"
                  onClick={submitAllQuotes}
                >
                  Submit Quotation
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateQuotation;
