type NotFounDProps = {
  message?: string;
};
type Props = { children?: React.ReactNode; message?: string };

const NotFound: React.FC<Props> = ({ message = "Not Found", children }) => {
  return (
    <div className=" flex flex-col justify-center">
      <div className="max-w-xl">
        <div>
          <div className="mt-12 items-center justify-center flex ">
            <img
              className="object-contain max-h-[600px]  mt-2 rounded-xl"
              src="/images/Not_Found.png"
            />
          </div>
          <div className="pt-10 text-center ">
            <h1 className="font-bold text-2xl capitalize pb-2">{message}</h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default NotFound;
