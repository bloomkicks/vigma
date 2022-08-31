import { footerAssetsPath } from "../../data/general/assets-paths";
const instaSvg = footerAssetsPath + "/instagram.svg";
const vkSvg = footerAssetsPath + "/vkontakte.svg";

import Section from "../ui/Section";

import classes from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.InnerFooter}>
        <Section className={classes.Soc} isHorizontal={true}>
          <a href="https://vk.com/vigmaspb" tabIndex={50}>
            <img tabIndex="1" src={vkSvg} alt="Наш ВКонтакте" />
          </a>
          <a href="https://instagram.com/vigmaspb" tabIndex={51}>
            <img tabIndex="1" src={instaSvg} alt="Наш Инстаграм" />
          </a>
        </Section>
        <Section isHorizontal={true}>
          <h4>ОСТАВЬТЕ ОТЗЫВ</h4>
          <div className={classes.Text}>
            <p>
              <a href="mailto:vigmaspb@gmail.com" tabIndex={52}>
                vigmaspb@gmail.com
              </a>
            </p>
            <p>
              <a href="vk.com/vigmaspb" tabIndex={53}>
                В ВКонтакте
              </a>
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
              <a href="tel:+7 (812) 642 60-51" tabIndex={54}>
                +7 (812) 642 60-51
              </a>
            </p>
            <p>
              <a href="tel:+7 (964) 342 60-51" tabIndex={55}>
                +7 (964) 342 60-51
              </a>
            </p>
          </div>
        </Section>
        <Section isHorizontal={true}>
          <h4>ВАКАНСИИ</h4>
          <div className={classes.Text}>
            <p>Всегда открыты талантам:</p>
            <p>
              <a href="mailto:vigmaspb@gmail.com" tabIndex={56}>
                vigmaspb@gmail.com
              </a>
            </p>
          </div>
        </Section>
      </div>
    </footer>
  );
};

export default Footer;
