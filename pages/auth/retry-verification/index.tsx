import {
  initiateVerification,
  retryInitiateVerification,
  retryVerification,
  validateVerification,
} from "@Store/auth/actions";
import { connect } from "react-redux";
import RetryUserVerification from "./retry-user-verification";

const mapDispatchToProps = () => ({
  initiateVerification,
  retryVerification,
  retryInitiateVerification,
});

export default connect(mapDispatchToProps)(RetryUserVerification);
