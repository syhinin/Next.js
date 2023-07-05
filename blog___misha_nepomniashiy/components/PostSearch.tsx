import { getPostsBySearch, getPostsBySearchFromLocalAPI } from "@/services";
import { useState, FormEventHandler } from "react";

type Props = {
  onSearch: (value: any[]) => void;
};
export const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    //Info, current request based on local Next.js API we also could request data from third-party API using getPostsBySearch()
    const posts = await getPostsBySearchFromLocalAPI(search);

    onSearch(posts);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
