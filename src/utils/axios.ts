/* eslint-disable import/no-cycle */
import { notification } from 'antd';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const globalAny: any = global;

export const codeMessage: { [status: number | string]: string } = {
  200: 'The server successfully returned the requested data. Validating response data...',
  201: 'Create or modify data successfully',
  202: 'A request has entered the background queue (asynchronous task)',
  204: 'The data was deleted successfully',
  400: 'The request was sent with an error. The server did not perform any operations to create or modify data',
  401: 'The user does not have permission (token, username, password is incorrect)',
  403: 'User is authorized, but access is forbidden',
  404: 'The request sent is for a record that does not exist and the server is not operating',
  406: 'Not Acceptable',
  410: 'The requested resource is permanently deleted and will not be obtained again',
  422: 'When creating an object, a validation error occurred',
  500: 'The server has an error. Please check the server',
  502: 'Gateway error',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained',
  504: 'The gateway timed out',
};

export const axiosRequestClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const axiosRequestServer = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const requestServer = async (url: string, { params, ...options }: AxiosRequestConfig, _req: NextApiRequest, _res: NextApiResponse) => {
  try {
    const result: AxiosResponse = await axiosRequestServer({
      method: 'GET',
      url,
      baseURL: process.env.API_URL,
      timeout: 1000 * 5,
      ...options,
      params: {
        api_key: process.env.API_KEY,
        ...params,
      },
    });
    return result;
  } catch (err) {
    const { response } = err as AxiosError;
    if (response && response.status) {
      const errorText = codeMessage[response.status];
      if (globalAny.document) {
        notification.error({
          message: `Error ${response.status}:`,
          description: errorText,
        });
      }
    }
    return response;
  }
};

export const requestClient = async (url: string, options: AxiosRequestConfig = {}) => {
  try {
    const res: AxiosResponse = await axiosRequestClient({
      method: 'GET',
      url,
      baseURL: '',
      ...options,
    });

    return res.data;
  } catch (err) {
    const { data, status } = err;
    if (status && data) {
      const errorText = data?.message || codeMessage[status];
      notification.error({
        message: `Error ${data.status}:`,
        description: errorText,
      });
    }
    throw err;
  }
};

axiosRequestClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response);
  }
);
