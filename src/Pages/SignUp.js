import React from 'react'
import { useEffect,useState } from "react";
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import styles from '../Modules/signup.module.css';

const SignUp = () => {
  let navigate= useNavigate()
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [pin, setpin] = useState('')
  const [balance, setbalance] = useState(parseInt(1000))
  const [AN, setAN] = useState(Math.floor(222000000+(Math.random()*1000000)))
  const [fundsIn, setfundsIn] = useState([])
  const [fundsOut, setfundsOut] = useState([])
  const [allUsers, setallUsers] = useState([])
  const [error, seterror] = useState(false)
  const [passerror, setpasserror] = useState(false)
  const [emailerror, setemailerror] = useState(false)


  let emailRGEX= /^([\S]+)([@][a-z]{2,6})([.][a-z]{2,5})$/
	let passRGEX=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  let emailResult =emailRGEX.test(email) 
  let passResult = passRGEX.test(password)

  useEffect(() => {
    if(localStorage.allOfUsers){
       let localUser=JSON.parse(localStorage.allOfUsers)
       setallUsers(localUser)
    }
   }, [])
  const  signup= async()=>{
    if(!firstname||!lastname||!email||!password||!pin){
        seterror(true)
        setemailerror(false)
        setpasserror(false)
    } else if(emailResult==false){
        setemailerror(true)
        setpasserror(false)
        seterror(false)
    }else if(passResult==false){
      setpasserror(true)
      seterror(false)
      setemailerror(false)
    }else{
    let eachUser ={firstname,lastname,email,password,pin,balance,fundsIn,fundsOut,AN}
    await setallUsers(()=>{
        let localUsers=[...allUsers,eachUser]
        localStorage.allOfUsers=JSON.stringify(localUsers)
        return localUsers
        
    })
    seterror(false)
    setemailerror(false)
    setpasserror(false)
    setfirstname('')
    setlastname('')
    setemail('')
    setpassword('')
    setpin('')
    navigate('/signin')
}
}

  return (
    <>
<div className={styles.body} > 
<div className={styles.form} style={{backgroundImage: 'url(background.png)',backgroundRepeat: 'noRepeat'}}>
         <h1 className={styles.h1}>
    <img src="logo.png" className={styles.logo} alt="page logo"/>Yalhaji
        </h1>
        <h3>Create Account</h3>
        <h5 className={styles.h5}>It's quick and easy.</h5>

        <input className={styles.input} type="text" placeholder="First name" value={firstname} onChange={(e)=>setfirstname(e.target.value)} /> <br />

        <input  className={styles.input} type="text"  placeholder="Last name" value={lastname}  onChange={(e)=>setlastname(e.target.value)}/> <br />

        <input  className={styles.input} type="text" placeholder="Email" value={email}  onChange={(e)=>setemail(e.target.value)} /> <br />
        {emailerror? <p className='bg-danger'>Input a valid email</p>:''}
        <input  className={styles.input} type="number" placeholder="Transfer Pin" onChange={(e)=>setpin(e.target.value)}/> <br />
        <div></div>

        <input className={styles.input} type="password" placeholder="Password" value={password}  onChange={(e)=>setpassword(e.target.value)}/> <br />
        {passerror? <p className='bg-danger'>Password should contain at least one Upper case,a Lower case and a number and should be at least 8 characters!</p>:''}
        {error? <p className='bg-danger'>Input all details</p>:''}
        <div className={styles.text}>
        By clicking Sign Up, you agree to our Terms,Data Policy and Cookie Policy.You may receive SMS notifications from us and can opt out at any time.</div>
        <div></div>
        <button className={styles.button} onClick={signup}>Sign Up</button> <br />
        <div className={styles.center}> 
        <Link to='/signin' className={styles.whitecolor}>Already have an account?</Link>
        </div>
        
        <div className={styles.social}>
          <div className={styles.go}><i className="fab fa-google"></i>  Google</div>
          <div className={styles.fb}><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </div>
    </div>
    <br /><br />
    </>
  )
}

export default SignUp