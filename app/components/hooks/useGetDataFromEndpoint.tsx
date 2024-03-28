"use client";

import { useEffect, useState } from "react";

interface UseGetDataFromEndpointProps {
  url: string;
}
interface UseGetDataFromEndpointReturn<T> {
  data?: T;
  loading: boolean;
  error: any;
}

/**
 * This is a custom hook to get data from an endpoint
 * @param url - The URL of the endpoint being requested
 * @returns - an object of data, loading and error
 */
export const useGetDataFromEndpoint = <T,>({
  url,
}: UseGetDataFromEndpointProps): UseGetDataFromEndpointReturn<T> => {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<any | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await window.fetch(url, {
          method: "GET",
        });

        const data = await response.json();
        setIsLoading(false);
        setData(data);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setError(error);
      }
    };
    getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
