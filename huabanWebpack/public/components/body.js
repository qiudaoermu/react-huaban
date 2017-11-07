/**
 * Created by ANN on 2017/7/22.
 */
import  React from 'react';
import ReactDOM from 'react-dom';
import ComponentFirstNew from "./firstNewsWord"
import  Gallery from  './masonry'
import Elevator from './Elevator'
import ComonentHeader from './header'
export default class ComonentBody extends React.Component{
    constructor(){
        super()

    }
    componentDidMount(){

    }
    render(){

        return(
        <div>
            <ComonentHeader/>
            <div className="wrapper">


                <Gallery/>
                <Elevator/>
            </div>
        </div>

        )
    }
}

