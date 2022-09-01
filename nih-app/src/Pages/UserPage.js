import React from 'react'
import Preprocess from '../Components/Preprocess'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ViewData from '../Components/ViewData';
import {useState,useEffect} from 'react';
import UserNav from '../Components/UserComponents/UserNav';
import Formpage from '../Components/UserComponents/Formpage';

import ImportExport from '../Components/ImportExport';
import MakePrediction from '../Components/UserComponents/MakePrediction';
import UserImport from '../Components/UserComponents/UserImport';
import Form from "../Components/UserComponents/Formpage";
import SelectType from '../Components/UserComponents/SelectType';
import UserNotifications from '../Components/UserComponents/UserNotifications';

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
      <Route path="/viewdata" element={<ViewData patients={patients}/>}>
        
      </Route>
      <Route path="/makeprediction" element={<MakePrediction />} />
      <Route path="/userimport" element={<UserImport patients={patients} />} />
      <Route path="/preprocess" element={<Preprocess />} />
      <Route path="/"  element={<UserNotifications />} />
      <Route path="/form" element={<Form/>}/>
      <Route path="/selecttype" element={<SelectType/>}/>
    </Routes>
  </BrowserRouter>



{/* <Footer/> */}
  </>
  )
}
