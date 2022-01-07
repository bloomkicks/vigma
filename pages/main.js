import MainContent from "../components/main/MainContent"
import MainImage from '../components/main/MainImage'
import Page from '../components/layout/Page'

const MainPage = props => {
  return (
    <Page>
      <MainContent />
      <MainImage />
    </Page >
  )
}

export default MainPage