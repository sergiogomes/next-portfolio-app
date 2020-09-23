import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

export const getServerSideProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getServerSideProps) {
    pageProps = await Component.getServerSideProps(ctx);
  }

  return { pageProps };
};

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
