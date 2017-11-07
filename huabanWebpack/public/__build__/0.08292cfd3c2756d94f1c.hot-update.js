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

    /**
     * Created by ANN on 2017/8/20.
     */

    var React = __webpack_require__(13);
    var Masonry = __webpack_require__(88);

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

                ActionFlag: false

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
            }
        }, {
            key: 'mouseShowAction',
            value: function mouseShowAction(event) {
                var val = event.currentTarget.getAttribute("data-index");
                this.setState({ ActionFlag: val });
            }
        }, {
            key: 'render',
            value: function render() {
                var this_ = this;
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
                            { className: 'image-element-class', key: index, onMouseOver: this.mouseShowAction.bind(this), 'data-index': index },
                            React.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.file.key }),
                            React.createElement(
                                'div',
                                { className: 'actions' },
                                React.createElement(
                                    'div',
                                    { className: 'right' },
                                    React.createElement(
                                        'a',
                                        { 'data-id': '1426492', title: '\u559C\u6B22', href: '#', clclassNameass: 'like btn-with-icon btn btn14' },
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
                                        'a',
                                        { href: '#', className: 'repin btn btn14 rbtn' },
                                        React.createElement(
                                            'span',
                                            { className: 'text' },
                                            ' \u91C7\u96C6'
                                        )
                                    )
                                )
                            ),
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
//# sourceMappingURL=0.08292cfd3c2756d94f1c.hot-update.js.map