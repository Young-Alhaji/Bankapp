import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../Modules/navbar.module.css';
const Navbar = () => {

    function openNav() {
        document.getElementById("mySidenav").style.width = "310px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

  return (
    <>
        <div>
            <div id="mySidenav" className={styles.sidenav}>
                <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}>&times;</a>
                <i class="fa-solid fa-user" style={{marginLeft: '100px',fontSize: '600%'}}></i> <br /><br />
                <Link to="/home"><i class="fa-solid fa-house" style={{marginRight: '17px',fontSize: '120%'}}></i>Home</Link>
                <Link to="/profile"><i class="fa-solid fa-user" style={{marginRight: '15px',fontSize: '170%'}}></i>Profile</Link>
                <Link to="/transfer"><i class="fa-solid fa-money-bill-transfer" style={{marginRight: '15px',fontSize: '120%'}}></i>Send Money</Link>
                <Link to="/home/history"><i class="fa-solid fa-phone" style={{marginRight: '15px',fontSize: '150%'}}></i>Transaction history</Link>
                <Link to="/fundaccount"><i class="fas fa-credit-card" style={{marginRight: '15px',fontSize: '120%'}}></i>Fund Account</Link>
                <Link to="/signin"><i class="fa-solid fa-right-from-bracket" style={{marginRight: '15px',fontSize: '150%'}}></i>Log Out</Link>
                
            </div>
            <div className={styles.backgroundcolor}>
                <span className={styles.navicon} onClick={openNav}>&#9776;</span>
            </div>
        </div>
    </>
  )
}

export default Navbar