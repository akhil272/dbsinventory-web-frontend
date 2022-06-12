import {
  getUserQuoteById,
  updateUserQuoteById,
} from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import UserQuote from "./user-quote";
const mapStateToProps = ({ quotations }: typeof initialState) => ({
  loading: quotations.loading,
  userQuoteDetails: quotations.userQuoteDetails,
});

const mapDispatchToProps = () => ({
  getUserQuoteById,
  updateUserQuoteById,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserQuote);
