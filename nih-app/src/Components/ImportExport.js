
import {CSVLink} from 'react-csv';
import React, { useState, CSSProperties } from 'react';
import {toast} from 'react-toastify'; 
import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from 'react-papaparse';
import APIService from '../Components/APIService'




const GREY = '#CCC';
const GREY_LIGHT = 'rgba(255, 255, 255, 0.4)';
const DEFAULT_REMOVE_HOVER_COLOR = '#A01919';
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = '#686868';
let usercount=1;
function usercounter(){
  usercount=usercount+1;

}
const styles = {
  zone: {
    alignItems: 'center',
    border: `2px dashed ${GREY}`,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  file: {
    background: 'linear-gradient(to bottom, #EEE, #DDD)',
    borderRadius: 20,
    display: 'flex',
    height: 120,
    width: 120,
    position: 'relative',
    zIndex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  info: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: '0.5em',
    justifyContent: 'center',
    display: 'flex',
  },
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: '0.5em',
  },
  progressBar: {
    bottom: 14,
    position: 'absolute',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  zoneHover: {
    borderColor: GREY_DIM,
  },
  default: {
    borderColor: GREY,
  },
  remove: {
    height: 23,
    position: 'absolute',
    right: 6,
    top: 6,
    width: 23,
  },
};





export default function ImportExport(props) {
 var filename;

  var importflage=false;
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  // API for post notifications
    function InsertNotifications(body){
    return fetch(`http://localhost:5000/notifications`,{
        'method':'POST',
         headers : {
        'Content-Type':'application/json'
  },
  body:JSON.stringify(body)
})
.then(response => response.json())
.catch(error => console.log(error))
}
  // API for post new imports
  function InsertRecord(body){
    return fetch(`http://localhost:5000/add`,{
        'method':'POST',
         headers : {
        'Content-Type':'application/json'
  },
  body:JSON.stringify(body)
})
.then(response => response.json())
.catch(error => console.log(error))
}

//   const [importdata,setImportData] = useState([]);
// //   function insertTo(body){
// //     return(
// //         fetch(`http://localhost:5000/add` ,{
// //             'method' : 'POST',
// //             headers : {
// //                 'Content-Type' : 'application/json'
// //             },
// //             body : JSON.stringify(body)
// //         })
// //         .then(resp => resp.json())
// //     )}

// //   const insertRecord =()=>{
// //     insertTo({importdata})
// //     .then(resp => props.insertedRecord(resp))
// //     .catch(error => console.log(error))
    
// //     toast.success("Record inserted Successfully",{autoClose:2500});
// // }
  
  function importcheck(){
    
  var x=document.getElementById("importinfo");
  var z = document.getElementById("remove");
    if(x.innerText==="Uploaded"){
      importflage=true;
      alert("Successfull Upload")
      var y = document.getElementById("importinfo");
      y.innerText=""
      z.style.visibility="hidden"
      
    }
  }
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(
    DEFAULT_REMOVE_HOVER_COLOR
  );

const templatedata=[{id:"",name:"",age:""}];
const header=[
  
    {label:'Id',key:'id'},
    {label:'Name',key:'name' },
    {label:'Age',key:'age'}

  
];
const templateDownload={
  filename:"template.csv",
  headers:header,
  data:templatedata
};

const Export={
  filename:'NIH-Data.csv',
  headers:header,
  data:props.patients
};
  return (
    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}} class="row">
 
    <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: 'calc(100vh - 350px)',display:"flex" }}>
    
    
    <div style={{width:"30vh",height:"15vh",background:"#62306A",position:"absolute",right:'20vh',marginTop:"20vh" ,textAlign:"center"}} id="templatediv" className="float-right">

      <p style={{color:"white",fontSize:"25px",textAlign:'center'}}>CSV File Template</p>
      <button type="button" id='viewbtn' className="btn btn-primary btn-md" style={{ backgroundColor: '#706DF3', width: '100px',marginLeft:'0vh'}}><CSVLink style={{color:'white',textDecoration:'none'}} {...templateDownload}>Download</CSVLink></button>
     
    </div>
      <div className="col-mg-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
      <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Export Dataset:</span>
          <select disabled className="form-select form-select-lg .disabled" aria-label=".form-select-lg example" style={{width:'40vh'}}>
            <option selected>NIH Dataset</option>
           
          </select>
          <br />
        <button type="button" id='viewbtn' className="btn btn-primary btn-md" style={{ backgroundColor: '#62306A', width: '100px',marginLeft:'0vh' }}><CSVLink style={{color:'white',textDecoration:'none'}} {...Export}>Export</CSVLink></button>
       
        <h1 style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' ,marginTop:"9vh",marginBottom:"0vh"}}>Import Dataset:</h1>


     <div id="importdiv" style={{width:"40vh"}}>
     <CSVReader
      onUploadAccepted={(results: any) => {
        console.log('---------------------------');
        console.log(results);
        // console.log(results.data[0].Array(1))
        const data=["id","name","age"];
        const cols=results.data[0].map((col,index)=>{
          return{
            Header:col,
            accessor:col.split(" ").join("_").toLowerCase(),
          };
        });
         
        var result=[];
        var keys=results.data[0];
        for(var i=1;i<results.data.length-1;i++){
          var item={};
          item[keys[0]]=usercount;
          item[keys[1]]=results.data[i][1];
          item[keys[2]]=results.data[i][2];
          
          result.push(item);
        }
        
        
        for(var i=0;i<result.length;i++){
          // setName(result[i].name);
          // setAge(result[i].age);
          // let data={
          
          // }
          // console.log("----")
          // console.log(result[i].name);
          let data1={
            "name":result[i].name,
            "age":result[i].age,
            "NameofFile":filename,
          }
          
          
          console.log(name);
          
          InsertRecord(data1); 
          // setName("");
          // setAge("");
          // console.log(result[i].name+" "+result[i].age);

        }
        let data2={
          "username":"User1",
          "filename":filename,
        }
        InsertNotifications(data2);
       
        // setImportData(result);
        // usercounter();
        // insertTo(result);



        // const rows=results.data.slice(1).map((row)=>{
        //   return results.data.reduce((acc,curr,index)=>{
        //     acc[cols[index].accessor]=curr;
        //     return acc;
        //   });
        // });
        // console.log(cols); 
       // console.log(rows); 
        const columns=results.data[0].map((col,index)=>{
         if(col===data[index]){
          console.log(col)
          document.getElementById("importinfo").innerText="Uploaded";
          document.getElementById("importinfo").style.color="green";
          console.log("fine")
        
        }
        else{
       
        document.getElementById("importinfo").innerText="*Incorrect File Format";
        document.getElementById("importinfo").style.color="red";
      
        
        
        }
        });

        console.log('---------------------------');
        setZoneHover(false);
      }}
      onDragOver={(event: DragEvent) => {
        event.preventDefault();
        setZoneHover(true);
      }}
      onDragLeave={(event: DragEvent) => {
        event.preventDefault();
        setZoneHover(false);
      }}
    >
      {({
       getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
        Remove,
      }: any) => (
        <>
          <div 
            {...getRootProps()}
           
            style={Object.assign(
              {},
              styles.zone,
              zoneHover && styles.zoneHover
            )}
          >
            {acceptedFile ? (
              filename=acceptedFile.name,
              <>
                <div  style={styles.file}>
                  <div  style={styles.info}>
                    <span style={styles.size}>
                      {formatFileSize(acceptedFile.size)}
                      
                    </span>
                    <span style={styles.name}>{acceptedFile.name}</span>
                  </div>
                  <div style={styles.progressBar}>
                    <ProgressBar />
                  </div>
                  <div 
                    {...getRemoveFileProps()}
                     
                    style={styles.remove}
                    onMouseOver={(event: Event) => {
                      event.preventDefault();
                      setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                      
                    }}
                    onMouseOut={(event: Event) => {
                      event.preventDefault();
                      setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                    }}
                  >
                    <Remove color={removeHoverColor}></Remove>
                  </div>
                </div>
              </>
            ) : (
              'Drop CSV file here or click to upload'
            )}
          </div>
        </>
      )}
    </CSVReader>
    <p id="importinfo" style={{color:"red"}}></p>
    <br />
    <button type="button" onClick={importcheck} id='Importbtn' className="btn btn-primary btn-md" style={{ backgroundColor: '#62306A', width: '100px' }}>Import</button>
    
     </div>
     


    </div>
  </div>
</div>

  )
}
