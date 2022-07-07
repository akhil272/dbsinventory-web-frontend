import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  whatsApp: string;
  email: string;
  sms: string;
  callback: string;
};
const ContactCard = ({ getContactOptions }) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = handleSubmit((data) => getContactOptions(data));
  return (
    <div className="  bg-white rounded-md p-2">
      <p className="text-sm text-gray-500">
        Please select medium of communication
      </p>
      <div className="pb-2">
        <form onSubmit={onSubmit} className="flex text-sm text-gray-500 py-2">
          <div className="flex flex-col w-1/2">
            <label>
              <input type="checkbox" {...register("whatsApp")} /> WhatsApp
            </label>
            <label>
              <input type="checkbox" {...register("email")} /> E-Mail
            </label>
          </div>
          <div className="flex flex-col">
            <label>
              <input type="checkbox" {...register("sms")} /> SMS
            </label>
            <label>
              <input type="checkbox" {...register("callback")} /> Call Back
            </label>
          </div>
        </form>
        <button
          className="flex w-full justify-center p-2 bg-primary text-white rounded-md text-sm"
          onClick={onSubmit}
        >
          Send Quotation
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
