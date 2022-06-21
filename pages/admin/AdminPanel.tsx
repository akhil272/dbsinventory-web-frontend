import Link from "next/link";

const AdminPanel = () => {
  return (
    <div className="pb-4">
      Hello world
      <Link href="/admin/downloads">
        <a>Click here</a>
      </Link>
    </div>
  );
};

export default AdminPanel;
