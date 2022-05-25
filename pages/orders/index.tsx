import { getOrders, addOrderToStock } from "@Store/orders/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import AddOrder from "./addOrder";
const mapStateToProps = ({ orders, users }: typeof initialState) => ({
  orders: orders.orders,
  loading: orders.loading,
  user: users.user,
});

const mapDispatchToProps = () => ({
  getOrders,
  addOrderToStock,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOrder);
