import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../Modules/signin.module.css';
import { useNavigate } from "react-router"

const SignIn = ({allUsers}) => {
  let navigate= useNavigate()
  const [found, setfound] = useState(false)
  const [logemail, setlogemail] = useState('')
  const [logpassword, setlogpassword] = useState('')
  const [error, seterror] = useState(false)

  const signin=()=>{
    allUsers=JSON.parse(localStorage.allOfUsers)
		 for (let i = 0; i<allUsers.length ; i++) {
		 	if(logemail==allUsers[i].email && logpassword==allUsers[i].password){
		 		localStorage.indexes=JSON.stringify(i)
		 		setfound(true)
         navigate('/home')
		 	}
		 }
     if(found==false){
        seterror(true)
     }
}
  return (
    <>
        <div >
            <div className={styles.form} style={{backgroundImage: 'url(background.png)'}}>
             <h1 className={styles.h1}>
                <img className={styles.logo} src="logo.png" alt="page logo"/>Yalhaji
             </h1>
             <h3 className={styles.h3}>Sign In</h3>

            <input className={styles.input} type="text" placeholder="Email" id="emai" onChange={(e)=>setlogemail(e.target.value)}/> <br/>

            <input className={styles.input} type="password" placeholder="Password" id="pass" onChange={(e)=>setlogpassword(e.target.value)}/> <br/> <br/>
            {error? <p className='bg-danger'>Invalid email or password inputed</p>:''}
            <button  className={styles.button} onClick={signin}>Sign In</button> <br/> <br/>
            <div></div>
            <div className={styles.center}> 
            <Link to='/signup' className={styles.whitecolor}>Don't have an account yet?</Link>
            </div>
            <div className={styles.social}>
            <div className={styles.go}><i className="fab fa-google"></i>  Google</div>
            <div className={styles.fb}><i className="fab fa-facebook"></i>  Facebook</div>
            </div>
            </div>
        </div>
    </>
  )
}

export default SignIn