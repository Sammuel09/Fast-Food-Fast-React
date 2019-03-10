const tokenKey = 'userToken';
const userKey = 'username';
const emailKey = 'email';
const saveUserToken = token => window.localStorage.setItem(tokenKey, token);
const getUserToken = () => window.localStorage.getItem(tokenKey);
const removeUserToken = () => window.localStorage.removeItem(tokenKey);

const saveUsername = username => window.localStorage.setItem(userKey, username);
const getUsername = () => window.localStorage.getItem(userKey);
const saveEmail = email => window.localStorage.setItem(emailKey, email);

export default {
  saveUserToken,
  getUserToken,
  removeUserToken,
  saveUsername,
  getUsername,
  saveEmail
};
