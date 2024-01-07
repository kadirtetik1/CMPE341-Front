import React from 'react'
import StudentNavbar from './components/StudentNavbar';
import EditInfo from './EditInfo';
import styles from './StudentInfos.module.css'

const StudentInfos = () => {
  return (
    <div className={styles.container}>
        <StudentNavbar/>
        <EditInfo/>

      
    </div>
  )
}

export default StudentInfos
