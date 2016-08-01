    /* jshint ignore:start */

import React, { Component } from 'react'
import "./hotel.scss"
import { Link } from 'react-router'

import {allPrpos} from '../../utils/getprops'
import "../../static/css/media.scss"
import {dateFormat} from '../../utils/common'

export default class Room extends Component {

	render() {

      	var date = this.props.date;

      	var checkInDay = dateFormat(date.startDate,'dd');
      	var checkInBottom = dateFormat(date.startDate,'yyyy.MM');
    	var checkOutDay = dateFormat(date.endDate,'dd');
      	var checkOutBottom = dateFormat(date.endDate,'yyyy.MM');

		return (
				<div className="item-room-info clearfix">

	                <div className="item-date">
	                    <ul className="item-date-ul clearfix">
	                        <li>
	                            <p className="checkin-title">入住日期</p>
	                            <h2 className="item-date-day">{checkInDay}</h2>
	                            <p>{checkInBottom}</p>
	                        </li>
	                        <li>
	                            <p>退房日期</p>
	                            <h2 className="item-date-day">{checkOutDay}</h2>
	                            <p>{checkOutBottom}</p>
	                        </li>
	                    </ul>
	                </div>
	                <div className="item-option">
	                    <ul>
	                        <li className="item-one">天数<span>1</span></li>
	                        <li className="item-li item-margin">成人<span>2</span></li>
	                        <li className="item-li item-margin item-three">儿童<span>0</span></li>
	                        <li className="item-margin">房间<span>1</span></li>
	                    </ul>
	                </div>
	                <div className="item-button">
	                    <Link className="btn btn-blue btn-white" to={`/hotelRoom/${this.props.hotel.hotelv2_id}/${date.startDate}/${date.endDate}`}>重新选择</Link>
	                </div>
	            </div>
		)
	}
	
}

