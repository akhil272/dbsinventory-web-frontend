import { getTransports } from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Transport from "./transport";
const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
  transports: adminPanel.transports,
});

const mapDispatchToProps = () => ({
  getTransports,
});

export default connect(mapStateToProps, mapDispatchToProps)(Transport);
