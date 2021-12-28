import Secondary from '../ui/Secondary'
import Section from '../ui/Section'
import Rating from './Rating'
import classes from './Review.module.css'

const Review = props => {
  const {
    imageSrc,
    rating,
    name,
    text,
    ...reviewProps
  } = props

  return (
    <Section 
      {...reviewProps} 
      className={classes.Review}
    >
      <img src={imageSrc} alt={name} className={classes.Image} />     
      <Rating rating={rating} />
      <Secondary className={classes.Name}>{name}</Secondary>
      <p className={classes.Text}>{text}</p>
    </Section> 
  )
}

export default Review