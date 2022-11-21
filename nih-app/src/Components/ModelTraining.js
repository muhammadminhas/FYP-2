import {useEffect} from 'react';
import React, { useState, CSSProperties } from 'react';

export default function ModelTraining() {
  const [reportcheck,setReportCheck] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getreportcheck',{
          'method' : 'GET',
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(resp => setReportCheck(resp),
        console.log(reportcheck)
        )
        .catch(error => console.log(error))
  
    },[])
    function getResult(){
      
      if(reportcheck[0].reportno==1){
        alert("Model Trained Successfully");
        window.location.href="/trainingresult"
      }
      if(reportcheck[0].reportno==0){
        alert("Model Training Successfully");
        window.location.href="/classificationreport"
      }
    }
  return (
    <>
    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

<div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '60vh' }}>
  <div className="col-md-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
    <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Dataset:</span>
    <select style={{width:"100vh"}} disabled className="form-select form-select-lg .disabled" >
      <option selected>NIH Dataset</option>
     
    </select>
    <br />
    </div>
    {/* <div className="col-md-3 col-lg-3 col-sm-3" style={{marginTop:"5%"}}>
    <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold'}}>Evaluation Matrix:</span>
    <select style={{width:"25vh"}} className="form-select form-select-lg .disabled" >
      <option selected disabled>Evaluation Matrix</option>
      <option >Recall</option>
      <option >Precision</option>
      <option >F-Measure</option>
      <option >Mixed Matrix</option>

    </select>
    <br />
    </div> */}
    <div className="col-md-9 col-lg-9 col-sm-9" style={{ marginTop: '5%' }}>
    <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Classifier:</span>
    <select style={{width:"100vh"}}  className="form-select form-select-lg .disabled" >
      <option disabled selected>Select Classifier</option>
      <option selected>Random Forest</option>
      
    </select>
    <br />
    </div>
    {/* <div className="col-md-3 col-lg-3 col-sm-3" style={{ marginTop: '5%' }}>
    <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Dataset:</span>
    <input className="input"type="number" style={{width:"25vh",height:"4.4vh"}}/>
   
    <br />
    </div> */}
    <div className="col-md-12 col-lg-12 col-sm-12 text-center"> 
    <button type="button"  id='viewbtn' className="btn btn-primary btn-md text-center" onClick={getResult} style={{ backgroundColor: '#62306A', width: '100px' }}>Submit</button>
    </div>
    </div>

    </div>
    
  </>
  )
}
