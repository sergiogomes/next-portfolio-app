import Link from "next/link";

import BaseLayout from "@/src/components/layouts/BaseLayout";
import BasePage from "@/src/components/BasePage";
import { useGetData } from "@/actions";

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
  const { data, error, loading } = useGetData("/api/v1/posts");

  const renderLoading = (loading) => {
    return (
      loading && (
        <div className="d-flex justify-content-center">
          <button className="btn btn-warning" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ml-2">Loading posts...</span>
          </button>
        </div>
      )
    );
  };

  const renderError = (error) => {
    return (
      error.message && (
        <div className="alert alert-danger">
          <h4>{error.title}</h4>
          <p>{error.message}</p>
        </div>
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
        <h1>Portfolios</h1>
        <div>{renderLoading(loading)}</div>
        <ul>{renderPosts(data)}</ul>
        <div>{renderError(error)}</div>
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
