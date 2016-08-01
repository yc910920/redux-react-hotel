    /* jshint ignore:start */

import assign from 'object-assign';
import request from 'axios';

import actionType from '../constant/actionType';
import * as APIType from '../constant/APIType';

export function getDetail(id) {
	return {
	    type:    actionType.GET_DETAIL,
	    promise: request.get(APIType.API_DETAIL+id)
	}

}

export function moreData(newdata) {
	return {
	    type: actionType.MORE_DATA,
	    data: newdata
	}

}

export function addRoom(newdata) {
	return {
	    type: actionType.ADD_ROOM,
	}

}

export function reduceRoom(newdata) {
	return {
	    type: actionType.REDUCE_ROOM,
	}

}

export function addAdult(index) {
	return {
	    type: actionType.ADD_ADULT,
	    index
	}

}

export function reduceAdult(index) {
	return {
	    type: actionType.REDUCE_ADULT,
	    index
	}

}

export function addChild(index) {
	return {
	    type: actionType.ADD_CHILD,
	    index
	}

}

export function reduceChild(index) {
	return {
	    type: actionType.REDUCE_CHILD,
	    index
	}

}


export function setDate(start,end) {
	return {
	    type: actionType.SET_DATE,
	    start,
	    end
	    
	}

}

export function showModal() {
	return {
	    type: actionType.SHOW_MODAL
	    
	}

}

export function hideModal() {
	return {
	    type: actionType.HIDE_MODAL
	}

}







