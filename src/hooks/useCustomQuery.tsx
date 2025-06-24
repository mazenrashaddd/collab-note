import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axios.config";
import type { AxiosRequestConfig } from "axios";

interface IProps {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig<any>;
}

const useCustomQuery = ({ queryKey, url, config }: IProps) => {
  return useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const { status, data: resData } = await axiosInstance.get(url, config);
      return resData;
    },
  });
};

export default useCustomQuery;
