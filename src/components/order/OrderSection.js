import { useRouter } from 'next/router'
import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./OrderSection.module.css";

const OrderSection = (props) => {
  const { imgSrc, others, total, query, title, ...sectionProps } = props;
  const router = useRouter();

  const formattedQuery = query.slice(1).split("=");
  const searchParams = new URLSearchParams(router.query);
  searchParams.delete(formattedQuery[0]);
  searchParams.append(...formattedQuery);

  let queryUrl = `${router.pathname}?${searchParams}`;
  if (total) queryUrl = `${`/order?${searchParams}`}`

  const orderClickHandler = (e) => {
    router.push(queryUrl);
  };

  return (
    <Section onClick={orderClickHandler} className={classes.OrderSection}>
      <img src={imgSrc} />
      <div className={classes.Title}>
        <Secondary>{others ? "Другое (не знаю)" : title}</Secondary>
      </div>
    </Section>
  );
};

export default OrderSection;
