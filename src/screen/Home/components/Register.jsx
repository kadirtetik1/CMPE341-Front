import {React, useState} from 'react'
import styles from './Register.module.css'
import {FiX} from "react-icons/fi";
import {GiTeacher} from "react-icons/gi";
import {PiStudentFill} from "react-icons/pi";
import {useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = (props) => {


  const[academicRole, setAcademicRole] = useState("");
  const[name, setName] = useState("");
  const[lastName, setLastName] = useState("");
  const[mail, setMail] = useState("");
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRoleChange = (value) => {
    setAcademicRole(value);
  }

  const handleNameChange = (value) => {
    setName(value);
  }

  const handleLastNameChange = (value) => {
    setLastName(value);
  }

  const handleMailChange = (value) => {
    setMail(value);
  }

  const handleUserChange = (value) => {
    setUserName(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }

  const handleRegister = (event) => {

    event.preventDefault()
    

    const data ={
      first_name : name,   //Soldaki backendden gelen, sağdaki reacttan gelen adlandırmalar.
      last_name: lastName,
      academic_role: academicRole,
      e_mail: mail,
      user_name: userName,
      password: password
    };


    console.log(data);

    const showToastMessage = () => {
        toast.success('Registration Successful!', {
            position: toast.POSITION.TOP_RİGHT
        });
    };
    
    showToastMessage();
    

}




    return props.isclicked ? (
        <div className={styles.background} >
    
            <div className={styles.form}>
    
            <div className={styles.closeContainer}>
                <div className={styles.close}  onClick={() => props.closeRegister(false)}><FiX size={'2rem'}/></div>
            </div>
    
            <form className={styles.formContainer}>
    
              <div className={styles.roleBox}>
    
                      <div className={styles.selectRole}>
    
                      <input type="radio" id="teacher" name="academic_role" value="teacher" required="required" onChange={(e) => handleRoleChange(e.target.value)}/>
                      <div className={styles.inputTitle}>
                        <GiTeacher className={styles.icon} size={'2rem'} color={"#0076fa"}/>
                     <label style={{fontSize:"11px", fontWeight:"600"}} for="teacher">Teacher</label>
                     </div>
    
                      </div>
    
                      <div className={styles.selectRole}>
    
                      <input type="radio" id="student" name="academic_role" value="student" required="required" onChange={(e) => handleRoleChange(e.target.value)}/>
                      <div className={styles.inputTitle}>
                      <PiStudentFill className={styles.icon} size={'2rem'} color={"#0076fa"}/>
                     <label style={{fontSize:"11px", fontWeight:"600"}} for="student">Student</label>
                      </div>
                     
                    </div>
    
                      <h4 style={{padding:"0", margin:"0"}}>Select Your Academic Title</h4>
                    
    
                      </div>
                    
            <div className={styles.inputBox}>
                        <input type="text" required="required" onChange={(e) => handleNameChange(e.target.value)} />
                        <span>Name</span>
                        <i></i>
                    </div>
    
                    <div className={styles.inputBox}>
                        <input type="text" required="required" onChange={(e) => handleLastNameChange(e.target.value)} />
                        <span>Lastname</span>
                        <i></i>
                    </div>
                    
                    <div className={styles.inputBox}>
                        <input type="text" required="required" onChange={(e) => handleMailChange(e.target.value)}/>
                        <span>E-mail</span>
                        <i></i>
                    </div>
    
    
                    <div className={styles.inputBox}>
                        <input type="text" required="required" onChange={(e) => handleUserChange(e.target.value)}/> 
                        <span>Username</span>
                        <i></i>
                    </div>
    
                    <div className={styles.inputBox}>
                        <input type="password" required="required" onChange={(e) => handlePasswordChange(e.target.value)} /> 
                        <span>Password</span>
                        <i></i>
                    </div>
    
                    <div 

                    onClick={(event) => {
                      handleRegister(event)
                    }} 

                    className={styles.buttonContainer}>
                    <input className={styles.uyeButton} type="submit" value="Register"/>
                    </div>
                    
                   </form>
    
                   
            </div>
            <ToastContainer />
        </div>
      )
    
      : ""
}

export default Register
