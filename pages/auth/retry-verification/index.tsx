import {
  retryInitiateVerification,
  retryVerification,
} from "@Store/auth/actions";
import { connect } from "react-redux";
import RetryUserVerification from "./retry-user-verification";

const mapDispatchToProps = () => ({
  retryVerification,
  retryInitiateVerification,
});

export default connect(mapDispatchToProps)(RetryUserVerification);
