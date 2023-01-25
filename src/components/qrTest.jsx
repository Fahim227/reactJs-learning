import React,{Component} from "react";
import QrReader from 'react-qr-scanner'

class QrReadTest extends Component {
    constructor(props){
        super(props)
        this.state = {
          delay: 1000,
          result: 'No result',
        }
    
        this.handleScan = this.handleScan.bind(this)
      }
      handleScan(data){
        console.log(data == null ? "No Data": data['text'])
        this.setState({
          result: data == null ? "No Data": data['text'],
        })
      }
      handleError(err){
        console.error(err)
      }
      render(){
        const previewStyle = {
          height: 500,
          width: 1000,
        }
    
        return(
          <div>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              />
            <p>{this.state.result}</p>
          </div>
        )
      }
}
 
export default QrReadTest;