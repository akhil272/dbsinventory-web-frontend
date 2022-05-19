import { ApiReturnType } from "@Store/api";

export const VALIDATE_VERIFICATION_INIT = "VALIDATE_VERIFICATION:INIT";
export const VALIDATE_VERIFICATION_SUCCESS = "VALIDATE_VERIFICATION:SUCCESS";
export const VALIDATE_VERIFICATION_FAIL = "VALIDATE_VERIFICATION:FAIL";
export const INITIATE_VERIFICATION_INIT = "INITIATE_VERIFICATION:INIT";
export const INITIATE_VERIFICATION_SUCCESS = "INITIATE_VERIFICATION:SUCCESS";
export const INITIATE_VERIFICATION_FAIL = "INITIATE_VERIFICATION:FAIL";
export const REGISTER_INIT = "REGISTER:INIT";
export const REGISTER_SUCCESS = "REGISTER:SUCCESS";
export const REGISTER_FAIL = "REGISTER:FAIL";
export const SEND_OTP_INIT = "SEND_OTP:INIT";
export const SEND_OTP_SUCCESS = "SEND_OTP:SUCCESS";
export const SEND_OTP_FAIL = "SEND_OTP:FAIL";
export const LOGIN_INIT = "LOGIN:INIT";
export const LOGIN_SUCCESS = "LOGIN:SUCCESS";
export const LOGIN_FAIL = "LOGIN:FAIL";

export type User = {
  id: number;
  phone_number: string;
  email: string;
  first_name: string;
  last_name: string | undefined;
  roles: string;
};

export type registerPayload = {
  first_name: string;
  last_name: string;
  email?: string;
  phone_number: string;
};

export type registerApiResponse = {
  accessToken: string;
};

export type Login = {
  loading: boolean;
  user: User | null;
};

export type loginPayload = {
  phone_number: string;
  otp: string;
};

export type sendOtpPayload = {
  phone_number: string;
};

export type loginResponseApi = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type validateVerificationPayload = {
  verification_code: string;
};

export type RegisterDispatchProps = {
  register: (
    payload: registerPayload
  ) => Promise<ApiReturnType<registerApiResponse>>;
  initiateVerification: () => Promise<ApiReturnType<void>>;
  validateVerification: (
    payload: validateVerificationPayload
  ) => Promise<ApiReturnType<void>>;
};

export type LoginDispatchProps = {
  login: (payload: loginPayload) => Promise<ApiReturnType<loginResponseApi>>;
  sendOtp: (payload: sendOtpPayload) => Promise<ApiReturnType<{}>>;
};
export type RegisterProps = RegisterDispatchProps;
export type LoginProps = LoginDispatchProps;

type SendOtpInitAction = {
  type: typeof SEND_OTP_INIT;
};
type SendOtpSuccessAction = {
  type: typeof SEND_OTP_SUCCESS;
};
type SendOtpFailAction = {
  type: typeof SEND_OTP_FAIL;
};

type ValidateVerificationInitAction = {
  type: typeof VALIDATE_VERIFICATION_INIT;
};
type ValidateVerificationSuccessAction = {
  type: typeof VALIDATE_VERIFICATION_SUCCESS;
};
type ValidateVerificationFailAction = {
  type: typeof VALIDATE_VERIFICATION_FAIL;
};

type InitiateVerificationInitAction = {
  type: typeof INITIATE_VERIFICATION_INIT;
};
type InitiateVerificationSuccessAction = {
  type: typeof INITIATE_VERIFICATION_SUCCESS;
};
type InitiateVerificationFailAction = {
  type: typeof INITIATE_VERIFICATION_FAIL;
};

type RegisterInitAction = {
  type: typeof REGISTER_INIT;
};
type RegisterSuccessAction = {
  type: typeof REGISTER_SUCCESS;
  payload: ApiReturnType<registerApiResponse>;
};
type RegisterFailAction = {
  type: typeof REGISTER_FAIL;
};

type LoginInitAction = {
  type: typeof LOGIN_INIT;
};
type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS;
  payload: ApiReturnType<loginResponseApi>;
};
type LoginFailAction = {
  type: typeof LOGIN_FAIL;
};
export type RegisterActionTypes =
  | SendOtpInitAction
  | SendOtpSuccessAction
  | SendOtpFailAction
  | ValidateVerificationInitAction
  | ValidateVerificationSuccessAction
  | ValidateVerificationFailAction
  | InitiateVerificationInitAction
  | InitiateVerificationSuccessAction
  | InitiateVerificationFailAction
  | RegisterInitAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LoginInitAction
  | LoginSuccessAction
  | LoginFailAction;
