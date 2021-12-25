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
    <section 
      {...reviewProps} 
      className={classes.Review}
    >
      <div className={classes.Image}>
        <img src={imageSrc} alt={name} />     
      </div>
      <Rating rating={rating} />
      <h2 className={classes.Name}>{name}</h2>
      <p className={classes.Text}>{text}</p>
    </section> 
  )
}

export default Review