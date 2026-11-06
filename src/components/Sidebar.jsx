import './Sidebar.css'

const items = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'skills', label: 'My Skills' },
  { id: 'goals', label: 'Learning Goals' },
  { id: 'progress', label: 'Progress' },
  { id: 'settings', label: 'Settings' },
]

function Sidebar({ activePage, isOpen, onNavigate, onClose }) {
  return (
    <>
      <button
        type="button"
        className={isOpen ? 'sidebar-backdrop is-visible' : 'sidebar-backdrop'}
        aria-label="Close menu"
        onClick={onClose}
      />
      <aside className={isOpen ? 'sidebar is-open' : 'sidebar'}>
        <div className="sidebar__brand">
          <span className="sidebar__mark">ST</span>
          <div>
            <p className="sidebar__name">SkillTrack</p>
            <p className="sidebar__tag">Skill progress</p>
          </div>
        </div>

        <nav className="sidebar__nav" aria-label="Main">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                activePage === item.id
                  ? 'sidebar__link is-active'
                  : 'sidebar__link'
              }
              aria-current={activePage === item.id ? 'page' : undefined}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
