export const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getAllPostsFromLocalAPI = async () => {
  const response = await fetch("/api/posts");

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPostsBySearchFromLocalAPI = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
