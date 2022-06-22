type DashboardMenuItemProps = {
  title: string;
  artCover?: string;
  color?: string;
};

const DashboardMenuItem = ({
  title,
  artCover,
  color,
}: DashboardMenuItemProps) => {
  return (
    <div
      className={`${color} p-2 rounded-md hover:opacity-100 opacity-90  text-neutral-700  active:text-white `}
    >
      <div className="flex w-full items-center ">
        <div className="text-md tracking-wider ">{title}</div>
      </div>
    </div>
  );
};

export default DashboardMenuItem;
