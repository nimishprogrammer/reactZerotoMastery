import React, { Component } from 'react'
import './search-box.styles.css';
export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input type='search' placeholder={this.props.placeholder} className= {this.props.className} onChange={this.props.onChangeHandler}/>
      </div>
    )
  }
}
