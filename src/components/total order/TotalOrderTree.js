import doubleArrowSvg from "../../assets/order/double-arrow.svg";
import Section from "../ui/Section";
import Third from "../ui/Third";
import classes from "./TotalOrderTree.module.css";

const TotalOrderTree = (props) => {
  const { queries, ...treeProps } = props;
  console.log(queries)

  return (
    <Section className={classes.TotalOrderTree}>
      {queries.map((query, i, a) => {
        const isLast = (i >= (a.length - 1))
        return (
          <>
            <div className={classes.Query}>
              <Third>{query}</Third>
            </div>
            {!isLast && <img src={doubleArrowSvg} />}
          </>
        );
      })}
    </Section>
  );
};

export default TotalOrderTree;
