import AddService from "@Components/AddService";
import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import QuoteListCard from "@Components/QuoteListCard";
import SearchBox from "@Components/SearchBox";
import TextAreaInputField from "@Components/TextAreaInputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserAndQuotationProps } from "@Store/quotations/types";
import { CreateUserFormData } from "@Utils/formTypes/AuthFormData";
import { UserQueryFormData } from "@Utils/formTypes/QuotationFormData";
import { CreateUserSchema } from "@Utils/schemas/QuotationSchema";
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
}: CreateUserAndQuotationProps) => {
  const [userQuery, setUserQuery] = useState<UserQueryFormData[]>([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [userService, setUserService] = useState(false);
  const [userData, setUserData] = useState(null);
  const [count, setCount] = useState(1);
  const {
    handleSubmit: handleSubmitUser,
    control: controlUser,
    reset: resetUser,
    watch,
    setValue,
    formState: { errors: errorsUser },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(CreateUserSchema),
  });
  const userPhoneNumber = watch("phoneNumber");

  const onUserSubmit = handleSubmitUser((data) => handleUserData(data));
  const handleUserData = (data: CreateUserFormData) => {
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
    data.id = count;
    setUserQuery([...userQuery, data]), reset();
    setCount(count + 1);
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
        ({
          brand,
          pattern,
          tyreSize,
          loadIndex,
          speedRating,
          id,
          ...query
        }) => ({
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
        phoneNumber: userData?.phoneNumber.name,
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
  useEffect(() => {
    if (users.find((user) => user.id === userPhoneNumber?.id)) {
      setValue(
        "firstName",
        users.find((user) => user.id === userPhoneNumber?.id).firstName
      );
      setValue(
        "lastName",
        users.find((user) => user.id === userPhoneNumber?.id).lastName
      );
      setValue(
        "email",
        users.find((user) => user.id === userPhoneNumber?.id).email
      );
      setValue(
        "addressLine1",
        users.find((user) => user.id === userPhoneNumber?.id).addressLine1 || ""
      );
      setValue(
        "addressLine2",
        users.find((user) => user.id === userPhoneNumber.id).addressLine2 || ""
      );
    }
  }, [userPhoneNumber]);
  if (loadingUsers)
    return <LoadingAnimation message="Loading users, please wait.." />;
  if (loadingTyreData)
    return <LoadingAnimation message="Loading tyres data, please wait.." />;
  if (!brands?.length) return <LoadingAnimation message="Loading brands..." />;
  if (!tyreSizes?.length)
    return <LoadingAnimation message="Loading tyre sizes..." />;
  if (!speedRatings?.length)
    return <LoadingAnimation message="Loading speed ratings..." />;
  if (!loadIndexes?.length)
    return <LoadingAnimation message="Loading load indexes..." />;

  const onRemove = (id: number) => {
    const newUserQuery = userQuery.filter((userQuery) => userQuery.id !== id);
    setUserQuery(newUserQuery);
  };
  return (
    <div>
      <div className="pt-2 ">
        <h1 className="font-bold text-2xl capitalize pb-2">Create user</h1>
      </div>
      <form className="space-y-4" onSubmit={onUserSubmit}>
        <div className="flex-col space-y-2 justify-center">
          <SearchBox
            placeholder="Enter phone number [+91XXXXXXXXXX]"
            control={controlUser}
            name={"phoneNumber"}
            data={users?.map(({ phoneNumber, id }) => ({
              name: phoneNumber,
              id,
            }))}
          />
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
        <div className="w-full flex space-x-1">
          <button
            placeholder="Reset"
            className={`${
              userData
                ? "bg-pastel_green w-1/2 rounded-lg text-lg font-medium text-center text-white p-1"
                : "display-none"
            } `}
            type="button"
            onClick={() => setUserData(null)}
          >
            {userData ? "Reset" : null}
          </button>
          <button
            disabled={userData}
            className={`${
              userData ? "bg-gray-300 w-1/2" : "bg-primary w-full"
            }  rounded-lg text-lg font-medium text-center text-white p-1`}
            type="button"
            onClick={onUserSubmit}
          >
            {userData ? "User Selected" : "Submit"}
          </button>
        </div>
      </form>
      <div className="pt-4 ">
        <h1 className="font-bold text-2xl capitalize pb-2">
          Create Quotations
        </h1>
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
            type="number"
            error={errors.quantity?.message}
          />
          <TextAreaInputField
            control={control}
            name="userNotes"
            placeholder="Enter notes"
            error={errors.userNotes?.message}
          />
          <div className="flex space-x-1 py-2">
            <button
              className="bg-pastel_green w-1/2 text-lg rounded-md font-medium text-center text-white p-1"
              onClick={onSubmit}
            >
              Add More
            </button>
            <button
              className="bg-primary w-1/2  text-lg rounded-md font-medium text-center text-white p-1"
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
                  isRemoveAllowed={true}
                  onRemove={onRemove}
                  key={query.id}
                  index={index}
                  id={query.id}
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
                className="bg-primary w-full my-4 text-lg rounded-md font-medium text-center text-white p-1"
                onClick={submitAllQuotes}
              >
                Submit Quotation
              </button>
            ) : (
              <div className="flex space-x-1 py-2">
                <button
                  className="bg-pastel_green w-1/2 text-lg rounded-md font-medium text-center text-white p-1"
                  onClick={onAddService}
                >
                  Add Service
                </button>
                <button
                  className="bg-primary w-1/2  text-lg rounded-md font-medium text-center text-white p-1"
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
