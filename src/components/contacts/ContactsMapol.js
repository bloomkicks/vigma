import classes from "./ContactsMap.module.css";

const ContactsMap = () => {
  return (
    <aside
      style={{ position: "relative", overflow: "hidden" }}
      className={classes.Map}
    >
      <a
        href="https://yandex.com/maps/org/vigma/191512945068/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px",
        }}
      >
        VIGMA Мебель
      </a>
      <a
        href="https://yandex.com/maps/2/saint-petersburg/category/industrial_enterprise/184106880/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px",
        }}
      >
        Производственное предприятие в Санкт‑Петербурге
      </a>
      <a
        href="https://yandex.com/maps/2/saint-petersburg/category/cabinet_furniture/184107869/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "28px",
        }}
      >
        Корпусная мебель в Санкт‑Петербурге
      </a>
      <iframe
        src="https://yandex.com/map-widget/v1/-/CCU5f6v5sB"
        width="400"
        height="350"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </aside>
  );
};

export default ContactsMap;
