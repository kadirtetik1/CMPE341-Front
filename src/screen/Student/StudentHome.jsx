import React from 'react'
import CourseCard from '../../components/CourseCard';
import StudentNavbar from './components/StudentNavbar';
import styles from './StudentHome.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const StudentHome = () => {
  return (
    <div>
      <StudentNavbar/>

      <div className={styles.title}>
        <h2>Engineering</h2>
      </div>

<Swiper className={styles.swiper1}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      
    >

<SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Kadir Tetik" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Engineering" price="9.9 $" courseTitle="Object-Oriented Programming" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Abdullah Najm" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Engineering" price="19.9 $" courseTitle="Algorithms" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Eren Ertem" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Engineering" price="15.9 $" courseTitle="Database Management" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Zakariya Younis" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Engineering" price="12.9 $" courseTitle="C# Programming" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Yaseen Elkmeshi" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Engineering" price="15.9 $" courseTitle="Circuit Design" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Ahmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Engineering" price="16.9 $" courseTitle="Mechanical Elements" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Engineering" price="9.9 $" courseTitle="Computer Aided Design" />
      </SwiperSlide>

      </Swiper>


      <div className={styles.title}>
        <h2>Architecture</h2>
      </div>

<Swiper  className={styles.swiper1}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      
    >

<SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Architecture" price="19.9 $" courseTitle="History of Art" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Architecture" price="19.9 $" courseTitle="History of Art" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Architecture" price="19.9 $" courseTitle="History of Art" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Architecture" price="19.9 $" courseTitle="History of Art" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Architecture" price="19.9 $" courseTitle="History of Art" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Architecture" price="19.9 $" courseTitle="History of Art" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Architecture" price="19.9 $" courseTitle="History of Art" />
      </SwiperSlide>

      </Swiper>


      <div className={styles.title}>
        <h2>Science</h2>
      </div>

<Swiper className={styles.swiper1}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      
    >

<SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Science" price="19.9 $" courseTitle="Physics" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Science" price="19.9 $" courseTitle="Physics" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Science" price="19.9 $" courseTitle="Physics" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Science" price="19.9 $" courseTitle="Physics" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Science" price="19.9 $" courseTitle="Physics" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Science" price="19.9 $" courseTitle="Physics" />
      </SwiperSlide>

      <SwiperSlide style={{paddingBottom:"30px"}}>
 <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://t3.ftcdn.net/jpg/02/89/99/86/360_F_289998619_hnJKgNQmbDwzph9m9t1ku3IR69mhl6SJ.jpg"
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg" button="Enroll"
      departmentName="Science" price="19.9 $" courseTitle="Physics" />
      </SwiperSlide>

      </Swiper>


      
    </div>
  )
}

export default StudentHome
