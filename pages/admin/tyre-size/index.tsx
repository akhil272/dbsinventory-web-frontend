import { initialState } from "@Store/rootReducer";
import { getTyreSizes } from "@Store/tyre/actions";
import { connect } from "react-redux";
import TyreSize from "./tyre-size";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  tyreSizes: tyres.tyreSizes,
});

const mapDispatchToProps = () => ({
  getTyreSizes,
});

export default connect(mapStateToProps, mapDispatchToProps)(TyreSize);
