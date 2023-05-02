import UpButton from "../general/UpButton";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      {props.children}
      <Footer />
      <UpButton sx={{}}  />
    </div>
  );
};

export default Layout;
