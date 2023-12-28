import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './TeacherNavbar.module.css'
import { BiUser} from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import UserInfosTeacher from './UserInfosTeacher';
import Categories from '../../../components/Categories';

const TeacherNavbar = () => {

    const [userInfos, setUserInfos] = useState(false);

    function toggleUserInfos (){
        setUserInfos(!userInfos);
       
     }


  return (
    <div>
      <div className={styles.container}>

<Link style={{ textDecoration: 'none' }} className={styles.logo} to="/teacherHome"><h1>Logo</h1></Link>

<div className={styles.searchContainer}>
<input className={styles.searchInput} type="text" placeholder='Search Courses...'/>
<div className={styles.searchIcon}>
<FiSearch style={{color:"black"}} size={20}/>
</div>

</div>

<ul className={styles.navItemsRight}>

    <li>
        <Link style={{ textDecoration: 'none' }} to="/teachersHome">  {/* teacher =>   to="/teachersHome" ÇÖZ!  */}
        <div className={styles.navItem} whileHover={{scale:1.1}}>
            Home
        </div>
        </Link>
    </li>

    <li>
        <Categories/>
    </li>

    <li>
        <Link style={{ textDecoration: 'none' }} to="/create-course" > 
        <div className={styles.navItem} whileHover={{scale:1.1}}>
            Create Course
        </div>
        </Link>
    </li>

    <li>
        <Link style={{ textDecoration: 'none' }} to="/my-courses" >  
        <div className={styles.navItem} whileHover={{scale:1.1}}>
            My Courses
        </div>
        </Link>
    </li>

    <li>
        <Link style={{ textDecoration: 'none' }}>
        <div className={styles.navItem} whileHover={{scale:1.1}}>
            <div onClick={toggleUserInfos} className={styles.userIcon}>
            <BiUser style={{color:"black"}} size={25}/>
            </div>
        
        </div>
        </Link>
    </li>


</ul>
</div>
<UserInfosTeacher isclicked={userInfos} closeInfo={setUserInfos}/>
    </div>
  )
}

export default TeacherNavbar
