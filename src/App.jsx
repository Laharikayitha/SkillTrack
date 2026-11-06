import { useState } from 'react'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SimplePage from './pages/SimplePage.jsx'

const pages = {
  dashboard: {
    title: 'Dashboard',
    render: () => <Dashboard />,
  },
  skills: {
    title: 'My Skills',
    render: () => (
      <SimplePage
        title="My Skills"
        message="This page will hold the skills you want to learn. We will add that later."
      />
    ),
  },
  goals: {
    title: 'Learning Goals',
    render: () => (
      <SimplePage
        title="Learning Goals"
        message="This page will hold your learning goals. We will add that later."
      />
    ),
  },
  progress: {
    title: 'Progress',
    render: () => (
      <SimplePage
        title="Progress"
        message="This page will show how your learning changes over time. We will add that later."
      />
    ),
  },
  settings: {
    title: 'Settings',
    render: () => (
      <SimplePage
        title="Settings"
        message="This page will hold app settings. We will add that later."
      />
    ),
  },
}

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const page = pages[activePage]

  return (
    <Layout
      activePage={activePage}
      pageTitle={page.title}
      onNavigate={setActivePage}
    >
      {page.render()}
    </Layout>
  )
}

export default App
