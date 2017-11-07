webpackHotUpdate(0,{

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*** IMPORTS FROM imports-loader ***/
var define = false;
(function () {

    var React = __webpack_require__(13);
    var Masonry = __webpack_require__(88);

    var ReactDom = __webpack_require__(35);
    var masonryOptions = {
        transitionDuration: 1,
        left: 0
    };
    var dataR = [];
    var callBackData = "";

    var Gallery = function (_React$Component) {
        _inherits(Gallery, _React$Component);

        function Gallery() {
            _classCallCheck(this, Gallery);

            var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

            $.ajax({
                url: "/api/user/getDate",
                async: false,
                type: "POST",
                data: { index: 0 }
            }).done(function (data) {
                console.log(data);

                for (var i = 0; i < data.pins.length; i++) {
                    dataR.push(data.pins[i]);
                }

                //dataR.push(data[1].data)
            });
            // console.log(this.props.validationState)
            _this.state = {
                data: dataR,
                imgData: 0,
                loadDataFlag: false,
                loadIcon: "unloading",
                refArr: {},
                ActionFlag: false,
                collection: false,
                collectionBoardLeftImg: false

            };

            return _this;
        }

        _createClass(Gallery, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var height = $(window).height();
                console.log(height);
                var this_ = this;
                var a = 0;

                $(window).scroll(function (e) {
                    if ($(window).scrollTop() + $(window).height() + 2250 >= $(document).height()) {

                        if (this_.state.loadDataFlag == false) {
                            this_.setState({ loadDataFlag: true });
                            this_.setState({ loadIcon: "loading" });
                            setTimeout(function () {
                                a++;
                                $.ajax({
                                    url: "/api/user/getDate",
                                    async: false,
                                    data: { index: a },
                                    type: "POST"
                                }).done(function (data) {
                                    console.log(data);

                                    for (var i = 0; i < data.pins.length; i++) {
                                        dataR.push(data.pins[i]);
                                    }

                                    //dataR.push(data[1].data)
                                });

                                if (a >= 17) {
                                    a = 0;
                                }

                                this_.setState({ data: dataR });
                                this_.setState({ loadDataFlag: false });
                                this_.setState({ loadIcon: "unloading" });
                            }, 2000);
                        }
                    }
                });
                console.log(this.state.refArr.stage);
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {}
        }, {
            key: 'mouseShowAction',
            value: function mouseShowAction(event) {
                var val = event.currentTarget.getAttribute("data-index");
                this.setState({ ActionFlag: val });
            }
        }, {
            key: 'collect',
            value: function collect(event, val) {

                this.setState({ collectionBoardLeftImg: event });
                this.setState({ collection: true });
                //console.log(this.state.refArr.stage.getDOMNode())

                return;
            }
        }, {
            key: 'closeDiagCollection',
            value: function closeDiagCollection() {
                console.log("close");
                this.setState({ collection: false });
            }
        }, {
            key: 'render',
            value: function render() {
                var this_ = this;
                var refArr = this.state.refArr;
                var childElements = this.state.data.map(function (v, index) {
                    if (index == 0) {
                        return React.createElement(
                            'li',
                            { className: 'image-element-class', key: index },
                            React.createElement('img', { height: 187 }),
                            React.createElement(
                                'div',
                                { id: 'user_info', className: 'pin wfc', style: { postion: "absolute", left: 0, top: 0 } },
                                React.createElement(
                                    'div',
                                    { id: 'Profile' },
                                    React.createElement(
                                        'div',
                                        { className: 'profile-basic' },
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/', title: 'qiudaoyimu', className: 'img x loaded' },
                                            React.createElement('img', { width: '54', height: '54', src: '//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq75sf',
                                                'data-baiduimageplus-ignore': '1' })
                                        ),
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/', className: 'userlink' },
                                            'qiudaoyimu'
                                        ),
                                        React.createElement('a', { href: '/settings/', title: '\u5E10\u53F7\u8BBE\u7F6E', className: 'settings' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'profile-stats' },
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/pins/' },
                                            React.createElement(
                                                'strong',
                                                null,
                                                '16'
                                            ),
                                            '\u91C7\u96C6'
                                        ),
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/', className: 'middle' },
                                            React.createElement(
                                                'strong',
                                                null,
                                                '2'
                                            ),
                                            '\u753B\u677F'
                                        ),
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/followers/' },
                                            React.createElement(
                                                'strong',
                                                null,
                                                '1'
                                            ),
                                            '\u7C89\u4E1D'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'profile-acts convo' },
                                        React.createElement(
                                            'div',
                                            { className: 'links' },
                                            React.createElement(
                                                'a',
                                                { href: '/friends/weibo/', className: 'btn wbtn' },
                                                React.createElement(
                                                    'strong',
                                                    null,
                                                    React.createElement('em', null),
                                                    '\u67E5\u627E\u5728\u82B1\u74E3\u7684\u597D\u53CB'
                                                ),
                                                React.createElement('span', null)
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    } else {
                        return React.createElement(
                            'li',
                            { className: 'image-element-class', key: index, onMouseOver: this_.mouseShowAction.bind(this_), 'data-index': index },
                            React.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.file.key }),
                            this_.state.ActionFlag == index ? React.createElement(
                                'div',
                                { className: 'actions' },
                                React.createElement(
                                    'div',
                                    { className: 'right' },
                                    React.createElement(
                                        'a',
                                        { 'data-id': '1426492', title: '\u559C\u6B22', href: '#', className: 'like btn-with-icon btn btn14' },
                                        React.createElement('i', { className: 'heart' }),
                                        React.createElement(
                                            'span',
                                            { className: 'text' },
                                            ' 17'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'left' },
                                    React.createElement(
                                        'div',
                                        { href: '#', className: 'repin btn btn14 rbtn', onClick: this_.collect.bind(this_, v.file.key) },
                                        React.createElement(
                                            'span',
                                            { className: 'text' },
                                            ' \u91C7\u96C6'
                                        )
                                    )
                                )
                            ) : "",
                            React.createElement('span', { className: 'stop' }),
                            React.createElement(
                                'p',
                                { className: 'description' },
                                v.board.title
                            ),
                            React.createElement(
                                'div',
                                { className: 'convo attribution clearfix' },
                                React.createElement(
                                    'div',
                                    { href: '/rpbewciu3m/', title: '\u5377\u5377snail', rel: 'nofollow' },
                                    React.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.user.avatar.key, 'data-baiduimageplus-ignore': '1', className: 'avt' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'text' },
                                    React.createElement(
                                        'div',
                                        { className: 'inner' },
                                        React.createElement(
                                            'div',
                                            { className: 'line' },
                                            React.createElement(
                                                'a',
                                                { href: '/rpbewciu3m/', rel: '', className: 'author x' },
                                                v.user.username
                                            ),
                                            '\xA0\u91C7\u96C6\u5230'
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'line' },
                                            React.createElement(
                                                'a',
                                                { href: '/boards/38688457/', rel: '', className: 'x' },
                                                v.board.title
                                            )
                                        ),
                                        React.createElement('a', { title: '\u8BC4\u8BBA', className: 'replyButton' })
                                    )
                                )
                            )
                        );
                    }
                });

                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        Masonry,
                        {
                            className: 'my-gallery-class' // default ''
                            , elementType: 'ul' // default 'div'
                            , options: masonryOptions // default {}
                            , disableImagesLoaded: false // default false
                            , updateOnEachImageLoad: false // default false and works only if disableImagesLoaded is false
                        },
                        childElements
                    ),
                    this.state.collection ? React.createElement(
                        'div',
                        { className: 'dialog-boxes' },
                        React.createElement(
                            'div',
                            { id: 'dm_box' },
                            React.createElement('div', { className: 'dialog-overlay' }),
                            React.createElement(
                                'div',
                                { className: 'dialog-box list-view' },
                                React.createElement(
                                    'div',
                                    { className: 'box-title' },
                                    '\u79C1\u4FE1',
                                    React.createElement(
                                        'div',
                                        { className: 'close-btn' },
                                        React.createElement('i', null)
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'box-inner' },
                                    React.createElement('div', { className: 'conversation-list' }),
                                    React.createElement('div', { className: 'bottom' }),
                                    React.createElement(
                                        'div',
                                        { className: 'empty hidden' },
                                        React.createElement(
                                            'h2',
                                            null,
                                            '\u73B0\u5728\u4F60\u53EF\u4EE5\u53D1\u9001\u79C1\u4FE1\u5566\uFF01'
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'sub' },
                                            '\u8981\u53D1\u9001\u79C1\u4FE1\uFF0C\u8BF7\u5230\u8BE5\u7528\u6237\u4E3B\u9875\uFF0C\u70B9\u51FB\u79C1\u4FE1\u6309\u94AE'
                                        ),
                                        React.createElement('img', { src: '/public/css/img/send_msg_intr.jpg', 'data-baiduimageplus-ignore': '1' })
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { style: { display: 'none' }, className: 'dialog-box dialog-view' },
                                React.createElement(
                                    'div',
                                    { className: 'box-title' },
                                    React.createElement(
                                        'a',
                                        { className: 'brown-link back' },
                                        '\u79C1\u4FE1'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'dialog-only-text' },
                                        '\u79C1\u4FE1\u7ED9'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'symbol' },
                                        '\xBB'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'with-user-name' },
                                        '\u5475\u5475'
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'action' },
                                        React.createElement('div', { className: 'open' }),
                                        React.createElement(
                                            'ul',
                                            null,
                                            React.createElement(
                                                'li',
                                                { className: 'block' },
                                                '\u5C4F\u853D\u6B64\u4EBA'
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'close-btn' },
                                        React.createElement('i', null)
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'box-inner' },
                                    React.createElement('div', { className: 'messages' }),
                                    React.createElement('div', { className: 'loading' }),
                                    React.createElement(
                                        'div',
                                        { className: 'send-box clearfix' },
                                        React.createElement('textarea', { className: 'clear-input' }),
                                        React.createElement(
                                            'a',
                                            { href: '#', className: 'send disabled btn' },
                                            React.createElement(
                                                'span',
                                                { className: 'text' },
                                                ' \u53D1\u9001\u79C1\u4FE1'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement('div', { className: 'dialog-overlay' }),
                        React.createElement(
                            'div',
                            { id: 'repin_dialog', 'data-name': 'repin', className: 'dialog-box' },
                            React.createElement(
                                'div',
                                { className: 'box-title' },
                                '\u8F6C\u91C7'
                            ),
                            React.createElement(
                                'div',
                                { className: 'box-inner' },
                                React.createElement(
                                    'div',
                                    { id: 'uniq_573078', className: 'pin-create' },
                                    React.createElement(
                                        'div',
                                        { className: 'preview' },
                                        React.createElement(
                                            'div',
                                            { className: 'image' },
                                            React.createElement('img', {
                                                src: "//hbimg.b0.upaiyun.com/" + this.state.collectionBoardLeftImg,
                                                ref: function ref(stage) {
                                                    refArr.stage = stage; // es6中react添加ref采用回调函数的方式(官方文档中用this都没问题，但是这里不行，不知道为什么)
                                                },
                                                'data-baiduimageplus-ignore': '1' })
                                        ),
                                        React.createElement('textarea', { placeholder: '\u70B9\u51FB\u6DFB\u52A0\u63CF\u8FF0...', className: 'description' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'right-part' },
                                        React.createElement('input', { placeholder: '\u641C\u7D22\u6216\u521B\u5EFA\u753B\u677F', className: 'clear-input search-input' }),
                                        React.createElement('div', { style: { display: 'none', marginBottom: '10px' }, className: 'common-message info' }),
                                        React.createElement('div', { className: 'board-divider' }),
                                        React.createElement(
                                            'div',
                                            { 'data-cur-id': 'undefined', className: 'boardlist', 'data-id': '27751005' },
                                            React.createElement(
                                                'div',
                                                { className: 'scrollable' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'recent' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'item selected', 'data-id': '27751005' },
                                                        React.createElement('i', { className: 'icon history' }),
                                                        '\u52A8\u753B',
                                                        React.createElement('div', { className: 'controller' })
                                                    ),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'item', 'data-id': '17183039' },
                                                        'ui',
                                                        React.createElement('div', { className: 'controller' })
                                                    )
                                                ),
                                                React.createElement('div', { className: 'sorted' }),
                                                React.createElement('div', { className: 'sorted' })
                                            )
                                        ),
                                        React.createElement('div', { className: 'text-block-divider' }),
                                        React.createElement(
                                            'div',
                                            { className: 'text-block' },
                                            React.createElement(
                                                'div',
                                                { style: { display: 'none' }, className: 'createboard' },
                                                React.createElement('i', { className: 'icon add' }),
                                                '\u521B\u5EFA\u753B\u677F',
                                                React.createElement('span', { className: 'text' })
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'tag-inputs' },
                                                React.createElement('input', { placeholder: '\u8F93\u5165\u6587\u5B57\uFF0C\u6309\u7A7A\u683C\u6216\u56DE\u8F66\u4EE5\u751F\u6210\u6807\u7B7E', className: 'clear-input taginput', style: { display: 'none' } }),
                                                React.createElement(
                                                    'div',
                                                    { className: 'tag-input' },
                                                    React.createElement('div', { className: 'tag-labels' }),
                                                    React.createElement('input', { className: 'clear-input taginput' }),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'placeholder' },
                                                        '\u8F93\u5165\u6587\u5B57\uFF0C\u6309\u7A7A\u683C\u6216\u56DE\u8F66\u4EE5\u751F\u6210\u6807\u7B7E'
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'tag-bar' },
                                                React.createElement(
                                                    'div',
                                                    { style: { display: 'none' }, className: 'normal' },
                                                    React.createElement(
                                                        'span',
                                                        { className: 'title' },
                                                        '\u63A8\u8350\u6807\u7B7E'
                                                    ),
                                                    React.createElement('span', { className: 'tags' })
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'bottom-part' },
                                        React.createElement(
                                            'div',
                                            { className: 'shares' },
                                            React.createElement(
                                                'span',
                                                null,
                                                '\u5206\u4EAB\u5230\uFF1A'
                                            ),
                                            React.createElement(
                                                'div',
                                                { 'data-key': 'qzone', 'data-flag': '2', className: 'share qzone' },
                                                React.createElement('div', { className: 'selection' })
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'buttons' },
                                            React.createElement(
                                                'a',
                                                { href: '#', className: 'action btn btn18 rbtn ' },
                                                React.createElement(
                                                    'span',
                                                    { className: 'text' },
                                                    ' \u91C7\u4E0B\u6765'
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'close-btn', onClick: this.closeDiagCollection.bind(this) },
                                React.createElement('i', null)
                            )
                        )
                    ) : "",
                    React.createElement(
                        'div',
                        { className: this.state.loadIcon },
                        React.createElement('span', { className: 'loadingIcon' }),
                        React.createElement(
                            'span',
                            { className: 'loadingText' },
                            ' loading....'
                        )
                    )
                );
            }
        }]);

        return Gallery;
    }(React.Component);

    module.exports = Gallery;
}).call(window);

/***/ })

})
//# sourceMappingURL=0.9f2eb94bd5bd2a4db227.hot-update.js.map