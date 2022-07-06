
import jwt from "jwt-decode";

export function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
}

export function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken;
}

export function isLoggedIn() {
  const token = getToken();
  if (token) {
   try {
    const decode = jwt(token);
    console.log(decode)
   } catch (error) {
    return false;
   }
  }
  return true;
}