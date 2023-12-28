import React, { useState } from 'react'
import styles from './HomeRight.module.css'
import Login from './Login';
import Register from './Register';

const HomeRight = () => {

  const [register, setRegister] = useState(false); 
  const [login, setLogin] = useState(false); 

  function toggleRegister (){
     setRegister(!register);

     console.log(register);
  }

  function toggleLogin (){
    setLogin(!login);
    console.log(login);
 }


  return (
    <div className={styles.background}>

    <img className={styles.bgImage} src={require('../assets/splash.jpg')} alt="" />
    
    <div className={styles.buttons}>

    <div className={styles.girisButton} onClick={toggleRegister}>Register</div>
    <div className={styles.uyeButton} onClick={toggleLogin}>Login</div>

    </div>

    <Register isclicked={register} closeRegister={setRegister} />
    <Login isclicked={login} closeLogin={setLogin} />
   
    
  
</div>
  )
}

export default HomeRight
