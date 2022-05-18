const API_END_POINTS = {
  REGISTER: "/auth/register",
  AUTH: "/auth/log-in",
  INITIATE_VERIFICATION: "/sms/initiate-verification",
  VALIDATE_VERIFICATION_CODE: "/sms/check-verification-code",
  GENERATE_OTP: "/auth/otp/generate",
  VALIDATE_OTP: "/auth/otp/validate",
  USERS: "/users",
  REFRESH: "/refresh",
  STOCKS: "/stocks",
  BRAND: "/brand",
  PATTERN: "/pattern",
  TYRE_DETAIL: "/tyre-detail",
  TYRE_SIZE: "/tyre-size",
  VENDOR: "/vendor",
  TRANSPORT: "/transport",
  LOCATION: "/location",
  SEARCH: "search",
};

enum API_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export { API_END_POINTS, API_METHODS };