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
import MakePrediction from './Components/UserComponents/MakePrediction';
import UserImport from './Components/UserComponents/UserImport';
import UserNotifications from './Components/UserComponents/UserNotifications';
import AdminNav from './Components/AdminNav';
import AdminNotifications from './Components/AdminNotifications';
import React,{useState,useEffect} from 'react';
import UserNav from './Components/UserComponents/UserNav';
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
  // const [userState, setUserState] = useState([])

  // const toggle = function (val) {
  //     setUserState(userState => val)
  // }
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
  const [records,setRecord] = useState([]);
  const insertedRecord =(record)=>{
    const new_record = [...records,record]
    setRecord(new_record)
  }
  
  return (
   
    
    <>
    {/* <button id="User" onClick={() => { toggle("User") }}>User</button>
     <Header/>
    {userState == "" && <div>
    <button id="Admin" onClick={() => { toggle("Admin") }} >Admin</button>
      <button id="User" onClick={() => { toggle("User") }}>User</button>
            </div>
            }
 {userState == "Admin" && <div>
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
            </div>
            }
            {userState == "User" && <div>
              <UserNav/>
            <BrowserRouter>
    <Routes>
      <Route path="/viewdata" element={<ViewData patients={patients}/>}>
        
      </Route>
      <Route path="/makeprediction" element={<MakePrediction />} />
      <Route path="/userimport" element={<UserImport patients={patients} />} />
      <Route path="/preprocess" element={<Preprocess />} />
      <Route path="/"  element={<UserNotifications />} />
    </Routes>
  </BrowserRouter>
    <Footer/>
            </div>
            } */}


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
<Routes>
  <Route path="/AdminPage" element={AdminPage}/>
    
  <Route path="/UserPage" element={UserPage}/>
  
</Routes>
</BrowserRouter> */}
 <Header/>
<AdminPage/>
<Footer/>



  
   


    </>
  );
}

export default App;
