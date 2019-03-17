import axios from "axios";

export var xrayApi = axios.create({
  baseURL: process.env.REACT_APP_XRAY_API,
  crossDomain: true,
  timeout: 2000000,
  headers: { "Content-Type": "application/json" }
});
