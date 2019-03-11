import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://sammie-fast-food-fast.herokuapp.com/api/v1"
});

const makeRequest = (url, options = { method: "GET" }) => {
  return apiInstance({
    url,
    method: options.method,
    data: options.body,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      "x-access-token": localStorage.getItem("userToken")
        ? localStorage.getItem("userToken")
        : ""
    }
  }).then(response => response.data);
};

export default makeRequest;
