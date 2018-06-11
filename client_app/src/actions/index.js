export const loginUser = (username, password) => ({
  type: 'USER_LOGIN', username, password
});

export const loginUserDone = (authData) => ({
  type: 'LOGIN_USER_DONE', ...authData
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});