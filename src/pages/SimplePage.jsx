import './SimplePage.css'

function SimplePage({ title, message }) {
  return (
    <section className="simple-page">
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  )
}

export default SimplePage
