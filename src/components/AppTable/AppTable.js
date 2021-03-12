import React, {Component} from 'react';

import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';

export default class AppTable extends Component {
  state = {
    headers: this.props.dataProvider.getHeader(),
    tableData: this.props.dataProvider.getData()
  }

  getNewTable = () => {
    this.setState({
      tableData: this.props.dataProvider.getData()
    })
  }

  render() {
    const {headers, tableData} = this.state;
    return (
      <div>
        <Table
          headers={headers}
          data={tableData}
          setFilter={this.props.dataProvider.setFilter}
          setSort={this.props.dataProvider.setSort}
          getNewTable={this.getNewTable}
        />
        <Pagination/>
      </div>
    )
  }
}