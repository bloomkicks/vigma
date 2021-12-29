import classes from './Section.module.scss'

const Section = props => {
  const {
    close,
    element,
    children,
    centered,
    className,
    isVertical,
    ...sectionProps
  } = props

  const SectionEl = element || 'section'

  return (
    <SectionEl {...sectionProps} className={`
      ${isVertical ? classes.Vertical : classes.Section}
      ${close && isVertical && classes.CloseVertical}
      ${close && !isVertical && classes.Close}
      ${centered && classes.Centered}
      ${className || ''}
    `.trim()}>
      {children}
    </SectionEl>
  )
}

export default Section