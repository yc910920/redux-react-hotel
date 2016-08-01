    /* jshint ignore:start */

import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import * as DeatilActions from '../../actions/detail';
import ReactMCarousel from '../Carousel/ReactMCarousel'
import Introduce from './Introduce'
import Reserve from './Reserve'
import Room from './Room'

class Detail extends Component {
    constructor() {
        super();
    }

    componentWillMount(){
        console.log(this.props.routeParams);
        const { actions,routeParams } = this.props;
        actions.getDetail(routeParams.id);

    }


    
    render() {

        function allPrpos(obj) { 
         // 用来保存所有的属性名称和值
             var props = [];
             // 开始遍历
             for(var p in obj){ 
                 // 方法
                 if(typeof(obj[p])=="function"){ 
                     obj[p]();
                 }else{ 
                     // p 为属性名称，obj[p]为对应属性的值
                     props.push({background:obj[p]});
                 } 
             } 
             // 最后显示所有的属性
             return props;
         }  

        let slide = [];

        let imgs = Object.assign({}, this.props.detail.image);
        var slides = allPrpos(imgs);
        slides.map(function(item,index){
            slide.push(<div key={index} className="ex-s"><img src={item.background.path} /></div>);
        })
        return (
            <div className="register">
                <ReactMCarousel loop lazy>
                    {slide}
                </ReactMCarousel>
                <Introduce hotel={this.props.detail} star={this.props.routeParams}/>
                <Room hotel={this.props.detail} date={this.props.date}/>
                <Reserve hotel={this.props.detail}/>
            </div>
        );
    }
}

Detail.propTypes = {
   actions: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);