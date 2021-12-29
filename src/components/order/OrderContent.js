import AntiButton from '../ui/AntiButton'
import Question from '../ui/Question'
import Content from '../layout/Content'
import Orders from './Orders'
import classes from './OrderContent.module.css'


const OrderContent = props => {
  const {
    question,
    ...orderContent
  } = props

  return (
    <Content className={classes.OrderContent}>
      <Question>Для чего вам нужна мебель?</Question> 
      <Orders />
      <AntiButton>По Телефону</AntiButton>
    </Content>
  )
}

export default OrderContent