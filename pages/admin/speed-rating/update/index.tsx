import { deleteSpeedRating, updateSpeedRating } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateSpeedRating,
});

export default connect(mapDispatchToProps)(Update);
