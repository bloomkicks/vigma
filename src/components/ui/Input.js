import { useRef } from "react";

import Section from "./Section";
import classes from "./Input.module.scss";

const Input = (props) => {
  let { label, input, InputElement, id } = props;

  id = useRef(id || Math.random())
  InputElement = InputElement || "input";

  return (
    <Section className={classes.Container}>
      <label
        {...label.props}
        htmlFor={id.current}
        className={`
          ${classes.Label}
          ${label.className || ""}
        `.trim()}
      >
        {label.children}
      </label>
      <InputElement
        {...input.props}
        id={id.current}
        className={`
          ${classes.Input} 
          ${input.className || ""}
        `.trim()}
      />
    </Section>
  );
};

export default Input;
