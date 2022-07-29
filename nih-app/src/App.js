import logo from './logo.svg';
import './App.css';
import Preprocess from './Components/Preprocess'
import Header from './Components/Header';
import Footer from './Components/Footer';
import ViewData from './Components/ViewData';
import ImportExport from './Components/ImportExport';
import AdminPage from './Pages/AdminPage'
import UserPage from './Pages/UserPage'
import Homepage from './Pages/Homepage'
import React,{useState,useEffect} from 'react';
import {
  Router,
  Switch,
  Link,
  Routes,
  BrowserRouter,
  Route,
  Outlet,
} from "react-router-dom";
function App() {
 
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
 
{/* <BrowserRouter>
<Routes>
      <Route path="/AdminPage" element={<AdminPage/>}>
        
      </Route>
      <Route path="/UserPage" element={<UserPage />} />
      
    </Routes>
    </BrowserRouter>
     */}
     {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />}/>
      <Route path="/" element={<AdminPage />}>
          <Route path="/" element={<ViewData patients={patients}/>} />
          <Route path="/ImportExport" element={<ImportExport patients={patients}/>} />
          <Route path="/preprocess" element={<Preprocess/>} />
        </Route>
      
      <Route path="/UserPage" element={<UserPage/>} />
      <Route path="/" element={<ViewData patients={patients}/>} />
          <Route path="/ImportExport" element={<ImportExport patients={patients}/>} />
          
    </Routes>
  </BrowserRouter> */}

 {/* working routes a bit */}
 
{/* <BrowserRouter>
    <Routes>
   
      <Route path="/" element={<AdminPage />}>
        
          <Route path="/" element={<ViewData patients={patients}/>} />
          <Route path="/ImportExport" element={<ImportExport patients={patients}/>} />
          <Route path="/preprocess" element={<Preprocess/>} />
        </Route>
      
      <Route path="/" element={<UserPage/>} >
      <Route path="/ViewData" element={<ViewData patients={patients}/>} />
          <Route path="/ImportExport" element={<ImportExport patients={patients}/>} />
          </Route>
    </Routes>
  </BrowserRouter> */}

{/* <BrowserRouter>
<nav>
        <Link to="AdminPage"> Admin </Link>
        <Link to="UserPage"> User </Link>
      
      </nav>
<Routes>
 
  <Route path="/AdminPage" element={AdminPage}>
    <
  <Route path="/UserPage" element={UserPage}/>
  
</Routes>
</BrowserRouter>
  */}
  <Header/>
    <AdminPage />

<Footer/>
    </>
  );
}

export default App;
