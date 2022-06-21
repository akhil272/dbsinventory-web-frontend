import { ApiReturnType } from "@Store/api";

export const USER_OVERVIEW_FETCH_INIT = "USER_OVERVIEW:FETCH:INIT";
export const USER_OVERVIEW_FETCH_SUCCESS = "USER_OVERVIEW:FETCH:SUCCESS";
export const USER_OVERVIEW_FETCH_FAIL = "USER_OVERVIEW:FETCH:FAIL";

export const USER_DELETE_INIT = "USER:DELETE:INIT";
export const USER_DELETE_SUCCESS = "USER:DELETE:SUCCESS";
export const USER_DELETE_FAIL = "USER:DELETE:FAIL";

export const USER_UPDATE_INIT = "USER:UPDATE:INIT";
export const USER_UPDATE_SUCCESS = "USER:UPDATE:SUCCESS";
export const USER_UPDATE_FAIL = "USER:UPDATE:FAIL";

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

export type deleteUserPayload = {
  id: number;
};

export type UserPayload = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: string;
  email: string;
  avatarId: string;
  addressLine1: string;
  addressLine2: string;
  isPhoneNumberVerified: boolean;
};

export type updateUserPayload = {
  id: number;
  firstName?: string;
  lastName?: string;
  role?: string;
  phoneNumber?: string;
  email?: string;
};

export type createUserPayload = {
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: string;
  email?: string;
};

export type getUsersPayload = {
  search?: string;
};
export type OrderPayload = {
  id: number;
  saleDate: Date;
  salePrice: number;
  quantity: number;
};

export type QuotationPayload = {
  id: number;
  status: string;
  price: number;
  notes: string;
  validity: number;
  count: number;
  createdAt: Date;
};

export type Overview = {
  quotationAndOrders: {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
    customer: {
      id: number;
      orders: OrderPayload[];
      quotations: QuotationPayload[];
    };
  };
};

export type User = UserPayload;
export type Users = {
  loading: boolean;
  user: User | null;
  users: User[];
  overview: Overview;
};

export type deleteUserResponse = {};
export type updateUserResponse = {};

export type DeleteUserProps = {
  deleteUser: (
    data: deleteUserPayload
  ) => Promise<ApiReturnType<deleteUserResponse>>;
};

export type LayoutDispatchProps = {
  getUserById: (id: number) => Promise<ApiReturnType<UserPayload>>;
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

export type UserUpdateStateProps = {
  user: User;
  loading: boolean;
};
export type UserUpdateDispatchProps = {
  updateUser: (
    data: updateUserPayload
  ) => Promise<ApiReturnType<updateUserResponse>>;
  getUserById: (id: number) => Promise<ApiReturnType<UserPayload>>;
};
export type UpdateUserProps = UserUpdateStateProps & UserUpdateDispatchProps;
export type UsersProps = UsersStateProps & UsersDispatchProps;

export type createUserResponse = {};

type userOverviewFetchInit = {
  type: typeof USER_OVERVIEW_FETCH_INIT;
};
type userOverviewFetchSuccess = {
  type: typeof USER_OVERVIEW_FETCH_SUCCESS;
  payload: ApiReturnType<Overview>;
};
type userOverviewFetchFail = {
  type: typeof USER_OVERVIEW_FETCH_FAIL;
};

type userDeleteInit = {
  type: typeof USER_DELETE_INIT;
};
type userDeleteSuccess = {
  type: typeof USER_DELETE_SUCCESS;
  payload: ApiReturnType<deleteUserResponse>;
};
type userDeleteFail = {
  type: typeof USER_DELETE_FAIL;
};

type userUpdateInit = {
  type: typeof USER_UPDATE_INIT;
};
type userUpdateSuccess = {
  type: typeof USER_UPDATE_SUCCESS;
  payload: ApiReturnType<updateUserResponse>;
};
type userUpdateFail = {
  type: typeof USER_UPDATE_FAIL;
};

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
  | userOverviewFetchInit
  | userOverviewFetchSuccess
  | userOverviewFetchFail
  | userDeleteInit
  | userDeleteSuccess
  | userDeleteFail
  | userUpdateInit
  | userUpdateSuccess
  | userUpdateFail
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
