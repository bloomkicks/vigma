import { useRouter } from "next/router";

import TotalOrderForm from "../../components/total order/TotalOrderForm";
import TotalOrderTree from "../../components/total order/TotalOrderTree";
import Page from "../../components/layout/Page";
import classes from "./TotalOrderPage.module.css";

const TotalOrderPage = (props) => {
  const router = useRouter();

  const queries = [
    router.query["room"],
    router.query["type"],
    router.query["material"],
  ];
  
  return (
    <Page title="Заказать" className={classes.TotalOrderPage}>
      {queries[0] && <TotalOrderTree queries={queries} />}
      <TotalOrderForm />
    </Page>
  );
};

export default TotalOrderPage;
