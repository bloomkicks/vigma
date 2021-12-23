import coolMan2 from '../../assets/reviews/cool man 2.jpg'
import Review from './Review'
import classes from './Reviews.module.css'

const reviews = [
  {
    imageSrc: coolMan2,
    name: 'Name',
    text: 'lorem ipsum shit'
  }
]

const Reviews = props => {
  return (
    <main className={classes.Reviews}>
    {reviews.map(review => {
      return (
        <Review {...review} />
      )
    })}
    </main>
  )
}

export default Reviews