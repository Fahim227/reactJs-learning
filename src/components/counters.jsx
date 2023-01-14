import React, { Component } from 'react';
import Counter from './counter';
import Barcode from 'react-barcode';
import QrScanner from 'qr-scanner';
// import javascriptBarcodeReader from 'javascript-barcode-reader';
class Counters extends Component {
    state = {
        counters: [
            {
                id: 1,
                value: 0
            },
            {
                id: 2,
                value: 0
            },
            {
                id: 3,
                value: 0
            },

        ]
    }

    
    barCodeScanner = () => {

        // javascriptBarcodeReader({
        //     /* Image file Path || {data: Uint8ClampedArray, width, height} || HTML5 Canvas ImageData */
        //     image: source,
        //     barcode: 'code-2of5',
        //     // barcodeType: 'industrial',
        //     options: {    
        //       // useAdaptiveThreshold: true // for images with sahded portions
        //       // singlePass: true
        //     }
        //   })
        //     .then(code => {
        //       console.log(code)
        //     })
        //     .catch(err => {
        //       console.log(err)
        //     })
        
        return <Barcode value="barcode-example" />;

    }


    handleDelete = (counter) =>{
        const allCounters = this.state.counters.filter(c => c.id!=counter.id)
        
        this.setState({
            counters: allCounters
        })
    }

    handleIncreament = (counter) =>{
        const allCounters = [...this.state.counters]
        const idx = allCounters.indexOf(counter)
        allCounters[idx].value++
        this.setState({
            counters: allCounters
        })
    }
    render() {
        return (
            <div>
                <Barcode value="barcode-example" />

                {this.state.counters.map(counter =>
                     <Counter
                      key={counter.id}
                      onRemove={this.handleDelete}
                      value={counter.value}
                      counter = {counter}
                      selected={true}
                      onIncreament = {this.handleIncreament}
                      >
                        <h4>This is a sample</h4>
                     </Counter>)}
            </div>
        );
    }
}

export default Counters;