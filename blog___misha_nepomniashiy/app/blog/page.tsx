"use client";

import { Posts, PostSearch } from "@/components";
import { getAllPosts, getAllPostsFromLocalAPI } from "@/services";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Info, current request based on local Next.js API  we also could request data from third-party API using getAllPosts()
    getAllPostsFromLocalAPI()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />

      {loading ? <h3> Loading... </h3> : <Posts posts={posts} />}
    </>
  );
}
