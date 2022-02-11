import Link from "next/link";
import { firstWorks } from "../../storage/works";
import Work from "../works/Work";
import classes from "./MainWork.module.css";

const MainWork = (props) => {
  return (
    <aside className={classes.MainWork}>
      <section>
        {firstWorks.map((work) => {
          return <Work {...work} key={work.id} />;
        })}
      </section>
      <Link passHref href="/works">
        <p>Больше наших работ</p>
      </Link>
    </aside>
  );
};

export default MainWork;
