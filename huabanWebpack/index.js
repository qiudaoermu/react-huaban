/**
 * Created by ANN on 2017/7/22.
 */


import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
window.$ = require("jquery");
import RouteMap from './public/router/routeMap'



render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('main')
)


/*var React = require('react');
var ReactDOM = require('react-dom');
window.$ = require("jquery");
import ComonentHeader from './public/components/header';
import ComonentBody from './public/components/body';


class Index extends React.Component{

    render(){

        return(
            <div className="main">
                <ComonentHeader/>
                <ComonentBody/>

            </div>

        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('main'));*/

