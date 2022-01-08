import classes from "./Title.module.scss";

const Title = (props) => {
  const { className } = props;

  return (
    <h1
      className={`
        ${classes.Title}
        ${className || ''}
      `.trim()}
    >
      {props.children}
    </h1>
  );
};

export default Title;
