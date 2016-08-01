    /* jshint ignore:start */

import React, { Component } from 'react'
import "./hotel.scss"
import {Modal,Button} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DeatilActions from '../../actions/detail';
import {allPrpos} from '../../utils/getprops'
import assign from 'object-assign';


export default class Reserve extends Component {


	constructor(props){
		super()

		this.close = this.close.bind(this)
		this.open = this.open.bind(this)

    }

    close() {
    	const { actions } = this.props;
        actions.hideModal();

	}
	
	open() {
		const { actions } = this.props;
        actions.showModal();

	}


	render() {

		let object = Object.assign({}, this.props.hotel.orderNotice);

		let reserve = allPrpos(object);

		var cells = reserve.map(function(hotel,index){
			if(index < 2){
				return 	<div key={index}>
						<h5>{hotel.title}</h5>
	                    <p className="M-font" dangerouslySetInnerHTML={{__html: hotel.content}}>

	                    </p>
                    </div>
	
			}
		})

		var otherCells = reserve.map(function(hotel,index){
			if(index > 1){
				return 	<div key={index} className="block">
						<h4>{hotel.title}</h4>
	                    <p className="M-font" dangerouslySetInnerHTML={{__html: hotel.content}}>

	                    </p>

                    </div>
			}
		})

		return (
			<div>
				<div className="item-cost-box padding">
                    <h4>
                        预定须知
                    </h4>
                    {cells}

                    <div className="tac">
                        <a className="btn btn-blue" onClick={this.open}>查看更多</a>
                    </div>
                </div>

                <Modal title="订购须知" visible={this.props.showModal} onOk={this.close} okText="关闭">
  		          	{otherCells}
		        </Modal>

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

export default connect(mapStateToProps, mapDispatchToProps)(Reserve);

