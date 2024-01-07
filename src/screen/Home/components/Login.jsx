import {React, useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import {GiTeacher} from "react-icons/gi";
import {PiStudentFill} from "react-icons/pi";
import {FiX} from "react-icons/fi";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAPIEndpoint, EndPoints } from '../../../api';
import {InvalidTokenError, jwtDecode} from 'jwt-decode'

const Login = (props) => {

  const[academicRole, setAcademicRole] = useState("");
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

    const handleRoleChange = (value) => {
        setAcademicRole(value);
      }

    const handleUserChange = (value) => {
        setUserName(value);
      }
    
    const handlePasswordChange = (value) => {
        setPassword(value);
      }  

    const handleLogin = (event) => {

      event.preventDefault();

      const data={
        academic_role:academicRole,
        user_name:userName,
        pass:password
      }

        if(data.academic_role==="student"){
          createAPIEndpoint(EndPoints.user_login, ).post({userName : data.user_name ,password : data.pass}).then((res) =>{
            console.log(res);
            
            if(res.data == "Kullanıcı adı veya şifre hatalı!"){
    
              const showToastMessage = () => {
                toast.error(res.data, {
                    position: toast.POSITION.TOP_RİGHT
                });
            };
            showToastMessage();
              
            }
            else{
    
              console.log(res.data);
              navigate("/studentHome");
              localStorage.setItem("Token", res.data.accessToken);
              const decode = jwtDecode(res.data.accessToken);
              localStorage.setItem("Id", decode.id); 
              localStorage.setItem("username", decode.username); 
              localStorage.setItem("password", decode.password); 
              localStorage.setItem("fullname", decode.fullname); 
              localStorage.setItem("name", decode.name); 
              localStorage.setItem("lastname", decode.lastname); 
              localStorage.setItem("email", decode.email); 
              localStorage.setItem("academic_role", decode.academic_role); 
     
            }
    
          }).catch(err => console.log(err));
        
        }
    
    
        else if(data.academic_role==="teacher"){
          createAPIEndpoint(EndPoints.user_login).post({userName : data.user_name ,password : data.pass}).then((res) =>{
            console.log(res);
    
            if(res.data == "Kullanıcı adı veya şifre hatalı!"){
    
              const showToastMessage = () => {
                toast.error(res.data, {
                    position: toast.POSITION.TOP_RİGHT
                });
            };
            showToastMessage();
              
            }
            else{
              console.log(res.data);
              navigate("/teacherHome");
              localStorage.setItem("Token", res.data.accessToken);
              const decode = jwtDecode(res.data.accessToken);
              localStorage.setItem("Id", decode.id); 
              localStorage.setItem("username", decode.username); 
              localStorage.setItem("password", decode.password); 
              localStorage.setItem("fullname", decode.fullname); 
              localStorage.setItem("name", decode.name); 
              localStorage.setItem("lastname", decode.lastname); 
              localStorage.setItem("email", decode.email); 
              localStorage.setItem("academic_role", decode.academic_role); 
             
              
            }
    
          }).catch(err => console.log(err));
        }

        
        
    }

   
  return props.isclicked ?  (
    
    <div className={props.container}>

      
    <div className={styles.background} >

     

        <div className={styles.form}>

        <div className={styles.closeContainer}>
          <div className={props.closeShow}>
            <div className={styles.close}  onClick={() => props.closeLogin(false)}><FiX size={'2rem'}/></div>
            </div>
        
        </div>

           <form className={styles.formContainer}>


            <div className={styles.roleBox}>

              <div className={styles.selectRole}>

              <input type="radio" id="teacher" name="academic_role" value="teacher" required="required" onChange={(e) => handleRoleChange(e.target.value)}/> 
              <div className={styles.inputTitle}>
                <GiTeacher className={styles.icon} size={'2rem'} color={"#feb206"}/>
             <label style={{fontSize:"11px", fontWeight:"600"}}>Teacher</label>
             </div>

              </div>

              <div className={styles.selectRole}>

            <input type="radio" id="student" name="academic_role" value="student" required="required" onChange={(e) => handleRoleChange(e.target.value)}/>
              <div className={styles.inputTitle}>
              <PiStudentFill className={styles.icon} size={'2rem'} color={"#feb206"}/>
             <label style={{fontSize:"11px", fontWeight:"600"}} >Student</label>
              </div>
             
            </div>

              <h4 style={{padding:"0", margin:"0"}}>Select Your Academic Title</h4>
            

              </div>


            <div className={styles.inputBox}>
                <input type="text" required="required" onChange={(e) => handleUserChange(e.target.value)} />
                <span>Username</span>
                <i></i>
            </div>

            <div className={styles.inputBox}>
                <input type="password" required="required" onChange={(e) => handlePasswordChange(e.target.value)} />
                <span>Password</span>
                <i></i>
            </div>

            <div className={styles.links}>

                
                <a href='#'>Forgot My Password</a>

            </div>

            <div className={styles.buttonContainer} onClick={(event) => handleLogin(event)} >
            <input className={styles.girisButton} type="submit" value="Login"/>
            </div>
            
           </form>
           
        </div>
        <ToastContainer />
    </div>

    </div>
  )

  : ""
}

export default Login
