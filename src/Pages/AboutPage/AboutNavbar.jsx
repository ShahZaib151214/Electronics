import React, { useState } from 'react'
import styles from './AboutNavbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom'
const AboutNavbar = () => {
  
  const navigate = useNavigate()
    const [active , setactive] = useState('about')
  return (
    <nav className={`navbar navbar-expand-sm navbar-light ${styles.navbar}`}>
    <div className="container">
      <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
        <strong>Your Logo</strong>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className={`navbar-nav ms-auto ${styles.navbarNav}`}>
        <li className="nav-item dropdown">
        <Link
        to = '/'
          className={`nav-link dropdown-toggle ${styles.navLink} ${active === 'home' ? styles.active : ''}`}
          id="homeDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => {setActive('home');navigate('/')}}
        >
          Home
        </Link>
        <ul className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="homeDropdown">
          <li><Link className="dropdown-item" to="/home/submenu1">Submenu 1</Link></li>
          <li><Link className="dropdown-item" to="/home/submenu2">Submenu 2</Link></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <Link
          className={`nav-link dropdown-toggle ${styles.navLink} ${active === 'electronics' ? styles.active : ''}`}
          id="electronicsDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setActive('electronics')}
        >
          Electronics
        </Link>
        <ul className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="electronicsDropdown">
          <li><Link className="dropdown-item" to="/electronics/item1">Item 1</Link></li>
          <li><Link className="dropdown-item" to="/electronics/item2">Item 2</Link></li>
        </ul>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${styles.navLink} ${active === 'contact' ? styles.active : ''}`}
          to="/contact"
          onClick={() => {setActive('contact');navigate('/contact');}}
        >
          Contacts
        </Link>
      </li>

      <li className="nav-item dropdown">
        <Link
        to = '/about'
          className={`nav-link dropdown-toggle ${styles.navLink} ${active === 'about' ? styles.active : ''}`}
          id="aboutDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => { setActive('about'); navigate('/about'); }}
        >
          About
        </Link>
        <ul className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="aboutDropdown">
          <li><Link className="dropdown-item" to="/about/info">Info</Link></li>
          <li><Link className="dropdown-item" to="/about/team">Team</Link></li>
        </ul>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${styles.navLink} ${active === 'login' ? styles.active : ''}`}
          to="/login"
          onClick={() => {setActive('login');navigate('/login');}}
        >
          Login
        </Link>
      </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default AboutNavbar;