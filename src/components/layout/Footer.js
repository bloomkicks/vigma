import Image from "next/image";
const instaSvg = process.env.GENERAL_ASSETS + "/instagram.svg";
const vkSvg = process.env.GENERAL_ASSETS + "/vkontakte.svg";

import Section from "../ui/Section";

import classes from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.InnerFooter}>
        <Section className={classes.Soc} isHorizontal={true}>
          <a href="https://vk.com/vigmaspb">
            <Image src={vkSvg} width={30} height={40} alt="Наш ВКонтакте" />
          </a>
          <a href="https://instagram.com/vigmaspb">
            <Image src={instaSvg} width={30} height={40} alt="Наш Инстаграм" />
          </a>
        </Section>
        <Section isHorizontal={true}>
          <h4>ОСТАВЬТЕ ОТЗЫВ</h4>
          <div className={classes.Text}>
            <p>
              <a href="mailto:vigmaspb@gmail.com">vigmaspb@gmail.com</a>
            </p>
            <p>
              <a href="vk.com/vigmaspb">В ВКонтакте</a>
            </p>
          </div>
        </Section>
        <Section isHorizontal={true}>
          <h4>НАШ АДРЕС</h4>
          <div className={classes.Text}>
            <p>г. Санкт-Петербург, ул. Автобусная, д. 3, лит. Б</p>
          </div>
        </Section>
        <Section isHorizontal={true}>
          <h4>КОНТАКТЫ</h4>
          <div className={classes.Text}>
            <p>
              <a href="tel:+7 (812) 642 60-51">+7 (812) 642 60-51</a>
            </p>
            <p>
              <a href="tel:+7 (964) 342 60-51">+7 (964) 342 60-51</a>
            </p>
          </div>
        </Section>
        <Section isHorizontal={true}>
          <h4>ВАКАНСИИ</h4>
          <div className={classes.Text}>
            <p>Всегда открыты талантам:</p>
            <p>
              <a href="mailto:vigmaspb@gmail.com">vigmaspb@gmail.com</a>
            </p>
          </div>
        </Section>
      </div>
    </footer>
  );
};

export default Footer;
