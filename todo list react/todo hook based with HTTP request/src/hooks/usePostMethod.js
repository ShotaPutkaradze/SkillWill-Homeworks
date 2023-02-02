import { useState } from "react";
import { API_KEY } from "../config";

const usePostMethod = ({ url, method }) => {
  const [isLoading, setIsLoading] = useState("");

  const sendPost = async (body) => {
    setIsLoading(true);

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: method !== "GET" ? JSON.stringify({ body }) : undefined,
    });

    const data = await response.json();
    setIsLoading(false);
    return data;
  };
  return { sendPost, isLoading };
};

export default usePostMethod;
