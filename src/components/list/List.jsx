    /* jshint ignore:start */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import '../../../node_modules/lazysizes/lazysizes.min.js'
import "./list.scss"
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import { connect } from 'react-redux';
import assign from 'object-assign';
import InfiniteScroll from 'redux-infinite-scroll'
import {Rate} from 'antd'
import '../../../node_modules/antd/dist/antd.min.css'

export default class List extends Component {

  constructor(props){
    super()

    this.loadMore = this.loadMore.bind(this)

  }
  loadMore() {
    const { actions } = this.props;
    if(!this.props.isLoadingMore){

        var oldData = Object.assign([], this.props.items)
    }
  
  }
  
  render() {
      var date = this.props.date;
      var cells = this.props.items.map(function(hotel, index) {
      return <div className="list" key={index}>
              <Link key={index} className="item hotel-item transform-scale" to={`/hotel/${hotel.hotelv2_id}/${date.startDate}/${date.endDate}/${hotel.star}`}>
              <div className="img-box">
                  <img src={hotel.thumbnail} className="lazyload" />
              </div>
              <h2 className="hotel-name">{hotel.showName}</h2>
              <Rate allowHalf defaultValue={hotel.star} disabled/>
              <span className="pulls-left">{hotel.reviews}条评论</span>
              <div className="hotel-price">${hotel.display_price}</div>

              </Link>
            </div>
    })

    return (
        <InfiniteScroll className="tableView" containerHeight="1000px"
          items={cells}
          loadMore={this.loadMore}
                  />
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

export default connect(mapStateToProps, mapDispatchToProps)(List);

