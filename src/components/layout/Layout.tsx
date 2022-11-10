import Footer from "./Footer";
import Header from "./header/Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
