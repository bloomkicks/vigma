import WorksContent from '../components/works/WorksContent'
import Page from '../components/layout/Page'
import classes from './WorksPage.module.css'

const WorkPage = props => {
  return (
    <Page className={classes.WorksPage}>
      <WorksContent />
    </Page>
  )
}

export default WorkPage