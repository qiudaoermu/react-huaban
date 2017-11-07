/**
 * Created by ANN on 2017/8/27.
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import ComonentBody from '../components/body'
import App from '../components/App'

import UserInfo from '../components/UserInfo'
import Detail from '../components/Detail'
import NotFound from '../components/NotFound'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={ComonentBody}/>
                    <Route path='UserInfo' component={UserInfo}/>
                    <Route path='detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap