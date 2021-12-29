// STARTING ORDERS
import officeSrc from '../../assets/order/office/office-order.jpg'
import kitchenSrc from '../../assets/order/kitchen/kitchen.jpg'
import bedroomSrc from '../../assets/order/bedroom/bedroom.jpg'
import startingOthesrSrc from '../../assets/order/other/TC island.jpg'

// OFFICE ORDERS
import deskSrc from '../../assets/order/office/desk.jpg'
import chairSrc from '../../assets/order/office/chair.jpg'
import cabinetSrc from '../../assets/order/office/cabinet.jpg'
import officeOthersSrc from '../../assets/order/office/office-other.jpg'

import OrderSection from './OrderSection'
import Section from '../ui/Section'
import classes from './Orders.module.css'

const startingOrders = [
  {
    imgSrc: officeSrc,
    title: 'Офис'
  },
  {
    imgSrc: kitchenSrc,
    title: 'Кухня'
  },
  {
    imgSrc: bedroomSrc,
    title: 'Спальная'
  },
  {
    imgSrc: startingOthesrSrc,
    others: true,
  },
]

const officeOrders = [
  {
    imgSrc: deskSrc,
    title: ''
  },
  {
    imgSrc: chairSrc,
    title: ''
  },
  {
    imgSrc: cabinetSrc,
    title: ''
  },
  {
    imgSrc: officeOthersSrc,
    others: true,
  },
]

const Orders = props => {
  const orders = startingOrders

  return (
    <div className={classes.Orders} >
      {orders.map(order => {
        return <OrderSection {...order} key={Math.random()} />
      })}      
    </div>
  )
}

export default Orders