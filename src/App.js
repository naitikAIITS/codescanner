import './App.css';
import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';


function App() {

    const[scanResult,setScanResult]=useState(null) 
    useEffect(()=>{
  
      
    const scanner=new Html5QrcodeScanner('reader',{
      qrbox:{
        width:250,
        height:250,
      },
      fps:5,
    })
    scanner.render(success,error)
  
    function success(result){
      scanner.clear()
      setScanResult(result)
  
    }
  
    function error(err){
      console.log(err);
    }
  
  
    },[])
  
  
  return (
    <div style={{margin:'3px',padding:'3px'}}>
      <h3>QR code scanner</h3>
      {
        scanResult
        ?<div>Success:<a href={scanResult}>{scanResult}</a></div>
        :<div id='reader'></div>
      }

      </div>
    
  );
    }

export default App;
