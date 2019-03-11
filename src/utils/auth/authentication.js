const tokenKey = "userToken";
const userKey = "username";
const emailKey = "email";
const userId = "userId";
const saveUserToken = token => window.localStorage.setItem(tokenKey, token);
const getUserToken = () => window.localStorage.getItem(tokenKey);
const removeUserToken = () => window.localStorage.removeItem(tokenKey);

const saveUsername = username => window.localStorage.setItem(userKey, username);
const getUsername = () => window.localStorage.getItem(userKey);
const removeUsername = () => window.localStorage.removeItem(userKey);

const saveUserId = user_id => window.localStorage.setItem(userId, user_id);
const getUserId = user_id => window.localStorage.getItem(userId);
const removeUserId = user_id => window.localStorage.removeItem(userId);

const saveEmail = email => window.localStorage.setItem(emailKey, email);

export default {
  saveUserToken,
  getUserToken,
  removeUserToken,
  saveUsername,
  getUsername,
  removeUsername,
  saveEmail,
  saveUserId,
  getUserId,
  removeUserId
};
