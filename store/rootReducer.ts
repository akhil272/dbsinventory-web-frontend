import authReducer, { initialState as authState } from "@Store/auth/reducer";
import tyresReducer, { initialState as tyresState } from "@Store/tyre/reducer";
import usersReducer, { initialState as usersState } from "@Store/users/reducer";
import stocksReducer, { initialState as stocksState } from "./stocks/reducer";
import adminPanelReducer, {
  initialState as adminPanelState,
} from "@Store/adminPanel/reducer";
import customerReducer, {
  initialState as customersState,
} from "@Store/customers/reducer";
import ordersReducer, {
  initialState as ordersState,
} from "@Store/orders/reducer";
import quotationsReducer, {
  initialState as quotationsState,
} from "@Store/quotations/reducer";
import { combineReducers } from "redux";

export const initialState = {
  auth: authState,
  users: usersState,
  tyres: tyresState,
  stocks: stocksState,
  adminPanel: adminPanelState,
  orders: ordersState,
  quotations: quotationsState,
  customers: customersState,
};

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  tyres: tyresReducer,
  stocks: stocksReducer,
  adminPanel: adminPanelReducer,
  orders: ordersReducer,
  quotations: quotationsReducer,
  customers: customerReducer,
});
