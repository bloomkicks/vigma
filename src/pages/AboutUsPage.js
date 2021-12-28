import AboutUsContent from '../components/aboutus/AboutUsContent'
import Page from '../components/layout/Page'
import classes from './AboutUsPage.module.css'

const AboutUsPage = props => {
  return (
    <Page className={classes.AboutUsPage} title="Кратко о нас">
      <AboutUsContent />
    </Page>
  )
}

export default AboutUsPage