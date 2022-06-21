import { getOverview } from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import AdminPanel from "./AdminPanel";

const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
  loading: adminPanel.loading,
  overview: adminPanel.overview,
});

const mapDispatchToProps = () => ({
  getOverview,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
