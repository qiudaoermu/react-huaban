webpackHotUpdate(0,{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _firstNewsWord = __webpack_require__(198);

var _firstNewsWord2 = _interopRequireDefault(_firstNewsWord);

var _masonry = __webpack_require__(199);

var _masonry2 = _interopRequireDefault(_masonry);

var _Elevator = __webpack_require__(223);

var _Elevator2 = _interopRequireDefault(_Elevator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/22.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ComonentBody = function (_React$Component) {
    _inherits(ComonentBody, _React$Component);

    function ComonentBody() {
        _classCallCheck(this, ComonentBody);

        var _this = _possibleConstructorReturn(this, (ComonentBody.__proto__ || Object.getPrototypeOf(ComonentBody)).call(this));

        _this.state = {
            elements: [{ src: 'public/css/img/144888827.jpg' }, { src: 'public/css/img/0a3a19b93dbe069a0637f8e6e56dbe6adea9aa43ee02-Rx0SE7_fw658.jpg' }, { src: 'public/css/img/0b451e62672f9020293c7afa83aa36ab7442ee92d7531-mCXJtm_fw658.jpeg' }, { src: 'public/css/img/0c3077496f2ce33408b927fb878db154c8e762c35a98d-iPV2nX_fw658.jpeg' }, { src: 'public/css/img/0d1d5aa55849edd234483c08ae173dae743e429c1007c-qIGghM_fw658.jpg' }, { src: 'public/css/img/16ee3f9e93e768aa57d6c9d12fe7c6a78eb47f8b2d3a0-DWWeV6_fw658.jpeg' }, { src: 'public/css/img/20cb2ea350055e1626072cb2046902f86227f22911dc2-BJ58gM_fw658.jpg' }, { src: 'public/css/img/020fccc319d7cc6dce2cf74f3fba72feef48ac3cb8a49-6rJsvx_fw658.jpeg' }, { src: 'public/css/img/9d6d9090278969a2996ec986b47dc406115f7de3604f6-CfCEk2_fw658.jpeg' }, { src: 'public/css/img/5b80b5ba7828994c9f974cde0edc0b53c19e13fc7ae91-u0uydB_fw658.jpeg' }, { src: 'public/css/img/144888827.jpg' }, { src: 'public/css/img/0a3a19b93dbe069a0637f8e6e56dbe6adea9aa43ee02-Rx0SE7_fw658.jpg' }, { src: 'public/css/img/0b451e62672f9020293c7afa83aa36ab7442ee92d7531-mCXJtm_fw658.jpeg' }, { src: 'public/css/img/0c3077496f2ce33408b927fb878db154c8e762c35a98d-iPV2nX_fw658.jpeg' }, { src: 'public/css/img/0d1d5aa55849edd234483c08ae173dae743e429c1007c-qIGghM_fw658.jpg' }, { src: 'public/css/img/16ee3f9e93e768aa57d6c9d12fe7c6a78eb47f8b2d3a0-DWWeV6_fw658.jpeg' }, { src: 'public/css/img/20cb2ea350055e1626072cb2046902f86227f22911dc2-BJ58gM_fw658.jpg' }, { src: 'public/css/img/020fccc319d7cc6dce2cf74f3fba72feef48ac3cb8a49-6rJsvx_fw658.jpeg' }, { src: 'public/css/img/9d6d9090278969a2996ec986b47dc406115f7de3604f6-CfCEk2_fw658.jpeg' }, { src: 'public/css/img/5b80b5ba7828994c9f974cde0edc0b53c19e13fc7ae91-u0uydB_fw658.jpeg' }, { src: 'public/css/img/144888827.jpg' }, { src: 'public/css/img/0a3a19b93dbe069a0637f8e6e56dbe6adea9aa43ee02-Rx0SE7_fw658.jpg' }, { src: 'public/css/img/0b451e62672f9020293c7afa83aa36ab7442ee92d7531-mCXJtm_fw658.jpeg' }, { src: 'public/css/img/0c3077496f2ce33408b927fb878db154c8e762c35a98d-iPV2nX_fw658.jpeg' }, { src: 'public/css/img/0d1d5aa55849edd234483c08ae173dae743e429c1007c-qIGghM_fw658.jpg' }, { src: 'public/css/img/16ee3f9e93e768aa57d6c9d12fe7c6a78eb47f8b2d3a0-DWWeV6_fw658.jpeg' }, { src: 'public/css/img/20cb2ea350055e1626072cb2046902f86227f22911dc2-BJ58gM_fw658.jpg' }, { src: 'public/css/img/020fccc319d7cc6dce2cf74f3fba72feef48ac3cb8a49-6rJsvx_fw658.jpeg' }, { src: 'public/css/img/9d6d9090278969a2996ec986b47dc406115f7de3604f6-CfCEk2_fw658.jpeg' }, { src: 'public/css/img/5b80b5ba7828994c9f974cde0edc0b53c19e13fc7ae91-u0uydB_fw658.jpeg' }, { src: 'public/css/img/0a3a19b93dbe069a0637f8e6e56dbe6adea9aa43ee02-Rx0SE7_fw658.jpg' }, { src: 'public/css/img/0b451e62672f9020293c7afa83aa36ab7442ee92d7531-mCXJtm_fw658.jpeg' }, { src: 'public/css/img/0c3077496f2ce33408b927fb878db154c8e762c35a98d-iPV2nX_fw658.jpeg' }, { src: 'public/css/img/0d1d5aa55849edd234483c08ae173dae743e429c1007c-qIGghM_fw658.jpg' }, { src: 'public/css/img/16ee3f9e93e768aa57d6c9d12fe7c6a78eb47f8b2d3a0-DWWeV6_fw658.jpeg' }, { src: 'public/css/img/20cb2ea350055e1626072cb2046902f86227f22911dc2-BJ58gM_fw658.jpg' }, { src: 'public/css/img/020fccc319d7cc6dce2cf74f3fba72feef48ac3cb8a49-6rJsvx_fw658.jpeg' }, { src: 'public/css/img/9d6d9090278969a2996ec986b47dc406115f7de3604f6-CfCEk2_fw658.jpeg' }, { src: 'public/css/img/5b80b5ba7828994c9f974cde0edc0b53c19e13fc7ae91-u0uydB_fw658.jpeg' }]
        };
        return _this;
    }

    _createClass(ComonentBody, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(_masonry2.default, { elements: this.state.elements }),
                _react2.default.createElement(
                    'div',
                    { className: 'loading' },
                    '\u6B63\u5728\u52A0\u8F7D'
                ),
                _react2.default.createElement(_Elevator2.default, null)
            );
        }
    }]);

    return ComonentBody;
}(_react2.default.Component);

exports.default = ComonentBody;

/***/ }),

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

    var Gallery = function (_React$Component) {
        _inherits(Gallery, _React$Component);

        function Gallery() {
            _classCallCheck(this, Gallery);

            var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

            $.ajax({
                url: "/api/user/getDate",
                async: false
            }).done(function (data) {
                console.log(data);
                for (var i = 0; i < data[0].pins.length; i++) {
                    dataR.push(data[0].pins[i]);
                }

                //dataR.push(data[1].data)
            });

            _this.state = {
                data: dataR,
                imgData: 0,
                loadDataFlag: false

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
                        a++;
                        if (this_.state.loadDataFlag == false) {
                            this_.setState({ loadDataFlag: true });
                            $.ajax({
                                url: "/api/user/getDate",
                                async: false
                            }).done(function (data) {

                                for (var i = 0; i < data[a].pins.length; i++) {
                                    dataR.push(data[a].pins[i]);
                                }
                            });
                            if (a >= 20) {
                                a = 0;
                            }

                            this_.setState({ data: dataR });
                            this_.setState({ loadDataFlag: false });
                        }
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
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
                            { className: 'image-element-class', key: index },
                            React.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.file.key }),
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
                    Masonry,
                    {
                        className: 'my-gallery-class' // default ''
                        , elementType: 'ul' // default 'div'
                        , options: masonryOptions // default {}
                        , disableImagesLoaded: false // default false
                        , updateOnEachImageLoad: false // default false and works only if disableImagesLoaded is false
                    },
                    childElements
                );
            }
        }]);

        return Gallery;
    }(React.Component);

    module.exports = Gallery;
}).call(window);

/***/ })

})
//# sourceMappingURL=0.bfcafd35f3f414bba432.hot-update.js.map