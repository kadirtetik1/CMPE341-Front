import React, { useEffect, useState } from 'react';
import styles from './EditInfo.module.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';
import { LiaEdit} from "react-icons/lia";
import EditAreas from './components/EditAreas';
import EditPassword from './components/EditPassword';
import { createAPIEndpoint, EndPoints } from '../../api';
import {useNavigate } from 'react-router-dom'

const EditInfo = (props) => {


    const [res, setRes] = useState(null);

    const userId= localStorage.getItem("Id");   //localden Id çekiyor.
    
    const [edit, setEdit] = useState(false);
    const [def, setDef] = useState(true);
    const [show, setShow] = useState(true);

    const navigate = useNavigate();
    
    let editColor ="";
    
    const editSuccess = () => {
      toast.info("You Can Update Your Information!", {    // 2 Defa gönderiyor çöz....
          position: toast.POSITION.TOP_RIGHT
      });
    };
    
    const kaydetSuccess = () => {
      toast.success("Successfully Updated!", {
          position: toast.POSITION.BOTTOM_RIGHT
      });
    };
    
    const kaydetError = () => {
      toast.error("Bir Hatayla Karşılaşıldı!", {
          position: toast.POSITION.BOTTOM_RIGHT
      });
    };
    
    const errorEmptyAreas = () => {
      toast.error("Lütfen Boş Bırakılan Alanları Doldurunuz!", {
          position: toast.POSITION.BOTTOM_RIGHT
      });
    };

    const deleteAccount = () => {
      alert("Are you sure ?")

      createAPIEndpoint(EndPoints.user).delete(userId).then(put =>{
        console.log(put);
  
        if(put?.status===200){
          setTimeout(() => window.location.reload(), 1000);

          navigate("/");
          
            localStorage.clear();
          
        }
    
      }).catch(err => { 
        console.log(err);
  
      });

    }
    
      const[fname, setFname] = useState("");
      const[lname, setLname] = useState("");
      const[academicRole, setAcademicRole] = useState("");
      const[mail, setMail] = useState("");
      const[usern, setUserN] = useState("");
      const[pass, setPass] = useState("");
    
      const handleNameChange = (value) => {
    
        if(value!=""){  //1 değişken daha oluştur eğer "" değilse db'ye gönder?
          setFname(value);
          
        }
        else{
          setFname("");
          
        }
    
    }
    
      const handleLastNChange = (value) => {setLname(value);}
      const handleRoleChange = (value) => {setAcademicRole(value);}
      const handleMailChange = (value) => {setMail(value);}
      const handleUserNameChange = (value) => {setUserN(value);}
      const handlePasswordChange = (value) => {setPass(value);}
    
      const role = "student"; 
    
    
      useEffect(() => {
    
        if(role==="student"){
    
          createAPIEndpoint(EndPoints.user).get(userId).then((res) =>{
            setRes(res);
      
            console.log(res); 
            console.log("res"); 
          
          }).catch(err => console.log(err));
          
        }

      }, [])
    
      
    
    function updateInfos(){
    
      let name1= " ";
      let last_name1 = " ";
      let academic_role1 = "student";
      let e_mail1 = " ";
      let user_name1 = " ";
      let password1 = " ";
    
    
      fname!=""? name1=fname : name1=name;    // Eğer onchangede değişiklik yoksa db'ye eski halini göndermesi için yazıldı.
      lname!=""? last_name1=lname : last_name1=last_name;
      mail!=""? e_mail1=mail : e_mail1=e_mail;
      pass!=""? password1=pass : password1=password;
      usern!=""? user_name1=usern : user_name1=user_name;
      
     
    

      const data ={
        Id: userId,
        Name : name1,   //Soldaki backendden gelen, sağdaki reacttan gelen adlandırmalar.
        LastName: last_name1,
        AcademicRole: academic_role1,
        EMail: e_mail1,
        UserName: user_name1,
        Password: password1
      };
    
      if(role==="student"){
    
        createAPIEndpoint(EndPoints.user).put(data).then(put =>{
          console.log(put);
    
          if(put?.status===200){
            kaydetSuccess();
            setTimeout(() => window.location.reload(), 1000);
            
          }
      
        }).catch(err => { 
          console.log(err);
          if(err.message==="Request failed with status code 400"){
      
            errorEmptyAreas();
          }
          else{
            kaydetError();
          }
    
        });
    
      }
    
    
      // Registerdaki gibi sisteme kayıtlı aynı kullanıcı adı veya e posta varsa değiştirmesine izin verme!
    
      
    }
    
    
      function toggleEdit (){
        setEdit(!edit);
        setShow(!show);
        setDef(!def);
       
        edit ? editColor="black" : editSuccess();
     }
    
    edit ? editColor="#01b671" : editColor="black";
    
    let profilPicture = "";
    
    profilPicture="https://img.freepik.com/premium-photo/young-student-boy-smiling-happily-with-hand-hip-confident-positive-proud-friendly-attitude_1194-309973.jpg"
    
    
      console.log(res?.data);
    
      let name= res?.data.name;
      let last_name = res?.data.lastName;
      let academic_role = res?.data.academicRole;
      let e_mail = res?.data.eMail;
      let user_name = res?.data.userName;
      let password = res?.data.password;
    
      let fullname= name + " " + last_name;
    
      localStorage.setItem("username", user_name); // Değişiklik olduğunda sağ taraftaki bilgileri de güncellesin diye yazıldı..
      localStorage.setItem("fullname", fullname);
      
    
      let inputClassName=styles.formInput;
    
      show ? inputClassName=styles.formInputDisabled : inputClassName=styles.formInput;



  return (
    <div className={styles.container1}>

    <div className={styles.container}>

        <div className={styles.infosContainer}>
            <img src={profilPicture} alt="" className={styles.image}></img>
            <div className={styles.infos}>
                <div className={styles.realName}>{name} {last_name}</div>
                <div className={styles.userName}>{user_name}</div>
                {/* <div className={styles.academicRole}>{academic_role}</div> */}
            </div>
          
        </div>
      <form className={styles.formContainer}>

        <div className={styles.edit} isclicked={edit}  onClick={() => {toggleEdit(); }}> <LiaEdit size={25} color={editColor}/></div>

        <EditAreas classname={inputClassName} type="text" label="Name:" input={name} readOnly={show} onChange={ (e) => {handleNameChange(e.target.value) }}/>
        <EditAreas classname={inputClassName} type="text" label="Lastname:" input={last_name} readOnly={show} onChange={(e) => handleLastNChange(e.target.value)}/>
        <EditAreas classname={inputClassName} type="email" label="E-mail:" input={e_mail} readOnly={show} onChange={(e) => handleMailChange(e.target.value)}/>
        <EditAreas classname={inputClassName} type="text" label="Username:" input={user_name} readOnly={show} onChange={(e) => handleUserNameChange(e.target.value)}/>
        <EditPassword classname={inputClassName} type="password" label="Password:" input={password} readOnly={show} onChange={(e) => handlePasswordChange(e.target.value)}/>
        <div isclicked={edit} onClick={() => {

          toggleEdit(); 
          updateInfos();

            }} className={styles.updateOuter}>
                <div className={styles.updateInner}>Update</div>
            </div>

            <div className={styles.deleteContainer} onClick={() =>{

              deleteAccount();

            }}>
        <h2>Delete My Account</h2>
      </div>

      </form>

    </div>
    <ToastContainer/>
   
    </div>
  )
}

export default EditInfo

