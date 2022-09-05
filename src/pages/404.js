import Secondary from "../components/ui/Secondary";
import Page from "../components/layout/Page";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <Page className={classes.ErrorPage}>
      <div>
        <Secondary>Страница по данному адресу не найдена</Secondary>
        <p>Сверху достпуна корректная навигация по сайту</p>
      </div>
      <img
        src={process.env.GENERAL_ASSETS + "/error-arrow.svg"}
        alt="Наверху"
        className={classes.Arrow}
      ></img>
    </Page>
  );
};

export default ErrorPage;
