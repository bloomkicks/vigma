import Footer from './Footer'
import Header from './Header'
import Page from './Page'
import classes from './Layout.module.css'

const Layout = props => {
  return (
    <div className={classes.Layout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout