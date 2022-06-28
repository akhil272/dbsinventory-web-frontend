import { createUserAndQuotation, getServices } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import {
  getBrands,
  getLoadIndexes,
  getSpeedRatings,
  getTyreSizes,
} from "@Store/tyre/actions";
import { getUsers } from "@Store/users/actions";
import { connect } from "react-redux";
import CreateQuotation from "./create-quotation";

const mapStateToProps = ({
  users,
  tyres,
  quotations,
}: typeof initialState) => ({
  loadingUsers: users.loading,
  loadingTyreData: tyres.loading,
  users: users.users,
  brands: tyres.brands,
  loadIndexes: tyres.loadIndexes,
  speedRatings: tyres.speedRatings,
  tyreSizes: tyres.tyreSizes,
  services: quotations.services,
  patterns: tyres.brands.reduce(
    (acc, curr) => [
      ...acc,
      ...curr.patterns.map((pattern) => ({
        ...pattern,
      })),
    ],
    []
  ),
});

const mapDispatchToProps = () => ({
  getUsers,
  getBrands,
  getTyreSizes,
  getServices,
  getSpeedRatings,
  getLoadIndexes,
  createUserAndQuotation,
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateQuotation);
