import { createQuotation, getServices } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import {
  getBrands,
  getLoadIndexes,
  getSpeedRatings,
  getTyreSizes,
} from "@Store/tyre/actions";
import { connect } from "react-redux";
import GetQuote from "./get-a-quote";
const mapStateToProps = ({ tyres, quotations }: typeof initialState) => ({
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
  getBrands,
  getTyreSizes,
  createQuotation,
  getServices,
  getSpeedRatings,
  getLoadIndexes,
});
export default connect(mapStateToProps, mapDispatchToProps)(GetQuote);
