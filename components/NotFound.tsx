type Props = { children?: React.ReactNode; message?: string };

const NotFound: React.FC<Props> = ({
  message = "Oops looks like nothing to show.",
  children,
}) => {
  return (
    <div className=" flex flex-col items-center ">
      <div className="max-w-xl ">
        <div>
          <div className="mt-12 items-center justify-center flex ">
            <img
              className="object-contain max-h-[300px] md:max-h-[600px]  mt-2 rounded-xl"
              src="/images/Not_Found.png"
            />
          </div>
          <div className="pt-10 text-center ">
            <h1 className=" pb-1 text-md md:text-lg">{message}</h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default NotFound;
