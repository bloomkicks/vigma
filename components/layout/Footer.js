const instaSvg = "/footer/instagram.svg";
const vkSvg = "/footer/vkontakte.svg";

import Section from "../ui/Section";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <footer className={classes.InnerFooter}>
        <Section className={classes.Soc} isHorizontal={true}>
          <img src={vkSvg} alt="Наш ВКонтакте" />
          <img src={instaSvg} alt="Наш Инстаграм" />
        </Section>
        <Section isHorizontal={true}>
          <h4>ОСТАВЬТЕ ОТЗЫВ</h4>
          <div className={classes.Text}>
            <p>vigmareviews@gmal.com</p>
            <p>+7 (965) 031 32-34</p>
          </div>
        </Section>
        <Section isHorizontal={true}>
          <h4>НАШ АДРЕС</h4>
          <div className={classes.Text}>
            <p>497 Evergreen Rd. Roseville, CA 95673</p>
          </div>
        </Section>
        <Section isHorizontal={true}>
          <h4>КОНТАКТЫ</h4>
          <div className={classes.Text}>
            <p>+7 (964) 341 60-51</p>
            <p>642 60-51</p>
          </div>
        </Section>
        <Section isHorizontal={true}>
          <h4>ВАКАНСИИ</h4>
          <div className={classes.Text}>
            <p>Всегда открыты талантам:</p>
            <p>vigmajobs@gmail.com</p>
          </div>
        </Section>
      </footer>
    </footer>
  );
};

export default Footer;
