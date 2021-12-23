import classes from './Bold.module.scss'

const Bold = props => {
  return (
    <span className={classes.Important}>
      {props.children}
    </span>
  )
}

export default Bold