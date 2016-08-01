    /* jshint ignore:start */

import React, { Component, PropTypes } from 'react';
import assign from 'object-assign';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import {Slider,Radio} from 'antd'
import './Filter.scss'
import { Link } from 'react-router'


const RadioGroup = Radio.Group;

class Filter extends Component {

constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.chooseFacility = this.chooseFacility.bind(this)
    this.sort = this.sort.bind(this)
    this.onSliderChange = this.onSliderChange.bind(this)
    this.back = this.back.bind(this)
}

onChange(e){
  const { actions } = this.props;
  actions.chooseStar(e.target.value);
}

onSliderChange(value){
  console.log(value)
  const { actions } = this.props;
  let price = "";
  price = value[0]*5+ '-'+ value[1]*5;
  actions.setSlider(price);


}

componentWillMount(){

    const { actions } = this.props;

    actions.getFacility();
}

sort(){
    const { actions } = this.props;
    var star_ids = '',
        price_range='',
        amenity_ids='';
    if(this.props.star_ids === 2){
      star_ids = '1,2';
    }else if(this.props.star_ids === 0){
      star_ids = '';
    }else{
      star_ids = this.props.star_ids;
    }

    price_range = this.props.price;
    amenity_ids = this.props.chooseFacility.join(',');

    actions.listSort(star_ids,price_range,amenity_ids);
    this.props.history.goBack();
    

}

chooseFacility(item,e){

  const { actions } = this.props;

  if(e.target.className.length < 10){
    actions.chooseFacility(item.id);
    e.target.className+= ' ' +'checked';

  }else{
    console.log(this.props.chooseFacility);
    var index = this.props.chooseFacility.indexOf(item.id)

    actions.removeFacility(index);
    e.target.className = 'tff-radio';

  }  

}

back(){
    this.props.history.goBack();

}
render() {
    const marks = {
      0:  '$ 0',
      20: '$ 100',
      40: '$ 200',
      60: '$ 300',
      80: '$ 400',
      100: '>$ 500'
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    }


    var cells = this.props.facility.map((item,index)=>{
      return <div className="tff-radio" key={item.id} onClick={this.chooseFacility.bind(this,item)}>
        {item.name}
      </div>
    })


    return (
      <div className="gray-background" style={{height:window.innerHeight}}>      
        <div className="bar bar-header bar-positive">
          <a className="button icon-left button-clear" onClick={this.back}>取消</a>
          <h1 className="title">筛选</h1>
          <a className="button icon-right button-clear" onClick={this.sort}>确认</a>

        </div>

        <div className="filter-card">

            <div className="full-card">
              <p className="card-title">价格区间</p>
              <Slider range marks={marks} defaultValue={[20, 60]} step={null} onChange={this.onSliderChange}/>

            </div>

            <div className="full-card">
              <p className="card-title-hotel check-star transform-scale-first">酒店星级</p>

              <RadioGroup onChange={this.onChange} value={this.props.star_ids} className="M-radio">
                <Radio style={radioStyle} key="a" value={0}>不限</Radio>
                <Radio style={radioStyle} key="b" value={1,2}>三星级以下 / 经济型</Radio>
                <Radio style={radioStyle} key="c" value={3}>三星级 / 舒适型</Radio>
                <Radio style={radioStyle} key="d" value={4}>四星级 / 高档型</Radio>
                <Radio style={radioStyle} key="e" value={5}>五星级 / 豪华型</Radio>

              </RadioGroup>
            </div>

            <div className="full-card">
              <p className="card-title">酒店设施<span className="title-color">(可多选)</span></p>
              {cells}
            </div>


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



export default connect(mapStateToProps, mapDispatchToProps)(Filter);


