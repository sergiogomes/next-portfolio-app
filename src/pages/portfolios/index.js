import { useEffect, useState } from "react";
import Link from "next/link";

import BaseLayout from "@/src/components/layouts/BaseLayout";
import BasePage from "@/src/components/BasePage";

// If I want to fetch data from server side
// export const getServerSideProps = async () => {
//   let posts = [];
//   let error = {};
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     posts = res.data;
//   } catch (e) {
//     error.title = "Unexpected error";
//     error.message = e;
//   }
//   return { props: { posts: posts.slice(0, 10), error: error } };
// };

const Portfolios = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({});

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
    }
    getPosts();
  }, []);

  const renderError = (error) => {
    return (
      error.message && (
        <>
          <h4>{error.title}</h4>
          <p>{error.message}</p>
        </>
      )
    );
  };

  const renderPosts = (posts) => {
    return (
      posts &&
      posts.map((post) => (
        <li key={post.id}>
          <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))
    );
  };

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolios Page</h1>
        <ul>{renderPosts(posts)}</ul>
        <div>{renderError(error)}</div>
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
