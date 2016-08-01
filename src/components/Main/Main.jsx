    /* jshint ignore:start */

import React, { Component, PropTypes } from 'react';
import assign from 'object-assign';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {Icon} from 'antd'

import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';

import List from '../list/List';
import '../ChooseFilter/ChooseFilter.scss';

import PopPicker from './PopPicker'

let page = 1;
let per_page = 10;


class Main extends Component {

constructor(props) {
    super(props)
    this.sort = this.sort.bind(this)

}

sort(){
    const { actions } = this.props;
    actions.showPop();
}

componentWillMount(){

    const { actions } = this.props;

    actions.getList(page,per_page,this.props.date);
}

render() {
    return (
      <div>
          <div className="title hotel-title">酒店列表</div>
          <div className="list-count">
              <span>入住 <em>{this.props.date.startDate}</em></span>
              <span>退房 <em>{this.props.date.endDate}</em></span>
              
          </div>

          <div className="hotel-filter">
              <div className="button-bar">
                  <Link className="button icon iconfont" to="/filter"><Icon type="filter" />筛选</Link>
                  <a className="button icon iconfont" onClick={this.sort}><Icon type="swap" />排序</a>
              </div>
          </div>
          <List actions={this.props.actions} items={this.props.list} isLoadingMore={this.props.isLoadingMore} date={this.props.date}/>
          {this.props.showPop ? <PopPicker /> : null}

     </div>
    )
  }
}

function mapStateToProps(state) {
    return state.main.toJS();
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, MainActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Main);


