import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
      return (
        <div className="Banner">
          <p>Welcome to, {this.props.name}</p>
        </div>
      )
    }
  }

  export default Banner