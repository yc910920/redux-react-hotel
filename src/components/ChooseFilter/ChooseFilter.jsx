    /* jshint ignore:start */

import React, { Component } from 'react'

import ReactDOM from 'react-dom'
import { Link } from 'react-router';
import "./ChooseFilter.scss"

export default class ChooseFilter extends Component {

  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this)

  }

  render() {

    return (
      <div className="hotel-filter">
          <div className="button-bar">
              <a className="button icon iconfont" > 筛选</a>
              <a className="button icon iconfont" onClick={this.sort}> 排序 </a>
          </div>
      </div>
    )
  }

}

