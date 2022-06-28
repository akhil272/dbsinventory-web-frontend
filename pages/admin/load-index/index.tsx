import { initialState } from "@Store/rootReducer";
import { getLoadIndexes } from "@Store/tyre/actions";
import { connect } from "react-redux";
import LoadIndex from "./load-index";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  loadIndexes: tyres.loadIndexes,
});

const mapDispatchToProps = () => ({
  getLoadIndexes,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadIndex);
