import Secondary from "../components/ui/Secondary";
import Head from "next/head";
import classes from "./ErrorPage.module.css";

const title = process.env.ERROR_TITLE;
const description = process.env.ERROR_DESCRIPTION;

const ErrorPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        {/* OPEN GRAPH */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* TWITTER */}
        <meta name="twitter:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={classes.ErrorPage}>
        <div>
          <Secondary>Страница по данному адресу не найдена</Secondary>
          <p>Попробуйте использовать навигацию сверху страницы</p>
        </div>
        <img
          src={process.env.GENERAL_ASSETS + "/error-arrow.svg"}
          alt=""
          className={classes.Arrow}
        ></img>
      </div>
    </>
  );
};

export default ErrorPage;
