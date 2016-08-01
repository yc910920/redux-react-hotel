    /* jshint ignore:start */

import React, { Component } from 'react'
import {Rate} from 'antd'
import "./hotel.scss"
import {allPrpos} from '../../utils/getprops'
import '../../../node_modules/antd/dist/antd.min.css'


export default class Introduce extends Component {

	render() {


		let object = Object.assign({}, this.props.hotel.reference);
		var star = parseFloat(this.props.star.star);
		let distances = allPrpos(object);

		var cells = distances.map(function(hotel, index) {
	      return <div className="item-nearby" key={index}>
	                <p className="item-nearby-name">{hotel.name}</p>
	                <p className="hotelGrey">距离{hotel.distance/1000}Km</p>
	             </div>
	      })

		let items = Object.assign({}, this.props.hotel.amenityIcons);
		let facility = allPrpos(items);
		var lis = facility.map(function(hotel, index) {
	      return <li key={index}>{hotel.name}</li>
	      })

		return (
			<div>
				<section className="item-box padding">
	                <div className="item-title">{this.props.hotel.showName}</div>
	                <div className="item-sub-title">
	                    总评：<span className="item-score hotelGrey">{this.props.hotel.star}</span>
	                    <div className="star hotelGrey">星级：<Rate allowHalf defaultValue={star} disabled/></div>

	                </div>
	            </section>

	            <section className="item-box item-dl padding">
	                <div className="item-dt">
	                <img src={require('../../static/images/point.png')} />

	                    酒店地址：
	                </div>
	                <div className="item-dd hotel-add-margin">
	                    <div className="item-address">{this.props.hotel.showAddress}</div>
	                </div>
	            </section>

	            <section className="item-box item-dl padding">
	                <div className="item-dt">
	                <img src={require('../../static/images/point.png')} />
	                
	                附近建筑：</div>
	                <div className="item-dd">
	                    <div className="item-flex">
	                        {cells}
	                    </div>
	                </div>
	            </section>
	            <section className="item-box item-dl padding">
	                <div className="item-dt">
	                <img src={require('../../static/images/point.png')} />
	                酒店设施：</div>
	                <div className="item-dd hotel-fal-bottom">
	                    <ul className="facility">
	                    	{lis}
	                    </ul>
	                </div>
	            </section>
			</div>
		)
	}
	
}

