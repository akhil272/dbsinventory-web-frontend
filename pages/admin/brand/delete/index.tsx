import { initialState } from "@Store/rootReducer";
import { deleteBrand, getBrands, updateBrand } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteBrand,
});

export default connect(mapDispatchToProps)(Delete);
