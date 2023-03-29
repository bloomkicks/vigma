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
          border: "1px solid black",
        }}
      >
        <a
          href="https://yandex.com/maps/org/vigma_mebel/93431171837/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Vigma Мебель
        </a>
        <a
          href="https://yandex.com/maps/2/saint-petersburg/category/furniture_factory/184106634/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eeeeee",
            fontSize: 12,
            position: "absolute",
            top: 14,
          }}
        >
          Мебельная фабрика в Санкт‑Петербурге
        </a>
        <a
          href="https://yandex.com/maps/2/saint-petersburg/category/cabinet_furniture/184107869/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eeeeee",
            fontSize: 12,
            position: "absolute",
            top: 28,
          }}
        >
          Корпусная мебель в Санкт‑Петербурге
        </a>
        <iframe
          title="Мы на yandex картах"
          src="https://yandex.com/map-widget/v1/?ll=30.271816%2C60.028367&mode=poi&poi%5Bpoint%5D=30.271118%2C60.028429&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D93431171837&z=18.8"
          frameBorder="0"
          allowFullScreen
          style={{ position: "relative", width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </Box>
  );
};

export default ContactsMap;
