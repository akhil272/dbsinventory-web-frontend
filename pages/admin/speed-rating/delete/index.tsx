import { deleteSpeedRating } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteSpeedRating,
});

export default connect(mapDispatchToProps)(Delete);
