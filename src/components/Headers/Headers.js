import React, { Component } from 'react';

import FilterPanel from '../FilterPanel/FilterPanel';

import styles from './Headers.module.css';

export default class Headers extends Component {
  render() {
    const { headers } = this.props;
    return(
      <thead className={ styles.header }>
        <tr>
          { headers.map(head => (
            <th key={ head.name }>
              <button className={ styles.button }>
                { head.view }
              </button>
              <FilterPanel/>
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}