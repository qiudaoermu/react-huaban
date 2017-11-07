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
                { className: "header " },
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
                    }),
                    _react2.default.createElement(
                        "div",
                        { className: "right-part" },
                        _react2.default.createElement(
                            "a",
                            { style: { display: 'none' }, href: "#", className: "go-mobile btn rbtn" },
                            _react2.default.createElement(
                                "span",
                                { className: "text" },
                                " \u8BBF\u95EE\u79FB\u52A8\u7248"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "message-nav" },
                            _react2.default.createElement(
                                "a",
                                { title: "\u901A\u77E5", className: "nav-link" },
                                _react2.default.createElement("div", { className: "nav-icon" }),
                                _react2.default.createElement(
                                    "div",
                                    { className: "num hidden" },
                                    "0"
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { id: "message_popup", style: { display: 'none' } },
                                _react2.default.createElement(
                                    "div",
                                    { className: "bar" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "left barTitle click" },
                                        "\u6D88\u606F"
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "right barTitle active click" },
                                        "\u52A8\u6001"
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { id: "boxer" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "box box-mentions hidden" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "empty" },
                                            "\u6CA1\u6709\u6D88\u606F"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "box box-activities " },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "item " },
                                            _react2.default.createElement(
                                                "a",
                                                { href: "/bhsmygjcth/", className: "avt" },
                                                _react2.default.createElement("img", { width: "75", height: "75", src: "//hbimg.b0.upaiyun.com/7c06a187be14d1c8d9e7f0ac252aaa4a70c85053f0bf-Ijjjs0_sq75sf", "data-baiduimageplus-ignore": "1" })
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { className: "details" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "line" },
                                                    _react2.default.createElement(
                                                        "a",
                                                        { href: "/bhsmygjcth/", className: "brown-link" },
                                                        "\u4E50\u742A\u742A"
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "line" },
                                                    _react2.default.createElement(
                                                        "span",
                                                        null,
                                                        "\u5173\u6CE8\u4E86\u4F60"
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "item " },
                                            _react2.default.createElement(
                                                "a",
                                                { href: "/hello-0313/", className: "avt" },
                                                _react2.default.createElement("img", { width: "75", height: "75", src: "//hbimg.b0.upaiyun.com/d8026b5fde5102a2d8ecab8398c69037c45abd90128d-TFPwxC_sq75sf", "data-baiduimageplus-ignore": "1" })
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { className: "details" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "line" },
                                                    _react2.default.createElement(
                                                        "a",
                                                        { href: "/hello-0313/", className: "brown-link" },
                                                        "hello_Z"
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "line" },
                                                    _react2.default.createElement(
                                                        "span",
                                                        null,
                                                        "\u5173\u6CE8\u4E86\u4F60\u7684\u753B\u677F"
                                                    ),
                                                    _react2.default.createElement(
                                                        "a",
                                                        { href: "/boards/27751005/", className: "brown-link" },
                                                        "\u52A8\u753B"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { href: "/message/?type=activities", className: "show-all" },
                                    "\u67E5\u770B\u6240\u6709\u52A8\u6001\xBB"
                                ),
                                _react2.default.createElement("div", { className: "triangle" })
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { id: "nav_user" },
                            _react2.default.createElement(
                                "a",
                                { href: "/q42p11pfnu/", className: "nav-link dm-nav" },
                                _react2.default.createElement("img", { width: "26", height: "26", src: "//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq75sf", "data-baiduimageplus-ignore": "1", className: "avt" }),
                                _react2.default.createElement("div", { className: "arrow" }),
                                _react2.default.createElement(
                                    "div",
                                    { className: "num " },
                                    "1"
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "menu", style: { display: 'none' } },
                                _react2.default.createElement(
                                    "div",
                                    { className: "group" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "/q42p11pfnu/" },
                                        "\u6211\u7684\u82B1\u74E3",
                                        _react2.default.createElement("i", { className: "mine" })
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { title: "\u79C1\u4FE1", className: "dm-nav" },
                                        "\u79C1\u4FE1",
                                        _react2.default.createElement("i", { className: "messages" }),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "num in-line " },
                                            "1"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "/q42p11pfnu/following/" },
                                        "\u6211\u7684\u5173\u6CE8",
                                        _react2.default.createElement("i", { className: "following" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "group" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "/friends/weibo/" },
                                        "\u67E5\u627E\u597D\u53CB",
                                        _react2.default.createElement("i", { className: "friends" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "group" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "/muse/register/" },
                                        "\u82B1\u74E3\u8BA4\u8BC1\u8BBE\u8BA1\u5E08",
                                        _react2.default.createElement("i", { className: "verified" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "group" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "/settings/" },
                                        "\u5E10\u53F7\u8BBE\u7F6E",
                                        _react2.default.createElement("i", { className: "settings" })
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "/logout/" },
                                        "\u9000\u51FA",
                                        _react2.default.createElement("i", { className: "exit" })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ComonentHeader;
}(_react2.default.Component);

exports.default = ComonentHeader;

/***/ })

})
//# sourceMappingURL=0.353c85691184106c2ebd.hot-update.js.map