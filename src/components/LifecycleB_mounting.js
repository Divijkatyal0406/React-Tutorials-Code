import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'divij'
      }
      console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerived state')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB mounted')
    }
    render() {
    console.log('LifeCycleB rendered')
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
