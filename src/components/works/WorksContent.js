import NewWork from "./NewWork";
import Work from "./Work";
import works from "../../storage/works"
import classes from "./WorksContent.module.css";

const WorksContent = (props) => {
  return (
    <article className={classes.WorksContent}>
      {works.map((work) => {
        return <NewWork {...work} key={work.id} />;
      })}
    </article>
  );
};

export default WorksContent;
