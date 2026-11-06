import './Welcome.css'

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
})

function Welcome() {
  return (
    <section className="welcome">
      <p className="welcome__date">{today}</p>
      <h2>Welcome to SkillTrack</h2>
      <p className="welcome__text">
        Keep your skills, goals, and learning progress in one calm place.
      </p>
    </section>
  )
}

export default Welcome
