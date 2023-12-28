import React from 'react'
import style from './UserInfosTeacher.module.css'
import UserInfoAreas from '../../../components/UserInfoAreas';
import {FiX} from "react-icons/fi";
import { BiUser} from "react-icons/bi";
import { LuLibrary} from "react-icons/lu";
import { AiOutlineSchedule} from "react-icons/ai";
import { LuLogOut} from "react-icons/lu";

const UserInfosTeacher = (props) => {
    const name = localStorage.getItem("fullname");
    const username = localStorage.getItem("username");
  
    let profilPicture="https://img.freepik.com/premium-photo/young-student-boy-smiling-happily-with-hand-hip-confident-positive-proud-friendly-attitude_1194-309973.jpg"
  
    
    return props.isclicked ? (
      <div className={style.background}>
  
          <div className={style.container} >
  
          <div className={style.closeContainer}>
            
              <div className={style.userNameImage}>
                  <div className={style.userImage}><img src={profilPicture} alt="" className={style.image}></img></div> {/* Daha sonra profil fotosunu ekle ve db'den çek! */}
                  <div className={style.names}>
                      <div className={style.userName}>{username}</div>
                      <div className={style.realName}>{name}</div>
                  </div>
              </div>
              <div className={style.close}  onClick={() => props.closeInfo(false)}><FiX size={'2rem'}/></div>
          </div>
  
          <UserInfoAreas title="Update Informations" icon={<BiUser style={{color:"black"}} size={20}/>}/>
          <UserInfoAreas title="My Courses" icon={<LuLibrary style={{color:"black"}} size={20}/>}/>
          <UserInfoAreas title="Courses Schedule" icon={<AiOutlineSchedule style={{color:"black"}} size={20}/>}/>
          <UserInfoAreas title="Exit" icon={<LuLogOut style={{color:"red"}} size={20}/>}/>
  
  
          </div>
        
      </div>
    )
  
    :""
}

export default UserInfosTeacher
