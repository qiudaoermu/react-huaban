webpackHotUpdate(0,{

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(97);

var _App = __webpack_require__(227);

var _App2 = _interopRequireDefault(_App);

var _masonry = __webpack_require__(228);

var _masonry2 = _interopRequireDefault(_masonry);

var _List = __webpack_require__(252);

var _List2 = _interopRequireDefault(_List);

var _Detail = __webpack_require__(251);

var _Detail2 = _interopRequireDefault(_Detail);

var _NotFound = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/NotFound\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
                    _react2.default.createElement(_reactRouter.IndexRoute, { component: _masonry2.default }),
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

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ANN on 2017/8/27.
 */


/***/ })

})
//# sourceMappingURL=0.fb3a09d4732bb20ee742.hot-update.js.map