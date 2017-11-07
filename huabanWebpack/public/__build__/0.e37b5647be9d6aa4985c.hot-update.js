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

        var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this));

        var callbackData = "";
        var this_ = _this;
        $.ajax({
            url: "/api/user/getBoardData",
            type: "POST",
            async: false

        }).done(function (data) {
            callbackData = data[0].boards;
        });
        _this.state = {
            callbackData: callbackData
        };
        return _this;
    }

    _createClass(UserInfo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var arr = [1, 2, 3];
            return _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper clearfix', style: { width: '1496px' } },
                    _react2.default.createElement(
                        'div',
                        { id: 'user_card' },
                        _react2.default.createElement('div', { className: 'maozi' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'inner clearfix without-side' },
                            _react2.default.createElement(
                                'div',
                                { className: 'avatar-unit' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'img' },
                                    _react2.default.createElement('img', {
                                        src: '//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq140sf',
                                        'data-baiduimageplus-ignore': '1', className: 'current-avatar' }),
                                    _react2.default.createElement('img', { src: 'public/css/img/load2.gif', style: { display: 'none' }, 'data-baiduimageplus-ignore': '1', className: 'load' }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'change-avatar' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'btn wbtn btn12' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'text' },
                                                '\u66F4\u6362\u5934\u50CF'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { style: { position: 'absolute', opacity: 0.01, overflow: 'hidden' } },
                                            _react2.default.createElement('iframe', { src: 'javascript:\'<html></html>\'',
                                                frameBorder: 'no',

                                                name: 'IFrame_j74hjphf',
                                                id: 'IFrame_j74hjphf', style: { display: 'none' } }),
                                            _react2.default.createElement('input', { type: 'file', name: 'file', size: '1',
                                                style: { position: 'absolute', top: '0px', left: '0px', border: '0px' }

                                            })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'counts clearfix' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/q42p11pfnu/followers/', className: 'followers' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'num' },
                                            '1'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sub' },
                                            '\u7C89\u4E1D'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/q42p11pfnu/following/', className: 'follows' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'num' },
                                            '25'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sub' },
                                            '\u5173\u6CE8'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'head-line' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'name' },
                                    'qiudaoyimu'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: '/muse/register/', title: '\u6210\u4E3A\u8BA4\u8BC1\u8BBE\u8BA1\u5E08', target: '_blank' },
                                    _react2.default.createElement('i', { className: 'v-icon unverified' })
                                )
                            ),
                            _react2.default.createElement('ul', { className: 'introduction' }),
                            _react2.default.createElement('div', { className: 'about clearfix' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'action-buttons' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/settings/', className: 'btn btn14' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text' },
                                        ' \u5E10\u53F7\u8BBE\u7F6E'
                                    )
                                )
                            ),
                            _react2.default.createElement('div', { className: 'bindings' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'tabs' },
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/', className: 'tab active' },
                                '17\u753B\u677F'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/pins/', className: 'tab ' },
                                '184\u91C7\u96C6'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/likes/', className: 'tab ' },
                                '3\u559C\u6B22'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/q42p11pfnu/tags/', rel: 'nofollow', className: 'tab ' },
                                '7\u6807\u7B7E'
                            ),
                            _react2.default.createElement(
                                'form',
                                { id: 'people_search_item', action: '/q42p11pfnu/pins/', className: 'searching-unit', 'data-regestered': 'regestered' },
                                _react2.default.createElement('input', { value: '', name: 'q', placeholder: '\u641C\u7D22\u6211\u7684\u91C7\u96C6', autoComplete: 'off' }),
                                _react2.default.createElement('a', { className: 'go' })
                            ),
                            _react2.default.createElement('div', { className: 'search-hint' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'waterfall', className: 'sort-lists clearfix sortable __web-inspector-hide-shortcut__' },
                        _react2.default.createElement(
                            'div',
                            { className: 'wfc add-board' },
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
                        this.state.callbackData.map(function (v, i) {
                            return _react2.default.createElement(
                                'div',
                                { 'data-id': v.board_id, 'data-seq': v.board_id, className: 'Board wfc inited', key: i, onMouseOver: _this2.showEditBorad.bind(_this2) },
                                _react2.default.createElement('div', { className: 'draglay' }),
                                _react2.default.createElement('div', { title: '\u62D6\u52A8\u6539\u53D8\u6392\u5E8F', className: 'drag-icon' }),
                                _react2.default.createElement(
                                    'a',
                                    { href: '/boards/38936970/', target: '_blank', className: 'link  x' },
                                    _react2.default.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.pins[0].file.key + "_sq235", 'data-baiduimageplus-ignore': '1', className: 'large' }),
                                    v.pins[1] ? _react2.default.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.pins[1].file.key + "_sq235", 'data-baiduimageplus-ignore': '1' }) : '',
                                    v.pins[2] ? _react2.default.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.pins[2].file.key + "_sq235", 'data-baiduimageplus-ignore': '1' }) : '',
                                    v.pins[3] ? _react2.default.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.pins[3].file.key + "_sq235", 'data-baiduimageplus-ignore': '1' }) : '',
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
                                            v.title
                                        ),
                                        _react2.default.createElement('h4', null),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'pin-count' },
                                            v.pin_count
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
                                    _react2.default.createElement('img', { title: 'QQ20170811-204338', src: '//hbimg.b0.upaiyun.com/bf8be9c316cf95366298bbb74e7bd17cba9a822c7e3d-5P4Afn_sq75' })
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
                            );
                        })
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
//# sourceMappingURL=0.e37b5647be9d6aa4985c.hot-update.js.map