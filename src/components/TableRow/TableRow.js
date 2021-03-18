import React, {Component} from 'react';

import styles from './TableRow.module.css';

export default class TableRow extends Component {

  selectCheckbox = (e) => {
    this.props.checkInput(this.props.index, e.target.checked);
  }

  render() {
    return (
      <tr className={this.props.checkedInput ? styles.checked : null}>
        <td className={styles.checkbox}>
          <input
            type="checkbox"
            value={this.props.checkedInput}
            onChange={this.selectCheckbox}
            checked={this.props.checkedInput || false}
          />
        </td>
        {Object.keys(this.props.data).map(key => (
          <td
            key={key}
            className={styles.cell}
          >
            {this.props.data[key]}
          </td>
        ))}
      </tr>
    )
  }
}