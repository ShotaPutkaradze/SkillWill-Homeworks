import { FC, useState } from "react";
import { API_KEY } from "../config";

type Props = {
  url: string;
  method: string;
};

export const useSendRequest: FC<Props> = ({ url, method }): any => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async (body: string, rewriteRequestUrl: string): object => {
    setIsLoading(true);
    const response = await fetch(rewriteRequestUrl || url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data: object = await response.json();
    setIsLoading(false);

    return data;
  };
  return { sendRequest, isLoading };
};
