/**
 * Created by ANN on 2017/8/20.
 */
/**
 * Created by ANN on 2017/8/20.
 */

var React = require('react');
var Masonry = require('react-masonry-component');


class Elevator extends React.Component {
    constructor() {
        super()

        this.state = {
            imgData: 0,
            loadDataFlag: false

        }

    }

    componentDidMount() {


    }
    scrolltoTop(){
        $("html,body").animate({scrollTop:0},800);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
        return false;
    }
    render() {


        return (
            <div id="elevator_item" className="elevator-item">
                <a id="elevator" className="" onClick={this.scrolltoTop.bind(this)} title="回到顶部"></a>
                <a className="plus"></a>
                <div className="plus-popup">
                    <div className="group">
                        <a onClick="">添加采集
                            <i className="upload"></i></a>
                        <a className="add-board-item">添加画板
                            <i className="add-board"></i>
                        </a>
                        <a href="/about/goodies/">安装采集工具
                            <i className="goodies"></i>
                        </a>
                    </div>
                    <div className="arr"></div>
                </div>
            </div>
        )
    }
}


module.exports = Elevator;