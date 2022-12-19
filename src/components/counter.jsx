import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize : 20,
        fontWeight: "bold"
    }

    formatCount (){
        const value  = this.props.counter.value;
        console.log("Thsi is count: ", this.props.counter.value)
        return value === 0 ? <h1>Zero</h1> : value;
    }
    render() { 
        
        return (
            <React.Fragment>
                <h4>{this.props.children}</h4>
                <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
                
                <button onClick={ () => this.props.onIncreament(this.props.counter)}  className='btn btn-primary m-5'>Increment</button>
                <button onClick={() => this.props.onRemove(this.props.counter)} className='btn btn-danger'>Delete</button>
                
            </React.Fragment>
        );
    }

   
}
 
export default Counter;