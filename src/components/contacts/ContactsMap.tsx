import Box from "@mui/material/Box";

const ContactsMap = ({ sx }: { sx?: any }) => {
  return (
    <Box component="section" sx={sx}>
      <iframe
        src="https://yandex.com/map-widget/v1/?z=12&ol=biz&oid=93431171837"
        frameBorder="0"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          border: "1px solid black",
        }}
      ></iframe>
    </Box>
  );
};

export default ContactsMap;
