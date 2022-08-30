import React from 'react'
import { useState,useEffect } from "react";
import Navbar from '../Components/Navbar';
import styles from '../Modules/history.module.css';
import { useNavigate } from "react-router"

const History = () => {
  const styleNoReg={
    fontWeight: "bold",
    color: 'rgb(192, 2, 135)',
    fontSize: '150%',
    textAlign: 'center',
}
const back=()=>{
  navigate('/home')
}
  let allUsers=JSON.parse(localStorage.allOfUsers)
 let i=JSON.parse(localStorage.indexes)
 let deb=allUsers[i].fundsOut
 let cre=allUsers[i].fundsIn
 let navigate= useNavigate()
 const [debit, setdebit] = useState([])
 const [credit, setcredit] = useState([])
 useEffect(()=>{
  setdebit(deb)
  setcredit(cre)
},[])
  return (
    <> 
    <Navbar/>
    <div> 
      <center>
      <div>
        <p className={styles.p}>Debit Transactions</p>
      {debit.length==0? <div style={styleNoReg}> No Debit Transactions</div>:''}
        {debit.map((item,index)=>(
          <div key={index} className={styles.n}>
           Bank Name: {item.bankName}. <br /> Account Number:  {item.AN}.  <br />  
              Beneficiary Name: {item.aName}. <br />  
            {item.cTime} <span className={styles.debit}> - #{item.amount} </span>
          </div>
        ))}
      </div> <br />


      <div>
        <p className={styles.p2}>Credit Transactions</p>
      {credit.length==0? <div style={styleNoReg}> No Credit Transactions</div>:''}
        {credit.map((item,index)=>(
          <div key={index} className={styles.n}>
              Beneficiary Name: {item.aName}. <br />  
            {item.cTime}  <span className={styles.credit}>+ #{item.amount}</span>
          </div>
        ))}
      </div> <br />
      <button className={styles.button} onClick={back}>Go back Home</button> <br />
      </center>
      </div>
    </>
  )
}

export default History