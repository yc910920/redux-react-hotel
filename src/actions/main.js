    /* jshint ignore:start */

import assign from 'object-assign';
import request from 'axios';
import { Map } from 'immutable';


import actionType from '../constant/actionType';

import * as APIType from '../constant/APIType';

export function getList(type,page,date) {
	return {
	    type:    actionType.GET_LIST,
	    promise: request.get(APIType.API_LIST+"&check_in="+date.startDate+"&check_out="+date.endDate+"&page=1&per_page=10")
	}

}

export function moreData(newdata) {
	return {
	    type: actionType.MORE_DATA,
	    data: newdata
	}

}

export function loadMore() {
	return {
	    type: actionType.LOAD_MORE,
	}

}

export function loadMoreOver() {
	return {
	    type: actionType.LOAD_MORE_OVER,
	}

}

export function showPop() {
	return {
	    type: actionType.SHOW_POP,
	}

}

export function hidePop() {
	return {
	    type: actionType.HIDE_POP,
	}

}

export function defaultSort() {
	return {
	    type: actionType.DEFAULT_SORT,
	    promise: request.get(APIType.API_LIST+"&sort_by=default&sort_orientation=desc")

	}

}

export function priceSort() {
	return {
	    type: actionType.PRICE_SORT,
	    promise: request.get(APIType.API_LIST+"&sort_by=price&sort_orientation=asc")

	}

}

export function salesSort() {
	return {
	    type: actionType.SALES_SORT,
	    promise: request.get(APIType.API_LIST+"&sort_by=price&sort_orientation=desc")

	}

}

export function chooseStar(value) {
	return {
	    type: actionType.CHOOSE_STAR,
	    value
	}

}

export function getFacility(value) {
	return {
	    type: actionType.GET_FACILITY,
	    promise: request.get(APIType.API_FACILITY)

	}

}

export function chooseFacility(id) {
	return {
	    type: actionType.CHOOSE_FACILITY,
	    id
	}
}

export function removeFacility(index) {
	return {
	    type: actionType.REMOVE_FACILITY,
	    index
	}

}

export function setSlider(price) {
	return {
	    type: actionType.SET_SLIDER,
	    price
	}

}


export function listSort(star_ids,price_range,amenity_ids) {
	return {
	    type: actionType.LIST_SORT,
	    promise: request.get(APIType.API_LIST+"&star_ids="+star_ids+"&price_range="+price_range+"&amenity_ids="+amenity_ids)
	}

}


















