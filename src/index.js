import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendance from './For_attendance/Attendance';
import Student from './For_attendance/Student';
import Login from  './login'
import ForParents from './Parents/ForParents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path="attendance" element={<Attendance/>} />
          <Route path="student" element={<Student/>}/>
          <Route path="parents_portal" element={<ForParents/>}/>
          
          <Route path="student/login" element={<Login/>}/>
          
          
          
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
