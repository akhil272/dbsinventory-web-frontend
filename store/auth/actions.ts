import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";

import {
  LOGIN_FAIL,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  loginPayload,
  registerPayload,
  REGISTER_INIT,
  REGISTER_SUCCESS,
  validateVerificationPayload,
  VALIDATE_VERIFICATION_INIT,
  VALIDATE_VERIFICATION_FAIL,
  VALIDATE_VERIFICATION_SUCCESS,
  INITIATE_VERIFICATION_FAIL,
  INITIATE_VERIFICATION_INIT,
  INITIATE_VERIFICATION_SUCCESS,
  sendOtpPayload,
  SEND_OTP_FAIL,
  SEND_OTP_INIT,
  SEND_OTP_SUCCESS,
  REGISTER_FAIL,
  retryVerificationPayload,
  RETRY_VERIFICATION_FAIL,
  RETRY_VERIFICATION_INIT,
  RETRY_VERIFICATION_SUCCESS,
  RETRY_INITIATE_VERIFICATION_FAIL,
  RETRY_INITIATE_VERIFICATION_INIT,
  RETRY_INITIATE_VERIFICATION_SUCCESS,
} from "./types";

export const retryVerification = async (data: retryVerificationPayload) => {
  const { RETRY_VERIFICATION } = API_END_POINTS;
  const url = `${RETRY_VERIFICATION}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    authRequired: false,
    TYPES: {
      requestType: RETRY_VERIFICATION_INIT,
      successType: RETRY_VERIFICATION_SUCCESS,
      failureType: RETRY_VERIFICATION_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
export const retryInitiateVerification = async (
  data: retryVerificationPayload
) => {
  const { RETRY_INITIATE_VERIFICATION } = API_END_POINTS;
  const url = `${RETRY_INITIATE_VERIFICATION}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    authRequired: false,
    TYPES: {
      requestType: RETRY_INITIATE_VERIFICATION_INIT,
      successType: RETRY_INITIATE_VERIFICATION_SUCCESS,
      failureType: RETRY_INITIATE_VERIFICATION_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const login = async (data: loginPayload) => {
  const { VALIDATE_OTP } = API_END_POINTS;
  const url = `${VALIDATE_OTP}`;
  const apiArgs = {
    method: API_METHODS.POST,
    data,
    url,
    authRequired: false,
    TYPES: {
      requestType: LOGIN_INIT,
      successType: LOGIN_SUCCESS,
      failureType: LOGIN_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const sendOtp = async (data: sendOtpPayload) => {
  const { GENERATE_OTP } = API_END_POINTS;
  const url = `${GENERATE_OTP}`;
  const apiArgs = {
    method: API_METHODS.POST,
    data,
    url,
    authRequired: false,
    TYPES: {
      requestType: SEND_OTP_INIT,
      successType: SEND_OTP_SUCCESS,
      failureType: SEND_OTP_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const validateVerification = async (
  data: validateVerificationPayload
) => {
  const { VALIDATE_VERIFICATION_CODE } = API_END_POINTS;
  const url = `${VALIDATE_VERIFICATION_CODE}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    authRequired: true,
    TYPES: {
      requestType: VALIDATE_VERIFICATION_INIT,
      successType: VALIDATE_VERIFICATION_SUCCESS,
      failureType: VALIDATE_VERIFICATION_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const initiateVerification = async () => {
  const { INITIATE_VERIFICATION } = API_END_POINTS;
  const url = `${INITIATE_VERIFICATION}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    authRequired: true,
    TYPES: {
      requestType: INITIATE_VERIFICATION_INIT,
      successType: INITIATE_VERIFICATION_SUCCESS,
      failureType: INITIATE_VERIFICATION_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const register = async (data: registerPayload) => {
  const { REGISTER } = API_END_POINTS;
  const url = `${REGISTER}`;
  const apiArgs = {
    method: API_METHODS.POST,
    data,
    url,
    authRequired: false,
    TYPES: {
      requestType: REGISTER_INIT,
      successType: REGISTER_SUCCESS,
      failureType: REGISTER_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
