import classes from './MainButton.module.scss'

const MainButton = props => {
  const {
    children,
    ...buttonProps
  } = props

  return (
    <button {...buttonProps} className={classes.Button}>
      {children}
    </button> 
  )
}

export default MainButton