webpackHotUpdate(0,{

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
//# sourceMappingURL=0.5bbbb274f7392642f2dd.hot-update.js.map