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
          href="https://yandex.ru/maps/org/vigma_mebel/191512945068/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Вигма Мебель
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?from=mapframe&indoorLevel=1&ll=30.273911%2C60.028111&mode=search&oid=191512945068&ol=biz&source=mapframe&utm_source=mapframe&z=17.6"
          frameBorder="0"
          allowFullScreen
          style={{ position: "relative", width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </Box>
  );
};

export default ContactsMap;
