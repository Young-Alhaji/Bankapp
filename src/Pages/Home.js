import React from 'react'
import { useState } from "react";
import Navbar from '../Components/Navbar';
import styles from '../Modules/home.module.css';
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';


const Home = () => {
 let allUsers=JSON.parse(localStorage.allOfUsers)
 let i=JSON.parse(localStorage.indexes)
 let navigate= useNavigate()

  return (
    <>    <Navbar/>
      <center>
        <div className={styles.body}>
            <div>
              <br />
                <p>Account(s)</p>
                <div className={styles.mainbox}>
                  <div className={styles.display}>
                    <div className={styles.firstside}>
                        Balance <br />
                        <p className={styles.amount}>#{allUsers[i].balance}</p> <br />
                        Account Number <br />
                        <p>{allUsers[i].AN}</p> 
                        <Link to='/fundaccount'>
                        <button className={styles.button1} >Fund Account</button>
                        </Link>
                    </div>
                    <div className={styles.secondside}>
                        status <br />
                        <p className={styles.amount}>Active</p> <br />
                        Type <br />
                        <p>Purple Account</p> 
                        <Link to='/home/history'>
                        <button className={styles.button1}>Transaction History</button>
                        </Link>
                    </div>
                  </div>
                </div>
            </div>
              
            <div className={styles.seconddiv}>
              <p className={styles.favorite}>My Favorites</p>
              <div>
                <Link to='/transfer'>
                <button className={styles.bigbutton}><i class="fa-solid fa-money-bill-transfer" style={{fontSize: '350%',color: 'orange'}}></i><br /> <br /> Send Money</button>
                </Link>
                <Link to='/profile'>
                <button className={styles.bigbutton}><i class="fa-solid fa-user" style={{fontSize: '360%'}}></i><br /> <br /> Profile</button>
                </Link>
                <Link to='/fundaccount'>
                <button className={styles.bigbutton}><i class="fas fa-credit-card" style={{fontSize: '350%',color:'purple'}}></i><br /> <br /> Fund Account</button>
                </Link>
              </div>
            </div> <br />
            <div>
              <div className={styles.hi}>Hi, {allUsers[i].firstname}</div>
            </div>
        </div>
      </center>
    </>
  )
}

export default Home