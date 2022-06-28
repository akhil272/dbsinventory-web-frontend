import { initialState } from "@Store/rootReducer";
import { getPatterns } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Pattern from "./pattern";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  patterns: tyres.patterns,
});

const mapDispatchToProps = () => ({
  getPatterns,
});

export default connect(mapStateToProps, mapDispatchToProps)(Pattern);
