import React, { Component } from 'react';

import Headers from '../Headers/Headers';
import TableData from '../TableData/TableData';

export default class Table extends Component {
  render() {
    const { headers, data } = this.props;
    return (
      <table>
        <Headers
          headers={headers}
          setFilter={this.props.setFilter}
          setSort={this.props.setSort}
          getNewTable = {this.props.getNewTable}
        />
        <TableData
          data={data}
        />
      </table>
    )
  }
}