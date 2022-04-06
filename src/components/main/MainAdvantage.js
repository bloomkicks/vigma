import Third from "../ui/Third";
import classes from "./MainAdvantage.module.css";

const MainAdvantage = (props) => {
  const { style, children, title, logoSrc, ...advantageProps } = props;

  return (
    <div className={classes.MainAdvantage}>
      <Third>
        {title} <img alt="" src={logoSrc} className={classes.Logo} />
      </Third>
      <p style={style}>{children}</p>
    </div>
  );
};

export default MainAdvantage;
