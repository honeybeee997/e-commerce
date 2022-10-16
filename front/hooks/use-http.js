import React, { useState } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (
    url,
    method = "GET",
    body = null,
    headers = { "content-type": "application/json" }
  ) => {
    try {
      setIsLoading(true);

      const response = await fetch(url, {
        method,
        body,
        headers,
      });

      const data = await response.json();

      setIsLoading(false);
      return data;
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  return { sendRequest, isLoading };
};
