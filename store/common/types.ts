import { ApiReturnType } from "@Store/api";
import { User } from "@Store/users/types";

export const UPDATE_PAGE_TITLE = "UPDATE:PAGE_TITLE";

export type SelectOption = {
  value: string;
  label: string;
};

export type RoutePropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  exact?: boolean;
  path?: string;
  title?: string;
  updatePageTitle?: (title: string) => void;
};

export type HeaderProps = {
  user: User | null;
  getUser: (id: string) => Promise<ApiReturnType<User>>;
};

type UpdatePageTitleAction = {
  type: typeof UPDATE_PAGE_TITLE;
  pageTitle: string;
};

export type CommonActionTypes = UpdatePageTitleAction;
