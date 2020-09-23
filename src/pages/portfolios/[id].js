import axios from "axios";

import BaseLayout from "../../components/layouts/BaseLayout";

export const getServerSideProps = async ({ params }) => {
  let post = [];
  let error = {};
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    post = res.data;
  } catch (e) {
    error.title = "Unexpected error";
    error.message = e;
  }
  return { props: { post: post, error: error } };
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

const renderPost = (post) => {
  return (
    post && (
      <>
        <h1>{post.title}</h1>
        <p>BODY: {post.body}</p>
        <p>ID: {post.id}</p>
      </>
    )
  );
};

const Portfolio = ({ post, error }) => {
  return (
    <BaseLayout>
      <ul>{renderPost(post)}</ul>
      <div>{renderError(error)}</div>
    </BaseLayout>
  );
};

export default Portfolio;
