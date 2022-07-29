import React from 'react'

export default function Preprocess() {
  function update() { 
    var select = document.getElementById('dropdown');
    var select1 = document.getElementById('subdropdown');
    var text = select.options[select.selectedIndex].text;
    var value = select.options[select.selectedIndex].value;
    console.log(text); // English
    var x=document.getElementById("subname");
    x.innerText=text+" Technique";
    if(value==1){
      select1.options[1].text="SMOTE";
      select1.options[2].text="Near Miss"
    }
    if(value==2){
      select1.options[1].text="DataWig";
      select1.options[2].text="2"
    }
    if(value==3){
      select1.options[1].text="Data Smoothing";
      select1.options[2].text="Data Generalization"
    }
 
    
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
         <div className="container" style={{height:"30vh",marginBottom:"17vh"}}>
          <br />
          <span >Preprocessing:</span>
          <select id="dropdown" class="form-select" aria-label="Default select example" onChange={update}>
  <option selected disabled>Select the Technique</option>
  <option id="option" value="1">Class Balancing</option>
  <option id="option" value="2">Missing Values</option>

  <option id="option" value="3">Transformation</option>
</select>
<span id="subname" style={{marginTop:"2vh"}}>Sub Technique:</span>
<select id="subdropdown" class="form-select" aria-label="Default select example" onChange={update}>
  <option selected disabled>Select the Technique</option>
  <option id="option" value="1"></option>
  <option id="option" value="2"></option>
</select>
<div class="container" style={{textAlign:"center"}}>
  <br />
<button type="button"  id='viewbtn' className="btn btn-primary btn-md" style={{ backgroundColor: '#62306A', width: '100px' }}>View</button>
<button type="button"  id='viewbtn' className="btn btn-primary btn-md" style={{ backgroundColor: '#62306A', width: '100px',marginLeft:"1vh" }}>Apply</button>
</div>
         </div>

          
        </div>


      </div>
      
    </div>


  )
}
