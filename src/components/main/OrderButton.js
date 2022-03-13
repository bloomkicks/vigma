import Link from 'next/link'
import MainButton from '../ui/MainButton'
import classes from './OrderButton.module.css'

const OrderButton = props => {
  return (
    <Link href="/order/quiz" passHref>
      <MainButton className={classes.Button}>
        <p>Закажите сейчас</p>
      </MainButton>
    </Link>
  )
}

export default OrderButton 