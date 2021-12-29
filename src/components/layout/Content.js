import classes from './Content.module.scss'

const Content = props => {
  const {
    children,
    className,
    ...contentProps
  } = props

  return (
    <article {...contentProps} className={`
      ${classes.Content} 
      ${className || ''}
      ${classes.MediaContent}
    `}>
      {children}
    </article>
  )
}

export default Content