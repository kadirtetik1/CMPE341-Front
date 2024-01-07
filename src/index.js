import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentHome from './screen/Student/StudentHome';
import TeacherHome from './screen/Teacher/TeacherHome';
import Login from './screen/Home/components/Login';
import styles from './screen/Home/components/Login.module.css'
import UserInfos from './components/UserInfos';
import StudentInfos from './screen/Student/StudentInfos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>

  <Routes>

  <Route>
    <Route path="studentHome" element={ <StudentHome/> } />
    <Route path="teacherHome" element={ <TeacherHome/>} />
    <Route path="studentInfos" element={<StudentInfos/>} />
  </Route>


  <Route index element={<App />} />
  <Route path="login" element={<Login isclicked="true" closeShow={styles.closeShow} container={styles.containerBg} />} />

  </Routes>

  </BrowserRouter>

);

reportWebVitals();
