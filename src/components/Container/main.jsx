    /* jshint ignore:start */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class Main extends Component {

    render() {
        return (
            <section className="main">
                {this.props.children}
            </section>
        );
    }
}

Main.propTypes = {
    isShow: PropTypes.bool,
    content: PropTypes.string,
    children: PropTypes.element
}

function mapStateToProps(state) {
    return state.main.toJS();
}

export default connect(mapStateToProps)(Main);
