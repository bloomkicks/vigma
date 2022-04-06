import classes from './Section.module.scss'

const Section = props => {
  const {
    close,
    element,
    children,
    centered,
    className,
    isHorizontal,
    ...sectionProps
  } = props

  const SectionEl = element || 'section'

  return (
    <SectionEl {...sectionProps} className={`
      ${isHorizontal ? classes.Horizontal : classes.Section || ''}
      ${close && isHorizontal && classes.CloseHorizontal || ''}
      ${close && !isHorizontal && classes.Close || ''}
      ${centered && classes.Centered || ''}
      ${className || ''}
    `.trim()}>
      {children}
    </SectionEl>
  )
}

export default Section