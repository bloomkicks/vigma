import classes from './Section.module.scss'

const Section = props => {
  const {
    close,
    children,
    centered,
    className,
    isVertical,
    ...sectionProps
  } = props

  return (
    <section {...sectionProps} className={`
      ${isVertical ? classes.Vertical : classes.Section}
      ${centered && classes.Centered}
      ${close && classes.Close}
      ${className || ''}
    `.trim()}>
      {children}
    </section>
  )
}

export default Section