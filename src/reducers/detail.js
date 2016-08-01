    /* jshint ignore:start */

import actionType from '../constant/actionType';
import { Map,List } from 'immutable';
import {dateFormat,GetDateStr} from '../utils/common'


const initialState = Map({
    detail:{},
    list:[],    
    room:List.of({
        adult:2,
        child:0
    }),
    date:Map({
        startDate:GetDateStr(0),
        endDate:GetDateStr(1),
    }),
    showModal:false
    
});


export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_DETAIL:

            return state.set('detail',action.res.data.data);
        case actionType.MORE_DATA:
            return state.set('list',action.data);
        case actionType.ADD_ROOM:
            return state.set('room',state.get('room').push({adult:2,child:0}));
        case actionType.REDUCE_ROOM:
            return state.set('room',state.get('room').pop());
        case actionType.ADD_ADULT:
            var mapB = state.update('room',function(item){
                return item.update(action.index,function(ite){
                    ite.adult++;
                    return ite;
                })    
            })
            return state.set(mapB);
        case actionType.REDUCE_ADULT:
            var mapB = state.update('room',function(item){
                return item.update(action.index,function(ite){
                    ite.adult--;
                    return ite;

                })    
            })
            return state.set(mapB);
        case actionType.ADD_CHILD:

            var mapC = state.update('room',function(item){
                return item.update(action.index,function(ite){
                    ite.child++;
                    return ite;

                })    
            })
            return state.set(mapC);
        case actionType.REDUCE_CHILD:
            var mapC = state.update('room',function(item){
                return item.update(action.index,function(ite){
                    ite.child--;
                    return ite;

                })    
            })
            return state.set(mapC);
        case actionType.SET_DATE:
            return state.set('date',state.get('date').set('startDate',action.start).set('endDate',action.end));
        case actionType.SHOW_MODAL:
            return state.set('showModal',true);
        case actionType.HIDE_MODAL:
            return state.set('showModal',false);
    
        default:
            return state;
    }
}

