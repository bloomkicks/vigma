import { firstWorks } from "../../storage/works";
import NewWork from "../works/NewWork";
import classes from "./MainWork.module.scss";

const MainWork = (props) => {
  return (
    <aside className={classes.MainWork}>
      {firstWorks.map((work, index) => {
        return (
          <NewWork
            {...work}
            tabIndex={"1" + index}
            key={work.id}
          />
        );
      })}
    </aside>
  );
};

export default MainWork;
