    /* jshint ignore:start */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { containers, components } from './components';
module.exports = (
    <Route path="/" component={containers.Main}>
        <IndexRoute component={components.Lists} />
        <Route path="list" component={components.Lists} />    
        <Route path="hotel/:id/:checkIn/:checkOut/:star" component={components.Hotel} />
        <Route path="hotelRoom/:id/:checkIn/:checkOut" component={components.HotelRoom} />  
        <Route path="hotelCalender" component={components.HotelCalender} />   
        <Route path="filter" component={components.Filter} /> 
       
    </Route>
);