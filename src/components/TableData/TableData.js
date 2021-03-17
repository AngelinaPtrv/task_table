import React, {Component} from 'react';

import TableRow from "../TableRow/TableRow";
import NewTableRow from "../NewTableRow/NewTableRow";

import styles from './TableData.module.css';

export default class TableData extends Component {

  state = {
    new: false,
    newLine: null
  }

  showNewLine = (value) => {
    this.setState({new: value})
  }

  setValueOfNewLine = (header, e) => {
    const newLine = {...this.state.newLine};
    newLine[header] = e.target.value;
    this.setState({
      newLine: newLine
    });
  }

  saveNewLine = () => {
    this.showNewLine(false);
    this.props.setNewLine(this.state.newLine);
    this.setState({newLine: null});
    this.props.getNewTable();
  }

  render() {
    const {data} = this.props;
    return (
      <tbody>
      {data.map((data, index) => (
        <TableRow key={index} data={data}/>
      ))}
      <tr>
        {this.state.new &&
        <NewTableRow data={ this.props.getNewLine() } callback={this.setValueOfNewLine}/>
        }
      </tr>
      <tr>
        <td>
          <button
            className={styles.button}
            onClick={() => this.showNewLine(true)}
          >
            +
          </button>
          <button
            className={styles.button}
            onClick={() => this.saveNewLine()}
          >
            Add
          </button>
        </td>
      </tr>
      </tbody>
    )
  }
}