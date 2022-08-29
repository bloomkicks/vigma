import Footer from "./Footer";
import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      {props.children}
      {/* <Support /> */}
      <Footer />
    </div>
  );
};

export default Layout;
