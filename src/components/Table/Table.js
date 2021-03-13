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
        />
        <TableData
          data={data}
        />
      </table>
    )
  }
}