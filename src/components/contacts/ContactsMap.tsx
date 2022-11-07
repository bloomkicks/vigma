import Box from "@mui/material/Box";

const ContactsMap = ({ sx }: { sx?: any }) => {
  return (
    <Box component="section" sx={sx}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <a
          href="https://yandex.ru/maps/org/vigma_mebel/191512945068/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
        >
          Вигма Мебель
        </a>
        <a
          href="https://yandex.ru/maps/2/saint-petersburg/category/furniture_factory/184106634/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
        >
          Мебельная фабрика в Санкт‑Петербурге
        </a>
        <a
          href="https://yandex.ru/maps/2/saint-petersburg/category/cabinet_furniture/184107869/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 28 }}
        >
          Корпусная мебель в Санкт‑Петербурге
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCU6ZBUM3A"
          frameBorder="0"
          allowFullScreen
          style={{ position: "relative", width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </Box>
  );
};

export default ContactsMap;
