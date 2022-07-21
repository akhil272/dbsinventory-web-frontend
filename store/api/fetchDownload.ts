import { API_METHODS } from "@Store/api/constants";
import store from "@Store/index";
import storage from "@Utils/storage";
import Router from "next/router";

import refreshSession from "./refreshSession";

export type ApiPayload = {
  baseUrl?: string;
  method?: `${API_METHODS}`;
  url: string;
  data?: unknown;
  headers?: { [key: string]: string };
  contentType?: string;

  showErrorNotification?: boolean;
  authRequired?: boolean;
  formData?: boolean;
  retried?: boolean;
  fileType: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiReturnType<T = any> = {
  success?: boolean;
  message?: string;
};

const fetchDownloadAsync = async (
  payload: ApiPayload
): Promise<ApiReturnType> => {
  const {
    baseUrl = process.env.BASE_URL,
    method,
    url,
    data,
    headers,
    contentType,
    showErrorNotification = false,
    authRequired = true,
    formData = false,
    retried = false,
    fileType,
  } = payload;
  // creating api URL with appending parameters
  const API_URL = `${baseUrl}${url}`;
  const accessToken = storage().getAccessToken();
  const Headers = {
    "Content-Type": contentType,
    ...headers,
    ...(authRequired && {
      authorization: `Bearer ${accessToken}`,
    }),
  };
  const requestOptions = {
    method: "GET",
    headers: Headers,
  };

  const downloadFile = fetch(API_URL, requestOptions)
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      const href = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", fileType); //or any other extension
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      const data = { success: true, message: "Download file success" };
      return data;
    })
    .catch((error) => {
      const data = {
        success: false,
        message: `Download file failed. ${error}`,
      };
      return data;
    });
  return downloadFile;
};
export default fetchDownloadAsync;
