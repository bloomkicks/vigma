import classes from './Work.module.css'

const Work = props => {
  const {
    photos,
    name
  } = props

  console.log(photos[0])

  return (
    <section className={classes.Work}>
      <div className={classes.ImageContainer}>
        {photos.map(photo => {
          return <img src={photo} key={Math.random()} />
        })}
      </div>
      <h2>{name}</h2>
    </section>
  )
}

export default Work