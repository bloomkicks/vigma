import classes from './ReviewsPage.module.css'
import Reviews from "../components/reviews/Reviews";
import Page from '../components/layout/Page'

const ReviewsPage = props => {
  return (
    <Page  
      title='Отзывы' 
      className={classes.ReviewsPage}
      wrapperClassName={classes.ReviewsWrapper}
    >
      <Reviews />  
    </Page >
  )
}

export default ReviewsPage