import LoadingAnimation from "@Components/LoadingAnimation";
import dbsServer from "@Pages/api/dbsServer";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ConfirmMail = () => {
  const [loading, setLoading] = useState(false);
  const [IsVerified, setIsVerified] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);
  const router = useRouter();
  const {
    query: { token },
  } = router;
  useEffect(() => {
    setLoading(true);
    if (router.isReady) {
      const sendToken = async () => {
        await dbsServer
          .post("/mail/confirm", { token })
          .then(() => {
            setLoading(false);
            setIsVerified(true);
            return toast.success("Mail ID verified");
          })
          .catch((error) => {
            setLoading(false);
            setIsVerified(false);
            if (error.response.data.error === "Conflict") {
              setAlreadyVerified(true);
              return toast.warn("Email address already verified");
            } else {
              return toast.error(`${error.response.data.message}`);
            }
          });
      };
      sendToken();
    }
  }, [router.isReady]);
  if (loading) return <LoadingAnimation message="Please wait" />;

  return (
    <div className="pb-4">
      <div className="items-center justify-center flex  ">
        <img
          className="object-contain rounded-xl"
          src={
            IsVerified
              ? "/images/Success_Verification_Art.png"
              : "/images/Failed_Verification_Art.png"
          }
        />
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-2xl pb-4">
          {IsVerified && "Email address verified successfully."}
          {alreadyVerified && "Email address already verified."}
          {!IsVerified && !alreadyVerified && "Failed to verify email."}
        </h1>
      </div>
      <Link href="/">
        <a className="flex justify-center  rounded-md text-center bg-primary text-white h-10  p-2 text-base">
          Back to home
        </a>
      </Link>
    </div>
  );
};

export default ConfirmMail;
