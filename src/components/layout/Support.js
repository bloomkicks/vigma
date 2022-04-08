import { useState, useEffect } from "react";
import classes from "./Support.module.css";

const Support = (props) => {
  const [isShown, setIsShown] = useState(true);
  const [expanded, setExpanded] = useState(false);

  function expandHandler(e) {
    e.stopPropagation();
    setExpanded(true);
  }
  function unexpandHandler() {
    setExpanded(false);
  }

  useEffect(() => {
    window.addEventListener("click", unexpandHandler);
    setTimeout(() => setIsShown(true), 180000);
  }, []);

  return (
    <section className={classes.support}>
      {expanded && (
        <div
          className={classes.stack}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <a target="_blank" href="https://vk.com/vigmaspb">
            <img
              src="/support_vk.svg"
              alt="Помощь ВКонтакте"
            />
          </a>
          <a href="tel:8 (964) 342 60-51">
            <img
              src="/support_wa.svg"
              alt="Помощь WhatsApp"
            />
          </a>
          <a href="tel: 8 (812) 642 60-51">
            <img
              src="/support_phone.svg"
              alt="Помощь по Телефону"
            />
          </a>
        </div>
      )}
      <img
        onClick={
          expanded
            ? (e) => unexpandHandler(e)
            : (e) => expandHandler(e)
        }
        src="/support.png"
        alt="Иконка Тех. Поддержки"
        className={classes.bg}
      />
      {isShown && (
        <div
          onClick={(e) => {
            expandHandler(e);
            setIsShown(false)
            e.stopPropagation();
          }}
          className={classes.message}
        >
          <b>Готовы помочь!</b>
          <p>
            Здравствуйте, если у вас возникли вопросы - мы с
            радостью на них ответим и поможем
          </p>
        </div>
      )}
    </section>
  );
};

export default Support;
