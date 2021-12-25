import Title from '../ui/Title'
import classes from './Page.module.css'

const Page = props => {
  const {
    title,
    children,
    className,
    ...pageProps
  } = props

  return (
    <article {...pageProps} 
      className={`
        ${classes.Page}
        ${className || ''}
      `} 
    >
      <Title className={classes.Title}>{title}</Title>
      {children} 
    </article>
  )
}

export default Page