webpackHotUpdate(0,{

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/22.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ComonentHeader = function (_React$Component) {
    _inherits(ComonentHeader, _React$Component);

    function ComonentHeader() {
        _classCallCheck(this, ComonentHeader);

        var _this = _possibleConstructorReturn(this, (ComonentHeader.__proto__ || Object.getPrototypeOf(ComonentHeader)).call(this));

        _this.list = ["首页", "发现", "最新", "美思", "活动", "教育", "..."];
        _this.state = {
            currentIndex: 0
        };
        return _this;
    }

    _createClass(ComonentHeader, [{
        key: "currentIndex",
        value: function currentIndex(index, value) {
            return this.state.currentIndex == value ? "nav-tab-item-active" : "nav-tab-item";
        }
    }, {
        key: "menuChangeItem",
        value: function menuChangeItem(event, value) {
            var val = event.target.getAttribute("data-index");
            console.log(val);

            console.log(value);
            this.setState({ currentIndex: val });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "header" },
                _react2.default.createElement(
                    "ul",
                    { className: "nva" },
                    this.list.map(function (index, value) {
                        return _react2.default.createElement(
                            "li",
                            { className: _this2.currentIndex(index, value),
                                key: value,
                                "data-index": value,
                                onClick: function onClick(index, value) {
                                    _this2.menuChangeItem(index, value);
                                }
                            },
                            index
                        );
                    })
                )
            );
        }
    }]);

    return ComonentHeader;
}(_react2.default.Component);

exports.default = ComonentHeader;

/***/ })

})
//# sourceMappingURL=0.0fc2df3e82806cf74238.hot-update.js.map