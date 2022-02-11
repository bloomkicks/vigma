import Secondary from "../components/ui/Secondary";
import Page from "../components/layout/Page";
import classes from "./ErrorPage.module.css";

const ErrorPage = (props) => {
  return (
    <Page className={classes.ErrorPage}>
      <div>
        <Secondary>Страница по данному адресу не найдена</Secondary>
        <p>Сверху достпуна корректная навигация по сайту</p>
      </div>
      <img src="/error-arrow.svg" className={classes.Arrow}></img>
    </Page>
  );
};

export default ErrorPage;
