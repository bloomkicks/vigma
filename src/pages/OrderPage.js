import OrderContent from '../components/order/OrderContent'
import Page from '../components/layout/Page'
import classes from './OrderPage.module.css'

const OrderPage = props => {
  return (
    <Page className={classes.OrderPage} title="Заказать">
      <OrderContent />
    </Page>
  )
}

export default OrderPage