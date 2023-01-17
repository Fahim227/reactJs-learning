import QrScanner from "qr-scanner";
import React , { Component }from "react";
import Webcam from "react-webcam";




class BarCodeScanner extends Component {
    state = { 
        selectedFile: null
     } 

    fileSelectedHandler = event => {
        this.setState({
            selectedFile : event.target.files[0],
            showCamera: false
        });

    }

    checkFile = () => {
        // Image? img = new Image()
        QrScanner.scanImage(this.state.selectedFile,{returnDetailedScanResult:true})
        .then(result => console.log(result.data))
        .catch(e => console.log(e));

        console.log(this.state.selectedFile);
    }

    checkVideo = () => {
        // console.log(QrScanner.listCameras(true));
        // navigator.getUserMedia({video:true}, function(stream) {
        //     stream.getTracks().forEach(x=>x.stop());
        //   }, err=>console.log(err));


        navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream) {
            
        console.log('Got stream, time diff :',stream.scanImage);
        
        })
        .catch(function(err) {
        console.log('GUM failed with error, time diff: ',err);
        });


        // navigator.getUserMedia (
        //     // constraints
        //     {
        //        video: true
        //     },
        // );


        // navigator.getUserMedia (
        //     // constraints
        //     {
        //        video: true
        //     },
         
        //     // successCallback
        //     function(localMediaStream) {
        //         this.setState({showCamera:true});
        //     //    var video = document.querySelector('video');
        //     //    video.src = window.URL.createObjectURL(localMediaStream);
        //     //    video.onloadedmetadata = function(e) {
        //     //       // Do something with the video here.
        //     //    };
        //     },
         
        //     // errorCallback
        //     function(err) {
        //      if(err === "PERMISSION_DENIED") {
        //        // Explain why you need permission and how to update the permission setting
        //      }
        //     }
        //  );

        // navigator.permissions.query({name: 'camera'}).then((result) => {
        //     if (result.state === 'granted') {
        //         console.log("Permission Granted");
        //         this.setState({showCamera:true});
        //     } else if (result.state === 'prompt') {
        //         console.log("Permission not Granted");
        //     }
        //     // Don't do anything if the permission was denied.
        //   });
        // const qrScanner = new QrScanner(
        //     videoElem,
        //     result => console.log('decoded qr code:', result),
        //     // No options provided. This will use the old api and is deprecated in the current version until next major version.
        // );
        // qrScanner.start();
    }

    render() { 
        return (
        <div>
            <input type="file" onChange={this.fileSelectedHandler} />
            <br/><br/>
            {this.state.showCamera ? <Webcam/> : null}
            <button onClick={this.checkFile} >See QR Data</button>
            <button onClick={this.checkVideo} >See QR Data From Video</button>

        </div>
        );
    }
}
 
export default BarCodeScanner;