import { useCallback, useEffect, useState } from "react";
import { API_KEY } from "../config";

const useFetchData = ({ url, method }) => {
  const [responseData, setResponseData] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(() => {
    setIsLoading(true);

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("response error");
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        setResponseError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      setResponseData(null);
      setResponseError(null);
      setIsLoading(false);
    };
  }, [url, method]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return { responseData, responseError, isLoading, resendRequest: sendRequest };
};

export default useFetchData;
