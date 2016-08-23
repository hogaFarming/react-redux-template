import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home Page</h1>
        <Link to="/counter">counter</Link>
      </div>
    );
  }
}
