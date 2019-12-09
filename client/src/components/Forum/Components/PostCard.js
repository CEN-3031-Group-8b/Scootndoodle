import React, { Component } from 'react';

export default class PostCard extends Component {
  render() {
    return (
        <div className="card post">
          <div className="card-block post">
            {this.props.children}
          </div>
        </div>
    )
  }
}