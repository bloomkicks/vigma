import { firstWorks } from "../../storage/works";
import Work from "../works/Work";
import classes from "./MainWork.module.scss";

const MainWork = (props) => {
  return (
    <aside className={classes.MainWork}>
      {firstWorks.map((work, index) => {
        return (
          <Work
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
