import arrowSvg from '../../assets/main/arrow.svg'
import MainButton from '../ui/MainButton'
import classes from './OrderButton.module.css'

const OrderButton = props => {
  return (
    <div className={classes.Container}>
      <MainButton>
        Заказать сейчас
      </MainButton>
      <img src={arrowSvg} className={classes.Arrow} />
    </div>
  )
}

export default OrderButton 