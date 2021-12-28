import Section from '../ui/Section'
import MainButton from '../ui/MainButton'
import Italic from '../ui/Italic'
import Bold from '../ui/Bold'
import classes from './OrderButton.module.css'

const OrderButton = props => {
  return (
    <Section close={true} className={classes.Container}>
      <Italic>Замер и составление проекта - <Bold>бесплатно</Bold></Italic>
      <MainButton>
        Заказать сейчас
      </MainButton>
    </Section>
  )
}

export default OrderButton 