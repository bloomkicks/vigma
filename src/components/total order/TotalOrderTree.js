import Section from "../ui/Section";
import Secondary from "../ui/Secondary";
import classes from "./TotalOrderTree.module.scss";

const TotalOrderTree = (props) => {
  const { orderInfo, item, ...treeProps } = props;

  if (item) {
    return <Secondary className={classes.work}>{item}</Secondary>;
  }
  return (
    <Section className={classes.tree}>
      {orderInfo.map((info) => {
        if (info.property)
          return (
            <p key={Math.random()}>
              <b>{info.key}</b>: {info.property}
            </p>
          );
      })}
    </Section>
  );
};

export default TotalOrderTree;
