import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link className="Link" to="/">Home</Link></li>
          <li><Link className="Link" to="/About">About</Link></li>
          <li><Link className="Link" to="/contact">Contact us</Link></li>
          <li><Link className="Link" to="/Footer">Footer</Link></li>
          <li><Link className="Link" to="/useState">useState</Link></li>
          <li><Link className="Link" to="/useEffect">useEffect</Link></li>
          <li><Link className="Link" to="/UseRef">UseRef</Link></li>
          <li><Link className="Link" to="/useMemo">useMemo</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
