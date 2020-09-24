import { useEffect, useState } from "react";

export const useGetData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      if (res.status > 400) {
        const error = {
          title: "Unexpected error",
          message: `${res.status} - ${res.statusText}`,
        };
        setError(error);
      } else {
        const data = await res.json();
        setData(data);
        setError({});
      }
      setLoading(false);
    }
    url && fetchData();
  }, [url]);

  return { data, error, loading };
};
