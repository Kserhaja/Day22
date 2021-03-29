import React, { Component } from 'react';

class Flower extends Component {
    render() {
              
        return (
           <div className="App">
               <h2>This is a {this.props.color} Flower!</h2>
            </div>
        )
    }
}
export default Flower;
