import axios from "axios";
export function jwtInterceptor(accessToken) {
  axios.interceptors.request.use((request) => {
    // add auth header with jwt if account is logged in and request is to the api url
    if (accessToken) {
      request.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      delete request.headers.Authorization;
    }
    return request;
  });
}
