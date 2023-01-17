import React, { useState } from 'react'
import Webcam from 'react-webcam'
import QrScanner from "qr-scanner";



const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const Profile = () => {
  const [picture, setPicture] = useState('')
  const [scannedData, setScannedData] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
    const file = base64ToFile(pictureSrc,'image')

    QrScanner.scanImage(file,{returnDetailedScanResult:true})
    .then(result => {
        console.log(result.data) 
        setScannedData(result.data)
    
    })
    .catch(e => console.log(e));


    // var a = document.createElement("a"); //Create <a>
    // a.href =  pictureSrc ; // "data:image/png;base64," + pictureSrc; //Image Base64 Goes here
    // a.download =  "Image.png"; //File name Here
    // a.click(); //Downloaded file
    // console.log(dataURLtoFile(pictureSrc,'image'))
  })


  function base64ToFile(dataurl, filename) {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }

    
    return new File([u8arr], filename, {type:mime});
}


  return (
    <div>
      <h2 className="mb-5 text-center">
        React Photo Capture using Webcam Examle
      </h2>
      <div>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div>
        {picture != '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
          
        )}
        <br/>
        <h3>Scanned Data:</h3>
        {scannedData == '' ? null : (<h5>{scannedData}</h5>)}
      </div>
    </div>
  )
}
export default Profile