/**
 * Created by ANN on 2017/7/22.
 */
import  React from 'react';
import { Link } from 'react-router'

class ComonentHeader extends React.Component{


    constructor(){
        super()
        this.list = ["logo","首页","发现","最新","美思","活动","教育","..."]
        this.state = {
            currentIndex:0
        }
    }
    currentIndex(index,value){
        return this.state.currentIndex==value?"nav-tab-item-active":"nav-tab-item"
    }
    menuChangeItem(event,value){
        var val = event.target.getAttribute("data-index")
        console.log(val)

        console.log(value)
        this.setState({currentIndex:val})
    }
    LinkToUserInfo(){

    }
    render(){
        return(
            <div className="header">
                <ul className="nva menu-bar">
                    {this.list.map((index,value)=> {
                            if(value==0){
                                return(




                                      <li
                                          id="huaban"
                                          className="nav-tab-item"
                                          key={value}
                                      >
                                          <Link to="/" className="linkToMain"></Link>
                                      </li>


                                )
                            }else{
                                return (
                                    <li className={this.currentIndex(index,value)}
                                        key={value}
                                        data-index = {value}
                                        onClick={(index,value) => {this.menuChangeItem(index,value)}}
                                    >{index}
                                    </li>
                                )
                            }

                    })}

                    <div className="right-part">
                        <a style={{display:'none'}} href="#"  className="go-mobile btn rbtn">
                            <span className="text"> 访问移动版</span></a>
                        <div className="message-nav">

                            <a title="通知" className="nav-link">
                                <div className="nav-icon"></div>
                                <div className="num hidden">0</div>
                            </a>
                            <div id="message_popup" style={{display:'none'}}>
                                <div className="bar">
                                    <div className="left barTitle click">消息</div>
                                    <div className="right barTitle active click">动态</div>
                                </div>
                                <div id="boxer"><div className="box box-mentions hidden">
                                    <div className="empty">没有消息</div>
                                </div>
                                    <div className="box box-activities ">
                                        <div className="item ">
                                            <a href="/bhsmygjcth/" className="avt">
                                                <img width="75" height="75" src="//hbimg.b0.upaiyun.com/7c06a187be14d1c8d9e7f0ac252aaa4a70c85053f0bf-Ijjjs0_sq75sf" data-baiduimageplus-ignore="1"/>
                                            </a>
                                            <div className="details">
                                                <div className="line">
                                                    <a href="/bhsmygjcth/" className="brown-link">乐琪琪</a>
                                                </div>
                                                <div className="line">
                                                    <span>关注了你</span></div>
                                            </div>
                                        </div>
                                        <div className="item ">
                                            <a href="/hello-0313/" className="avt">
                                                <img width="75" height="75" src="//hbimg.b0.upaiyun.com/d8026b5fde5102a2d8ecab8398c69037c45abd90128d-TFPwxC_sq75sf" data-baiduimageplus-ignore="1"/>
                                            </a>
                                            <div className="details">
                                                <div className="line">
                                                    <a href="/hello-0313/" className="brown-link">hello_Z</a>
                                                </div><div className="line">
                                                <span>关注了你的画板</span>
                                                <a href="/boards/27751005/" className="brown-link">动画</a>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="/message/?type=activities" className="show-all">查看所有动态»</a>
                                <div className="triangle">

                                </div>
                            </div>
                        </div>

                            <div id="nav_user" onClick={this.LinkToUserInfo.bind(this)}>

                                <a href="/q42p11pfnu/" className="nav-link dm-nav">

                                    <Link to="/UserInfo">
                                        <img width="26" height="26" src="//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq75sf"
                                                                data-baiduimageplus-ignore="1"
                                                                className="avt"/>
                                    </Link>
                                    <div className="arrow"></div>
                                    <div className="num ">1</div>
                                </a>




                                <div className="menu" style={{display:'none'}}>
                                    <div className="group">
                                        <a href="/q42p11pfnu/">我的花瓣
                                            <i className="mine"></i>
                                        </a>
                                        <a title="私信" className="dm-nav">
                                            私信<i className="messages"></i>
                                            <div className="num in-line ">1</div>
                                        </a>
                                        <a href="/q42p11pfnu/following/">我的关注<i className="following"></i></a>
                                    </div>
                                    <div className="group"><a href="/friends/weibo/">查找好友<i className="friends"></i></a>
                                    </div>
                                    <div className="group"><a href="/muse/register/">花瓣认证设计师<i className="verified"></i>
                                    </a>
                                    </div>
                                    <div className="group"><a href="/settings/">帐号设置<i className="settings"></i>
                                    </a>
                                        <a href="/logout/">
                                            退出<i className="exit">

                                        </i>
                                        </a>
                                    </div>
                                </div>
                             </div>

                    </div>
                </ul>
            </div>

        )
    }
}
export default  ComonentHeader