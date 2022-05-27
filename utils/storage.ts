/**
 * @function storage
 * @description Wrapper function for localStorage to wrap the complexity.
 * @returns {{
 *      getAccessToken: (),
 *      setAccessToken(value: string)
 *      getRefreshToken: (),
 *      setRefreshToken(value: string)
 *      clear()
 * }}
 */
const storage = () => {
  let accessToken: string | undefined;
  let refreshToken: string | undefined;
  return {
    getAccessToken() {
      try {
        if (!accessToken) {
          accessToken = JSON.parse(localStorage.getItem("accessToken") ?? "");
        }
        return accessToken;
      } catch (e) {
        return null;
      }
    },
    setAccessToken(value: string) {
      accessToken = value;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
    },
    getRefreshToken() {
      try {
        if (!refreshToken) {
          refreshToken = JSON.parse(localStorage.getItem("refreshToken") ?? "");
        }
        return refreshToken;
      } catch (e) {
        return null;
      }
    },
    setRefreshToken(value: string) {
      refreshToken = value;
      localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    },
    clear() {
      accessToken = undefined;
      refreshToken = undefined;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  };
};

export default storage;
