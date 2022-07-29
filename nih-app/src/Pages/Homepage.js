import React from 'react'
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Outlet,
  } from "react-router-dom";
export default function 
() {
  return (
    <div>
         <nav className="nav nav-tabs nav-pills nav-fill">
  <a id="nav-view" className="nav-link" aria-current="page" href="/AdminPage">Admin Page</a>
  <a id="nav" className="nav-link"  href="/UserPage">UserPage</a>
  
</nav>


    </div>
  )
}
