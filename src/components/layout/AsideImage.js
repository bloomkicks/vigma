import classes from "./AsideImage.module.scss";

const Content = (props) => {
  const { children, className, containerClassName, ...imageProps } = props;

  return (
    <aside
      className={`
      ${classes.ImageContainer} 
      ${containerClassName || ""}
    `}
    >
      <img
        {...imageProps}
        className={`
          ${classes.Image} 
          ${className || ""}
        `}
      />
    </aside>
  );
};

export default Content;
