import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import './Layout.css'

function Layout({ activePage, pageTitle, onNavigate, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function handleNavigate(pageId) {
    onNavigate(pageId)
    setIsSidebarOpen(false)
  }

  return (
    <div className="layout">
      <Sidebar
        activePage={activePage}
        isOpen={isSidebarOpen}
        onNavigate={handleNavigate}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="layout__main">
        <header className="topbar">
          <button
            type="button"
            className="menu-button"
            aria-label="Open menu"
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
          <h1 className="topbar__title">{pageTitle}</h1>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}

export default Layout
