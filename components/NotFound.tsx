type NotFounDProps = {
  message?: string;
};

const NotFound = ({ message = "Not Found" }: NotFounDProps) => {
  return (
    <div className=" flex justify-center">
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
    </div>
  );
};

export default NotFound;
