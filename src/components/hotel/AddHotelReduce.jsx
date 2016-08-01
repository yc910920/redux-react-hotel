    /* jshint ignore:start */

import React, { Component } from 'react'
import "./hotel.scss"
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import * as DeatilActions from '../../actions/detail';
import { connect } from 'react-redux';
import assign from 'object-assign';


export default class AddHotelReduce extends Component {

	constructor(props){
		super()

		this.add = this.add.bind(this)
		this.reduce = this.reduce.bind(this)

    }

    add(){
    	const { actions } = this.props;
        actions.addRoom();
    }

    reduce(){
    	const { actions } = this.props;
        actions.reduceRoom();
    }


	render() {

		return (
			<div className="hotel-reduce">				
				<div className='add-reduce'>
					<a onClick={this.add}>+</a>
					<input disabled type='text' value={this.props.room.length} className='hotel-padding'/>
					<a onClick={this.reduce} >-</a>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddHotelReduce);



