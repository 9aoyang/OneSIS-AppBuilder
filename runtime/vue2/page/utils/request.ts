import axios, { AxiosResponse } from 'axios';

const service = axios.create({
  withCredentials: true,
  timeout: 7000,
});

const requestHandler = function (config: Record<any, any>) {
  return config;
};

const responseHandler = function (response: AxiosResponse) {
  return response;
};

service.interceptors.request.use(requestHandler);
service.interceptors.response.use(responseHandler);

export default {
  install(Vue: any) {
    Vue.prototype.request = service;
  },
};
