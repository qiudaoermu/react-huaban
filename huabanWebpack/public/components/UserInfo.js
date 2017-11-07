/**
 * Created by ANN on 2017/8/27.
 */
import React from 'react'
import { hashHistory } from 'react-router'
import  ComonentHeader from "./header"
class UserInfo extends React.Component {



    constructor(){
        super()
        var callbackData = ""
        var this_ = this
        $.ajax({
            url:"/api/user/getBoardData",
            type:"POST",
            async:false

        }).done(function (data) {
                callbackData=data[0].boards

        })
        this.state={
            callbackData:callbackData,
            editFlag:false
        }
    }
    componentDidMount(){

    }
    showEditBorad(v,i){
        console.log(v)
        this.setState({editFlag:v})
    }
    render() {
        const arr = [1, 2, 3];
        return (
            <ul>
                <ComonentHeader/>
                <div className="wrapper clearfix" style={{width:'1496px'}}>
                    <div id="user_card">
                        <div className="maozi"></div>
                        <div className="inner clearfix without-side">
                            <div className="avatar-unit">
                                <div className="img">
                                    <img
                                    src="//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq140sf"
                                    data-baiduimageplus-ignore="1" className="current-avatar" />


                                    <img src="public/css/img/load2.gif" style={{display:'none'}} data-baiduimageplus-ignore="1" className="load"/>
                                    <div className="change-avatar">
                                        <a className="btn wbtn btn12">
                                         <span className="text">更换头像</span>
                                        </a>
                                        <div style={{position:'absolute',opacity:0.01,overflow:'hidden'}}>
                                            <iframe src="javascript:'<html></html>'"
                                                    frameBorder="no"

                                                    name="IFrame_j74hjphf"
                                                    id="IFrame_j74hjphf" style={{display:'none'}}>

                                            </iframe>
                                            <input type="file" name="file" size="1"
                                                   style={{position:'absolute',top:'0px',left:'0px',border:'0px'}}

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="counts clearfix">
                                    <a href="/q42p11pfnu/followers/" className="followers">
                                    <div className="num">1</div>
                                    <div className="sub">粉丝</div>
                                </a><a href="/q42p11pfnu/following/" className="follows">
                                    <div className="num">25</div>
                                    <div className="sub">关注</div>
                                </a></div>
                            </div>
                            <div className="head-line">
                                <div className="name">qiudaoyimu</div>
                                <a href="/muse/register/" title="成为认证设计师" target="_blank">
                                    <i className="v-icon unverified"></i>
                                </a>
                            </div>
                            <ul className="introduction"></ul>
                            <div className="about clearfix"></div>
                            <div className="action-buttons">
                                <a href="/settings/" className="btn btn14">
                                    <span className="text"> 帐号设置</span>
                                 </a>
                            </div>
                            <div className="bindings"></div>
                        </div>
                        <div className="tabs">
                            <a href="/q42p11pfnu/" className="tab active">17画板</a>
                            <a href="/q42p11pfnu/pins/" className="tab ">184采集</a>
                            <a href="/q42p11pfnu/likes/" className="tab ">3喜欢</a>
                            <a href="/q42p11pfnu/tags/" rel="nofollow" className="tab ">7标签</a>
                            <form id="people_search_item" action="/q42p11pfnu/pins/" className="searching-unit" data-regestered="regestered">
                                <input value="" name="q" placeholder="搜索我的采集" autoComplete="off"/>
                                <a  className="go"></a>
                            </form>
                            <div className="search-hint"></div>
                        </div>
                    </div>
                    <div id="waterfall" className="sort-lists clearfix sortable __web-inspector-hide-shortcut__">
                        <div  className="wfc add-board">
                            <div className="inner"><i></i><span>创建画板</span></div>
                        </div>

                        {this.state.callbackData.map((v,i)=>{
                            return(
                                <div data-id={v.board_id} data-seq={v.board_id}  className="Board wfc inited" key={i}
                                     onMouseEnter={this.showEditBorad.bind(this,i)}>
                                <div className="draglay"></div>

                                    {this.state.editFlag===i?<div title="拖动改变排序" className="drag-icon"></div>:""}
                                    <a href="/boards/38936970/" target="_blank" className="link  x">
                                        <img src={"//hbimg.b0.upaiyun.com/"+v.pins[0].file.key+"_sq235"} data-baiduimageplus-ignore="1" className="large"/>
                                        {v.pins[1]? <img src={"//hbimg.b0.upaiyun.com/"+v.pins[1].file.key+"_sq235"} data-baiduimageplus-ignore="1"/>:''}
                                        {v.pins[2]? <img src={"//hbimg.b0.upaiyun.com/"+v.pins[2].file.key+"_sq235"} data-baiduimageplus-ignore="1"/>:''}
                                        {v.pins[3]? <img src={"//hbimg.b0.upaiyun.com/"+v.pins[3].file.key+"_sq235"} data-baiduimageplus-ignore="1"/>:''}


                                        <div className="shadows">
                                            <div className="large-shadow"></div>
                                            <div className="shadow"></div>
                                            <div className="shadow"></div>
                                            <div className="shadow"></div>
                                        </div>
                                        <div className="over ">
                                            <h3>{v.title}</h3>
                                            <h4></h4>
                                            <div className="pin-count">{v.pin_count}</div></div>

                                        {this.state.editFlag==i?<div className="board-cover-edit" >
                                            <div href="#" className="btn btn12">
                                                <span className="text">设置封面</span>
                                            </div>
                                        </div>:''}
                                    </a>
                                    <a href="/pins/1292711857" title="QQ20170811-204338" className="hidden">
                                        <img title="QQ20170811-204338" src="//hbimg.b0.upaiyun.com/bf8be9c316cf95366298bbb74e7bd17cba9a822c7e3d-5P4Afn_sq75"/>
                                    </a>

                                    <div className="FollowBoard">
                                        <a href="/boards/38936970/edit/" className="btn btn14 wbtn">
                                            <strong> 编辑</strong>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </ul>
        )
    }
    clickHandler(value) {
        hashHistory.push('/detail/' + value)
    }
}

export default UserInfo