    /* jshint ignore:start */

import actionType from '../constant/actionType';
import { Map,List } from 'immutable';
import {dateFormat,GetDateStr} from '../utils/common'

const initialState = Map({
    list:List([]),
    isLoadingMore:false,
    date:Map({
        startDate:GetDateStr(0),
        endDate:GetDateStr(1),
    }),
    showPop:false,
    star_ids:0,
    facility:List([]),
    chooseFacility:List([]),
    price:"100-300"

})


export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_LIST:
            return state.set('list', action.res.data.data.page_data.data)
        case actionType.MORE_DATA:
            return state.set('list',action.data)
        case actionType.LOAD_MORE:
            return state.set('isLoadingMore',true) 
        case actionType.LOAD_MORE_OVER:
            return state.set('isLoadingMore',false)
        case actionType.SHOW_POP:
            return state.set('showPop',true) 
        case actionType.HIDE_POP:
            return state.set('showPop',false)
        case actionType.DEFAULT_SORT:
            return state.set('list', action.res.data.data.page_data.data).set('showPop',false)
        case actionType.PRICE_SORT:
            return state.set('list', action.res.data.data.page_data.data).set('showPop',false)                  
        case actionType.SALES_SORT:
            return state.set('list', action.res.data.data.page_data.data).set('showPop',false)   
        case actionType.CHOOSE_STAR:
            return state.set('star_ids',action.value)
        case actionType.GET_FACILITY:
            return state.set('facility',action.res.data.data)
        case actionType.CHOOSE_FACILITY:
            return state.set('chooseFacility',state.get('chooseFacility').push(action.id)) 
        case actionType.REMOVE_FACILITY:
            return state.set('chooseFacility',state.get('chooseFacility').delete(action.index))
        case actionType.SET_SLIDER:
            return state.set('price',action.price)
        case actionType.LIST_SORT:
            return state.set('list', action.res.data.data.page_data.data)
                                             
        default:
            return state;
    }
}
