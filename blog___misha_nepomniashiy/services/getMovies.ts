export const getAllMovies = async (apiKey: string | number, query: string) => {
  console.log("------------------------", apiKey, query);

  const response = await fetch(`https://omdbapi.com/?apikey=${apiKey}`);

  if (!response.ok) throw new Error("Unable to fetch movies.");

  return response.json();
};
