import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className='nav-list-container'>
        <div className="nav-list">
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/clothing">Clothing</NavLink>
          {/* temp link for popup */}
          <NavLink to="/ai">AI</NavLink>
        </div>
      </div>
    </>
  )
}

export default Nav
