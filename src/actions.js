export const logout = (state) => ({
  ...state,
  accessToken: null,
  isAuthenticated: false,
});
