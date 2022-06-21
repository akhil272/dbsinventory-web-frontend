import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";
import {
  createVendorPayload,
  VENDOR_CREATE_INIT,
  VENDOR_CREATE_SUCCESS,
  VENDOR_CREATE_FAIL,
  getVendorsPayload,
  VENDORS_FETCH_INIT,
  VENDORS_FETCH_SUCCESS,
  VENDORS_FETCH_FAIL,
  createLocationPayload,
  getLocationsPayload,
  LOCATIONS_FETCH_FAIL,
  LOCATIONS_FETCH_INIT,
  LOCATIONS_FETCH_SUCCESS,
  LOCATION_CREATE_FAIL,
  LOCATION_CREATE_INIT,
  LOCATION_CREATE_SUCCESS,
  createTransportPayload,
  getTransportsPayload,
  TRANSPORTS_FETCH_FAIL,
  TRANSPORTS_FETCH_INIT,
  TRANSPORTS_FETCH_SUCCESS,
  TRANSPORT_CREATE_FAIL,
  TRANSPORT_CREATE_INIT,
  TRANSPORT_CREATE_SUCCESS,
  getOverviewPayload,
  OVERVIEW_FETCH_FAIL,
  OVERVIEW_FETCH_INIT,
  OVERVIEW_FETCH_SUCCESS,
} from "./types";

export const getOverview = async (data: getOverviewPayload) => {
  const { MANAGE_QUOTATIONS, ADMIN, OVERVIEW } = API_END_POINTS;
  const pathname = `${MANAGE_QUOTATIONS}${ADMIN}${OVERVIEW}`;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: OVERVIEW_FETCH_INIT,
      successType: OVERVIEW_FETCH_SUCCESS,
      failureType: OVERVIEW_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createTransport = async (data: createTransportPayload) => {
  const { TRANSPORT } = API_END_POINTS;
  const pathname = TRANSPORT;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: TRANSPORT_CREATE_INIT,
      successType: TRANSPORT_CREATE_SUCCESS,
      failureType: TRANSPORT_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getTransports = async (payload: getTransportsPayload) => {
  const { TRANSPORT, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${TRANSPORT}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: TRANSPORTS_FETCH_INIT,
      successType: TRANSPORTS_FETCH_SUCCESS,
      failureType: TRANSPORTS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createLocation = async (data: createLocationPayload) => {
  const { LOCATION } = API_END_POINTS;
  const pathname = LOCATION;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: LOCATION_CREATE_INIT,
      successType: LOCATION_CREATE_SUCCESS,
      failureType: LOCATION_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getLocations = async (payload: getLocationsPayload) => {
  const { LOCATION, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${LOCATION}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: LOCATIONS_FETCH_INIT,
      successType: LOCATIONS_FETCH_SUCCESS,
      failureType: LOCATIONS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createVendor = async (data: createVendorPayload) => {
  const { VENDOR } = API_END_POINTS;
  const pathname = VENDOR;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: VENDOR_CREATE_INIT,
      successType: VENDOR_CREATE_SUCCESS,
      failureType: VENDOR_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getVendors = async (payload: getVendorsPayload) => {
  const { VENDOR, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${VENDOR}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: VENDORS_FETCH_INIT,
      successType: VENDORS_FETCH_SUCCESS,
      failureType: VENDORS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
