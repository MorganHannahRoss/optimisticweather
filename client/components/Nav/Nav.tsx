import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <>
      <div>
        <p>Hello, Nav World!</p>
        <NavLink to='/activities'>Activities</NavLink>
        <NavLink to='/events'>Events</NavLink>
        <NavLink to='/clothing'>clothing</NavLink>
        <NavLink to='/ai'>ai</NavLink>
      </div>
    </>
  )
}

export default Nav
