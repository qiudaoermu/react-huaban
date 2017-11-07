/**
 * Created by ANN on 2017/7/25.
 */
/**
 * Created by ANN on 2017/7/22.
 */
import  React from 'react';
import ReactDom from 'react-dom';


export default class ComponentFirstNew extends React.Component {
    constructor(){
        super()
        var dataR = ""
        $.ajax({
            url:"/api/user/getDate",
            async:false
        }).done(function (data) {
            console.log(data)
            dataR = data[1].data
        })

        this.state = {
            data:dataR,
            imgData:0
        }
    }
    componentDidMount(){
        var a = 10000
        var m= 5

        var t = 0
        let tabDOM2 = ReactDom.findDOMNode(this.tabDOM);
        for(var i=0;i<m;i++){
            if( tabDOM2.children[i].offsetHeight<a){
                a = tabDOM2.children[i].offsetHeight
                t = i
            }
        }

        console.log(t)
        console.log(tabDOM2.children)
        tabDOM2.children[m+1].style.left =  tabDOM2.children[t].offsetLeft+'px'

        // tabDOM2.children[m+1].style.top = tabDOM2.children[t].offsetHeight+'px'
        // tabDOM2.children[7].position.left =
        // console.log(tabDOM2.scrollHeight);
        // console.log(window.getComputedStyle(tabDOM2).height);

    }
    construImg(t,m,a){



    }
    componentDidUpdate(){

    }
    render() {
        return (
            <div>
                <div id="user_info" className="pin wfc" style={{postion:"absolute",left:0,top:0}}>
                    <div id="Profile">
                        <div className="profile-basic">
                            <a href="/q42p11pfnu/" title="qiudaoyimu" className="img x loaded">
                                <img width="54" height="54" src="//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq75sf"
                                     data-baiduimageplus-ignore="1"/>
                            </a>
                            <a href="/q42p11pfnu/" className="userlink">qiudaoyimu</a>
                            <a href="/settings/" title="帐号设置" className="settings"></a>
                        </div>
                        <div className="profile-stats">
                            <a href="/q42p11pfnu/pins/">
                                <strong>16</strong>采集</a>
                            <a href="/q42p11pfnu/" className="middle">
                                <strong>2</strong>
                                画板</a>
                            <a href="/q42p11pfnu/followers/">
                                <strong>1</strong>粉丝</a>
                        </div>
                        <div className="profile-acts convo">
                            <div className="links">
                                <a href="/friends/weibo/" className="btn wbtn">
                                    <strong><em></em>
                                        查找在花瓣的好友</strong>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul ref={dom => {this.tabDOM = dom}}>
                    {/*{
                        this.state.data.map((v,i)=>{

                            return(
                                <li key={i} style={{position:'absolute'}} >
                                    <img width={236} src={"//hbimg.b0.upaiyun.com/"+v.file.key}/>
                                </li>
                            )
                        })
                    }*/}
                </ul>

            </div>
        )
    }
}