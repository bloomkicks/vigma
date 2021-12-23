import Page from '../components/layout/Page'
import AboutUs from '../components/aboutus/AboutUsContent'
import classes from './AboutUsPage.module.css'

const AboutUsPage = props => {
  return (
    <Page title="О нас">
      <AboutUs />
    </Page>
  )
}

export default AboutUsPage