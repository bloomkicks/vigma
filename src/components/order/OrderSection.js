import Secondary from '../ui/Secondary'
import Section from '../ui/Section'
import classes from './OrderSection.module.css'

const OrderSection = props => {
  const {
    imgSrc,
    title,
    ...sectionProps
  } = props

  return (
    <Section className={classes.OrderSection}>
      <img src={imgSrc} />
      <div className={classes.Title}>
        <Secondary>{title}</Secondary>
      </div>
    </Section>
  )
}

export default OrderSection