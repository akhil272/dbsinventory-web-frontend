import { createQuotation } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { getBrands, getTyreSizes } from "@Store/tyre/actions";
import { connect } from "react-redux";
import GetQuote from "./get-a-quote";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
  tyreSizes: tyres.tyreSizes,
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
});
export default connect(mapStateToProps, mapDispatchToProps)(GetQuote);
