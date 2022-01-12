import Work from "./Work";
import works from "../../storage/works"
import classes from "./WorksContent.module.css";

const WorksContent = (props) => {
  return (
    <article className={classes.WorksContent}>
      {works.map((work) => {
        return <Work {...work} key={Math.random()} />;
      })}
    </article>
  );
};

export default WorksContent;
