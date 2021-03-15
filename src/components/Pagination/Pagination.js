import React, {Component} from 'react';

import styles from './Pagination.module.css';

export default class Pagination extends Component {
  state = {
    any: false
  }

  getLimit = (e) => {
    const value = e.target.value;
    if(value === 'any') {
      this.setState({any: true});
    }
    else {
      this.setState({any: false})
      this.props.getPageSize(value);
      this.props.getNewTable();
    }
  }

  getLimitFromInput = (e) => {
    if (e.code === 'Enter') {
      const value = +e.target.value;
      this.props.getPageSize(value);
      this.props.getNewTable();
    }
  }

  pagination = (page) => {
    this.props.gotoPage(page);
    this.props.getNewTable();
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div>
          <select onChange={this.getLimit}>
            {this.props.arrLimit.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
            <option value={'any'}>Выбрать</option>
          </select>
          { this.state.any &&
            <div>
              <input
                type="text"
                onKeyPress={this.getLimitFromInput}
              />
            </div>
          }
        </div>
        <ul className={styles.pagination}>
          { [...Array(this.props.getTotalPages()).keys()].map(item => (
            <li key={item}>
              <button
                className={styles.button}
                onClick={() => this.pagination(item)}>
                { item + 1 }
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}