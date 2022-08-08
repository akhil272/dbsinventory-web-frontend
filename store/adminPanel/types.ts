import { ApiReturnType } from "@Store/api";
import { Vendor, Transport, Location } from "@Store/stocks/types";

export const VEHICLE_BRAND_DELETE_INIT = "VEHICLE_BRAND:DELETE:INIT";
export const VEHICLE_BRAND_DELETE_SUCCESS = "VEHICLE_BRAND:DELETE:SUCCESS";
export const VEHICLE_BRAND_DELETE_FAIL = "VEHICLE_BRAND:DELETE:FAIL";
export const VEHICLE_BRAND_UPDATE_INIT = "VEHICLE_BRAND:UPDATE:INIT";
export const VEHICLE_BRAND_UPDATE_SUCCESS = "VEHICLE_BRAND:UPDATE:SUCCESS";
export const VEHICLE_BRAND_UPDATE_FAIL = "VEHICLE_BRAND:UPDATE:FAIL";
export const VEHICLE_BRAND_CREATE_INIT = "VEHICLE_BRAND:CREATE:INIT";
export const VEHICLE_BRAND_CREATE_SUCCESS = "VEHICLE_BRAND:CREATE:SUCCESS";
export const VEHICLE_BRAND_CREATE_FAIL = "VEHICLE_BRAND:CREATE:FAIL";
export const VEHICLE_BRANDS_FETCH_INIT = "VEHICLE_BRANDS:FETCH:INIT";
export const VEHICLE_BRANDS_FETCH_SUCCESS = "VEHICLE_BRANDS:FETCH:SUCCESS";
export const VEHICLE_BRANDS_FETCH_FAIL = "VEHICLE_BRANDS:FETCH:FAIL";

export const OVERVIEW_FETCH_INIT = "OVERVIEW:FETCH:INIT";
export const OVERVIEW_FETCH_SUCCESS = "OVERVIEW:FETCH:SUCCESS";
export const OVERVIEW_FETCH_FAIL = "OVERVIEW:FETCH:FAIL";

export const TRANSPORT_DELETE_INIT = "TRANSPORT:DELETE:INIT";
export const TRANSPORT_DELETE_SUCCESS = "TRANSPORT:DELETE:SUCCESS";
export const TRANSPORT_DELETE_FAIL = "TRANSPORT:DELETE:FAIL";
export const TRANSPORT_UPDATE_INIT = "TRANSPORT:UPDATE:INIT";
export const TRANSPORT_UPDATE_SUCCESS = "TRANSPORT:UPDATE:SUCCESS";
export const TRANSPORT_UPDATE_FAIL = "TRANSPORT:UPDATE:FAIL";
export const TRANSPORT_CREATE_INIT = "TRANSPORT:CREATE:INIT";
export const TRANSPORT_CREATE_SUCCESS = "TRANSPORT:CREATE:SUCCESS";
export const TRANSPORT_CREATE_FAIL = "TRANSPORT:CREATE:FAIL";
export const TRANSPORTS_FETCH_INIT = "TRANSPORTS:FETCH:INIT";
export const TRANSPORTS_FETCH_SUCCESS = "TRANSPORTS:FETCH:SUCCESS";
export const TRANSPORTS_FETCH_FAIL = "TRANSPORTS:FETCH:FAIL";

export const LOCATION_DELETE_INIT = "LOCATION:DELETE:INIT";
export const LOCATION_DELETE_SUCCESS = "LOCATION:DELETE:SUCCESS";
export const LOCATION_DELETE_FAIL = "LOCATION:DELETE:FAIL";
export const LOCATION_UPDATE_INIT = "LOCATION:UPDATE:INIT";
export const LOCATION_UPDATE_SUCCESS = "LOCATION:UPDATE:SUCCESS";
export const LOCATION_UPDATE_FAIL = "LOCATION:UPDATE:FAIL";
export const LOCATION_CREATE_INIT = "LOCATION:CREATE:INIT";
export const LOCATION_CREATE_SUCCESS = "LOCATION:CREATE:SUCCESS";
export const LOCATION_CREATE_FAIL = "LOCATION:CREATE:FAIL";
export const LOCATIONS_FETCH_INIT = "LOCATIONS:FETCH:INIT";
export const LOCATIONS_FETCH_SUCCESS = "LOCATIONS:FETCH:SUCCESS";
export const LOCATIONS_FETCH_FAIL = "LOCATIONS:FETCH:FAIL";

export const VENDOR_DELETE_INIT = "VENDOR:DELETE:INIT";
export const VENDOR_DELETE_SUCCESS = "VENDOR:DELETE:SUCCESS";
export const VENDOR_DELETE_FAIL = "VENDOR:DELETE:FAIL";
export const VENDOR_UPDATE_INIT = "VENDOR:UPDATE:INIT";
export const VENDOR_UPDATE_SUCCESS = "VENDOR:UPDATE:SUCCESS";
export const VENDOR_UPDATE_FAIL = "VENDOR:UPDATE:FAIL";
export const VENDOR_CREATE_INIT = "VENDOR:CREATE:INIT";
export const VENDOR_CREATE_SUCCESS = "VENDOR:CREATE:SUCCESS";
export const VENDOR_CREATE_FAIL = "VENDOR:CREATE:FAIL";
export const VENDORS_FETCH_INIT = "VENDORS:FETCH:INIT";
export const VENDORS_FETCH_SUCCESS = "VENDORS:FETCH:SUCCESS";
export const VENDORS_FETCH_FAIL = "VENDORS:FETCH:FAIL";

export type deleteVehicleModelPayload = {
  id: number;
};
export type deleteVehicleBrandPayload = {
  id: number;
};
export type deleteTransportPayload = {
  id: number;
};
export type deleteLocationPayload = {
  id: number;
};
export type deleteVendorPayload = {
  id: number;
};
export type updateVehicleModelPayload = {
  id: number;
  model: string;
};
export type updateVehicleBrandPayload = {
  id: number;
  vehicleBrand: string;
};
export type updateTransportPayload = {
  id: number;
  mode: string;
};
export type updateLocationPayload = {
  id: number;
  name: string;
};
export type updateVendorPayload = {
  id: number;
  name: string;
};

export type UpdateVehicleModelProps = {
  updateVehicleModel: (
    payload: updateVehicleModelPayload
  ) => Promise<ApiReturnType<{}>>;
};
export type UpdateVehicleBrandProps = {
  updateVehicleBrand: (
    payload: updateVehicleBrandPayload
  ) => Promise<ApiReturnType<{}>>;
};
export type UpdateTransportProps = {
  updateTransport: (
    payload: updateTransportPayload
  ) => Promise<ApiReturnType<{}>>;
};
export type UpdateLocationProps = {
  updateLocation: (
    payload: updateLocationPayload
  ) => Promise<ApiReturnType<{}>>;
};
export type UpdateVendorProps = {
  updateVendor: (payload: updateVendorPayload) => Promise<ApiReturnType<{}>>;
};

export type DeleteVehicleModelProps = {
  deleteVehicleModel: (
    data: deleteVehicleModelPayload
  ) => Promise<ApiReturnType<{}>>;
};
export type DeleteVehicleBrandProps = {
  deleteVehicleBrand: (
    data: deleteVehicleBrandPayload
  ) => Promise<ApiReturnType<{}>>;
};
export type DeleteTransportProps = {
  deleteTransport: (data: deleteTransportPayload) => Promise<ApiReturnType<{}>>;
};
export type DeleteLocationProps = {
  deleteLocation: (data: deleteLocationPayload) => Promise<ApiReturnType<{}>>;
};
export type DeleteVendorProps = {
  deleteVendor: (data: deleteVendorPayload) => Promise<ApiReturnType<{}>>;
};

export type CreateVehicleBrandProps = {
  createVehicleBrand: (
    data: createVehicleBrandPayload
  ) => Promise<ApiReturnType<{}>>;
};
export type CreateTransportProps = {
  createTransport: (data: createTransportPayload) => Promise<ApiReturnType<{}>>;
};
export type CreateLocationProps = {
  createLocation: (data: createLocationPayload) => Promise<ApiReturnType<{}>>;
};
export type CreateVendorProps = {
  createVendor: (data: createVendorPayload) => Promise<ApiReturnType<{}>>;
};

export type VehicleModelProps = {
  vehicleModels: VehicleModelPayload[];
  getVehicleModels: (
    payload: getVehicleModelsPayload
  ) => Promise<ApiReturnType<VehicleModelPayload[]>>;
};
export type VehicleBrandProps = {
  vehicleBrands: VehicleBrandPayload[];
  getVehicleBrands: (
    payload: getVehicleBrandsPayload
  ) => Promise<ApiReturnType<VehicleBrandPayload[]>>;
};
export type TransportProps = {
  transports: TransportPayload[];
  getTransports: (
    payload: getTransportsPayload
  ) => Promise<ApiReturnType<TransportPayload[]>>;
};
export type LocationProps = {
  locations: LocationPayload[];
  getLocations: (
    payload: getLocationsPayload
  ) => Promise<ApiReturnType<LocationPayload[]>>;
};
export type VendorProps = {
  vendors: VendorPayload[];
  getVendors: (
    payload: getVendorsPayload
  ) => Promise<ApiReturnType<VendorPayload[]>>;
};

export type getOverviewPayload = {
  startDate: string;
  endDate: string;
};

export type createVehicleModelPayload = {
  model: string;
  vehicleBrandId: number;
};
export type createVehicleBrandPayload = {
  vehicleBrand: string;
};
export type createTransportPayload = {
  mode: string;
};
export type getVehicleModelsPayload = {
  search?: string;
};
export type getVehicleBrandsPayload = {
  search?: string;
};
export type getTransportsPayload = {
  search?: string;
};

export type createLocationPayload = {
  name: string;
};
export type getLocationsPayload = {
  search?: string;
};

export type createVendorPayload = {
  name: string;
};
export type getVendorsPayload = {
  search?: string;
};

export type AdminPanel = {
  loading: boolean;
  vendors: Vendor[];
  locations: Location[];
  transports: Transport[];
  vehicleBrands: VehicleBrandPayload[];
  overview: OverviewPayload;
};

export type AdminPanelStateProps = {
  vendors: Vendor[];
  transports: Transport[];
  locations: Location[];
};

export type AdminPanelDispatchProps = {
  createTransport: (
    data: createTransportPayload
  ) => Promise<ApiReturnType<createTransportResponse>>;
  getTransports: (
    payload: getTransportsPayload
  ) => Promise<ApiReturnType<TransportPayload[]>>;
  createLocation: (
    data: createLocationPayload
  ) => Promise<ApiReturnType<createLocationResponse>>;
  getLocations: (
    payload: getLocationsPayload
  ) => Promise<ApiReturnType<LocationPayload[]>>;
  createVendor: (
    data: createVendorPayload
  ) => Promise<ApiReturnType<createVendorResponse>>;
  getVendors: (
    payload: getVendorsPayload
  ) => Promise<ApiReturnType<VendorPayload[]>>;
};

export type AdminPanelProps = AdminPanelStateProps & AdminPanelDispatchProps;

export type createVendorResponse = {};
export type createLocationResponse = {};
export type createTransportResponse = {};
export type VehicleModelPayload = {
  id: number;
  model: string;
};
export type VehicleBrandPayload = {
  id: number;
  vehicleBrand: string;
};
export type VendorPayload = {
  id: number;
  name: string;
};
export type LocationPayload = {
  id: number;
  name: string;
};
export type TransportPayload = {
  id: number;
  mode: string;
};

export type OverviewPayload = {
  totalSales: string;
  profit: string;
  receivedQuotations: number;
  pendingQuotations: number;
  increaseInSale: number;
  increaseInProfits: number;
  increaseInQuotationReceived: number;
  increaseInPendingQuotations: number;
};

export type AdminDashboardProps = {
  loading: boolean;
  overview: OverviewPayload;
  getOverview: (
    data: getOverviewPayload
  ) => Promise<ApiReturnType<OverviewPayload>>;
};

type vehicleBrandDeleteInit = {
  type: typeof VEHICLE_BRAND_DELETE_INIT;
};
type vehicleBrandDeleteSuccess = {
  type: typeof VEHICLE_BRAND_DELETE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type vehicleBrandDeleteFail = {
  type: typeof VEHICLE_BRAND_DELETE_FAIL;
};
type vehicleBrandUpdateInit = {
  type: typeof VEHICLE_BRAND_UPDATE_INIT;
};
type vehicleBrandUpdateSuccess = {
  type: typeof VEHICLE_BRAND_UPDATE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type vehicleBrandUpdateFail = {
  type: typeof VEHICLE_BRAND_UPDATE_FAIL;
};
type vehicleBrandCreateInit = {
  type: typeof VEHICLE_BRAND_CREATE_INIT;
};
type vehicleBrandCreateSuccess = {
  type: typeof VEHICLE_BRAND_CREATE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type vehicleBrandCreateFail = {
  type: typeof VEHICLE_BRAND_CREATE_FAIL;
};
type vehicleBrandsFetchInit = {
  type: typeof VEHICLE_BRANDS_FETCH_INIT;
};
type vehicleBrandsFetchSuccess = {
  type: typeof VEHICLE_BRANDS_FETCH_SUCCESS;
  payload: ApiReturnType<VehicleBrandPayload[]>;
};
type vehicleBrandsFetchFail = {
  type: typeof VEHICLE_BRANDS_FETCH_FAIL;
};

type overviewFetchInit = {
  type: typeof OVERVIEW_FETCH_INIT;
};
type overviewFetchSuccess = {
  type: typeof OVERVIEW_FETCH_SUCCESS;
  payload: ApiReturnType<OverviewPayload[]>;
};
type overviewFetchFail = {
  type: typeof OVERVIEW_FETCH_FAIL;
};

type transportDeleteInit = {
  type: typeof TRANSPORT_DELETE_INIT;
};
type transportDeleteSuccess = {
  type: typeof TRANSPORT_DELETE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type transportDeleteFail = {
  type: typeof TRANSPORT_DELETE_FAIL;
};
type transportUpdateInit = {
  type: typeof TRANSPORT_UPDATE_INIT;
};
type transportUpdateSuccess = {
  type: typeof TRANSPORT_UPDATE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type transportUpdateFail = {
  type: typeof TRANSPORT_UPDATE_FAIL;
};
type transportCreateInit = {
  type: typeof TRANSPORT_CREATE_INIT;
};
type transportCreateSuccess = {
  type: typeof TRANSPORT_CREATE_SUCCESS;
  payload: ApiReturnType<createTransportResponse>;
};
type transportCreateFail = {
  type: typeof TRANSPORT_CREATE_FAIL;
};
type transportsFetchInit = {
  type: typeof TRANSPORTS_FETCH_INIT;
};
type transportsFetchSuccess = {
  type: typeof TRANSPORTS_FETCH_SUCCESS;
  payload: ApiReturnType<TransportPayload[]>;
};
type transportsFetchFail = {
  type: typeof TRANSPORTS_FETCH_FAIL;
};

type locationDeleteInit = {
  type: typeof LOCATION_DELETE_INIT;
};
type locationDeleteSuccess = {
  type: typeof LOCATION_DELETE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type locationDeleteFail = {
  type: typeof LOCATION_DELETE_FAIL;
};
type locationUpdateInit = {
  type: typeof LOCATION_UPDATE_INIT;
};
type locationUpdateSuccess = {
  type: typeof LOCATION_UPDATE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type locationUpdateFail = {
  type: typeof LOCATION_UPDATE_FAIL;
};
type locationCreateInit = {
  type: typeof LOCATION_CREATE_INIT;
};
type locationCreateSuccess = {
  type: typeof LOCATION_CREATE_SUCCESS;
  payload: ApiReturnType<createLocationResponse>;
};
type locationCreateFail = {
  type: typeof LOCATION_CREATE_FAIL;
};
type locationsFetchInit = {
  type: typeof LOCATIONS_FETCH_INIT;
};
type locationsFetchSuccess = {
  type: typeof LOCATIONS_FETCH_SUCCESS;
  payload: ApiReturnType<LocationPayload[]>;
};
type locationsFetchFail = {
  type: typeof LOCATIONS_FETCH_FAIL;
};

type vendorDeleteInit = {
  type: typeof VENDOR_DELETE_INIT;
};
type vendorDeleteSuccess = {
  type: typeof VENDOR_DELETE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type vendorDeleteFail = {
  type: typeof VENDOR_DELETE_FAIL;
};
type vendorUpdateInit = {
  type: typeof VENDOR_UPDATE_INIT;
};
type vendorUpdateSuccess = {
  type: typeof VENDOR_UPDATE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type vendorUpdateFail = {
  type: typeof VENDOR_UPDATE_FAIL;
};
type vendorCreateInit = {
  type: typeof VENDOR_CREATE_INIT;
};
type vendorCreateSuccess = {
  type: typeof VENDOR_CREATE_SUCCESS;
  payload: ApiReturnType<createVendorResponse>;
};
type vendorCreateFail = {
  type: typeof VENDOR_CREATE_FAIL;
};
type vendorsFetchInit = {
  type: typeof VENDORS_FETCH_INIT;
};
type vendorsFetchSuccess = {
  type: typeof VENDORS_FETCH_SUCCESS;
  payload: ApiReturnType<VendorPayload[]>;
};
type vendorsFetchFail = {
  type: typeof VENDORS_FETCH_FAIL;
};

export type AdminPanelActionTypes =
  | overviewFetchInit
  | overviewFetchSuccess
  | overviewFetchFail
  | vehicleBrandDeleteInit
  | vehicleBrandDeleteSuccess
  | vehicleBrandDeleteFail
  | vehicleBrandUpdateInit
  | vehicleBrandUpdateSuccess
  | vehicleBrandUpdateFail
  | vehicleBrandCreateInit
  | vehicleBrandCreateSuccess
  | vehicleBrandCreateFail
  | vehicleBrandsFetchInit
  | vehicleBrandsFetchSuccess
  | vehicleBrandsFetchFail
  | transportDeleteInit
  | transportDeleteSuccess
  | transportDeleteFail
  | transportUpdateInit
  | transportUpdateSuccess
  | transportUpdateFail
  | transportCreateInit
  | transportCreateSuccess
  | transportCreateFail
  | transportsFetchInit
  | transportsFetchSuccess
  | transportsFetchFail
  | locationDeleteInit
  | locationDeleteSuccess
  | locationDeleteFail
  | locationUpdateInit
  | locationUpdateSuccess
  | locationUpdateFail
  | locationCreateInit
  | locationCreateSuccess
  | locationCreateFail
  | locationsFetchInit
  | locationsFetchSuccess
  | locationsFetchFail
  | vendorDeleteInit
  | vendorDeleteSuccess
  | vendorDeleteFail
  | vendorUpdateInit
  | vendorUpdateSuccess
  | vendorUpdateFail
  | vendorCreateInit
  | vendorCreateSuccess
  | vendorCreateFail
  | vendorsFetchInit
  | vendorsFetchSuccess
  | vendorsFetchFail;
