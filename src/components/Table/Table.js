import React, { Component } from 'react';

import Headers from '../Headers/Headers';
import TableData from '../TableData/TableData';

import styles from './Table.module.css';

export default class Table extends Component {
  render() {
    const { headers, data } = this.props;
    return (
      <table className={styles.table}>
        <Headers
          headers={headers}
          setFilter={this.props.setFilter}
          setSort={this.props.setSort}
          getNewTable = {this.props.getNewTable}
        />
        <TableData
          getNewLine={this.props.getNewLine}
          setNewLine={this.props.setNewLine}
          getNewTable = {this.props.getNewTable}
          data={data}
        />
      </table>
    )
  }
}