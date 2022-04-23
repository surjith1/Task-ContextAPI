import './App.css';
import SideBar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import EditStudents from './components/EditStudents';
export const studentContext=React.createContext();

function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  };
  let [students,setStudents] = useState([
    {
      name:"Naga",
      email:"naga@gmail.com",
      mobile:"123123123",
      batch:"B20",
      status:true
    },
    {
      name:"Raj",
      email:"raj@gmail.com",
      mobile:"32154987",
      batch:"B31",
      status:false
    }
  ]);
  return <>
 
    <div className="main-wrap">
    <BrowserRouter>
      <div className="left-sec">
        <SideBar/>
      </div>
      <div className="middle-sec">
    <studentContext.Provider value={{students, setStudents}}>
      <Routes>
      <Route path="/" element={<Dashboard data={data}/>}></Route>
      <Route path="/addstudent" element={<AddStudent data={{students,setStudents}} />}></Route>
      <Route path="/allstudents" element={<AllStudents />}></Route>
      <Route path="/editstudents/:id" element={<EditStudents data={{students,setStudents}} />}></Route>
      </Routes>
      </studentContext.Provider>
      </div>
      </BrowserRouter>
    </div>
  </>
}

export default App;