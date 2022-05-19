import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";
import {
  BRANDS_FETCH_FAIL,
  BRANDS_FETCH_INIT,
  BRANDS_FETCH_SUCCESS,
  BRAND_CREATE_FAIL,
  BRAND_CREATE_INIT,
  BRAND_CREATE_SUCCESS,
  createBrandPayload,
  createPatternPayload,
  createTyreDetailPayload,
  createTyreSizePayload,
  getBrandsPayload,
  getTyreDetailsPayload,
  getTyreSizesPayload,
  PATTERN_CREATE_FAIL,
  PATTERN_CREATE_INIT,
  PATTERN_CREATE_SUCCESS,
  TYRE_DETAILS_FETCH_FAIL,
  TYRE_DETAILS_FETCH_INIT,
  TYRE_DETAILS_FETCH_SUCCESS,
  TYRE_DETAIL_CREATE_FAIL,
  TYRE_DETAIL_CREATE_INIT,
  TYRE_DETAIL_CREATE_SUCCESS,
  TYRE_SIZES_FETCH_FAIL,
  TYRE_SIZES_FETCH_INIT,
  TYRE_SIZES_FETCH_SUCCESS,
} from "./types";

export const createTyreDetail = async (data: createTyreDetailPayload) => {
  const { TYRE_DETAIL } = API_END_POINTS;
  const pathname = TYRE_DETAIL;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: TYRE_DETAIL_CREATE_INIT,
      successType: TYRE_DETAIL_CREATE_SUCCESS,
      failureType: TYRE_DETAIL_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getTyreDetails = async (payload: getTyreDetailsPayload) => {
  const { TYRE_DETAIL, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${TYRE_DETAIL}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: TYRE_DETAILS_FETCH_INIT,
      successType: TYRE_DETAILS_FETCH_SUCCESS,
      failureType: TYRE_DETAILS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createTyreSize = async (data: createTyreSizePayload) => {
  const { TYRE_SIZE } = API_END_POINTS;
  const pathname = TYRE_SIZE;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: PATTERN_CREATE_INIT,
      successType: PATTERN_CREATE_SUCCESS,
      failureType: PATTERN_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getTyreSizes = async (payload: getTyreSizesPayload) => {
  const { TYRE_SIZE, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${TYRE_SIZE}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: TYRE_SIZES_FETCH_INIT,
      successType: TYRE_SIZES_FETCH_SUCCESS,
      failureType: TYRE_SIZES_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createPattern = async (data: createPatternPayload) => {
  const { PATTERN } = API_END_POINTS;
  const pathname = PATTERN;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: PATTERN_CREATE_INIT,
      successType: PATTERN_CREATE_SUCCESS,
      failureType: PATTERN_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createBrand = async (data: createBrandPayload) => {
  const { BRAND } = API_END_POINTS;
  const pathname = BRAND;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: BRAND_CREATE_INIT,
      successType: BRAND_CREATE_SUCCESS,
      failureType: BRAND_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getBrands = async (payload: getBrandsPayload) => {
  const { BRAND, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${BRAND}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: BRANDS_FETCH_INIT,
      successType: BRANDS_FETCH_SUCCESS,
      failureType: BRANDS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
