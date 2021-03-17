import React, {Component} from 'react';

import styles from './NewTableRow.module.css';

export default class NewTableRow extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.data &&
          Object.keys(this.props.data).map(item => (
            <td key={ item }
                className={ styles.cell }
            >
              <input
                className={ styles.input }
                onChange={(e) => this.props.callback(item, e)}
              />
            </td>
          ))
        }
      </React.Fragment>
    )
  }
}