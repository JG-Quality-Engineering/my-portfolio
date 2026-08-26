import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        About
      </NavLink>
      <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
        Experience
      </NavLink>
      <NavLink to="/genai" className={({ isActive }) => (isActive ? 'active' : '')}>
        GenAI
      </NavLink>
    </nav>
  )
}

export default NavBar
