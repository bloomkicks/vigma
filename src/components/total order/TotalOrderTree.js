const doubleArrowSvg = "/order-assets/double-arrow.svg";
import Section from "../ui/Section";
import Third from "../ui/Third";
import classes from "./TotalOrderTree.module.scss";

const TotalOrderTree = (props) => {
  const { orderInfo, ...treeProps } = props;

  return (
    <Section className={classes.TotalOrderTree}>
      {orderInfo
        .filter((item) => item.property)
        .map((info, index, array) => {
          const isLast = index >= array.length - 1;
          return (
            <div key={index}>
              <div>
                <p>{info.key}:</p>
                {typeof info.property === "object" ? (
                  info.property.map((prop, i) => {
                    <Third key={prop + i}>{prop}</Third>
                  })
                ) : (
                  <Third>{info.property}</Third>
                )}
              </div>
              {!isLast && <img src={doubleArrowSvg} key={Math.random()} />}
            </div>
          );
        })}
    </Section>
  );
};

export default TotalOrderTree;
