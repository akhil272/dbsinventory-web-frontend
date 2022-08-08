import { getVehicleBrands, getVehicleModels } from "@Store/adminPanel/actions";
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
const mapStateToProps = ({
  tyres,
  quotations,
  adminPanel,
}: typeof initialState) => ({
  loadingTyreData: tyres.loading,
  loadingQuotationState: quotations.loading,
  brands: tyres.brands,
  loadIndexes: tyres.loadIndexes,
  speedRatings: tyres.speedRatings,
  tyreSizes: tyres.tyreSizes,
  services: quotations.services,
  vehicleBrands: adminPanel.vehicleBrands,
  vehicleModels: adminPanel.vehicleModels,
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
  getVehicleBrands,
  getVehicleModels,
});
export default connect(mapStateToProps, mapDispatchToProps)(GetQuote);
