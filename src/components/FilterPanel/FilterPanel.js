import React, { Component } from 'react';

export default class FilterPanel extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.setFilter}/>
      </div>
    )
  }
}