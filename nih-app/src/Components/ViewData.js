
import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export default function Body(props) {
  function toggle() {
    var x = document.getElementById("#viewbtn");
    var y=document.getElementById('#outerwrapper')
    if (x.innerHTML =="View") {
      x.innerHTML= "Cancel";
      y.style.visibility='visible';
    }
    else if(x.innerHTML=="Cancel"){
      x.innerHTML = "View";
      y.style.visibility='hidden';
    }
  }
  function hide(){
    document.getElementById('outerwrapper').style.visibility='hidden';
    document.getElementById('cancelbtn').style.visibility='hidden';
  }
  function show(){
    
  
    document.getElementById('outerwrapper').style.visibility='visible';
    document.getElementById('cancelbtn').style.visibility='visible';
  
  
  }

  return (


    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

      <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '100%' }}>
        <div className="col-mg-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
          <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Dataset:</span>
          <select disabled className="form-select form-select-lg .disabled" aria-label=".form-select-lg example">
            <option selected>NIH Dataset</option>
           
          </select>
          <br />
          <button type="button" onClick={show} id='viewbtn' className="btn btn-primary btn-md" style={{ backgroundColor: '#62306A', width: '100px' }}>View</button>
          <button type="button" onClick={hide} id='cancelbtn' className="btn btn-primary btn-md" style={{ backgroundColor: 'red', width: '100px',visibility:"hidden" }}>Cancel</button>
          <div id="outerwrapper" style={{visibility:'hidden'}}>
            <div id="innerwrapper">
            <table className="table">
              <thead className='thead-dark ' style={{position:'sticky',top:'0px',background:'#62306A',color:'white'}} >
                <tr>

                  <th scope="col">Patient Id Number</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                {props.patients.map((patients) => (
                  <tr id="bodytableelements">
                    
                      <td>{patients.id}</td>
                      <td>{patients.name}</td>
                      <td>{patients.age}</td>
                    
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
