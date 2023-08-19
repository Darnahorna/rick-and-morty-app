const baseUrl = "https://rickandmortyapi.com/api/";

export const getResponse = (resource: string, method: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(baseUrl + resource, {
        method: method, // Or 'GET', 'PUT', 'DELETE' based on your API method
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: [Object] = await response.json();
      if (response.ok) {
        resolve(data); // Resolve the promise with the data
      } else {
        reject(data.error || "Something went wrong"); // Reject the promise with an error message
      }
    } catch (error) {
      console.error("Error:", error);
      reject("Something went wrong"); // Reject the promise with a generic error message
    }
  });
};
