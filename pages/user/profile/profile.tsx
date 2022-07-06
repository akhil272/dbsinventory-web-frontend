import { EditOutlined, WarningFilled } from "@ant-design/icons";
import Button from "@Components/Button";
import LoadingAnimation from "@Components/LoadingAnimation";
import dbsServer from "@Pages/api/dbsServer";
import { API_END_POINTS } from "@Store/api/constants";
import { ProfileProps } from "@Store/users/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Profile = ({ userProfile, getUserById, loading }: ProfileProps) => {
  const [confirmAvatar, setConfirmAvatar] = useState(false);
  const [avatarForUpload, setAvatarForUpload] = useState(null);
  const uploadedImage = React.useRef(null);
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    const fileSize = file.size / 1024 / 1024;
    if (fileSize > 2) {
      return toast.error("Image size exceed more than 2mb.");
    }
    setConfirmAvatar(true);
    setAvatarForUpload(file);
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  const router = useRouter();
  const {
    query: { userId },
  } = router;
  const onConfirmAvatar = async () => {};

  const onCancelAvatar = () => {
    setConfirmAvatar(false);
  };
  useEffect(() => {
    if (router.isReady) {
      getUserById(+userId);
    }
  }, [router.isReady]);

  if (loading) return <LoadingAnimation message="Please wait..." />;
  return (
    <div className="min-h-screen">
      <div className="h-1/2 rounded-lg space-y-2 flex flex-col items-center justify-center">
        <div className="max-h-64 max-w-64 relative">
          <div className="image-upload ">
            <label className=" w-full " htmlFor="file-input">
              <EditOutlined className="absolute  right-0" />
            </label>
            <input
              className="hidden"
              id="file-input"
              type="file"
              accept="image/*"
              multiple={false}
              onChange={handleImageUpload}
            />
          </div>

          <img
            ref={uploadedImage}
            className="bg-contain rounded-full  max-h-64 max-w-64"
            src={"/images/Avatar.png"}
          />
        </div>
        <div className="flex flex-col -space-y-2 capitalize place-items-center">
          <h2 className="text-3xl font-bold">
            {userProfile?.firstName} {userProfile?.lastName}
          </h2>
          <h4 className="text-base lowercase">{userProfile?.role}</h4>
        </div>
      </div>
      {confirmAvatar ? (
        <div className="flex  space-x-2">
          <Button
            bgColor="bg-pastel_green"
            width="w-1/2"
            onClick={onConfirmAvatar}
          >
            Update
          </Button>
          <Button bgColor="bg-gray-400" width="w-1/2" onClick={onCancelAvatar}>
            Cancel
          </Button>
        </div>
      ) : null}
      <div className="rounded-lg  p-4 my-5 bg-white flex flex-col space-y-4">
        <div className="flex flex-col -space-y-2  ">
          <div className="text-base text-gray-400">Name</div>
          <div className="text-lg">
            {userProfile?.firstName} {userProfile?.lastName}
          </div>
        </div>
        <div className="flex flex-col -space-y-2  ">
          <div className="text-base text-gray-400">Phone</div>
          <div className="text-lg">{userProfile?.phoneNumber} </div>
        </div>
        <div className="flex flex-col -space-y-2  ">
          <div className="text-base text-gray-400">Email</div>
          <div className="text-lg">{userProfile?.email}</div>
        </div>
        <div className="flex flex-col -space-y-2  ">
          <div className="text-base text-gray-400">Address</div>
          <div className="text-lg">{userProfile?.addressLine1 ?? "N/A"}</div>
          <div className="text-lg">{userProfile?.addressLine2}</div>
        </div>
        <div className="flex items-end justify-end  text-white">
          <Link href={{ pathname: "/user/profile/update", query: { userId } }}>
            <a className="bg-gray-500 p-1 px-2 rounded-md">Edit Profile</a>
          </Link>
        </div>
      </div>

      {!userProfile?.isPhoneNumberVerified || !userProfile?.isEmailVerified ? (
        <div className="p-2 border-2 border-gray-300 rounded-md">
          <span className="flex">
            <WarningFilled className="text-primary items-center flex justify-center pr-1" />
            <p className="text-base text-primary ">Attention</p>
          </span>

          {userProfile?.isEmailVerified ? null : (
            <div>
              <Link href="#">
                <a className="text-blue-500">Click Here</a>
              </Link>{" "}
              to verify mail id.
            </div>
          )}
          {userProfile?.isPhoneNumberVerified ? null : (
            <div>
              <Link href="/auth/retry-verification">
                <a className="text-blue-500 ">Click Here</a>
              </Link>{" "}
              to verify phone number.
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
