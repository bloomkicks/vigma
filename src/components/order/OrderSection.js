import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./OrderSection.module.scss";

import orderTranslations from "../../storage/order-translations";
import { quizActions } from "../../store/quiz";

const customSrc = "/order-assets/custom.jpg";

const OrderSection = React.memo((props) => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  const {
    imgSrc: initImgSrc,
    isCustom,
    isFurther,
    query,
    path,
    title,
    name,
    ...sectionProps
  } = props;

  let customValue = "";
  const inputHandler = (e) => {
    customValue = e.target.value;
  };

  const orderClickHandler = (e) => {
    if (!quiz.bundle && !quiz.current) {
      if (isCustom) {
        dispatch(quizActions.selectCustom(customValue));
        dispatch(quizActions.finish());
      } else dispatch(quizActions.getIntoBundle(name));
    } else if (isFurther) {
      dispatch(quizActions.finish());
    } else if (isCustom) {
      dispatch(quizActions.selectCustom(customValue));
    } else if (!quiz.current) {
      dispatch(quizActions.setInBundle(name));
    } else {
      dispatch(quizActions.selectOrder(name));
    }
  };

  let translation = orderTranslations[quiz.queries[name]];
  const value = translation || quiz.queries[name];
  let imgSrc = initImgSrc;
  if (value) {
    let standard = `${path}/${name}/${quiz.queries[name]}.jpg`;
    imgSrc = translation ? standard : customSrc;
  }

  return (
    <Section
      className={`
        ${classes.OrderSection} ${(isCustom && classes.custom) || ""}
      `}
      onClick={orderClickHandler}
    >
      <img src={imgSrc} />
      <div className={classes.Title}>
        {isCustom ? (
          <input
            type="text"
            placeholder="Ваш Вариант"
            onInput={inputHandler}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <Secondary>
            <b>
              {title}
              {value && (
                <span style={{ fontWeight: "normal" }}>
                  : {value || "-"}
                </span>
              )}
            </b>
          </Secondary>
        )}
      </div>
    </Section>
  );
});

export default OrderSection;
