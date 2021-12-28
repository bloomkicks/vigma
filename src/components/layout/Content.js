import classes from './Content.module.scss'

const Content = props => {
  const {
    children,
    className,
    ...contentProps
  } = props

  return (
    <main {...contentProps} className={`
      ${classes.Content} 
      ${className || ''}
      ${classes.MediaContent}
    `}>
      {children}
    </main>
  )
}

export default Content