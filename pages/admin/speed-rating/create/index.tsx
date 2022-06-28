import { createSpeedRating } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createSpeedRating,
});

export default connect(mapDispatchToProps)(Create);
