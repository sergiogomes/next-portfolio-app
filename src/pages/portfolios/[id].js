import BaseLayout from "@/src/components/layouts/BaseLayout";
import BasePage from "@/src/components/BasePage";
import { useGetPostById } from "@/actions";
import { useRouter } from "next/router";

// To fetch data from server side
// export const getServerSideProps = async ({ params }) => {
//   let post = [];
//   let error = {};
//   try {
//     const res = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${params.id}`
//     );
//     post = res.data;
//   } catch (e) {
//     error.title = "Unexpected error";
//     error.message = e;
//   }
//   return { props: { post: post, error: error } };
// };

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
          <span className="ml-2">Loading...</span>
        </button>
      </div>
    )
  );
};

const renderError = (error) => {
  return (
    error && (
      <div className="alert alert-danger">
        <h4>{error.title}</h4>
        <p>{error.message}</p>
      </div>
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

const Portfolio = () => {
  const router = useRouter();
  const { data, error, loading } = useGetPostById(router.query.id);

  return (
    <BaseLayout>
      <BasePage>
        <div>{renderLoading(loading)}</div>
        <ul>{renderPost(data)}</ul>
        <div>{renderError(error)}</div>
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
