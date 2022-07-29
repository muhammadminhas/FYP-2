import React from 'react'

export default function MakePrediction() {
  return (
    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

      <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '100%' }}>
        <div className="col-mg-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
          <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Dataset:</span>
          <select disabled className="form-select form-select-lg .disabled" aria-label=".form-select-lg example">
            <option selected>NIH Dataset</option>
           
          </select>
          <br />
          
            
          
      
        </div>


      </div>
    </div>
  )
}
