import { useLocation, useNavigate } from "react-router-dom";
import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./OrderSection.module.css";

const OrderSection = (props) => {
  const { imgSrc, others, query, title, ...sectionProps } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const orderClickHandler = (e) => {
    navigate(`${location.pathname}${location.search}${query}`);
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
