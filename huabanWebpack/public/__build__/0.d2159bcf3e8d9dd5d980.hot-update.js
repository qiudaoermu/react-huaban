webpackHotUpdate(0,{

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

var _header = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \".header\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _header2 = _interopRequireDefault(_header);

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

exports.default = UserInfo;

/***/ })

})
//# sourceMappingURL=0.d2159bcf3e8d9dd5d980.hot-update.js.map