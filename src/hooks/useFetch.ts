import { useEffect, useState } from "react";

export const useFetch = <T>({
  url,
  bypass,
}: {
  url: string;
  bypass?: boolean;
}) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url || bypass) return;
    (async function () {
      const controller = new AbortController();
      const signal = controller.signal;

      try {
        setIsLoading(true);
        const response = await fetch(url, { signal });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
      return () => controller?.abort();
    })();
  }, [url]);
  return { data, isLoading, isError, error };
};
