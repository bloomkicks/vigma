import classes from './Question.module.scss'

const Question = props => {
  const {
    children,
    className,
    ...questionProps
  } = props

  return (
    <div {...questionProps} className={`
      ${classes.Question}
      ${className || ''}
    `}>
      <h2>{props.children}</h2>
    </div>
  )
}

export default Question