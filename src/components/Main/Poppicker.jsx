    /* jshint ignore:start */

import React, { Component, PropTypes } from 'react';
import assign from 'object-assign';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import './PopPicker.scss'


class PopPicker extends Component {

constructor(props) {
    super(props)
    this.hidePop = this.hidePop.bind(this)
    this.sortType = this.sortType.bind(this)
}

hidePop(){
  const { actions } = this.props;
  actions.hidePop();

}

sortType(value){
  const { actions } = this.props;
  if(value === 0){
    actions.defaultSort();

  }else if(value === 1){
    actions.priceSort();
  }else{
    actions.salesSort();
    
  }

}

render() {
    var sortData = ['默认排序','价格最低','销量优先'];
    var cells = sortData.map((item,index)=>{
      return <label className="item item-radio" key={index}>
              <input type="radio"/>
              <div className="radio-content" onClick={this.sortType.bind(this,index)}>
                <div className="item-content disable-pointer-events" >
                  <span>{item}</span>
                </div>
              </div> 
             </label>
    })
    return (
      <div>
          <div className="rmc-picker-popup-mask" onClick={this.hidePop}>
            
          </div>
          <div className="foot-fixed">
              {cells}
            </div>


      </div>
    )
  }
}

function mapStateToProps(state) {
    return state.main.toJS();
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, MainActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(PopPicker);


