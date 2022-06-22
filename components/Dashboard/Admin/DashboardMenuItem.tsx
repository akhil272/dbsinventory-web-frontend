import { useRouter } from "next/router";

type DashboardMenuItemProps = {
  title: string;
  color?: string;
  address?: string;
};

const DashboardMenuItem = ({
  title,
  color,
  address,
}: DashboardMenuItemProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(address);
  };
  return (
    <div
      onClick={handleNavigation}
      className={`${color} p-2 rounded-md hover:opacity-100 opacity-90  text-neutral-700  active:text-white `}
    >
      <div className="flex w-full items-center ">
        <div className="text-md tracking-wider ">{title}</div>
      </div>
    </div>
  );
};

export default DashboardMenuItem;
