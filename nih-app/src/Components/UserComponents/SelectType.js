import React from 'react'
import form from 'C:/Users/minha/Desktop/Sem 7/FYP/Implementation/nih-app/src/Components/UserComponents/Formpage.js'
import XrayImage from 'C:/Users/minha/Desktop/Sem 7/FYP/Implementation/nih-app/src/Images/Xraysimage.png'
import CtImage from 'C:/Users/minha/Desktop/Sem 7/FYP/Implementation/nih-app/src/Images/ctimage.png'
import ClinicalImage from 'C:/Users/minha/Desktop/Sem 7/FYP/Implementation/nih-app/src/Images/Clinicalimage.png'
import bgImage from 'C:/Users/minha/Desktop/Sem 7/FYP/Implementation/nih-app/src/Images/bgimage.png'
import Lungs from 'C:/Users/minha/Desktop/Sem 7/FYP/Implementation/nih-app/src/Images/Lungs.png'
import Banner from "C:/Users/minha/Desktop/Sem 7/FYP/Implementation/nih-app/src/Images/banner.png"
export default function SelectType() {
 function alertt(e){
 window.location.href="/form";
 }
  return (
    <div style={{ marginLeft:"10%",backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px',width:"80%"}}>
    <div className="ImageDiv row" style={{backgroundImage: `url(${Banner})`,maxWidth:"100%",height:"68vh"}}>
    <a href="/makeprediction"><button type="button" className="btn btn-primary" style={{color:"black",background:"white"}}>Back</button></a>
    
       <h1 className="text-center" style={{color:"black"}}>Select Data Type</h1>
     
       <div style={{}} onClick={alertt} className="Box col-md-6 col-lg-3 col-sm-6" >
       <p style={{marginTop:"1vh"}}>Clinical</p>
       <img class="responsive" src={ClinicalImage} />
       </div>
       <div  style={{}} onClick={alertt} className="Box col-md-6 col-lg-3 col-sm-6" >
       <p style={{marginTop:"1vh"}}> BACTERIAL GENOMES</p>
       <img class="responsive" src={bgImage} />
       </div>
       <div style={{}} onClick={alertt} className="Box col-md-6 col-lg-3 col-sm-6" >
       <p style={{marginTop:"1vh"}}> CT STUDIES</p>
       <img class="responsive" src={CtImage} />
       </div>
       <div style={{}} onClick={alertt} className="Box col-md-6 col-lg-3 col-sm-6" >
       <p style={{marginTop:"1vh"}}>XRAYS</p>
       <img class="responsive" src={XrayImage} />

      </div>
    </div>
    </div>

  )
}
