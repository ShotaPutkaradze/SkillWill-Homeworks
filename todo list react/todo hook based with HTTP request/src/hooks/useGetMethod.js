import { useEffect, useState } from "react";
import { API_KEY } from "../config";

const useGetMethod = ({ url, method }) => {
  const [responseData, setResponseData] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
        console.log(data);
      })
      .catch((error) => {
        setResponseError(error);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, method]);
  return { responseData, responseError, isLoading };
};

export default useGetMethod;
