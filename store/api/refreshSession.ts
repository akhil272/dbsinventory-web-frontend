import fetchAsync, { ApiReturnType, ApiPayload } from ".";
import storage from "../../utils/storage";
import { API_END_POINTS, API_METHODS } from "./constants";
import { useRouter } from "next/router";
const failureResponse: ApiReturnType = {
  success: false,
  status: 401,
  message: "Unauthorized",
  data: null,
};

const refreshSession = async (payload: ApiPayload): Promise<ApiReturnType> => {
  const router = useRouter();
  const { AUTH, REFRESH } = API_END_POINTS;
  const accessToken = storage().getAccessToken();
  const refreshToken = storage().getRefreshToken();
  if (!accessToken || !refreshToken) {
    storage().clear();
    router.push("/login");
    return failureResponse;
  }
  const API_URL = `${process.env.REACT_APP_BASE_URL}${AUTH}${REFRESH}`;
  const refreshTokenPayload = {
    method: API_METHODS.POST,
    body: JSON.stringify({
      refreshToken,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(API_URL, refreshTokenPayload);
    const responseJson = await response.json();
    if (responseJson?.data?.accessToken) {
      storage().setAccessToken(responseJson?.data?.accessToken);
      storage().setRefreshToken(responseJson?.data?.refreshToken);
      router.replace("/");
      const apiArgs = {
        ...payload,
        retried: true,
      };
      return await fetchAsync(apiArgs);
    } else {
      storage().clear();
      router.push("/login");
      return failureResponse;
    }
  } catch (err) {
    storage().clear();
    router.push("/login");
    return failureResponse;
  }
};

export default refreshSession;
