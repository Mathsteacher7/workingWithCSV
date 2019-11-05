import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Original List</Link>

          <Link to="/index" className="navbar-item">By Index</Link>
          <Link to="/city" className="navbar-item">By City</Link>
          <Link to="/country" className="navbar-item">By Country</Link>
          <Link to="/allbuildings" className="navbar-item">By All Buildings</Link>
          <Link to="/100+" className="navbar-item">By 100m+</Link>
          <Link to="/150+" className="navbar-item">By 150m+</Link>
          <Link to="/200+" className="navbar-item">By 200m+</Link>
          <Link to="/300+" className="navbar-item">By 300m+</Link>
          <Link to="/telecomtowers" className="navbar-item">By Telecom Towers</Link>
          <Link to="/allstructures" className="navbar-item">By All Structures</Link>

        </div>
      </div>
    </section>
  )
}

export default withRouter(Navbar)
