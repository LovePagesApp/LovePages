
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  return (
    <nav className="bg-white shadow p-4 flex justify-around">
      <Link to="/" className={location.pathname === '/' ? 'font-bold' : ''}>Library</Link>
      <Link to="/search" className={location.pathname === '/search' ? 'font-bold' : ''}>Search</Link>
      <Link to="/login" className={location.pathname === '/login' ? 'font-bold' : ''}>Login</Link>
    </nav>
  )
}

export default NavBar
