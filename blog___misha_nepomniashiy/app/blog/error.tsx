"use client";
//Info is required to use client component for error page

export default function ErrorPosts({ error }: { error: Error }) {
  return <h1>Ooops!!! {error.message}</h1>;
}
