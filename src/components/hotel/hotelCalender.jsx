    /* jshint ignore:start */

import React, { Component } from 'react'
import 'rc-calendar/assets/index.css';
import { bindActionCreators } from 'redux'
import * as DeatilActions from '../../actions/detail';
import { connect } from 'react-redux';
import assign from 'object-assign';
import {dateFormat} from '../../utils/common'
import 'rc-select/assets/index.css';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar/lib/locale/zh_CN';
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN';
const now = new GregorianCalendar(zhCn);
const formatter = new GregorianCalendarFormat('yyyy-MM-dd');

now.setTime(Date.now());

export default class HotelCalender extends Component {

	constructor(props){
		super()
		this.disabledDate = this.disabledDate.bind(this)
		this.format = this.format.bind(this)
		this.isValidRange = this.isValidRange.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onStandaloneSelect = this.onStandaloneSelect.bind(this)
		this.onOk = this.onOk.bind(this)
    }

    disabledDate(current) {
	  const date = new Date();
	  date.setHours(0);
	  date.setMinutes(0);
	  date.setSeconds(0);
	  return current.getTime() < date.getTime();  // can not select days before today
	}

	format(v) {
	  return v ? formatter.format(v) : '';
	}

	isValidRange(v) {
	  return v && v[0] && v[1];
	}

	onChange(value) {
	  console.log('onChange');
	  console.log(value[0] && this.format(value[0]), value[1] && this.format(value[1]));
	}

	onStandaloneSelect(value) {
	  console.log('onSelect');
	  console.log(this.format(value[0]), this.format(value[1]));
	  const { actions } = this.props;
	  actions.setDate(this.format(value[0]), this.format(value[1]));
	  this.props.history.goBack();
	}

	onOk(value){

		console.log(value);
	}

	render() {
		return (
				<RangeCalendar
			        defaultValue={now}
			        dateInputPlaceholder={['开始时间', '结束时间']}
			        locale={CalendarLocale}
			        showOk
			        formatter={formatter}
			        onChange={this.onChange}
			        onSelect={this.onStandaloneSelect}
			        disabledDate={this.disabledDate}
			        onOk={this.onOk}
			      />

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

export default connect(mapStateToProps, mapDispatchToProps)(HotelCalender);



