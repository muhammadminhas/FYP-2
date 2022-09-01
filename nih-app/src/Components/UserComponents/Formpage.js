import React from 'react'

export default function Formpage() {
  return (
    <>
    <div>
     <a href="/selecttype"><button type="button" className="btn btn-primary" style={{marginLeft:"5vh",background:"#62306A"}}>Back</button></a>
    </div>
    <div className="col-md-12 col-lg-12 col-sm-12" style={{width:"80%",backgroundColor:"white",padding:"5vh",marginTop:"5vh",marginLeft:"20vh",marginBottom:"5vh"}}>
      <div className="row">
      <h2>Fill in the Details</h2>
      
    <div className="col-md-8 col-lg-8 col-sm-8">
  

        <span style={{fontWeight:"bold"}} >Country*</span> <br />
        <input type="text" style={{marginTop:"0px"}} placeholder="Enter Country"/> <br /><br />
        
        <span style={{fontWeight:"bold"}}>Education*</span><br />
        <input type="text" style={{marginTop:"0px"}}  placeholder="Enter Education"/> <br /> <br />
        
        <span style={{fontWeight:"bold"}}>Employment*</span><br />
        <input type="text" style={{marginTop:"0px"}} placeholder="Enter Employment"/> <br /> <br />
        
        <span style={{fontWeight:"bold"}} >Case Defination*</span> <br />
        <input type="text" style={{marginTop:"0px"}} placeholder="Enter Case Defination"/> <br /><br />
        
        <span style={{fontWeight:"bold"}}>Type of Xray*</span><br />
        <input type="text" style={{marginTop:"0px"}}  placeholder="Enter Type of Xray"/> <br /> <br />
        
        <span style={{fontWeight:"bold"}}>Xray Count*</span><br />
        <input type="number" style={{marginTop:"0px"}} placeholder="Enter Xray Count"/> <br /> <br />
        
        <span style={{fontWeight:"bold"}} >Hain Isoniazid*</span> <br />
        <input type="text" style={{marginTop:"0px"}} placeholder="Enter Hain Isoniazid"/> <br /><br />
        
        <span style={{fontWeight:"bold"}}>Hain Rifampicin*</span><br />
        <input type="text" style={{marginTop:"0px"}}  placeholder="Enter Hain Rifampicin"/> <br /> <br />
        
        <span style={{fontWeight:"bold"}}>Period Start*</span><br />
        <input type="number" style={{marginTop:"0px"}} placeholder="Enter Period Start"/> <br /> <br />
        
        <span style={{fontWeight:"bold"}} >Period End*</span> <br />
        <input type="number" style={{marginTop:"0px"}} placeholder="Enter Period End"/> <br /><br />
        
        <span style={{fontWeight:"bold"}}>Period Span*</span><br />
        <input type="number" style={{marginTop:"0px"}}  placeholder="Enter Period Span"/> <br /> <br />
        
        <span style={{fontWeight:"bold"}}>Regimen Count*</span><br />
        <input type="number" style={{marginTop:"0px"}} placeholder="Enter Regimen Count"/> <br /> <br />

        <span style={{fontWeight:"bold"}}>Xray Exists*</span><br />
        <input type="tel" style={{marginTop:"0px"}} placeholder="Enter Xray Exists"/> <br /> <br />
        
        <span style={{fontWeight:"bold"}} >CT Exists*</span> <br />
        <input type="tel" style={{marginTop:"0px"}} placeholder="Enter CT Exists"/> <br /><br />
    
    </div>
    <div className="col-md-4 col-sm-4 col-lg-4">
    {/* <span style={{fontWeight:"bold"}} >Gender*</span><br />
    <select style={{width:"56%"}}>
     <option selected disabled>Select Gender</option>
    <option>Male</option>
    
    <option>Female</option>
</select><br /><br />
        <span style={{fontWeight:"bold"}}>BMI*</span><br />
        <input type="tel" maxLength="7" style={{marginTop:"0px"}}  placeholder="Enter BMI"/> <br /> <br />
        <span style={{fontWeight:"bold"}}>Culture*</span><br />
        <input type="tel" style={{marginTop:"0px"}} maxLength="3"  placeholder="Enter Culture"/>
        </div> */}
            <span style={{fontWeight:"bold"}} >Organization*</span> <br />
            <input type="text" style={{marginTop:"0px"}} placeholder="Enter Organization"/> <br /><br />
           
            <span style={{fontWeight:"bold"}}>Affect Pleura*</span><br />
            <input type="text" style={{marginTop:"0px"}}  placeholder="Enter Affect Pleura"/> <br /> <br />
           
            <span style={{fontWeight:"bold"}}>Overall % Of Abnormal Volume*</span><br />
            <input type="text" style={{marginTop:"0px"}} placeholder="Enter Overall %"/> <br /> <br />
            
            <span style={{fontWeight:"bold"}} >Le Isnoiazid*</span> <br />
            <input type="text" style={{marginTop:"0px"}} placeholder="Enter Le Isnoiazid"/> <br /><br />
            
            <span style={{fontWeight:"bold"}}>Le Rifamipicin*</span><br />
            <input type="text" style={{marginTop:"0px"}}  placeholder="Enter Le Rifamipicin"/> <br /> <br />
           
            <span style={{fontWeight:"bold"}}>Le_p_aminosalicylic_Acid*</span><br />
            <input type="tel" style={{marginTop:"0px"}} placeholder="Enter Le_p_aminosalicylic_Acid"/> <br /> <br />

            <span style={{fontWeight:"bold"}} >Qure Peffusion*</span> <br />
            <input type="text" style={{marginTop:"0px"}} placeholder="Enter Qure Peffusion"/> <br /><br />
           
            <span style={{fontWeight:"bold"}}>Treatment Status*</span><br />
            <input type="text" style={{marginTop:"0px"}}  placeholder="Enter Treatment Status"/> <br /> <br />
           
            <span style={{fontWeight:"bold"}}>Regimen Drug*</span><br />
            <input type="text" style={{marginTop:"0px"}} placeholder="Enter Regimen Drug"/> <br /> <br />
            
            <span style={{fontWeight:"bold"}} >Comorbidity*</span> <br />
            <input type="text" style={{marginTop:"0px"}} placeholder="Enter Comorbidity"/> <br /><br />
            
            <span style={{fontWeight:"bold"}}>Ncbi Bioproject*</span><br />
            <input type="text" style={{marginTop:"0px"}}  placeholder="Enter Ncbi Bioproject"/> <br /> <br />
           
            <span style={{fontWeight:"bold"}}>Gene Name*</span><br />
            <input type="tel" style={{marginTop:"0px"}} placeholder="Enter Gene Name"/> <br /> <br />

            <span style={{fontWeight:"bold"}}>Genomic Data Exists*</span><br />
            <input type="tel" style={{marginTop:"0px"}}  placeholder="Enter Genomic Data Exists"/> <br /> <br />
        
            <span style={{fontWeight:"bold"}}>Qure Consolidation*</span><br />
            <input type="tel" style={{marginTop:"0px"}} placeholder="Enter Qure Consolidation"/> <br /> <br />
   </div>
    </div>
    <div>
      <div className="ButtonGroup text-center" >
     <a href="/selecttype"> <button type="button"  id='viewbtn' className="btn btn-primary btn-md text-center"  style={{ backgroundColor: 'black',color:"white", width: '100px',marginTop:"2%" }}>Add More</button></a><br />
      <button type="button"  id='viewbtn' className="btn btn-primary btn-md text-center" style={{ backgroundColor: '#62306A', width: '100px',marginTop:"2%" }}>Submit</button>
      </div>
    </div>
    </div>
  </>
  )
}
