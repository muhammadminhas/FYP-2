import React from 'react'
import Preprocess from '../Components/Preprocess'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ViewData from '../Components/ViewData';
import AdminNav from '../Components/AdminNav';
import {useState,useEffect} from 'react';
import ImportExport from '../Components/ImportExport';
import AdminNotifications from '../Components/AdminNotifications';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
export default function AdminPage() {
  const [records,setRecord] = useState([]);
  const insertedRecord =(record)=>{
    const new_record = [...records,record]
    setRecord(new_record)
  }

  const [patients,setPatients] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/get',{
        'method' : 'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setPatients(resp),
      console.log(patients)
      )
      .catch(error => console.log(error))

  },[])
  return (
<>

<AdminNav/>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<ViewData patients={patients}/>}>
        
      </Route>
      <Route path="/importexport" element={<ImportExport patients={patients} insertedRecord={insertedRecord}/>} />
      <Route path="/preprocess" element={<Preprocess insertedRecord={insertedRecord} />} />
      <Route path="/adminnotifications" element={<AdminNotifications/>} />
    </Routes>
  </BrowserRouter>

<Footer/>
  </>
  )
}
