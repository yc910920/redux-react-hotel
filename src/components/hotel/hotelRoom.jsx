    /* jshint ignore:start */

import React, { Component } from 'react'
import "./hotel.scss"
import { Link } from 'react-router'
import { connect } from 'react-redux';
import assign from 'object-assign';
import {allPrpos} from '../../utils/getprops'
import "../../static/css/media.scss"
import AddHotelReduce from './AddHotelReduce'
import AddAdultReduce from './AddAdultReduce'
import AddChildReduce from './AddChildReduce'


import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import * as DeatilActions from '../../actions/detail';


export default class HotelRoom extends Component {

	constructor(props){
		super()
		this.changeDate = this.changeDate.bind(this)
    }



	changeDate(){
	  this.props.history.pushState(null,'/hotelCalender');

	}

	render() {
		var cells = this.props.room.map(function(item,index){
			return	<div className="item-room" key={index}>
				        <p className="hotel-p">房间 {index+1}</p>
				        <div className="contact-info list hotel-div">

				            <div className="item-posr">
				                <div className="item item-input"><span className="input-label">成人</span>
				                	<AddAdultReduce adult={item.adult} index={index}/>	
				                </div>
				                <div className="item item-input"><span className="input-label">儿童</span>
				                	<AddChildReduce child={item.child} index={index}/>	

				                </div>
				            </div>

				        </div>
					</div>
		})
		
		return (
				<div className="gray-background hotel-room" style={{height:window.innerHeight}}>
					<div className="contact-info list hotel-div">
						<div className="item-posr">
							<div className="item item-input"><span className="input-label">房间数</span>
								<AddHotelReduce room={this.props.room} />
							</div>
						</div>
						<label className="item item-input hotel-date" onClick={this.changeDate}><span className="input-label">入住日期</span>
							<div className="hotel-date-detail">
								<Link className="col" to="/hotelCalender">

			                        <span className="date-ymd">{this.props.date.startDate}</span>
			                	</Link>
							</div>

						</label>
						<label className="item item-input hotel-date" onClick={this.changeDate}><span className="input-label">离店日期</span>
							<div className="hotel-date-detail">
								<Link className="col" to="/hotelCalender" >

			                        <span className="date-ymd">{this.props.date.endDate}</span>
			                    </Link>
							</div>

						</label>


					</div>
						{cells}
				</div>	

			)
	}
	
}

function mapStateToProps(state) {
    return state.detail.toJS();
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, DeatilActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelRoom);

