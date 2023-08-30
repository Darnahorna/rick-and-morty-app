const baseUrl = "https://rickandmortyapi.com/api/";

export const getResponse = (
  resource: string,
  method: string,
  setData: (data: unknown) => void,
  setLoading: (isLoading: boolean) => void,
  setError: (error: string) => void
) => {
  fetch(baseUrl + resource, {
    method: method, // Or 'GET', 'PUT', 'DELETE' based on your API method
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
};
