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
  const { SMS, RETRY_VERIFICATION } = API_END_POINTS;
  const url = `${SMS}${RETRY_VERIFICATION}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    authRequired: true,
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
  const { SMS, RETRY_INITIATE } = API_END_POINTS;
  const url = `${SMS}${RETRY_INITIATE}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    authRequired: true,
    TYPES: {
      requestType: RETRY_INITIATE_VERIFICATION_INIT,
      successType: RETRY_INITIATE_VERIFICATION_SUCCESS,
      failureType: RETRY_INITIATE_VERIFICATION_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const login = async (data: loginPayload) => {
  const { AUTH, OTP, LOGIN } = API_END_POINTS;
  const url = `${AUTH}${OTP}${LOGIN}`;
  const apiArgs = {
    method: API_METHODS.POST,
    data,
    url,
    authRequired: true,
    TYPES: {
      requestType: LOGIN_INIT,
      successType: LOGIN_SUCCESS,
      failureType: LOGIN_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const sendOtp = async (data: sendOtpPayload) => {
  const { AUTH, OTP, GENERATE } = API_END_POINTS;
  const url = `${AUTH}${OTP}${GENERATE}`;
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

export const validateOtpAndVerifyPhoneNumber = async (data: loginPayload) => {
  const { AUTH, OTP, VALIDATE } = API_END_POINTS;
  const url = `${AUTH}${OTP}${VALIDATE}`;
  const apiArgs = {
    method: API_METHODS.POST,
    data,
    url,
    authRequired: true,
    TYPES: {
      requestType: LOGIN_INIT,
      successType: LOGIN_SUCCESS,
      failureType: LOGIN_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const register = async (data: registerPayload) => {
  const { AUTH, REGISTER } = API_END_POINTS;
  const url = `${AUTH}${REGISTER}`;
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
