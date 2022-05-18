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
  getBrandsPayload,
} from "./types";

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
