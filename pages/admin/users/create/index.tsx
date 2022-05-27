import Create from "./create";

import { connect } from "react-redux";
import { createUser } from "@Store/users/actions";

const mapDispatchToProps = () => ({
  createUser,
});

export default connect(mapDispatchToProps)(Create);
