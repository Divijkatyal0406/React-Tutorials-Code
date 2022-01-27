import React, { Component } from 'react';

class LifeCycleB_update extends Component {
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
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
    render() {
    console.log('LifeCycleB rendered')
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB_update;
