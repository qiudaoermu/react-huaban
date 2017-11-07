webpackHotUpdate(0,{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(62);

var _body = __webpack_require__(290);

var _body2 = _interopRequireDefault(_body);

var _App = __webpack_require__(254);

var _App2 = _interopRequireDefault(_App);

var _List = __webpack_require__(256);

var _List2 = _interopRequireDefault(_List);

var _Detail = __webpack_require__(257);

var _Detail2 = _interopRequireDefault(_Detail);

var _NotFound = __webpack_require__(258);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/8/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RouteMap = function (_React$Component) {
    _inherits(RouteMap, _React$Component);

    function RouteMap() {
        _classCallCheck(this, RouteMap);

        return _possibleConstructorReturn(this, (RouteMap.__proto__ || Object.getPrototypeOf(RouteMap)).apply(this, arguments));
    }

    _createClass(RouteMap, [{
        key: 'updateHandle',
        value: function updateHandle() {
            console.log('每次router变化之后都会触发');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouter.Router,
                { history: this.props.history, onUpdate: this.updateHandle.bind(this) },
                _react2.default.createElement(
                    _reactRouter.Route,
                    { path: '/', component: _App2.default },
                    _react2.default.createElement(_reactRouter.IndexRoute, { component: _body2.default }),
                    _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _List2.default }),
                    _react2.default.createElement(_reactRouter.Route, { path: 'detail/:id', component: _Detail2.default }),
                    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
                )
            );
        }
    }]);

    return RouteMap;
}(_react2.default.Component);

exports.default = RouteMap;

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(135);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _firstNewsWord = __webpack_require__(291);

var _firstNewsWord2 = _interopRequireDefault(_firstNewsWord);

var _masonry = __webpack_require__(255);

var _masonry2 = _interopRequireDefault(_masonry);

var _Elevator = __webpack_require__(292);

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

        return _possibleConstructorReturn(this, (ComonentBody.__proto__ || Object.getPrototypeOf(ComonentBody)).call(this));
    }

    _createClass(ComonentBody, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(_masonry2.default, null),
                _react2.default.createElement(_Elevator2.default, null)
            );
        }
    }]);

    return ComonentBody;
}(_react2.default.Component);

exports.default = ComonentBody;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(135);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by ANN on 2017/7/22.
 */


var ComponentFirstNew = function (_React$Component) {
    _inherits(ComponentFirstNew, _React$Component);

    function ComponentFirstNew() {
        _classCallCheck(this, ComponentFirstNew);

        var _this = _possibleConstructorReturn(this, (ComponentFirstNew.__proto__ || Object.getPrototypeOf(ComponentFirstNew)).call(this));

        var dataR = "";
        $.ajax({
            url: "/api/user/getDate",
            async: false
        }).done(function (data) {
            console.log(data);
            dataR = data[1].data;
        });

        _this.state = {
            data: dataR,
            imgData: 0
        };
        return _this;
    }

    _createClass(ComponentFirstNew, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var a = 10000;
            var m = 5;

            var t = 0;
            var tabDOM2 = _reactDom2.default.findDOMNode(this.tabDOM);
            for (var i = 0; i < m; i++) {
                if (tabDOM2.children[i].offsetHeight < a) {
                    a = tabDOM2.children[i].offsetHeight;
                    t = i;
                }
            }

            console.log(t);
            console.log(tabDOM2.children);
            tabDOM2.children[m + 1].style.left = tabDOM2.children[t].offsetLeft + 'px';

            // tabDOM2.children[m+1].style.top = tabDOM2.children[t].offsetHeight+'px'
            // tabDOM2.children[7].position.left =
            // console.log(tabDOM2.scrollHeight);
            // console.log(window.getComputedStyle(tabDOM2).height);
        }
    }, {
        key: 'construImg',
        value: function construImg(t, m, a) {}
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { id: 'user_info', className: 'pin wfc', style: { postion: "absolute", left: 0, top: 0 } },
                    _react2.default.createElement(
                        'div',
                        { id: 'Profile' },
                        _react2.default.createElement(
                            'div',
                            { className: 'profile-basic' },
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/', title: 'qiudaoyimu', className: 'img x loaded' },
                                _react2.default.createElement('img', { width: '54', height: '54', src: '//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq75sf',
                                    'data-baiduimageplus-ignore': '1' })
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/', className: 'userlink' },
                                'qiudaoyimu'
                            ),
                            _react2.default.createElement('a', { href: '/settings/', title: '\u5E10\u53F7\u8BBE\u7F6E', className: 'settings' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'profile-stats' },
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/pins/' },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    '16'
                                ),
                                '\u91C7\u96C6'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/', className: 'middle' },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    '2'
                                ),
                                '\u753B\u677F'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/followers/' },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    '1'
                                ),
                                '\u7C89\u4E1D'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'profile-acts convo' },
                            _react2.default.createElement(
                                'div',
                                { className: 'links' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/friends/weibo/', className: 'btn wbtn' },
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement('em', null),
                                        '\u67E5\u627E\u5728\u82B1\u74E3\u7684\u597D\u53CB'
                                    ),
                                    _react2.default.createElement('span', null)
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement('ul', { ref: function ref(dom) {
                        _this2.tabDOM = dom;
                    } })
            );
        }
    }]);

    return ComponentFirstNew;
}(_react2.default.Component);

exports.default = ComponentFirstNew;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by ANN on 2017/8/20.
 */
/**
 * Created by ANN on 2017/8/20.
 */

var React = __webpack_require__(4);
var Masonry = __webpack_require__(265);

var Elevator = function (_React$Component) {
    _inherits(Elevator, _React$Component);

    function Elevator() {
        _classCallCheck(this, Elevator);

        var _this = _possibleConstructorReturn(this, (Elevator.__proto__ || Object.getPrototypeOf(Elevator)).call(this));

        _this.state = {
            imgData: 0,
            loadDataFlag: false

        };

        return _this;
    }

    _createClass(Elevator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'scrolltoTop',
        value: function scrolltoTop() {
            $("html,body").animate({ scrollTop: 0 }, 800); //点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
            return false;
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { id: 'elevator_item', className: 'elevator-item' },
                React.createElement('a', { id: 'elevator', className: '', onClick: this.scrolltoTop.bind(this), title: '\u56DE\u5230\u9876\u90E8' }),
                React.createElement('a', { className: 'plus' }),
                React.createElement(
                    'div',
                    { className: 'plus-popup' },
                    React.createElement(
                        'div',
                        { className: 'group' },
                        React.createElement(
                            'a',
                            { onClick: '' },
                            '\u6DFB\u52A0\u91C7\u96C6',
                            React.createElement('i', { className: 'upload' })
                        ),
                        React.createElement(
                            'a',
                            { className: 'add-board-item' },
                            '\u6DFB\u52A0\u753B\u677F',
                            React.createElement('i', { className: 'add-board' })
                        ),
                        React.createElement(
                            'a',
                            { href: '/about/goodies/' },
                            '\u5B89\u88C5\u91C7\u96C6\u5DE5\u5177',
                            React.createElement('i', { className: 'goodies' })
                        )
                    ),
                    React.createElement('div', { className: 'arr' })
                )
            );
        }
    }]);

    return Elevator;
}(React.Component);

module.exports = Elevator;

/***/ })

})
//# sourceMappingURL=0.81af89769fc9dc09f8c2.hot-update.js.map