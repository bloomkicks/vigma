import { useRouter } from "next/router";
import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./OrderSection.module.scss";

import orderTranslations from "../../storage/order-translations";

const furtherSrc = "/order-assets/further.jpg";
const customSrc = "/order-assets/custom.jpg";
const bodySrc = "/order-assets/materials/body/egger.jpg";
const frontSrc =
  "/order-assets/materials/front/plastic.jpg";

const OrderSection = (props) => {
  const {
    imgSrc: initImgSrc,
    custom,
    isFurther,
    query,
    isBody,
    isFront,
    title,
    name,
    ...sectionProps
  } = props;

  const imgSrc = custom
    ? customSrc
    : isFurther
    ? furtherSrc
    : isBody
    ? bodySrc
    : isFront
    ? frontSrc
    : initImgSrc;

  const router = useRouter();

  function getAllQueries(query, format = (q) => q) {
    const formattedQuery = format(
      query.slice(1).split("=")
    );
    const searchParams = new URLSearchParams(router.query);
    searchParams.delete(formattedQuery[0]);
    searchParams.append(...formattedQuery);
    return searchParams;
  }

  let allQueries = getAllQueries(query);

  const inputHandler = (e) => {
    allQueries = getAllQueries(query, (q) => {
      q[1] = e.target.value;
      return q;
    });
  };

  const orderClickHandler = (e) => {
    let url = `${router.pathname}?${allQueries}`;
    if (
      allQueries.has("bundle") ||
      (allQueries.keys.length === 0 && custom)
    )
      url = `/order?${allQueries}`;

    router.push(url);
  };

  let curParams = new URLSearchParams(router.query);

  let condition =
    !curParams.has("bundle") &&
    !isFurther &&
    curParams.has("category") &&
    curParams.get("shape") !== "current" &&
    curParams.get("front") !== "current" &&
    curParams.get("body") !== "current" &&
    curParams.get("table") !== "current";

  let result =
    orderTranslations[curParams.get(name)] ||
    curParams.get(name) ||
    "Не Выбрано";

  let value = condition && result;

  return (
    <Section
      className={`
        ${classes.OrderSection} ${
        (custom && classes.custom) || ""
      }
      `}
      onClick={orderClickHandler}
    >
      <img src={imgSrc} />
      <div className={classes.Title}>
        {custom ? (
          <input
            type="text"
            placeholder="Ваш Вариант"
            onInput={inputHandler}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <Secondary>
            {isFurther
              ? "Продолжить"
              : title + ((value && ": ") || "")}
            {value && <b>{value}</b>}
          </Secondary>
        )}
      </div>
    </Section>
  );
};

export default OrderSection;
