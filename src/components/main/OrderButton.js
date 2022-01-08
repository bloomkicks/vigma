import MainButton from '../ui/MainButton'
import Anchor from '../ui/Anchor'
import classes from './OrderButton.module.css'

const OrderButton = props => {
  return (
    <Anchor className={classes.ButtonWrapper} href="/order">
      <MainButton className={classes.Button}>
        <p>Закажите сейчас</p>
      </MainButton>
    </Anchor>
  )
}

export default OrderButton 