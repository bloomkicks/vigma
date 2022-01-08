import { Provider } from 'react-redux'

import store from '../../store/index'
import Footer from './Footer'
import Header from './Header'
import classes from './Layout.module.css'

const Layout = props => {
  return (
    <Provider store={store}>
      <div className={classes.Layout}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </Provider>
  )
}

export default Layout