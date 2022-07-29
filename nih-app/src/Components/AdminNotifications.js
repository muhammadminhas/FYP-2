import React from 'react'
import {useState,useEffect} from 'react';

export default function AdminNotifications() {
  const [notifications,setNotifications] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/getnotifications',{
        'method' : 'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setNotifications(resp),
      console.log(notifications)
      )
      .catch(error => console.log(error))

  },[])
  return (
    <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '60vh' }}>

    <div className="container" style={{backgroundColor:"#62306A",width:"80%",height:"80%",marginTop:"5%",marginBottom:"5%"}}>
      <p id="notify">Notifications</p>
        <div style={{height:"20vh"}}>
        <div id="outerwrapper" style={{backgroundColor:"white"}}>
            <div id="innerwrapper">
            <table className="table">
              <thead className='thead-dark ' style={{position:'sticky',top:'0px',background:'#62306A',color:'white'}} >
                <tr>

                  <th scope="col">User Id Number</th>
                  <th scope="col">Username</th>
                  <th scope="col">Filename</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                {notifications.map((notifications) => (
                  <tr id="bodytableelements">
                    
                      <td>{notifications.id}</td>
                      <td>{notifications.username}</td>
                      <td>{notifications.filename}</td>
                      <td><a>View</a> <a>Accept</a> </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
      
        </div>
        </div>
    </div>
     
  </div>

  )
}
