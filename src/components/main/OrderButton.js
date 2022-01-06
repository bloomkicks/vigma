import MainButton from '../ui/MainButton'
import Anchor from '../ui/Anchor'
import classes from './OrderButton.module.css'

const OrderButton = props => {
  return (
    <Anchor className={classes.Button} href="/order">
      <MainButton>
        Закажите сейчас
      </MainButton>
    </Anchor>
  )
}

export default OrderButton 