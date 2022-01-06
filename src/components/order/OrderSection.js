import { useLocation, useNavigate } from "react-router-dom";
import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./OrderSection.module.css";

const OrderSection = (props) => {
  const { imgSrc, others, total, query, title, ...sectionProps } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const formattedQuery = query.slice(1).split("=");
  const searchParams = new URLSearchParams(location.search);
  searchParams.delete(formattedQuery[0]);
  searchParams.append(...formattedQuery);

  let queryUrl = `${location.pathname}?${searchParams}`;
  if (total) queryUrl = `${`/total-order?${searchParams}`}`

  const orderClickHandler = (e) => {
    navigate(queryUrl);
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
