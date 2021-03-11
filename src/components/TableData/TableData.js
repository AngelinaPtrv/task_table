import React, { Component } from 'react';

import styles from './TableData.module.css';

export default class TableData extends Component {
  render() {
    const { data } = this.props;
    return(
      <tbody>
       { data.map(data => (
         <tr key={ data.id }>
           { Object.values(data).map(item => (
             <td
               key={ item }
               className={ styles.cell }
             >
               { item }
             </td>
           ))}
         </tr>
       ))}
      </tbody>
    )
  }
}