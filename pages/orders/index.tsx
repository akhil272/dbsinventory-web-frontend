import { getOrders, addOrderToStock } from "@Store/orders/actions";
import { initialState } from "@Store/rootReducer";
import { getUsers } from "@Store/users/actions";
import { connect } from "react-redux";
import AddOrder from "./addOrder";
const mapStateToProps = ({ orders, users }: typeof initialState) => ({
  orders: orders.orders,
  loading: orders.loading,
  user: users.user,
  users: users.users,
});

const mapDispatchToProps = () => ({
  getOrders,
  addOrderToStock,
  getUsers,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOrder);
