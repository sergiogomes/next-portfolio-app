import { useEffect, useState } from "react";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const res = await fetch("/api/v1/posts");
      if (res.status > 400) {
        const error = {
          title: "Unexpected error",
          message: `${res.status} - ${res.statusText}`,
        };
        setError(error);
      } else {
        const data = await res.json();
        setPosts(data);
      }
      setLoading(false);
    }
    getPosts();
  }, []);

  return { posts, error, loading };
};
