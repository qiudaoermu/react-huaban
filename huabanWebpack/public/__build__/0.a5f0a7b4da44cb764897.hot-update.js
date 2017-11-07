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

var _UserInfo = __webpack_require__(293);

var _UserInfo2 = _interopRequireDefault(_UserInfo);

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
                    _react2.default.createElement(_reactRouter.Route, { path: 'UserInfo', component: _UserInfo2.default }),
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

/***/ 256:
false,

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/8/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var UserInfo = function (_React$Component) {
    _inherits(UserInfo, _React$Component);

    function UserInfo() {
        _classCallCheck(this, UserInfo);

        return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
    }

    _createClass(UserInfo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var arr = [1, 2, 3];
            return _react2.default.createElement(
                'ul',
                null,
                arr.map(function (item, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: index, onClick: _this2.clickHandler.bind(_this2, item) },
                        'js jump to ',
                        item
                    );
                })
            );
        }
    }, {
        key: 'clickHandler',
        value: function clickHandler(value) {
            _reactRouter.hashHistory.push('/detail/' + value);
        }
    }]);

    return UserInfo;
}(_react2.default.Component);

exports.default = List;

/***/ })

})
//# sourceMappingURL=0.a5f0a7b4da44cb764897.hot-update.js.map