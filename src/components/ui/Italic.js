import classes from './Italic.module.scss'

const Italic = props => {
  const {
    children,
    className,
    ...italicProps
  } = props

  return (
    <span {...italicProps} className={`
      ${classes.Italic}
      ${className || ''}
    `.trim()}>
      {children}
    </span>
  )
}

export default Italic
