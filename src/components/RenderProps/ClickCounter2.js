import React, { Component } from 'react';

class ClickCounter2 extends Component {
    render() {
        const {count,incCount}=this.props
    return <div>
        <button onClick={incCount}>Clicked {count} times</button>
    </div>;
  }
}

export default ClickCounter2;
