import { getServices } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Service from "./service";
const mapStateToProps = ({ quotations }: typeof initialState) => ({
  services: quotations.services,
});

const mapDispatchToProps = () => ({
  getServices,
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
