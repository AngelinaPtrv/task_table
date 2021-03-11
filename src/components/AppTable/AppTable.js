import React, { Component } from 'react';

import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import localDataProvider from '../communication/LocalDataProvider';

export default class AppTable extends Component {
  state = {

    headers: localDataProvider.getHeader(),
    
    tableData: localDataProvider.getData()
  }

  render() {

    const { headers, tableData } = this.state;

    return (
      <div>
        <Table
          headers={ headers }
          data={ tableData }
        />
        <Pagination/>
      </div>
    )
  }
}