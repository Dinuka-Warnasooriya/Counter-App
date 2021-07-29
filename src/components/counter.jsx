import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
       
        return (
            
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm"
            >
            Increment
            </button> 

            <button onClick={()=>this.props.onDelete(this.props.counter.id  )} 
            className="btn btn-danger"
            >
            Delete
            </button>
            </div>

          );
    }

    getBadgeClasses() {
        let classes = "bagge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;     