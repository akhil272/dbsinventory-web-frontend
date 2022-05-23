import { ApiReturnType } from "@Store/api";

export const USER_INFO_FETCH_INIT = "USER_INFO:FETCH:INIT";
export const USER_INFO_FETCH_SUCCESS = "USER_INFO:FETCH:SUCCESS";
export const USER_INFO_FETCH_FAIL = "USER_INFO:FETCH:FAIL";

export const USER_CREATE_INIT = "USER:CREATE:INIT";
export const USER_CREATE_SUCCESS = "USER:CREATE:SUCCESS";
export const USER_CREATE_FAIL = "USER:CREATE:FAIL";
export const USERS_FETCH_INIT = "USERS:FETCH:INIT";
export const USERS_FETCH_SUCCESS = "USERS:FETCH:SUCCESS";
export const USERS_FETCH_FAIL = "USERS:FETCH:FAIL";

export const GET_USER_INIT = "GET:USER:INIT";
export const GET_USER_SUCCESS = "GET:USER:SUCCESS";
export const GET_USER_FAIL = "GET:USER:FAIL";

type UserPayload = {
  id: number;
  first_name: string;
  last_name: string;
  roles: string;
  phone_number: string;
  email: string;
  avatarId: string;
  is_verified: boolean;
};

export type createUserPayload = {
  first_name: string;
  last_name: string;
  roles: string;
  phone_number: string;
  email?: string;
};

export type getUsersPayload = {
  search?: string;
};

export type User = UserPayload;
export type Users = {
  loading: boolean;
  user: User | null;
  users: User[];
};

export type LayoutDispatchProps = {
  getUserById: (id: string) => Promise<ApiReturnType<UserPayload>>;
};

export type UsersStateProps = {
  users: User[];
  loading: boolean;
};

export type UsersDispatchProps = {
  getUsers: (payload: getUsersPayload) => Promise<ApiReturnType<UserPayload[]>>;
  createUser: (
    data: createUserPayload
  ) => Promise<ApiReturnType<createUserResponse>>;
};

export type UsersProps = UsersStateProps & UsersDispatchProps;

export type createUserResponse = {};

type userInfoFetchInit = {
  type: typeof USER_INFO_FETCH_INIT;
};
type userInfoFetchSuccess = {
  type: typeof USER_INFO_FETCH_SUCCESS;
  payload: ApiReturnType<UserPayload>;
};
type userInfoFetchFail = {
  type: typeof USER_INFO_FETCH_FAIL;
};

type userCreateInit = {
  type: typeof USER_CREATE_INIT;
};
type userCreateSuccess = {
  type: typeof USER_CREATE_SUCCESS;
  payload: ApiReturnType<createUserResponse>;
};
type userCreateFail = {
  type: typeof USER_CREATE_FAIL;
};

type usersFetchInit = {
  type: typeof USERS_FETCH_INIT;
};
type usersFetchSuccess = {
  type: typeof USERS_FETCH_SUCCESS;
  payload: ApiReturnType<UserPayload[]>;
};
type usersFetchFail = {
  type: typeof USERS_FETCH_FAIL;
};

type GetUserInitAction = {
  type: typeof GET_USER_INIT;
};

type GetUserSuccessAction = {
  type: typeof GET_USER_SUCCESS;
  payload: ApiReturnType<UserPayload>;
};

type GetUserFailAction = {
  type: typeof GET_USER_FAIL;
};

export type UsersActionTypes =
  | userInfoFetchInit
  | userInfoFetchSuccess
  | userInfoFetchFail
  | userCreateInit
  | userCreateSuccess
  | userCreateFail
  | usersFetchInit
  | usersFetchSuccess
  | usersFetchFail
  | GetUserInitAction
  | GetUserSuccessAction
  | GetUserFailAction;
