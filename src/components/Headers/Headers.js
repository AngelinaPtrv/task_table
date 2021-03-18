import React, {Component} from 'react';

import FilterPanel from '../FilterPanel/FilterPanel';

import styles from './Headers.module.css';

export default class Headers extends Component {

  sort = (fieldName) => {
    this.props.setSort(fieldName);
    this.props.getNewTable();
  }

  filter = (event, fieldName) => {
    const value = event.target.value;
    this.props.setFilter(fieldName, value)
    this.props.getNewTable();
  }

  render() {
    const {headers, selectAllCheckbox} = this.props;
    return (
      <thead>
      <tr className={styles.header}>
        <th>
          <input
            type="checkbox"
            onChange={selectAllCheckbox}
          />
        </th>
        {headers.map(head => (
          <th
            className={styles.cell}
            key={head.name}
          >
            <button
              className={styles.button}
              onClick={() => this.sort(head.name)}>
              {head.view}
            </button>
            <FilterPanel
              setFilter={(e) => this.filter(e, head.name)}
            />
          </th>
        ))}
      </tr>
      </thead>
    )
  }
}