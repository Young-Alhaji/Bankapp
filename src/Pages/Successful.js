import styles from '../Modules/successful.module.css';
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import React from 'react'

const Successful = () => {
    let navigate=useNavigate()
    const back=()=>{
        navigate('/home')
    }
    const transfer=()=>{
        navigate('/transfer')
    }
  return (
    <>
    <Navbar/>
    <div className={styles.body}>
        <div className={styles.first}>
            Transaction Successful
        </div>
        <div>
            <button className={styles.button} onClick={back}>Go back Home</button> <br />
            <button className={styles.button} onClick={transfer}>Make Another Transfer</button>
        </div>
    </div>
    </>
  )
}

export default Successful