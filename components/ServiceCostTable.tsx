import React from "react";

const ServiceCostTable = ({ quotationServices }) => {
  return (
    <div className="overflow-auto">
      <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6   py-3">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {quotationServices?.map((quotation, index) => (
            <tr
              key={quotation.id}
              className="bg-white border-b dark:bg-gray-800  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">{quotation.service.name}</td>
              <td className="px-6 py-4">{quotation.price}</td>
              <td className="px-6 py-4 text-clip overflow-hidden truncate">
                {quotation.serviceNote}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceCostTable;
