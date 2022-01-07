import classes from './AntiButton.module.scss'

const AntiButton = props => {
  const {
    children,
    className,
    ...buttonProps
  } = props

  return (
    <button className={`
      ${classes.AntiButton}
      ${className || ''}
    `}>
      <p>{props.children}</p>
    </button>
  )
}

export default AntiButton