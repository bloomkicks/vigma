import starSrc from '../../assets/reviews/star.svg'
import classes from './Review.module.css'

const Review = props => {
  const {
    imageSrc,
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
      <div className={classes.Rating}>
        {[1,2,3,4,5].map(star => {
          return <img className={classes.Star} src={starSrc} alt="Звезда" />
        })}
      </div>
      <h2 className={classes.Name}>{name}</h2>
      <p className={classes.Text}>{text}</p>
    </section> 
  )
}

export default Review