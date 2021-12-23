import classes from './MainPage.module.css'
import Page from '../components/layout/Page'
import MainImage from '../components/main/MainImage'
import MainContent from "../components/main/MainContent"

const MainPage = props => {
  return (
    <Page className={classes.MainPage}>
      <MainContent />
      <MainImage />
    </Page>
  )
}

export default MainPage