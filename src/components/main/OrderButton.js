import MainButton from '../ui/MainButton'
import Section from '../ui/Section'
import Italic from '../ui/Italic'
import Anchor from '../ui/Anchor'
import Bold from '../ui/Bold'
import classes from './OrderButton.module.css'

const OrderButton = props => {
  return (
    <Section close={true} className={classes.Container}>
      <Italic>Замер и составление проекта - <Bold>бесплатно</Bold></Italic>
      <Anchor href="/order">
        <MainButton>
          Заказать сейчас
        </MainButton>
      </Anchor>
    </Section>
  )
}

export default OrderButton 