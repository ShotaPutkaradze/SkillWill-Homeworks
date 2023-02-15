import { useState } from "react";
import { API_KEY } from "../config";

const useSendRequest = ({ url, method }) => {
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (body, rewriteRequestUrl) => {
    setIsLoading(true);
    const response = await fetch(rewriteRequestUrl || url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: method !== "GET" ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();
    setIsLoading(false);

    return data;
  };
  return { sendRequest, isLoading };
};

export default useSendRequest;
