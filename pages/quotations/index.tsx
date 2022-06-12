import { getQuotations } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Quotations from "./quotations";
const mapStateToProps = ({ quotations }: typeof initialState) => ({
  quotations: quotations.quotations,
  total: quotations.total,
  page: quotations.page,
  lastPage: quotations.lastPage,
  loading: quotations.loading,
});

const mapDispatchToProps = () => ({
  getQuotations,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quotations);
