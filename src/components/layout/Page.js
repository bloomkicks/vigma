import Title from '../ui/Title'
import classes from './Page.module.scss'

const Page = props => {
  const {
    title,
    children,
    notSpaced,
    className,
    wrapperClassName,
    ...pageProps
  } = props

  return (
    <div className={`
      ${classes.PageSpace}
      ${wrapperClassName || ''}
    `}>
      <main {...pageProps} 
        className={`
          ${classes.Page}
          ${title && classes.Spaced || ''}
          ${notSpaced && classes.NotSpaced || ''}
          ${className || ''}
        `} 
      >
        {title && <Title className={classes.Title}>{title}</Title>}
        {children} 
      </main>
    </div>
  )
}

export default Page