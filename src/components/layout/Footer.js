import instaSvg from '../../assets/footer/instagram.svg'
import vkSvg from '../../assets/footer/vkontakte.svg'

import Section from "../ui/Section";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <footer className={classes.InnerFooter}>
        <Section isVertical={true}>
          <h3>ОСТАВЬТЕ ОТЗЫВ</h3>
          <div className={classes.Text}>
            <p>vigmareviews@gmal.com</p>
            <p>+7 (965) 031 32-34</p>
          </div>
        </Section>
        <Section isVertical={true}>
          <h3>НАШ АДРЕС</h3>
          <div className={classes.Text}>
            <p>497 Evergreen Rd. Roseville, CA 95673</p>
          </div>
        </Section>
        <Section isVertical={true}>
          <h3>КОНТАКТЫ</h3>
          <div className={classes.Text}>
            <p>+7 (965) 031 32-34</p>
            <p>+7 (965) 051 40-90</p>
          </div>
        </Section>
        <Section isVertical={true}>
          <h3>ВАКАНСИИ</h3>
          <div className={classes.Text}>
            <p>Всегда открыты талантам vigmajobs@gmail.com</p>
          </div>
        </Section>
        <Section isVertical={true} className={classes.Soc}>
          <img src={vkSvg} alt="Наш ВКонтакте" />
          <img src={instaSvg} alt="Наш Инстаграм" />
        </Section>
      </footer>
    </footer>
  );
};

export default Footer;
