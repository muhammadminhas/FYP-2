import React from 'react'
import Preprocess from '../Components/Preprocess'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ViewData from '../Components/ViewData';
import {useState,useEffect} from 'react';
import UserNav from '../Components/UserComponents/UserNav';
import ImportExport from '../Components/ImportExport';
import MakePrediction from '../Components/UserComponents/MakePrediction';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
export default function UserPage() {
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

<UserNav/>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<ViewData patients={patients}/>}>
        
      </Route>
      <Route path="/makeprediction" element={<MakePrediction />} />
      <Route path="/importexport" element={<ImportExport patients={patients} />} />
      <Route path="/preprocess" element={<Preprocess />} />
    </Routes>
  </BrowserRouter>
<Outlet/>

<Footer/>
  </>
  )
}
