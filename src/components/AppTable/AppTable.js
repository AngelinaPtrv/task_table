import React, {Component} from 'react';

import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';

import styles from './AppTable.module.css';

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
    const { dataProvider } = this.props;
    const { headers, tableData } = this.state;
    return (
      <div className={styles.wrap}>
        <Table
          headers={headers}
          data={tableData}
          setFilter={dataProvider.setFilter}
          setSort={dataProvider.setSort}
          getNewTable={this.getNewTable}
        />
        <Pagination
          gotoPage={dataProvider.gotoPage}
          getTotalPages={dataProvider.getTotalPages}
          getNewTable={this.getNewTable}
          getPageSize={dataProvider.getPageSize}
          arrLimit={dataProvider.options.pagination.arrLimit}
          limit={dataProvider.options.pagination.limit}
          page={dataProvider.options.pagination.page}
        />
      </div>
    )
  }
}