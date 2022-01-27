import React, { Component } from 'react';

class Errorboundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    
    static getDerivedStateFromError(error){
       return {
        hasError:true
       } 
    }
  render() {
    return this.state.hasError?<h1>Something went wrong</h1>:this.props.children; 
    //this.props.children refers to component actually rendering
  }
}

export default Errorboundry;
