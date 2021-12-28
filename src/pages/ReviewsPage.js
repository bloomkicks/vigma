import classes from './ReviewsPage.module.css'
import Page from '../components/layout/Page'
import Reviews from "../components/reviews/Reviews";

const ReviewsPage = props => {
  return (
    <Page 
      title='Отзывы' 
      className={classes.ReviewsPage}
      wrapperClassName={classes.ReviewsWrapper}
    >
      <Reviews />  
    </Page>
  )
}

export default ReviewsPage