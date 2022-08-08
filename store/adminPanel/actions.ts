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
  updateVendorPayload,
  VENDOR_DELETE_FAIL,
  VENDOR_DELETE_INIT,
  VENDOR_DELETE_SUCCESS,
  VENDOR_UPDATE_FAIL,
  VENDOR_UPDATE_INIT,
  VENDOR_UPDATE_SUCCESS,
  deleteVendorPayload,
  deleteLocationPayload,
  LOCATION_DELETE_FAIL,
  LOCATION_DELETE_INIT,
  LOCATION_DELETE_SUCCESS,
  LOCATION_UPDATE_FAIL,
  LOCATION_UPDATE_INIT,
  LOCATION_UPDATE_SUCCESS,
  updateLocationPayload,
  deleteTransportPayload,
  TRANSPORT_DELETE_FAIL,
  TRANSPORT_DELETE_INIT,
  TRANSPORT_DELETE_SUCCESS,
  TRANSPORT_UPDATE_FAIL,
  TRANSPORT_UPDATE_INIT,
  TRANSPORT_UPDATE_SUCCESS,
  updateTransportPayload,
  createVehicleBrandPayload,
  deleteVehicleBrandPayload,
  getVehicleBrandsPayload,
  updateVehicleBrandPayload,
  VEHICLE_BRANDS_FETCH_FAIL,
  VEHICLE_BRANDS_FETCH_INIT,
  VEHICLE_BRANDS_FETCH_SUCCESS,
  VEHICLE_BRAND_CREATE_FAIL,
  VEHICLE_BRAND_CREATE_INIT,
  VEHICLE_BRAND_CREATE_SUCCESS,
  VEHICLE_BRAND_DELETE_FAIL,
  VEHICLE_BRAND_DELETE_INIT,
  VEHICLE_BRAND_DELETE_SUCCESS,
  VEHICLE_BRAND_UPDATE_FAIL,
  VEHICLE_BRAND_UPDATE_INIT,
  VEHICLE_BRAND_UPDATE_SUCCESS,
  getVehicleModelsPayload,
  VEHICLE_MODELS_FETCH_FAIL,
  VEHICLE_MODELS_FETCH_INIT,
  VEHICLE_MODELS_FETCH_SUCCESS,
  VEHICLE_MODEL_CREATE_FAIL,
  VEHICLE_MODEL_CREATE_INIT,
  VEHICLE_MODEL_CREATE_SUCCESS,
  VEHICLE_MODEL_DELETE_FAIL,
  VEHICLE_MODEL_DELETE_INIT,
  VEHICLE_MODEL_DELETE_SUCCESS,
  VEHICLE_MODEL_UPDATE_FAIL,
  VEHICLE_MODEL_UPDATE_INIT,
  VEHICLE_MODEL_UPDATE_SUCCESS,
  deleteVehicleModelPayload,
  updateVehicleModelPayload,
  createVehicleModelPayload,
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

export const deleteVehicleModel = async (data: deleteVehicleModelPayload) => {
  const { VEHICLE_MODEL } = API_END_POINTS;
  const { id } = data;
  const pathname = VEHICLE_MODEL;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: VEHICLE_MODEL_DELETE_INIT,
      successType: VEHICLE_MODEL_DELETE_SUCCESS,
      failureType: VEHICLE_MODEL_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateVehicleModel = async ({
  id,
  ...data
}: updateVehicleModelPayload) => {
  const { VEHICLE_MODEL } = API_END_POINTS;
  const pathname = VEHICLE_MODEL;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: VEHICLE_MODEL_UPDATE_INIT,
      successType: VEHICLE_MODEL_UPDATE_SUCCESS,
      failureType: VEHICLE_MODEL_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createVehicleModel = async (data: createVehicleModelPayload) => {
  const { VEHICLE_MODEL } = API_END_POINTS;
  const pathname = VEHICLE_MODEL;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: VEHICLE_MODEL_CREATE_INIT,
      successType: VEHICLE_MODEL_CREATE_SUCCESS,
      failureType: VEHICLE_MODEL_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getVehicleModels = async (payload: getVehicleModelsPayload) => {
  const { VEHICLE_MODEL, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${VEHICLE_MODEL}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: VEHICLE_MODELS_FETCH_INIT,
      successType: VEHICLE_MODELS_FETCH_SUCCESS,
      failureType: VEHICLE_MODELS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const deleteVehicleBrand = async (data: deleteVehicleBrandPayload) => {
  const { VEHICLE_BRAND } = API_END_POINTS;
  const { id } = data;
  const pathname = VEHICLE_BRAND;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: VEHICLE_BRAND_DELETE_INIT,
      successType: VEHICLE_BRAND_DELETE_SUCCESS,
      failureType: VEHICLE_BRAND_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateVehicleBrand = async ({
  id,
  ...data
}: updateVehicleBrandPayload) => {
  const { VEHICLE_BRAND } = API_END_POINTS;
  const pathname = VEHICLE_BRAND;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: VEHICLE_BRAND_UPDATE_INIT,
      successType: VEHICLE_BRAND_UPDATE_SUCCESS,
      failureType: VEHICLE_BRAND_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createVehicleBrand = async (data: createVehicleBrandPayload) => {
  const { VEHICLE_BRAND } = API_END_POINTS;
  const pathname = VEHICLE_BRAND;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: VEHICLE_BRAND_CREATE_INIT,
      successType: VEHICLE_BRAND_CREATE_SUCCESS,
      failureType: VEHICLE_BRAND_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getVehicleBrands = async (payload: getVehicleBrandsPayload) => {
  const { VEHICLE_BRAND, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${VEHICLE_BRAND}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: VEHICLE_BRANDS_FETCH_INIT,
      successType: VEHICLE_BRANDS_FETCH_SUCCESS,
      failureType: VEHICLE_BRANDS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const deleteTransport = async (data: deleteTransportPayload) => {
  const { TRANSPORT } = API_END_POINTS;
  const { id } = data;
  const pathname = TRANSPORT;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: TRANSPORT_DELETE_INIT,
      successType: TRANSPORT_DELETE_SUCCESS,
      failureType: TRANSPORT_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateTransport = async ({
  id,
  ...data
}: updateTransportPayload) => {
  const { TRANSPORT } = API_END_POINTS;
  const pathname = TRANSPORT;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: TRANSPORT_UPDATE_INIT,
      successType: TRANSPORT_UPDATE_SUCCESS,
      failureType: TRANSPORT_UPDATE_FAIL,
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

export const deleteLocation = async (data: deleteLocationPayload) => {
  const { LOCATION } = API_END_POINTS;
  const { id } = data;
  const pathname = LOCATION;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: LOCATION_DELETE_INIT,
      successType: LOCATION_DELETE_SUCCESS,
      failureType: LOCATION_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateLocation = async ({
  id,
  ...data
}: updateLocationPayload) => {
  const { LOCATION } = API_END_POINTS;
  const pathname = LOCATION;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: LOCATION_UPDATE_INIT,
      successType: LOCATION_UPDATE_SUCCESS,
      failureType: LOCATION_UPDATE_FAIL,
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

export const deleteVendor = async (data: deleteVendorPayload) => {
  const { VENDOR } = API_END_POINTS;
  const { id } = data;
  const pathname = VENDOR;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: VENDOR_DELETE_INIT,
      successType: VENDOR_DELETE_SUCCESS,
      failureType: VENDOR_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateVendor = async ({ id, ...data }: updateVendorPayload) => {
  const { VENDOR } = API_END_POINTS;
  const pathname = VENDOR;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: VENDOR_UPDATE_INIT,
      successType: VENDOR_UPDATE_SUCCESS,
      failureType: VENDOR_UPDATE_FAIL,
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
