import Title from '../ui/Title'
import classes from './Page.module.css'

const Page = props => {
  const {
    title,
    children,
    className,
    wrapperClassName,
    ...pageProps
  } = props

  return (
    <div className={`
      ${classes.PageSpace}
      ${wrapperClassName}
    `}>
      <main {...pageProps} 
        className={`
          ${classes.Page}
          ${className || ''}
        `} 
      >
        <Title className={classes.Title}>{title}</Title>
        {children} 
      </main>
    </div>
  )
}

export default Page