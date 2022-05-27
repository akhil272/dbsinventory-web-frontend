import { ApiReturnType } from "@Store/api";
import { Vendor, Transport, Location } from "@Store/stocks/types";

export const TRANSPORT_CREATE_INIT = "TRANSPORT:CREATE:INIT";
export const TRANSPORT_CREATE_SUCCESS = "TRANSPORT:CREATE:SUCCESS";
export const TRANSPORT_CREATE_FAIL = "TRANSPORT:CREATE:FAIL";
export const TRANSPORTS_FETCH_INIT = "TRANSPORTS:FETCH:INIT";
export const TRANSPORTS_FETCH_SUCCESS = "TRANSPORTS:FETCH:SUCCESS";
export const TRANSPORTS_FETCH_FAIL = "TRANSPORTS:FETCH:FAIL";

export const LOCATION_CREATE_INIT = "LOCATION:CREATE:INIT";
export const LOCATION_CREATE_SUCCESS = "LOCATION:CREATE:SUCCESS";
export const LOCATION_CREATE_FAIL = "LOCATION:CREATE:FAIL";
export const LOCATIONS_FETCH_INIT = "LOCATIONS:FETCH:INIT";
export const LOCATIONS_FETCH_SUCCESS = "LOCATIONS:FETCH:SUCCESS";
export const LOCATIONS_FETCH_FAIL = "LOCATIONS:FETCH:FAIL";

export const VENDOR_CREATE_INIT = "VENDOR:CREATE:INIT";
export const VENDOR_CREATE_SUCCESS = "VENDOR:CREATE:SUCCESS";
export const VENDOR_CREATE_FAIL = "VENDOR:CREATE:FAIL";
export const VENDORS_FETCH_INIT = "VENDORS:FETCH:INIT";
export const VENDORS_FETCH_SUCCESS = "VENDORS:FETCH:SUCCESS";
export const VENDORS_FETCH_FAIL = "VENDORS:FETCH:FAIL";

export type createTransportPayload = {
  mode: string;
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
export type VendorPayload = Vendor[];
export type LocationPayload = Location[];
export type TransportPayload = Location[];

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
  | transportCreateInit
  | transportCreateSuccess
  | transportCreateFail
  | transportsFetchInit
  | transportsFetchSuccess
  | transportsFetchFail
  | locationCreateInit
  | locationCreateSuccess
  | locationCreateFail
  | locationsFetchInit
  | locationsFetchSuccess
  | locationsFetchFail
  | vendorCreateInit
  | vendorCreateSuccess
  | vendorCreateFail
  | vendorsFetchInit
  | vendorsFetchSuccess
  | vendorsFetchFail;
