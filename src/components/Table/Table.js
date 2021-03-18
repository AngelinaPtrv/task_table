import React, { Component } from 'react';

import Headers from '../Headers/Headers';
import TableData from '../TableData/TableData';

import styles from './Table.module.css';

export default class Table extends Component {
  state = {
    checks: Array(this.props.data.length).fill(false)
  }

  selectAllCheckbox = (e) => {
    this.setState({ checks: Array(this.props.data.length).fill(e.target.checked)});
  }

  setCheckBox = (index, value) => {
    const checks = [...this.state.checks];
    checks[index] = value;
    this.setState({ checks });
  }

  render() {
    const { headers, data } = this.props;
    return (
      <table className={styles.table}>
        <Headers
          headers={headers}
          setFilter={this.props.setFilter}
          setSort={this.props.setSort}
          getNewTable = {this.props.getNewTable}
          selectAllCheckbox={this.selectAllCheckbox}
        />
        <TableData
          getNewLine={this.props.getNewLine}
          setNewLine={this.props.setNewLine}
          getNewTable = {this.props.getNewTable}
          data={data}
          setCheckBox={this.setCheckBox}
          checkedInputs={this.state.checks}
        />
      </table>
    )
  }
}