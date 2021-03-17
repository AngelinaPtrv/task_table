import React, {Component} from 'react';

import styles from './TableRow.module.css';

export default class TableRow extends Component {
  render() {
    return (
      <tr>
        {Object.keys(this.props.data).map(key => (
          <td
            key={key}
            className={styles.cell}>
            {this.props.data[key]}
          </td>
        ))}
      </tr>
    )
  }
}