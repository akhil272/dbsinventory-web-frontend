import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";
import {
  BRANDS_FETCH_FAIL,
  BRANDS_FETCH_INIT,
  BRANDS_FETCH_SUCCESS,
  BRAND_CREATE_FAIL,
  BRAND_CREATE_INIT,
  BRAND_CREATE_SUCCESS,
  BRAND_DELETE_FAIL,
  BRAND_DELETE_INIT,
  BRAND_DELETE_SUCCESS,
  BRAND_UPDATE_FAIL,
  BRAND_UPDATE_INIT,
  BRAND_UPDATE_SUCCESS,
  createBrandPayload,
  createLoadIndexPayload,
  createPatternPayload,
  createProductLinePayload,
  createSpeedRatingPayload,
  createTyreDetailPayload,
  createTyreDetailSizePayload,
  createTyreSizePayload,
  deleteBrandPayload,
  deletePatternPayload,
  getBrandsPayload,
  getLoadIndexesPayload,
  getPatternsPayload,
  getProductLinePayload,
  getSpeedRatingPayload,
  getTyreDetailsPayload,
  getTyreSizesPayload,
  LOAD_INDEXES_FETCH_FAIL,
  LOAD_INDEXES_FETCH_INIT,
  LOAD_INDEXES_FETCH_SUCCESS,
  LOAD_INDEX_CREATE_FAIL,
  LOAD_INDEX_CREATE_INIT,
  LOAD_INDEX_CREATE_SUCCESS,
  PATTERNS_FETCH_FAIL,
  PATTERNS_FETCH_INIT,
  PATTERNS_FETCH_SUCCESS,
  PATTERN_CREATE_FAIL,
  PATTERN_CREATE_INIT,
  PATTERN_CREATE_SUCCESS,
  PATTERN_DELETE_FAIL,
  PATTERN_DELETE_INIT,
  PATTERN_DELETE_SUCCESS,
  PATTERN_UPDATE_FAIL,
  PATTERN_UPDATE_INIT,
  PATTERN_UPDATE_SUCCESS,
  PRODUCT_LINES_FETCH_FAIL,
  PRODUCT_LINES_FETCH_INIT,
  PRODUCT_LINES_FETCH_SUCCESS,
  PRODUCT_LINE_CREATE_FAIL,
  PRODUCT_LINE_CREATE_INIT,
  PRODUCT_LINE_CREATE_SUCCESS,
  SPEED_RATINGS_FETCH_FAIL,
  SPEED_RATINGS_FETCH_INIT,
  SPEED_RATINGS_FETCH_SUCCESS,
  SPEED_RATING_CREATE_FAIL,
  SPEED_RATING_CREATE_INIT,
  SPEED_RATING_CREATE_SUCCESS,
  TYRE_DETAILS_FETCH_FAIL,
  TYRE_DETAILS_FETCH_INIT,
  TYRE_DETAILS_FETCH_SUCCESS,
  TYRE_DETAIL_CREATE_FAIL,
  TYRE_DETAIL_CREATE_INIT,
  TYRE_DETAIL_CREATE_SUCCESS,
  TYRE_DETAIL_SIZE_CREATE_FAIL,
  TYRE_DETAIL_SIZE_CREATE_INIT,
  TYRE_DETAIL_SIZE_CREATE_SUCCESS,
  TYRE_SIZES_FETCH_FAIL,
  TYRE_SIZES_FETCH_INIT,
  TYRE_SIZES_FETCH_SUCCESS,
  updateBrandPayload,
  updatePatternPayload,
} from "./types";

export const createProductLine = async (data: createProductLinePayload) => {
  const { PRODUCT_LINE } = API_END_POINTS;
  const pathname = PRODUCT_LINE;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: PRODUCT_LINE_CREATE_INIT,
      successType: PRODUCT_LINE_CREATE_SUCCESS,
      failureType: PRODUCT_LINE_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getProductLines = async (payload: getProductLinePayload) => {
  const { PRODUCT_LINE, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${PRODUCT_LINE}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: PRODUCT_LINES_FETCH_INIT,
      successType: PRODUCT_LINES_FETCH_SUCCESS,
      failureType: PRODUCT_LINES_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createLoadIndex = async (data: createLoadIndexPayload) => {
  const { LOAD_INDEX } = API_END_POINTS;
  const pathname = LOAD_INDEX;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: LOAD_INDEX_CREATE_INIT,
      successType: LOAD_INDEX_CREATE_SUCCESS,
      failureType: LOAD_INDEX_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getLoadIndexes = async (payload: getLoadIndexesPayload) => {
  const { LOAD_INDEX, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${LOAD_INDEX}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: LOAD_INDEXES_FETCH_INIT,
      successType: LOAD_INDEXES_FETCH_SUCCESS,
      failureType: LOAD_INDEXES_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createSpeedRating = async (data: createSpeedRatingPayload) => {
  const { SPEED_RATING } = API_END_POINTS;
  const pathname = SPEED_RATING;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: SPEED_RATING_CREATE_INIT,
      successType: SPEED_RATING_CREATE_SUCCESS,
      failureType: SPEED_RATING_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getSpeedRatings = async (payload: getSpeedRatingPayload) => {
  const { SPEED_RATING, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${SPEED_RATING}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: SPEED_RATINGS_FETCH_INIT,
      successType: SPEED_RATINGS_FETCH_SUCCESS,
      failureType: SPEED_RATINGS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createTyreDetailSize = async (
  data: createTyreDetailSizePayload
) => {
  const { TYRE_DETAIL, CREATE } = API_END_POINTS;
  const pathname = `${TYRE_DETAIL}${CREATE}`;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: TYRE_DETAIL_SIZE_CREATE_INIT,
      successType: TYRE_DETAIL_SIZE_CREATE_SUCCESS,
      failureType: TYRE_DETAIL_SIZE_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
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

export const deletePattern = async (data: deletePatternPayload) => {
  const { PATTERN } = API_END_POINTS;
  const { id } = data;
  const pathname = PATTERN;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: PATTERN_DELETE_INIT,
      successType: PATTERN_DELETE_SUCCESS,
      failureType: PATTERN_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updatePattern = async ({ id, ...data }: updatePatternPayload) => {
  const { PATTERN } = API_END_POINTS;
  const pathname = PATTERN;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: PATTERN_UPDATE_INIT,
      successType: PATTERN_UPDATE_SUCCESS,
      failureType: PATTERN_UPDATE_FAIL,
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

export const getPatterns = async (payload: getPatternsPayload) => {
  const { PATTERN, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${PATTERN}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: PATTERNS_FETCH_INIT,
      successType: PATTERNS_FETCH_SUCCESS,
      failureType: PATTERNS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const deleteBrand = async (data: deleteBrandPayload) => {
  const { BRAND } = API_END_POINTS;
  const { id } = data;
  const pathname = BRAND;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: BRAND_DELETE_INIT,
      successType: BRAND_DELETE_SUCCESS,
      failureType: BRAND_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateBrand = async ({ id, ...data }: updateBrandPayload) => {
  const { BRAND } = API_END_POINTS;
  const pathname = BRAND;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: BRAND_UPDATE_INIT,
      successType: BRAND_UPDATE_SUCCESS,
      failureType: BRAND_UPDATE_FAIL,
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
