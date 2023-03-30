import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Tech Company Sentimental Analysis</Link>
      </div>
    </div>
  )
}
