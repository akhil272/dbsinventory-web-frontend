import { QuotationService } from "@Store/quotations/types";
import React from "react";
type ServiceTagsProps = {
  services: QuotationService[];
};
const ServiceTags = ({ services }: ServiceTagsProps) => {
  return (
    <div className="flex px-2 pb-2 ">
      <label className="text-xs text-gray-400">Services:</label>
      {services.map((item) => (
        <label key={item.id} className="text-xs text-gray-600 italic px-0.5">
          {item.service.name},
        </label>
      ))}
    </div>
  );
};

export default ServiceTags;
