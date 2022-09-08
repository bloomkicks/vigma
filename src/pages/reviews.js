import classes from "./ReviewsPage.module.css";
import Reviews from "../components/reviews/Reviews";
import Page from "../components/layout/Page";
import Head from "next/head";

const title = "Отзывы - VIGMA";
const description = "Отзывы наших клиентов";

const ReviewsPage = (props) => {
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
      <Page
        title="Отзывы"
        className={classes.ReviewsPage}
        wrapperClassName={classes.ReviewsWrapper}
      >
        <Reviews />
      </Page>
    </>
  );
};

export default ReviewsPage;
