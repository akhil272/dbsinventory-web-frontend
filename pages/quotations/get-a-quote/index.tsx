import { createQuotation, getServices } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { getBrands, getTyreSizes } from "@Store/tyre/actions";
import { connect } from "react-redux";
import GetQuote from "./get-a-quote";
const mapStateToProps = ({ tyres, quotations }: typeof initialState) => ({
  brands: tyres.brands,
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
});
export default connect(mapStateToProps, mapDispatchToProps)(GetQuote);
