import { useEffect } from "react";
import useGlobalState from "./useGlobalState";
import { useFetch } from "./useFetch";

export default function useRouteGlobalData<DataType>(apiUrl: string) {
  const { state, setState } = useGlobalState();
  const cachedRouteData = state[apiUrl];
  const hasCachedRouteData = Boolean(cachedRouteData);

  const { data, isLoading, error } = useFetch<DataType>({
    url: apiUrl,
    bypass: Boolean(cachedRouteData),
  });

  useEffect(() => {
    if (data && !hasCachedRouteData) {
      setState((prevState) => {
        return {
          ...prevState,
          [apiUrl]: data,
        };
      });
    }
  }, [data, hasCachedRouteData, apiUrl]);

  const _data = (hasCachedRouteData ? cachedRouteData : data) as DataType;

  return { data: _data, isLoading, error };
}
