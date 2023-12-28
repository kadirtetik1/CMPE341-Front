import React from 'react'
import HomeLeft from './components/HomeLeft';
import HomeRight from './components/HomeRight';
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.background}>
   <HomeLeft/>
   <HomeRight/>
  
</div>
  )
}

export default Home
