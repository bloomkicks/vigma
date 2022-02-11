import MainContent from "../components/main/MainContent"
import MainWork from '../components/main/MainWork'
import Page from '../components/layout/Page'

const MainPage = props => {
  return (
    <Page>
      <MainContent />
      <MainWork />
    </Page >
  )
}

export default MainPage