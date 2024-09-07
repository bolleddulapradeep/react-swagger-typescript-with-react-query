/* TODO: if you have microservices you need to create a new instace for the host URL */

import { useMemo } from "react";
import Axios from "axios";

export const useCustomInstance = <T>(): ((
  config: any,
  options: any
) => Promise<T>) => {
  const axiosClient = useMemo(() => {
    const client = Axios.create();

    const fetching = (request: any) => {
      return Object.assign(request, {
        headers: {
          Authorization: "pradeep",
          [window.crypto.randomUUID()]: window.crypto.randomUUID(),
        },
      });
    };

    // TODO: ADD INTERSEPTORS
    client.interceptors.request.use(async (request) => {
      const req = await fetching(request);
      console.log("request ===> ", req);
      return req;
    });

    client.interceptors.response.use(
      async (response) => {
        return response;
      },
      (error) => {
        console.log("error ==> ", error);
      }
    );

    return client;
  }, []);

  return (config, options) =>
    axiosClient({
      baseURL: "http://aansserver-001-site4.etempurl.com",
      ...config,
      ...options,
    });
};
