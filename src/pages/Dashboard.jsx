import Welcome from '../components/Welcome.jsx'
import StatCard from '../components/StatCard.jsx'
import WeeklyProgress from '../components/WeeklyProgress.jsx'
import './Dashboard.css'

const stats = [
  { label: 'Total Skills', value: '6', detail: 'Skills you plan to track' },
  { label: 'Active Goals', value: '3', detail: 'Goals still in progress' },
  { label: 'Completed Goals', value: '2', detail: 'Goals you have finished' },
  { label: 'Learning Progress', value: '45%', detail: 'Average progress so far' },
]

function Dashboard() {
  return (
    <div className="dashboard">
      <Welcome />
      <section className="dashboard__stats" aria-label="Summary">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            detail={stat.detail}
          />
        ))}
      </section>
      <WeeklyProgress />
    </div>
  )
}

export default Dashboard
