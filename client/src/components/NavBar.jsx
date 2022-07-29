import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


function NavBar() {
  return (
    <div className={styles.navBar}>
    <ul>
    <li><Link to='/'>HomePage</Link></li>
    <li><Link to='/form'>Form</Link></li>
    </ul>
    </div>
  )
}

export default NavBar