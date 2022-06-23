import { initialState } from "@Store/rootReducer";
import { getPatterns } from "@Store/tyre/actions";
import { connect } from "react-redux";
import TyreSize from "./tyre-size";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  patterns: tyres.patterns,
});

const mapDispatchToProps = () => ({
  getPatterns,
});

export default connect(mapStateToProps, mapDispatchToProps)(TyreSize);
