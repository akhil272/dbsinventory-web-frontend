const ServiceListCard = ({ serviceItems, onDelete }) => {
  return (
    <div className="p-2 bg-white rounded-md mb-4">
      {serviceItems?.map((service, index) => (
        <div
          className="text-sm flex justify-between items-center space-y-2"
          key={service.id}
        >
          <div>
            {index + 1}. {service.service.name}
          </div>
          <button onClick={() => onDelete(service.id)} className="text-primary">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceListCard;
