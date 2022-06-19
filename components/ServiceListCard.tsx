const ServiceListCard = ({ serviceItems }) => {
  return (
    <div className="p-2 bg-white rounded-md mb-4">
      {serviceItems?.map(({ service }, index) => (
        <div className="text-sm" key={service.id}>
          {index + 1}. {service.name}
        </div>
      ))}
    </div>
  );
};

export default ServiceListCard;
