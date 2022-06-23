import { initialState } from "@Store/rootReducer";
import { getSpeedRatings } from "@Store/tyre/actions";
import { connect } from "react-redux";
import SpeedRating from "./speed-rating";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  speedRatings: tyres.speedRatings,
});

const mapDispatchToProps = () => ({
  getSpeedRatings,
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeedRating);
