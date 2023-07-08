import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      //Tips by default next have cashing, using revalidate we telling next.js how often we would like to refetch data
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}
interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
