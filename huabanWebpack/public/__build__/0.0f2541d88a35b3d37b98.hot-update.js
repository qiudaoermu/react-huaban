webpackHotUpdate(0,{

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(42);

var _header = __webpack_require__(123);

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
            var arr = [1, 2, 3];
            return _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper clearfix' },
                    _react2.default.createElement(
                        'div',
                        { id: 'waterfall', className: 'sort-lists clearfix sortable __web-inspector-hide-shortcut__' },
                        _react2.default.createElement(
                            'div',
                            { onclick: 'app.requireLogin(function() {app.showDialogBox(\'create_board\');});', className: 'wfc add-board' },
                            _react2.default.createElement(
                                'div',
                                { className: 'inner' },
                                _react2.default.createElement('i', null),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '\u521B\u5EFA\u753B\u677F'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'data-id': '38936970', 'data-seq': '38936970', className: 'Board wfc inited' },
                            _react2.default.createElement('div', { className: 'draglay' }),
                            _react2.default.createElement('div', { title: '\u62D6\u52A8\u6539\u53D8\u6392\u5E8F', className: 'drag-icon' }),
                            _react2.default.createElement(
                                'a',
                                { href: '/boards/38936970/', target: '_blank', className: 'link  x' },
                                _react2.default.createElement('img', { src: '//hbimg.b0.upaiyun.com/bf8be9c316cf95366298bbb74e7bd17cba9a822c7e3d-5P4Afn_sq235',
                                    'data-baiduimageplus-ignore': '1', className: 'large' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'shadows' },
                                    _react2.default.createElement('div', { className: 'large-shadow' }),
                                    _react2.default.createElement('div', { className: 'shadow' }),
                                    _react2.default.createElement('div', { className: 'shadow' }),
                                    _react2.default.createElement('div', { className: 'shadow' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'over ' },
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        '\u672A'
                                    ),
                                    _react2.default.createElement('h4', null),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'pin-count' },
                                        '1'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'board-cover-edit' },
                                    _react2.default.createElement(
                                        'div',
                                        { href: '#', className: 'btn btn12' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'text' },
                                            '\u8BBE\u7F6E\u5C01\u9762'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/pins/1292711857', title: 'QQ20170811-204338', className: 'hidden' },
                                _react2.default.createElement('img', { title: 'QQ20170811-204338',
                                    src: '//hbimg.b0.upaiyun.com/bf8be9c316cf95366298bbb74e7bd17cba9a822c7e3d-5P4Afn_sq75'
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'FollowBoard' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/boards/38936970/edit/', className: 'btn btn14 wbtn' },
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        ' \u7F16\u8F91'
                                    ),
                                    _react2.default.createElement('span', null)
                                )
                            )
                        )
                    )
                )
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
//# sourceMappingURL=0.0f2541d88a35b3d37b98.hot-update.js.map