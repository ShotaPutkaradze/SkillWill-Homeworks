import { useState } from "react";
import { API_KEY } from "../config";

const useSendRequest = ({ url, method }) => {
  const [isLoading, setIsLoading] = useState("");

  const sendRequest = (body) => {};
  setIsLoading(true);

  fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: method !== "GET" ? JSON.stringify({ body }) : undefined,
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
};

export default useSendRequest;
