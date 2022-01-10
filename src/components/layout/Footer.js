const instaSvg = "/footer/instagram.svg";
const vkSvg = "/footer/vkontakte.svg";

import Section from "../ui/Section";
import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.InnerFooter}>
        <Section className={classes.Soc} isHorizontal={true}>
          <img src={vkSvg} alt="Наш ВКонтакте" />
          <img src={instaSvg} alt="Наш Инстаграм" />
        </Section>
        <Section isHorizontal={true}>
          <h4>ОСТАВЬТЕ ОТЗЫВ</h4>
          <div className={classes.Text}>
            <p><Link href="mailto:vigmaspb@gmail.com">vigmaspb@gmail.com</Link></p>
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
            
            <p><Link href="tel:+7 (964) 342 60-51">+7 (964) 342 60-51</Link></p>
            
            <p><Link href="tel:+7 (812) 642 60-51">+7 (812) 642 60-51</Link></p>
          </div>
        </Section>
        <Section isHorizontal={true}>
          <h4>ВАКАНСИИ</h4>
          <div className={classes.Text}>
            <p>Всегда открыты талантам:</p>
            <p><Link href="mailto:vigmaspb@gmail.com">vigmaspb@gmail.com</Link></p>
          </div>
        </Section>
      </div>
    </footer>
  );
};

export default Footer;
