import React, { Component } from 'react';
import Counter from './counter';
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