import MainButton from '../ui/MainButton'
import classes from './OrderButton.module.css'

const OrderButton = props => {
  return (
    <div className={classes.Container}>
      <MainButton>
        Заказать сейчас
      </MainButton>
    </div>
  )
}

export default OrderButton 