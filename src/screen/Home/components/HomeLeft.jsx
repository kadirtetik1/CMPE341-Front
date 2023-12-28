import React from 'react'
import styles from './HomeLeft.module.css'

import {BiTimer} from 'react-icons/bi';
import {IoPeopleSharp} from 'react-icons/io5';
import { GiMoneyStack } from "react-icons/gi";

const HomeLeft = () => {
  return (
    <div className={styles.background}>


    <div className={styles.titles}>

    <h1>Welcome To Learnify.US</h1>
    <div className={styles.titleLine}>
        <div className={styles.titleLine2}></div>
    </div>

    <h2>Find Subjects You Interest and Start <span style={{color:"#01b671"}}>Learnify</span> With <span style={{color:"#feb206"}}>US!</span></h2>

    </div>

    <div className={styles.features}>

    <div className={styles.feature1}>
        
        <h3 className={styles.featuresTitle}><BiTimer style={{color:"#0076fa", size:"5em"}}/>Flexible Lesson Hours</h3>
        <p className={styles.featuresText}>Instead of traditional classes with specific start and end times, set your own study hours.</p>
    </div>

    <div className={styles.feature2}>
      
        <h3 className={styles.featuresTitle}><GiMoneyStack style={{color:"#01b671"}}/>Quality Lessons for Much Cheaper</h3>
        <p className={styles.featuresText}>In the comfort of private lessons, it is a much cheaper option than face-to-face lessons. </p>
    </div>

    <div className={styles.feature1}>
      
        <h3 className={styles.featuresTitle}><IoPeopleSharp style={{color:"#feb206"}}/>24/7 Communication</h3>
        <p className={styles.featuresText}>You can instantly contact the course instructor on topics you do not understand and get quick answers to your questions. </p>
    </div>

    </div>

  
</div>
  )
}

export default HomeLeft
