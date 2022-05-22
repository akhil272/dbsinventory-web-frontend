import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="fixed w-full bg-inherit">
        <Header />
      </div>
      <div className="px-2">{children}</div>
    </div>
  );
};

export default Layout;
