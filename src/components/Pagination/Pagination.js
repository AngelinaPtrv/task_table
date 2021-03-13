import React, { Component } from 'react';

export default class Pagination extends Component {

  pagination = (page) => {
    this.props.gotoPage(page);
    this.props.getNewTable();
  }

  render() {
    const totalPages = this.props.getTotalPages();
    return (
      <div>
        <ul>
          { [...Array(totalPages).keys()].map(item => (
            <li key={item}>
              <a onClick={() => this.pagination(item)}>
                { item + 1 }
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}