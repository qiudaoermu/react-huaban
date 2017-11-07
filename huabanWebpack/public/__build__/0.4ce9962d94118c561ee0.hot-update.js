webpackHotUpdate(0,{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _firstNewsWord = __webpack_require__(197);

var _firstNewsWord2 = _interopRequireDefault(_firstNewsWord);

var _masonry = __webpack_require__(198);

var _masonry2 = _interopRequireDefault(_masonry);

var _Elevator = __webpack_require__(224);

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
                _react2.default.createElement(_Elevator2.default, null)
            );
        }
    }]);

    return ComonentBody;
}(_react2.default.Component);

exports.default = ComonentBody;

/***/ }),

/***/ 224:
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

var React = __webpack_require__(14);
var Masonry = __webpack_require__(199);

var Elevator = function (_React$Component) {
    _inherits(Elevator, _React$Component);

    function Elevator() {
        _classCallCheck(this, Elevator);

        var _this = _possibleConstructorReturn(this, (Elevator.__proto__ || Object.getPrototypeOf(Elevator)).call(this));

        _this.state = {
            data: dataR,
            imgData: 0,
            loadDataFlag: false

        };

        return _this;
    }

    _createClass(Elevator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { id: 'elevator_item', className: 'elevator-item' },
                React.createElement('a', { id: 'elevator', className: '', onclick: 'return false;', title: '\u56DE\u5230\u9876\u90E8' }),
                React.createElement('a', { className: 'plus' }),
                React.createElement(
                    'div',
                    { className: 'plus-popup' },
                    React.createElement(
                        'div',
                        { className: 'group' },
                        React.createElement(
                            'a',
                            { onclick: 'app.showUploadDialog();' },
                            '\u6DFB\u52A0\u91C7\u96C6',
                            React.createElement('i', { 'class': 'upload' })
                        ),
                        React.createElement(
                            'a',
                            { className: 'add-board-item' },
                            '\u6DFB\u52A0\u753B\u677F',
                            React.createElement('i', { 'class': 'add-board' })
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
//# sourceMappingURL=0.4ce9962d94118c561ee0.hot-update.js.map