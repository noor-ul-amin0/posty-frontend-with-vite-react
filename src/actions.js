export const logout = (state) => ({
  ...state,
  accessToken: null,
  isAuthenticated: false,
  user: null,
});
export const login = (state, payload) => ({
  ...state,
  accessToken: payload.accessToken,
  isAuthenticated: !!payload.accessToken,
  user: payload.user,
});
