import TotalOrderForm from '../components/total order/TotalOrderForm'
import TotalOrderTree from '../components/total order/TotalOrderTree'
import AntiButton from '../components/ui/AntiButton'
import Page from '../components/layout/Page' 
import classes from './TotalOrderPage.module.css'
import { useLocation } from 'react-router-dom'

const TotalOrderPage = props => {
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const queries = [
    searchParams.get('room'),
    searchParams.get('type'),
    searchParams.get('material'),
  ]

  return (
    <Page className={classes.TotalOrderPage}>
      {queries[0] && <TotalOrderTree queries={queries}/>}
      <TotalOrderForm />
      <AntiButton className={classes.AntiButton}>Прикрепить чертеж</AntiButton>
    </Page>
  )
}

export default TotalOrderPage