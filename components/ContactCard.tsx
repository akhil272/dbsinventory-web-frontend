import React from "react";

const ContactCard = () => {
  return (
    <div className="my-4 py-2 bg-white rounded-md p-2">
      <div className="pb-2">
        <form className="flex text-sm text-gray-500 py-2">
          <div className="flex flex-col w-1/2">
            <label>
              <input type="checkbox" /> WhatsApp
            </label>
            <label>
              <input type="checkbox" /> E-Mail
            </label>
          </div>
          <div className="flex flex-col">
            <label>
              <input type="checkbox" /> SMS
            </label>
            <label>
              <input type="checkbox" /> Call Back
            </label>
          </div>
        </form>
        <div className="flex w-full justify-center p-2 bg-primary text-white rounded-md text-sm">
          <button>Send Quotation</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
