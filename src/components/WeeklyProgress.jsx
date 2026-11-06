import './WeeklyProgress.css'

const week = [
  { day: 'Mon', hours: 1 },
  { day: 'Tue', hours: 2 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 2.5 },
  { day: 'Fri', hours: 1 },
  { day: 'Sat', hours: 3 },
  { day: 'Sun', hours: 0.5 },
]

function WeeklyProgress() {
  const tallest = Math.max(...week.map((item) => item.hours))

  return (
    <section className="weekly">
      <div className="weekly__heading">
        <h2>Weekly learning</h2>
        <p>Sample hours for this week, shown so the layout is easy to see.</p>
      </div>
      <div className="weekly__chart">
        {week.map((item) => (
          <div key={item.day} className="weekly__column">
            <div className="weekly__track">
              <div
                className="weekly__bar"
                style={{ height: `${(item.hours / tallest) * 100}%` }}
                title={`${item.hours} hours`}
              />
            </div>
            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WeeklyProgress
