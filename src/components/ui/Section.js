import classes from './Section.module.scss'

const Section = props => {
  const {
    children,
    className,
    isVertical,
    ...sectionProps
  } = props

  return (
    <section {...sectionProps} className={`
      ${isVertical ? classes.Vertical : classes.Section}
      ${className || ''}
    `.trim()}>
      {children}
    </section>
  )
}

export default Section