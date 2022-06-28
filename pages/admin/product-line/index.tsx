import { initialState } from "@Store/rootReducer";
import { getProductLines } from "@Store/tyre/actions";
import { connect } from "react-redux";
import ProductLine from "./product-line";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  productLines: tyres.productLines,
});

const mapDispatchToProps = () => ({
  getProductLines,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductLine);
