import Section from "./Section";
import classes from "./Input.module.scss";

const Input = (props) => {
  let { label, input, InputElement, id } = props;

  id = id || Math.random();
  InputElement = InputElement || "input";

  return (
    <Section className={classes.Container}>
      <label
        {...label.props}
        htmlFor={id}
        className={`
          ${classes.Label}
          ${label.className || ""}
        `.trim()}
      >
        {label.children}
      </label>
      <InputElement
        {...input.props}
        id={id}
        className={`
          ${classes.Input} 
          ${input.className || ""}
        `.trim()}
      />
    </Section>
  );
};

export default Input;
