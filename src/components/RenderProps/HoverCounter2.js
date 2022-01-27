import React, { Component } from 'react';

class HoverCounter2 extends Component {
  render() {
    const {count,incCount}=this.props
    return <div>
        <h1 onMouseOver={incCount}>Hover {count} times</h1>
    </div>;
  }
}

export default HoverCounter2;
