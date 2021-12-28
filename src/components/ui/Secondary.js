import classes from './Secondary.module.scss'

const Secondary = props => {
  const {
    children,
    ...secondaryProps
  } = props

  return (
    <h2 {...secondaryProps} className={classes.Secondary}>{children}</h2>
  )
}

export default Secondary