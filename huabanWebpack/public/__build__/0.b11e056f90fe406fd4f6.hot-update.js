webpackHotUpdate(0,{

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*** IMPORTS FROM imports-loader ***/
var define = false;
(function () {

    /**
     * Created by ANN on 2017/8/20.
     */

    var React = __webpack_require__(14);
    var Masonry = __webpack_require__(199);

    var masonryOptions = {
        transitionDuration: 1,
        left: 0
    };
    var dataR = [];

    var Gallery = function (_React$Component) {
        _inherits(Gallery, _React$Component);

        function Gallery() {
            _classCallCheck(this, Gallery);

            var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

            $.ajax({
                url: "/api/user/getDate",
                async: false
            }).done(function (data) {
                console.log(data);
                for (var i = 0; i < data[0].data.length; i++) {
                    dataR.push(data[0].data[i]);
                }

                //dataR.push(data[1].data)
            });

            _this.state = {
                data: dataR,
                imgData: 0,
                loadDataFlag: false

            };

            return _this;
        }

        _createClass(Gallery, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var height = $(window).height();
                console.log(height);
                var this_ = this;

                $(window).scroll(function (e) {
                    if ($(window).scrollTop() + $(window).height() + 2250 >= $(document).height()) {

                        if (this_.state.loadDataFlag == false) {
                            this_.setState({ loadDataFlag: true });
                            $.ajax({
                                url: "/api/user/getDate",
                                async: false
                            }).done(function (data) {

                                for (var i = 0; i < data[1].data.length; i++) {
                                    dataR.push(data[1].data[i]);
                                }
                            });

                            this_.setState({ data: dataR });
                            this_.setState({ loadDataFlag: false });
                        }
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var childElements = this.state.data.map(function (v, index) {
                    if (index == 0) {
                        return React.createElement(
                            'li',
                            { className: 'image-element-class', key: index },
                            React.createElement('img', { height: 187 }),
                            React.createElement(
                                'div',
                                { id: 'user_info', className: 'pin wfc', style: { postion: "absolute", left: 0, top: 0 } },
                                React.createElement(
                                    'div',
                                    { id: 'Profile' },
                                    React.createElement(
                                        'div',
                                        { className: 'profile-basic' },
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/', title: 'qiudaoyimu', className: 'img x loaded' },
                                            React.createElement('img', { width: '54', height: '54', src: '//hbimg.b0.upaiyun.com/79c19673f6d42b0411bc2e75fc472356e8b521ba1e26-EcdWTk_sq75sf',
                                                'data-baiduimageplus-ignore': '1' })
                                        ),
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/', className: 'userlink' },
                                            'qiudaoyimu'
                                        ),
                                        React.createElement('a', { href: '/settings/', title: '\u5E10\u53F7\u8BBE\u7F6E', className: 'settings' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'profile-stats' },
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/pins/' },
                                            React.createElement(
                                                'strong',
                                                null,
                                                '16'
                                            ),
                                            '\u91C7\u96C6'
                                        ),
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/', className: 'middle' },
                                            React.createElement(
                                                'strong',
                                                null,
                                                '2'
                                            ),
                                            '\u753B\u677F'
                                        ),
                                        React.createElement(
                                            'a',
                                            { href: '/q42p11pfnu/followers/' },
                                            React.createElement(
                                                'strong',
                                                null,
                                                '1'
                                            ),
                                            '\u7C89\u4E1D'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'profile-acts convo' },
                                        React.createElement(
                                            'div',
                                            { className: 'links' },
                                            React.createElement(
                                                'a',
                                                { href: '/friends/weibo/', className: 'btn wbtn' },
                                                React.createElement(
                                                    'strong',
                                                    null,
                                                    React.createElement('em', null),
                                                    '\u67E5\u627E\u5728\u82B1\u74E3\u7684\u597D\u53CB'
                                                ),
                                                React.createElement('span', null)
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    } else {
                        return React.createElement(
                            'li',
                            { className: 'image-element-class', key: index },
                            React.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.file.key }),
                            React.createElement('span', null),
                            React.createElement(
                                'div',
                                null,
                                v.board.title
                            )
                        );
                    }
                });

                return React.createElement(
                    Masonry,
                    {
                        className: 'my-gallery-class' // default ''
                        , elementType: 'ul' // default 'div'
                        , options: masonryOptions // default {}
                        , disableImagesLoaded: false // default false
                        , updateOnEachImageLoad: false // default false and works only if disableImagesLoaded is false
                    },
                    childElements
                );
            }
        }]);

        return Gallery;
    }(React.Component);

    module.exports = Gallery;
}).call(window);

/***/ })

})
//# sourceMappingURL=0.b11e056f90fe406fd4f6.hot-update.js.map