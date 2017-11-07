
//import Detail from "./Detail"

var React = require('react');
var Masonry = require('react-masonry-component');

var ReactDom = require("react-dom")


var masonryOptions = {
    transitionDuration: 1,
    left: 0
};
var dataR = []
var callBackData = ""

class Gallery extends React.Component{
    constructor(){
        super()

        $.ajax({
            url:"/api/user/getDate",
            async:false,
            type:"POST",
            data:{index:0}
        }).done(function (data) {
            console.log(data)

        for(var i=0;i<data.pins.length;i++) {
             dataR.push(data.pins[i])
         }

            //dataR.push(data[1].data)
        })
       // console.log(this.props.validationState)
        this.state = {
            data:dataR,
            imgData:0,
            loadDataFlag:false,
            loadIcon:"unloading",
            refArr:{},
            ActionFlag:false,
            collection:false,
            collectionBoardLeftImg:false,
            marginTop :0,
            updataFlag:false,
            showDetailModel:false,
            deTailMaimImg:false,

            showZoomLayer:false,
            ZoomLayerImg:false,
            ZoomLayerPaddinTop:0,
            detailMainImgWidth:false,
            docomentHeight:0

        }



    }
    componentDidMount(){
        var height = $(window).height()
        console.log(height)
        var this_ = this
        var a=0;

        $(window).scroll(function (e) {
            if((($(window).scrollTop()+$(window).height())+4250)>=$(document).height()){
                var docomentHeight = $(document).height()

                    if(this_.state.loadDataFlag==false){
                        this_.setState({loadDataFlag:true})
                        this_.setState({loadIcon:"loading"})
                        setTimeout(function () {
                            a++
                            $.ajax({
                                url:"/api/user/getDate",
                                async:false,
                                data:{index:a},
                                type:"POST"
                            }).done(function (data) {
                                console.log(data)

                                for(var i=0;i<data.pins.length;i++) {
                                   dataR.push(data.pins[i])
                                   // dataR = data.pins
                                }

                                //dataR.push(data[1].data)
                            })


                            if(a>=17){
                                a=0
                            }

                            this_.setState({data:dataR})
                            this_.setState({loadDataFlag:false})
                            this_.setState({loadIcon:"unloading"})
                            //this_.setState({docomentHeight:docomentHeight})
                        },500)
                    }
                }


        })

    }
    componentDidUpdate(){
      //  console.log()
      //  var tabDOm2 = this.state.refArr.stage
      //  var h = window.getComputedStyle(tabDOm2).height
      //  console.log(h)
    }
    mouseShowAction(event){
            var val = event.currentTarget.getAttribute("data-index");
            this.setState({ActionFlag:val})

    }
    collect(v,e){
        e.stopPropagation()

        this.setState({collectionBoardLeftImg:v})
        this.setState({collection:true})
        //console.log(this.state.refArr.stage.getDOMNode())
        let this_ = this
        this.setState({updataFlag:true})
        setTimeout(function () {
            if(this_.state.updataFlag) {
                let imgmargin = ReactDom.findDOMNode(this_.tabDOM);
                let dialogH = ""
                let marginH = ""


                marginH = window.getComputedStyle(imgmargin).height

                let dialog = ReactDom.findDOMNode(this_.dialogBox);

                if (dialog != null) {

                    dialogH = window.getComputedStyle(dialog).height
                    let margintop = ( parseInt(dialogH) - $(".colloctMainImg").height()) / 2
                    console.log(margintop)
                    if (margintop > 0) {
                        this_.setState({marginTop: margintop})
                    } else {
                        this_.setState({marginTop: 20})
                    }


                }
            }
            },0);


    }
    closeDiagCollection(){
        console.log("close")
        this.setState({collection:false})

    }
    showDetialModel(v,e){


        let this_ = this
        this_.setState({deTailMaimImg:v})

        this_.setState({showDetailModel:true})
        setTimeout(function () {

            let deTailMaimImg = ReactDom.findDOMNode(this_.deTailMaimImgWidth);

            let imgWidth = ""

            if(deTailMaimImg){
                imgWidth = window.getComputedStyle(deTailMaimImg).width


                if(parseInt(imgWidth)>700){
                    this_.setState({detailMainImgWidth:parseInt(imgWidth)})
                    console.log(this_.state.detailMainImgWidth)
                }

            }

            let wM = ($(".main-part").width() - parseInt(imgWidth))
            if(wM>0){

                //this_.setState({detailMainImgWidth:imgWidth})
            }else{

                this_.setState({detailMainImgWidth:685})
            }

        },100)
    }
    closeDetailMode(){
        this.setState({showDetailModel:false})
    }
    showZoomLayer(v,e){
        this.setState({ZoomLayerImg:v})
        this.setState({showZoomLayer:true})

        let this_ = this
        setTimeout(function () {
            let imgmargin = ReactDom.findDOMNode(this_.zoomLayer);
            let dialogH = ""
            let marginH = ""

            if(imgmargin){
                marginH = window.getComputedStyle(imgmargin).height
            }

            let paddingTop = ($(window).height() - parseInt(marginH))/2
            if(paddingTop>0){
                console.log(paddingTop)
                this_.setState({ZoomLayerPaddinTop:paddingTop})
            }else{
                this_.setState({ZoomLayerPaddinTop:0})
            }

        },0)

    }
    closeZoomLayer(v,e){
        this.setState({showZoomLayer:false})
    }
    render(){
        var this_ = this
        const refArr = this.state.refArr
        var childElements = this.state.data.map(function(v,index){
            if(index==0){
               return(
                   <li className="image-element-class" key={index} >
                       <img  height={187}/>
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

                   </li>
               )
            }else{
                return (

                    <li className="image-element-class"
                        key={index}
                        onMouseOver={this_.mouseShowAction.bind(this_)}
                        data-index={index}
                        onClick={this_.showDetialModel.bind(this_,v.file.key)}
                    >

                        <img src={"//hbimg.b0.upaiyun.com/"+v.file.key}/>

                        {this_.state.ActionFlag==index? <div className="actions">
                            <div className="right">
                                <a data-id="1426492" title="喜欢" href="#" className="like btn-with-icon btn btn14">
                                    <i className="heart"></i>
                                    <span className="text"> 17</span>
                                </a>
                            </div>
                            <div className="left">
                                <div  href="#" className="repin btn btn14 rbtn" onClick={this_.collect.bind(this_,v.file.key)}>
                                    <span className="text"> 采集</span>
                                </div>
                            </div>
                        </div>:""}
                        <span className="stop"></span>
                        <p className="description">{v.board.title}</p>
                        <div className="convo attribution clearfix">
                            <div href="/rpbewciu3m/" title="卷卷snail" rel="nofollow" >
                                <img src={"//hbimg.b0.upaiyun.com/"+v.user.avatar.key} data-baiduimageplus-ignore="1" className="avt"/>
                            </div>
                            <div className="text">
                                <div className="inner">
                                    <div className="line">
                                        <a href="/rpbewciu3m/" rel="" className="author x">{v.user.username}</a>&nbsp;采集到
                                    </div>
                                    <div className="line">
                                        <a href="/boards/38688457/" rel="" className="x">{v.board.title}</a>
                                    </div>
                                    <a title="评论" className="replyButton"></a>
                                </div>
                            </div>
                        </div>

                    </li>
                );
            }

        });

        return (
            <div className="ItemContainer" style={{paddingTop:this.state.docomentHeight+"px"}}>

                <Masonry
                    className={'my-gallery-class'} // default ''
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {childElements}
                </Masonry>
                {this.state.collection?
                    <div className="dialog-boxes">
                        <div id="dm_box">
                            <div className="dialog-overlay">

                            </div>
                            <div className="dialog-box list-view">
                                <div className="box-title">私信<div className="close-btn">
                                    <i></i>
                                </div></div>
                                <div className="box-inner">
                                    <div className="conversation-list"></div>
                                    <div className="bottom"></div>
                                    <div className="empty hidden">
                                        <h2>现在你可以发送私信啦！</h2><
                                        div className="sub">要发送私信，请到该用户主页，点击私信按钮</div>
                                        <img src="/public/css/img/send_msg_intr.jpg" data-baiduimageplus-ignore="1"/>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'none'}} className="dialog-box dialog-view">
                            <div className="box-title">
                                <a className="brown-link back">私信</a>
                                <span className="dialog-only-text">私信给</span>
                                <span className="symbol">»</span>

                                <span className="with-user-name">呵呵</span>
                                <div className="action">
                                    <div className="open"></div>
                                    <ul><li className="block">屏蔽此人</li></ul>
                                </div>
                                <div className="close-btn">
                                    <i></i>
                                </div>
                            </div>
                            <div className="box-inner">
                                <div className="messages"></div>
                                <div className="loading"></div>
                                <div className="send-box clearfix">
                                    <textarea className="clear-input"></textarea>
                                    <a href="#"  className="send disabled btn">
                                        <span className="text"> 发送私信</span>
                                    </a></div></div>
                        </div>
                        </div>
                        <div className="dialog-overlay"></div>
                        <div id="repin_dialog" data-name="repin" className="dialog-box"
                             ref={dom => {this.dialogBox = dom}}
                        >

                            <div className="box-title" >转采</div>
                            <div className="box-inner">
                                <div id="uniq_573078" className="pin-create">
                                    <div className="preview" style={{paddingTop:this.state.marginTop+"px"}}>
                                        <div className="image">
                                            <img
                                                  src={"//hbimg.b0.upaiyun.com/"+this.state.collectionBoardLeftImg}
                                                  /*ref={function (stage) {
                                                      refArr.stage = stage;// es6中react添加ref采用回调函数的方式(官方文档中用this都没问题，但是这里不行，不知道为什么)
                                                  }}*/
                                                  ref={dom => {this.tabDOM = dom}}
                                                 data-baiduimageplus-ignore="1"
                                                className="colloctMainImg"
                                            />
                                        </div>
                                        <textarea placeholder="点击添加描述..." className="description"></textarea>
                                    </div>
                                    <div className="right-part">
                                        <input placeholder="搜索或创建画板" className="clear-input search-input"/>
                                        <div  style={{display:'none',marginBottom:'10px'}} className="common-message info"></div>
                                        <div className="board-divider"></div>
                                        <div data-cur-id="undefined" className="boardlist" data-id="27751005"><div className="scrollable">
                                            <div className="recent"><div className="item selected" data-id="27751005">
                                                <i className="icon history"></i>动画<div className="controller"></div>
                                            </div>
                                                <div className="item" data-id="17183039">ui<div className="controller"></div>
                                                </div></div>
                                            <div className="sorted"></div>
                                            <div className="sorted"></div>
                                        </div></div>
                                        <div className="text-block-divider"></div>
                                        <div className="text-block">
                                            <div style={{display:'none'}} className="createboard">
                                                <i className="icon add">

                                                </i>创建画板
                                                <span className="text">

                                                </span>
                                            </div>
                                            <div className="tag-inputs">
                                                <input placeholder="输入文字，按空格或回车以生成标签" className="clear-input taginput" style={{display:'none'}}/>
                                                <div className="tag-input">
                                                    <div className="tag-labels"></div>
                                                    <input className="clear-input taginput"/>
                                                    <div className="placeholder">输入文字，按空格或回车以生成标签
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tag-bar">
                                                <div style={{display:'none'}} className="normal">
                                                    <span className="title">推荐标签</span>
                                                    <span className="tags"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-part">
                                        <div className="shares">
                                            <span>分享到：</span>
                                            <div data-key="qzone" data-flag="2" className="share qzone">
                                                <div className="selection"></div>
                                            </div>
                                        </div>
                                        <div className="buttons">
                                            <a href="#"  className="action btn btn18 rbtn ">
                                                <span className="text"> 采下来</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="close-btn" onClick={this.closeDiagCollection.bind(this)}>
                                <i></i>
                            </div>
                        </div>
                    </div>:""
                }
                {
                    this.state.showDetailModel?
                        <div id="pin_view_layer">
                        <div className="close-layer" onClick={this.closeDetailMode.bind(this)}>
                            <i></i>
                        </div>
                        <div data-id="1288031085" data-media-type="0" data-board-id="14121087" data-size-x="564" data-size-y="1838"
                             className="pin-view">
                            <div className="pin-view-wrapper">
                                <div className="main-part">
                                    <div className="image-piece piece">
                                        <div className="tool-bar"><a

                                            href="#" className="repin-btn btn rbtn"><span className="text"> 采集</span></a><a data-id="1288031085"
                                                                                                                            href="#"

                                                                                                                            className="like-btn  btn-with-icon btn"><i
                                            className="heart"></i></a>
                                            <div className="right-part">
                                                <div className="huaban-share-unit"><span>分享</span>
                                                    <div className="share-btns">
                                                        <a data-to="weibo" title="新浪微博" target="_blank"
                                                                                   href="/pins/1288031085/js-share/?to=weibo"
                                                                                   className="share-btn weibo">

                                                        </a>
                                                        <a data-to="qzone" title="QQ空间" target="_blank" href="/pins/1288031085/js-share/?to=qzone" className="share-btn qzone"></a>
                                                        <a data-to="weixin" title="微信" target="_blank"
                                                        href="/pins/1288031085/js-share/?to=weixin" className="share-btn weixin"></a>
                                                        <div className="more"></div>
                                                    </div>
                                                    <div className="menu">
                                                        <a data-to="tqq"
                                                           title="腾讯微博"
                                                           target="_blank"
                                                           href="/pins/1288031085/js-share/?to=tqq"
                                                           className="tqq">
                                                            <i>

                                                            </i>腾讯微博
                                                        </a>
                                                        <a data-to="qfriends" title="QQ好友"
                                                                                                               target="_blank"
                                                                                                               href="/pins/1288031085/js-share/?to=qfriends"
                                                                                                               className="qq"><i></i>QQ 好友</a><a
                                                        data-to="douban" title="豆瓣" target="_blank"
                                                        href="/pins/1288031085/js-share/?to=douban" className="douban"><i></i>豆瓣</a><a
                                                        data-to="renren" title="人人网" target="_blank"
                                                        href="/pins/1288031085/js-share/?to=renren" className="renren"><i></i>人人网</a>
                                                        <div className="arr"></div>
                                                    </div>
                                                </div>
                                                <span href="/pins/1288031085/zoom/"
                                                   title="查看原图"
                                                   className="zoomin btn-with-icon btn"
                                                   onClick={this.showZoomLayer.bind(this,this.state.deTailMaimImg)}
                                                >
                                                    <i className="className"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="main-image">
                                            <div id="baidu_image_holder" className="image-holder">
                                                <img

                                                src={"//hbimg.b0.upaiyun.com/"+this.state.deTailMaimImg}
                                                ref={dom => {this.deTailMaimImgWidth = dom}}
                                                width={this.state.detailMainImgWidth?this.state.detailMainImgWidth:""}

                                                alt="MODERATEDesign"
                                                data-baiduimageplus-ignore="1"
                                                />
                                            </div>
                                        </div>
                                        <div className="tool-bar-bottom"><a

                                            href="#" className="repin-btn btn-with-icon btn">
                                            <i className="className"></i>
                                            <span className="text"> 采集
                                                <span className="num">39</span>
                                            </span>
                                        </a>
                                            <a href="#"  className="like-btn btn-with-icon btn">
                                                <i className="className"></i>
                                                <span className="text"> 喜欢 <span className="num">4</span></span></a>
                                            <a href="#" className="comment-btn btn-with-icon btn">
                                                <i className="className"></i>
                                                <span className="text"> 评论
                                                    <span className="num">

                                                </span></span></a>
                                            <div className="right-part">
                                                <a  href="#"
                                                                           className="report-btn btn-with-icon btn"><i className="className"></i></a></div>
                                        </div>
                                        <div className="extra-box"></div>
                                    </div>
                                    <div className="info-piece piece">
                                        <div className="info"><a href="/mnuik3wuki/" title="低头-前行" rel="nofollow" className="img x"><img
                                            src="//hbimg.b0.upaiyun.com/b0f3b3e4401379ec21e2974e854c26b127d797fd3ad0-VafEaA_sq75sf"
                                            data-baiduimageplus-ignore="1" className="avt"  /></a>
                                            <div className="main"><a href="/mnuik3wuki/" rel="nofollow">低头-前行</a><span className="space">从</span><a
                                                href="/dhye/" rel="nofollow">异想天开0</a></div>
                                            <div className="sub">转采于<span data-ts="1503491277" className="ts-words space"> 4 天前</span></div>
                                        </div>
                                        <div className="description">MODERATEDesign</div>
                                        <div className="comments"></div>
                                        <div id="pin_view_add_comment" data-id="1288031085" className="clearfix">
                                            <a href="/q42p11pfnu/" title="qiudaoyimu" className="img x">
                                                 <img src="//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq75sf" data-baiduimageplus-ignore="1" className="avatar"/>
                                             </a>
                                            <textarea name="caption" placeholder="添加评论或把采集@给好友" className="clear-input"></textarea>
                                            <a href="#"  className="post disabled btn btn14">
                                                <span className="text"> 添加评论</span>
                                            </a>
                                        </div>
                                        <div className="likes clearfix">
                                            <h4>4喜欢</h4>
                                            <a href="/aabbblfub6/" title="Calleighluo" className="img x">
                                                <img width="46" height="46" src="//hbimg.b0.upaiyun.com/ef175e2cb6218a8fe348c493db16bca6431445358a40-NslMJT_sq75sf"/>
                                            </a>
                                            <a href="/kaycaqqreq/" title="叭叭bong" className="img x">
                                                 <img width="46" height="46" src="//hbimg.b0.upaiyun.com/70bb3196e45697b128fd3891278283098e6d0b5e1cb08-6IMzmq_sq75sf"/>
                                            </a>
                                            <a href="/z5e21sqphto/" title="匡合设计传媒" className="img x">
                                                 <img width="46" height="46" src="//hbimg.b0.upaiyun.com/cfeff6bb2878e2f3c2cd14792d3f7668cc622f5826c5-Ngxsc7_sq75sf"/>
                                            </a>
                                            <a href="/q3ammt6lyir/" title="猫咪不吃鱼w" className="img x">
                                                <img width="46" height="46" src="//hbimg.b0.upaiyun.com/4b213d9d457ef35089387e598bac90574bc4b8765d7-UICT3r_sq75sf" data-baiduimageplus-ignore="1" />
                                            </a>
                            </div>
                        </div>
                        <div className="repin-info-piece clearfix two">
                            <div className="board unit"><a href="/boards/14121087/" rel="nofollow" className="pins x"><img width="24"
                                                                                                                           height="24"
                                                                                                                           src="//hbimg.b0.upaiyun.com/5de16e379dcc79a8fd7c6734347e522306486b4b172ea-2lKm1A_sq75"
                                                                                                                           data-baiduimageplus-ignore="1" /><img
                                width="24" height="24"
                                src="//hbimg.b0.upaiyun.com/b2e189115dd8c17dbf210e78fe81f63431d0ea9d2761f-hWmpek_sq75"
                                data-baiduimageplus-ignore="1" /><img width="24" height="24"
                                                                      src="//hbimg.b0.upaiyun.com/19b775809cd3feb209279bf6a9cf12ba7753beb9d0e77-t0WUT1_sq75"
                                                                      data-baiduimageplus-ignore="1" /><img width="24" height="24"
                                                                                                            src="//hbimg.b0.upaiyun.com/1946a4331f6ed9214ff9105c0a28c405219e37d6abe2d-Ykjw22_sq75"
                                                                                                            data-baiduimageplus-ignore="1" /></a>
                                <div className="info"><span>采集到画板</span><a href="/boards/14121087/" rel="nofollow" className="x">画册</a>
                                </div>
                                <a data-id="14121087" href="#"  className="follow-btn unfollow btn"><span
                                    className="text"> 取消关注</span></a></div>
                            <div className="repins-from unit"><a href="/wangrenkou/" title="MODERATEDesign" className="img x"><img
                                width="50" height="50"
                                src="//hbimg.b0.upaiyun.com/a382514cb0074766fd9989c6d868ff2b1d8573932a9dd-LfZl3D_sq75sf"
                                data-baiduimageplus-ignore="1" /></a>
                                <div className="info"><span>采集自用户</span><a href="/wangrenkou/" className="x">MODERATEDesign</a></div>
                            </div>
                        </div>
                    </div>
                        <div className="side-part">
                            <div className="board-piece piece">
                                <div className="board-info"><a href="/mnuik3wuki/" title="低头-前行" className="img x"><img
                                    src="//hbimg.b0.upaiyun.com/b0f3b3e4401379ec21e2974e854c26b127d797fd3ad0-VafEaA_sq75sf"
                                    data-baiduimageplus-ignore="1"  className="avt" /></a><a href="/boards/14121087/" className="name x">画册</a>
                                    <div className="sub">低头-前行</div>
                                </div>
                                <div className="board-pins cst-scrollbar">
                                    <div id="board_pins_waterfall" style={{height:'1373px'}}>
                                        <a href="/pins/1290524803/"
                                                                                              data-id="1290524803"
                                                                                              data-seq="1290524803"
                                                                                              className="cell x layer-view  "
                                           style={{position:'absolute',left:'0px',top:'0px'}}
                                                                                          >


                                        <img
                                        src="//hbimg.b0.upaiyun.com/5de16e379dcc79a8fd7c6734347e522306486b4b172ea-2lKm1A_fw86"
                                        width="86" height="49" data-baiduimageplus-ignore="1" />
                                        <div className="cover"></div>
                                        </a>
                                        </div>
                                    <div className="loading" style={{display:'none'}}><img src="public/css/img/loading.gif"/><span>正在加载...</span>
                                    </div>
                                </div>
                                <a data-id="14121087" href="#"  className="follow-btn unfollow btn"><span
                                    className="text"> 取消关注画板</span></a></div>
                            <div className="pin side promotion">
                                <div className="">
                                    <div className="pro-google">
                                        <ins
style={{display:'inline-block',width:'300px',height:'250px'}}
                                             data-ad-client="ca-pub-7981642495496282" data-ad-slot="6797339631"
                                             className="adsbygoogle"></ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="clear"></div>
                    </div>
                    <div className="bottom-part">
                    <div className="pin-view-wrapper">
                    <div className="related-boards clearfix" style={{display:'none'}}>
                    <div className="title-el">该采集也在以下画板</div>
                    <div className="board-box clearfix">
                    <div data-id="30206416" data-seq="581" className="Board wfc "><a href="/boards/30206416/"
                    target="_blank"
                    className="link  x"><img
                    src="//hbimg.b0.upaiyun.com/c988726d765a52ed0bac9724ba36c178f3ddd56c2e63-OioYMA_sq235"
                    data-baiduimageplus-ignore="1"className="large"/><img
                    src="//hbimg.b0.upaiyun.com/b2e189115dd8c17dbf210e78fe81f63431d0ea9d2761f-hWmpek_sq75"
                    data-baiduimageplus-ignore="1" /><img
                    src="//hbimg.b0.upaiyun.com/a99d9c4407b163072e5278e7d8fa56cad9c7d3ae15932-7Xz0J6_sq75"
                    data-baiduimageplus-ignore="1" /><img
                    src="//hbimg.b0.upaiyun.com/884b8cc1c8c762f2c3ea880357677d64a5882796b4fe3-BElE7b_sq75"
                    data-baiduimageplus-ignore="1" />
                    <div className="shadows">
                    <div className="large-shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    </div>
                    <div className="over "><h3>未整理</h3><h4></h4>
                    <div className="pin-count">256</div>
                    </div></a><a href="/pins/1292476980" title="MODERATEDesign" className="hidden"><img
                    title="MODERATEDesign"
                    src="//hbimg.b0.upaiyun.com/b2e189115dd8c17dbf210e78fe81f63431d0ea9d2761f-hWmpek_sq75"
                    data-baiduimageplus-ignore="1" /></a><a href="/pins/1292476415"
                    title="#ps教程# 巧用ps利用一张素材制作炫美海报设计！简单粗暴，自己动手拿张练习去，转需~#设计秀# &#8203;&#8203;&#8203;&#8203;"
                    className="hidden"><img
                    title="#ps教程# 巧用ps利用一张素材制作炫美海报设计！简单粗暴，自己动手拿张练习去，转需~#设计秀# &#8203;&#8203;&#8203;&#8203;"
                    src="//hbimg.b0.upaiyun.com/a99d9c4407b163072e5278e7d8fa56cad9c7d3ae15932-7Xz0J6_sq75"
                    data-baiduimageplus-ignore="1" /></a><a href="/pins/1292461896"
                    title="一些品牌LOGO提案——余尤勇|标志|平面|余尤勇 - 原创设计作品 - 站酷 (ZCOOL)"
                    className="hidden"><img
                    title="一些品牌LOGO提案——余尤勇|标志|平面|余尤勇 - 原创设计作品 - 站酷 (ZCOOL)"
                    src="//hbimg.b0.upaiyun.com/884b8cc1c8c762f2c3ea880357677d64a5882796b4fe3-BElE7b_sq75"
                    data-baiduimageplus-ignore="1" /></a><a href="/pins/1291726379" title="Ira Sluyterman van Langeweyde
instagram @iraville" className="hidden"><img title="Ira Sluyterman van Langeweyde
instagram @iraville" src="//hbimg.b0.upaiyun.com/4810831bca1c0622ba82f94138fdeaf8ef6c4034d049-GZlh6W_sq75"
                    data-baiduimageplus-ignore="1" /></a>
                    <div className="FollowBoard2"><a href="/zrzvy7c5uh/" title="輕巧、" className="img x"><img
                    src="//hbimg.b0.upaiyun.com/4472f12cd4c4a6661a9f35be9e8a8b6f853c4c8729c94-yGnYMm_sq75sf"
                    data-baiduimageplus-ignore="1" className="BoardAvatar"/></a><a href="/zrzvy7c5uh/"
                    className="BoardUserUrl x">輕巧、</a><a
                    data-id="30206416" href="#" className="follow btn wbtn"><strong>
                    关注</strong><span></span></a></div>
                    </div>
                    <div data-id="38892337" data-seq="580" className="Board wfc "><a href="/boards/38892337/"
                    target="_blank"
                    className="link  x"><img
                    src="//hbimg.b0.upaiyun.com/e336ad75023487e7db9a5de2e05372486b06d9fc19acdc-B1W8tN_sq235"
                    data-baiduimageplus-ignore="1"  className="large"/><img
                    src="//hbimg.b0.upaiyun.com/90c71b6c92f70a15c8545c87ad6b1402e4998cc8249f97-asaCv2_sq75"
                    data-baiduimageplus-ignore="1" /><img
                    src="//hbimg.b0.upaiyun.com/778ed9263dd31eda0b202f4a79f4de26091282f5bf21f-FT5Wvp_sq75"
                    data-baiduimageplus-ignore="1" /><img
                    src="//hbimg.b0.upaiyun.com/62e991e6f992a19f69469b15a0e79d4a43848bdd392a2-pBUsyV_sq75"
                    data-baiduimageplus-ignore="1" />
                    <div className="shadows">
                    <div className="large-shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    </div>
                    <div className="over "><h3>商务性画册</h3><h4></h4>
                    <div className="pin-count">301</div>
                    </div></a><a href="/pins/1292453661"
                    title="[创意画册] 精品画册创意设计灵感,优秀企业画册设计作品欣赏,大气画册创意灵感,高端画册设计创意 狼牙网_狼牙创意网_设计灵感图库_创意素材 - 狼牙网 #素材# #排版# #Logo# #网页# #字体# #包装#  更多精美素材源文件免费下载请跳转至来源网站：http://www.logohhh.com/lycyw95ly1.html"
                    className="hidden"><img
                    title="[创意画册] 精品画册创意设计灵感,优秀企业画册设计作品欣赏,大气画册创意灵感,高端画册设计创意 狼牙网_狼牙创意网_设计灵感图库_创意素材 - 狼牙网 #素材# #排版# #Logo# #网页# #字体# #包装#  更多精美素材源文件免费下载请跳转至来源网站：http://www.logohhh.com/lycyw95ly1.html"
                    src="//hbimg.b0.upaiyun.com/e336ad75023487e7db9a5de2e05372486b06d9fc19acdc-B1W8tN_sq75"
                    data-baiduimageplus-ignore="1" /></a><a href="/pins/1292450879"
                    title="照金村形象画册设计===西安本易品牌机构-书装/画册-平面 by 本易kevin - 原创设计作品 - Powerby 站酷（ZCOOL）"
                    className="hidden"><img
                    title="照金村形象画册设计===西安本易品牌机构-书装/画册-平面 by 本易kevin - 原创设计作品 - Powerby 站酷（ZCOOL）"
                    src="//hbimg.b0.upaiyun.com/90c71b6c92f70a15c8545c87ad6b1402e4998cc8249f97-asaCv2_sq75"
                    data-baiduimageplus-ignore="1" /></a><a href="/pins/1292450643" title="国外人力资源公司年报设计"
                    className="hidden"><img title="国外人力资源公司年报设计"
                    src="//hbimg.b0.upaiyun.com/778ed9263dd31eda0b202f4a79f4de26091282f5bf21f-FT5Wvp_sq75"
                    data-baiduimageplus-ignore="1" /></a><a
                    href="/pins/1292442874" title="MODERATEDesign" className="hidden"><img title="MODERATEDesign"
                    src="//hbimg.b0.upaiyun.com/62e991e6f992a19f69469b15a0e79d4a43848bdd392a2-pBUsyV_sq75"
                    data-baiduimageplus-ignore="1" /></a>
                    <div className="FollowBoard2"><a href="/cbivaov6zo/" title="小温暖♔" className="img x"><img
                    src="//hbimg.b0.upaiyun.com/773855635313d13063170182c9e8860156a140df4da1a-WPfxTy_sq75sf"
                    data-baiduimageplus-ignore="1" className="BoardAvatar"/></a><a href="/cbivaov6zo/"
                    className="BoardUserUrl x">小温暖♔</a><a
                    data-id="38892337" href="#" className="follow btn wbtn"><strong>
                    关注</strong><span></span></a></div>
                    </div>
                    <div data-id="28214755" data-seq="579" className="Board wfc "><a href="/boards/28214755/"
                    target="_blank"
                    className="link  x"><img
                    src="//hbimg.b0.upaiyun.com/b2e189115dd8c17dbf210e78fe81f63431d0ea9d2761f-hWmpek_sq235"
                    data-baiduimageplus-ignore="1"  className="large" /><img
                    src="//hbimg.b0.upaiyun.com/037d1910ceb07fe31321083aa5ca692197634a225d80c-tOwMAz_sq75"
                    data-baiduimageplus-ignore="1" /><img
                    src="//hbimg.b0.upaiyun.com/65fb303becab2f6970a0f7eb135a415dff19707eadb4b-wWy8z0_sq75"
                    data-baiduimageplus-ignore="1" /><img
                    src="//hbimg.b0.upaiyun.com/62e991e6f992a19f69469b15a0e79d4a43848bdd392a2-pBUsyV_sq75"
                    data-baiduimageplus-ignore="1" />
                    <div className="shadows">
                    <div className="large-shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    </div>
                    <div className="over "><h3>画册</h3><h4></h4>
                    <div className="pin-count">274</div>
                    </div></a><a href="/pins/1292385031" title="MODERATEDesign" className="hidden"><img
                    title="MODERATEDesign"
                    src="//hbimg.b0.upaiyun.com/b2e189115dd8c17dbf210e78fe81f63431d0ea9d2761f-hWmpek_sq75"
                    data-baiduimageplus-ignore="1" /></a><a href="/pins/1237556198" title="品牌手册版式设计"
                    className="hidden"><img title="品牌手册版式设计"
                    src="//hbimg.b0.upaiyun.com/037d1910ceb07fe31321083aa5ca692197634a225d80c-tOwMAz_sq75"
                    data-baiduimageplus-ignore="1" /></a><a
                    href="/pins/1236610186" title="" className="hidden"><img title=""
                    src="//hbimg.b0.upaiyun.com/65fb303becab2f6970a0f7eb135a415dff19707eadb4b-wWy8z0_sq75"
                    data-baiduimageplus-ignore="1" /></a><a
                    href="/pins/1159621663" title="MODERATEDesign" className="hidden"><img title="MODERATEDesign"
                    src="//hbimg.b0.upaiyun.com/62e991e6f992a19f69469b15a0e79d4a43848bdd392a2-pBUsyV_sq75"
                    data-baiduimageplus-ignore="1" /></a>
                    <div className="FollowBoard2"><a href="/fpi6oisrxe/" title="再见ろ、旧时光＂" className="img x"><img
                    src="//hbimg.b0.upaiyun.com/0e02caf070694fdfe8562f6b929333b43668da134884-ddyaUz_sq75sf"
                    data-baiduimageplus-ignore="1"  className="BoardAvatar" /></a><a href="/fpi6oisrxe/"
                    className="BoardUserUrl x">再见ろ、旧时光＂</a><a
                    data-id="28214755" href="#" className="follow btn wbtn"><strong>
                    关注</strong><span></span></a></div>
                    </div>
                    <div data-id="38929919" data-seq="578" className="Board wfc "><a href="/boards/38929919/"
                    target="_blank"
                    className="link  x"><img
                    src="//hbimg.b0.upaiyun.com/979679e928a3b9bee498bdbef4fe8f07ad132b7457d84-17QhWy_sq235"
                    data-baiduimageplus-ignore="1"  className="large" /><img
                    src="//hbimg.b0.upaiyun.com/a8a4c36bab9410a4b4467e943863b523f23285b1531ce6-N31orB_sq75"
                    data-baiduimageplus-ignore="1" /><img
                    src="//hbimg.b0.upaiyun.com/880e3b21fc32a524b19c43938547060e1a34fba84990d3-1LfL5e_sq75"
                    data-baiduimageplus-ignore="1" /><img
                    src="//hbimg.b0.upaiyun.com/56a7abb123097ca7793ba61778dbc34dc0221419b3040-e1BqNm_sq75"
                    data-baiduimageplus-ignore="1" />
                    <div className="shadows">
                    <div className="large-shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    </div>
                    <div className="over "><h3>板式设计</h3><h4></h4>
                    <div className="pin-count">14</div>
                    </div></a><a href="/pins/1292372507" title="画册排版欣赏2" className="hidden"><img title="画册排版欣赏2"
                    src="//hbimg.b0.upaiyun.com/979679e928a3b9bee498bdbef4fe8f07ad132b7457d84-17QhWy_sq75"
                    data-baiduimageplus-ignore="1" /></a><a
                    href="/pins/1292361177"
                    title="智能家居画册设计，深圳画册设计公司-所有案例-zonebrand设计公司 深圳品牌设计，深圳vi设计，深圳标志设计，深圳智能科技包装设计，深圳画册设计，产品画册设计,深圳logo设计，深圳专卖店设计，si专卖店设计，深圳vi策划公司"
                    className="hidden"><img
                    title="智能家居画册设计，深圳画册设计公司-所有案例-zonebrand设计公司 深圳品牌设计，深圳vi设计，深圳标志设计，深圳智能科技包装设计，深圳画册设计，产品画册设计,深圳logo设计，深圳专卖店设计，si专卖店设计，深圳vi策划公司"
                    src="//hbimg.b0.upaiyun.com/a8a4c36bab9410a4b4467e943863b523f23285b1531ce6-N31orB_sq75"
                    data-baiduimageplus-ignore="1" /></a><a href="/pins/1292359377"
                    title="一家披萨店VI，尝试做成画册风格了。 #色彩# #排版# #字体# #素材#"
                    className="hidden"><img
                    title="一家披萨店VI，尝试做成画册风格了。 #色彩# #排版# #字体# #素材#"
                    src="//hbimg.b0.upaiyun.com/880e3b21fc32a524b19c43938547060e1a34fba84990d3-1LfL5e_sq75"
                    data-baiduimageplus-ignore="1" /></a><a href="/pins/1292359313" title="品牌手册效果图 #排版# #字体#"
                    className="hidden"><img title="品牌手册效果图 #排版# #字体#"
                    src="//hbimg.b0.upaiyun.com/56a7abb123097ca7793ba61778dbc34dc0221419b3040-e1BqNm_sq75"
                    data-baiduimageplus-ignore="1" /></a>
                    <div className="FollowBoard2"><a href="/jtkv9rqi2s/" title="Thez7" className="img x"><img
                    src="//hbimg.b0.upaiyun.com/654953460733026a7ef6e101404055627ad51784a95c-B6OFs4_sq75sf"
                    data-baiduimageplus-ignore="1"  className="BoardAvatar" /></a><a href="/jtkv9rqi2s/"
                    className="BoardUserUrl x">Thez7</a><a
                    data-id="38929919" href="#"  className="follow btn wbtn"><strong>
                    关注</strong><span></span></a></div>
                    </div>
                    </div>
                    <a href="#" className="load-more-board btn btn18"><span
                    className="text"> 加载更多</span></a></div>
                    <div id="recommend-pins">
                    <div className="title-el">推荐给你的采集</div>
                    <div className="waterfall">
                    <div id="baidu_search_attach" className="pin wfc promotion"></div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="pin-view-arrows">
                        <a
                            style={{visibility:'visible',position:'fixed',right:'15px'}}
                           className="next x layer-view"
                    href="/pins/1286628334/" data-id="1286628334"></a><a

                    style={{visibility:'visible',position:'fixed',left:'0px'}}
                    className="prev x layer-view" href="/pins/1288759023/"
                    data-id="1288759023"></a></div>
                    <div id="layout_elevator_item" className="elevator-item"><a id="layout_elevator"  title="回到顶部"
                    className="off"></a><a className="plus"></a>
                    <div className="plus-popup">
                    <div className="group"><a>添加采集<i className="upload"></i></a><a
                    className="add-board-item">添加画板<i className="add-board"></i></a><a href="/about/goodies/">安装采集工具<i
                    className="goodies"></i></a></div>
                    <div className="arr"></div>
                    </div>
                    </div>

                    </div>:""
                }

                {
                    this.state.showZoomLayer?
                        <div

                             className="zoom-layer">
                            <div className="holder"
                                 style={{paddingTop:this.state.ZoomLayerPaddinTop}}>
                                <img
                                     src={"//hbimg.b0.upaiyun.com/"+this.state.ZoomLayerImg}
                                     ref={dom => {this.zoomLayer = dom}}

                                />
                            </div>
                            <div className="close-zoom" onClick={this.closeZoomLayer.bind(this)}></div>
                        </div>:""
                }
                <div className={this.state.loadIcon}>
                    <span className="loadingIcon"></span>
                    <span className="loadingText"> loading....</span>
                </div>
            </div>

        );
    }
}


module.exports = Gallery;