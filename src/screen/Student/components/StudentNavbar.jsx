import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './StudentNavbar.module.css'
import { BiUser} from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import UserInfos from '../../../components/UserInfos';
import Categories from '../../../components/Categories';

const StudentNavbar = () => {


    const [userInfos, setUserInfos] = useState(false);

    function toggleUserInfos (){
        setUserInfos(!userInfos);
       
     }


  return (
    <div>

<div className={styles.container}>

<Link style={{ textDecoration: 'none' }} className={styles.logo} to="/studentHome"><h1>Logo</h1></Link>

<div className={styles.searchContainer}>
<input className={styles.searchInput} type="text" placeholder='Search Courses...'/>
<div className={styles.searchIcon}>
<FiSearch style={{color:"black"}} size={20}/>
</div>

</div>

<ul className={styles.navItemsRight}>

    <li>
        <Link style={{ textDecoration: 'none' }} to="/studentHome">  {/* teacher =>   to="/teachersHome" ÇÖZ!  */}
        <div className={styles.navItem} whileHover={{scale:1.1}}>
            Home
        </div>
        </Link>
    </li>

    <li>
        {/* <Link style={{ textDecoration: 'none' }} to="/add-drop"  >
        <div className={styles.navItem} whileHover={{scale:1.1}}>
            Categories
        </div>
        </Link> */}

       <Categories/>

    </li>

    <li>
        <Link style={{ textDecoration: 'none' }} to="/given-courses" > 
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
<UserInfos isclicked={userInfos} closeInfo={setUserInfos}/>
      
    </div>
  )
}

export default StudentNavbar
