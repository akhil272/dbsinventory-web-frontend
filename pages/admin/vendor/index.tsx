import { getVendors } from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Vendor from "./vendor";
const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
  vendors: adminPanel.vendors,
});

const mapDispatchToProps = () => ({
  getVendors,
});

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
