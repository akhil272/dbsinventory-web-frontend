type DashboardItemCardProps = {
  title: string;
  value: number | string;
  icon: any;
  increasePercentage: number | null;
};

const DashboardItemCard = ({
  title,
  value,
  icon,
  increasePercentage,
}: DashboardItemCardProps) => {
  return (
    <div className="bg-white rounded-md p-4  w-full my-2">
      <div className="relative flex justify-between items-center">
        <div className="flex items-center justify-center">
          <div className="h-10 w-10 rounded-md bg-gray-200" />
          <div className="h-10 w-10 rounded-md flex items-center justify-center  absolute ">
            {icon}
          </div>
        </div>
        <div className="text-neutral-500">
          {increasePercentage ? `${increasePercentage}%` : "N/A"}
        </div>
      </div>
      <div>
        <div className="text-4xl font-bold pt-4">
          {" "}
          {value ? `${value}` : "N/A"}
        </div>
        <div className="text-sm text-neutral-500">{title}</div>
      </div>
    </div>
  );
};

export default DashboardItemCard;
