import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { count, increment, incrementAsync } = this.props;
    return (
      <div>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={incrementAsync}>+async</button>
      </div>
    );
  }
}
