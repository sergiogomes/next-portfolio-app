import axios from "axios";
import Link from "next/link";

import BaseLayout from "../components/layouts/BaseLayout";

export const getServerSideProps = async () => {
  let posts = [];
  let error = {};
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    error.title = "Unexpected error";
    error.message = e;
  }
  return { props: { posts: posts.slice(0, 10), error: error } };
};

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
        <Link href={`/portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))
  );
};

const Portfolios = ({ posts, error }) => {
  return (
    <BaseLayout>
      <h1>I am Portfolios Page</h1>
      <ul>{renderPosts(posts)}</ul>
      <div>{renderError(error)}</div>
    </BaseLayout>
  );
};

export default Portfolios;
