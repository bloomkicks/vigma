import { firstWorks } from "../../storage/works";
import NewWork from "../works/NewWork";
import classes from "./MainWork.module.scss";

const MainWork = (props) => {
  return (
    <aside className={classes.MainWork}>
      {firstWorks.map((work) => {
        return <NewWork {...work} key={work.id} />;
      })}
    </aside>
  );
};

export default MainWork;
