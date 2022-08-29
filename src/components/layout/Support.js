import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";
import classes from "./Support.module.scss";

const Support = (props) => {
  const [isShown, setIsShown] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  function expandHandler(e) {
    e.stopPropagation();
    setIsExpanded(true);
  }
  function unexpandHandler() {
    setIsExpanded(false);
  }

  useEffect(() => {
    setIsShown(false);
    window.addEventListener("click", () => {
      setIsShown(false);
      unexpandHandler();
    });
    setTimeout(() => setIsShown(true), 15000);
  }, []);

  return (
    <section className={classes.support}>
      <CSSTransition
        timeout={500}
        in={isExpanded}
        classNames={{
          enterActive: classes.expanding,
          enterDone: classes.expanded,
          exitActive: classes.unexpanding,
          exitDone: classes.unexpanded,
        }}
      >
        <div
          className={classes.stack}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <a target="_blank" rel="noreferrer" href="https://vk.com/vigmaspb">
            <img src="/support/support_vk.svg" alt="Помощь ВКонтакте" />
          </a>
          <a rel="noreferrer" target="_blank" href="https://wa.me/79643426051">
            <img src="/support/support_wa.svg" alt="Помощь WhatsApp" />
          </a>
          <a href="tel:+7 (812) 642 60-51">
            <img src="/support/support_phone.svg" alt="Помощь по Телефону" />
          </a>
        </div>
      </CSSTransition>
      <img
        onClick={
          isExpanded ? (e) => unexpandHandler(e) : (e) => expandHandler(e)
        }
        src={isShown ? "/support/support_message.png" : "/support.png"}
        alt="Иконка Тех. Поддержки"
        className={classes.bg}
      />
      <CSSTransition
        timeout={500}
        in={isShown}
        classNames={{
          enterDone: classes.shown,
          exitActive: classes.unshowing,
          exitDone: classes.unshown,
        }}
      >
        <div
          onClick={(e) => {
            setTimeout(() => setIsShown(true), 45000);
            setIsShown(false);
            expandHandler(e);
            e.stopPropagation();
          }}
          className={classes.message}
        >
          <strong>Готовы помочь!</strong>
          <p>
            Здравствуйте, если у вас возник вопрос - просто позвоните или
            напишите, и мы вам поможем
          </p>
        </div>
      </CSSTransition>
    </section>
  );
};

export default Support;
