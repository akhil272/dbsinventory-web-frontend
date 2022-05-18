import { ApiReturnType } from "@Store/api";
import { ReactChildren } from "react";

export const GET_USER_INIT = "GET:USER:INIT";
export const GET_USER_SUCCESS = "GET:USER:SUCCESS";
export const GET_USER_FAIL = "GET:USER:FAIL";

type UserPayload = {
  first_name: string;
  last_name: string;
  user_role: string;
  phone_number: string;
  email: string;
};

export type User = UserPayload;
export type Users = {
  loading: boolean;
  user: User | null;
};

export type children = {
  children: ReactChildren;
};

export type LayoutDispatchProps = {
  getUserByid: (id: string) => Promise<ApiReturnType<UserPayload>>;
};

export type LayoutProps = Users & children;

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
  | GetUserInitAction
  | GetUserSuccessAction
  | GetUserFailAction;
