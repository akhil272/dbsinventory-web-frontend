import { DesktopOutlined } from "@ant-design/icons";

type DashboardMenuItemProps = {
  title: string;
  artCover?: string;
  color?: string;
};

const DashboardMenuItem = ({
  title,
  artCover,
  color = "white",
}: DashboardMenuItemProps) => {
  return (
    <div className={`bg-${color}`}>
      <div className="flex w-full items-center ">
        <img className="h-20 w-20 pr-2 bg-white rounded-md" src={artCover} />
        <div className="text-md font-semibold tracking-wider w-1/2 ">
          {title}
        </div>
      </div>
    </div>
  );
};

export default DashboardMenuItem;
