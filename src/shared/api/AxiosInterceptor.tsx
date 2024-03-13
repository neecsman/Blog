import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import { AxiosError, AxiosResponse } from "axios";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { userActions } from "entities/User";

const AxiosInterceptor = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const resInterceptor = (res: AxiosResponse) => {
      return res;
    };
    const errInterceptor = (error: AxiosError) => {
      if (error?.response?.status === 401) {
        dispatch(userActions.logout());
        navigate("/");
      }
      return Promise.reject(error);
    };

    const interceptor = api.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => api.interceptors.response.eject(interceptor);
  }, []);

  return children;
};

export default AxiosInterceptor;
