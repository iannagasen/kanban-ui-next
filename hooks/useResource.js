import { useEffect, useState } from "react";
import axios from "axios";

export default function useResource(resourceUrl, isAvaialableLocally = false) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    // IIFE - Immediately Invoke Function Expressions, syntax (() => {})()
    (async () => {
      const response = await axios.get(resourceUrl);
      const responseData = response.data;
      console.log(responseData);
      setResponse(responseData);
    })();
  }, [resourceUrl]);

  return response;
}
