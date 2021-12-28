import officeSrc from '../../assets/order/office/office-order.jpg'
import kitchenSrc from '../../assets/order/kitchen/kitchen.jpg'
import bedroomSrc from '../../assets/order/bedroom/bedroom.jpg'
import otherSrc from '../../assets/order/other/TC island.jpg'

import OrderSection from './OrderSection'
import AntiButton from '../ui/AntiButton'
import Question from '../ui/Question'
import classes from './OrderContent.module.css'

const orders = [
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
    imgSrc: otherSrc,
    title: 'Другое (не знаю)'
  },
]

const OrderContent = props => {
  const {
    question,
    ...orderContent
  } = props

  return (
    <main className={classes.OrderContent}>
      <Question>Для чего вам нужна мебель?</Question> 
      {orders.map(order => {
        return <OrderSection {...order} />
      })}      
      <AntiButton>По Телефону</AntiButton>
    </main>
  )
}

export default OrderContent