import { getLocations } from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Location from "./location";
const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
  locations: adminPanel.locations,
});

const mapDispatchToProps = () => ({
  getLocations,
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
