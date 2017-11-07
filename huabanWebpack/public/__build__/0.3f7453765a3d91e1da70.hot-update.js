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
                            React.createElement('img', null),
                            React.createElement(
                                'div',
                                null,
                                'title'
                            )
                        );
                    } else {
                        return React.createElement(
                            'li',
                            { className: 'image-element-class', key: index },
                            React.createElement('img', { src: "//hbimg.b0.upaiyun.com/" + v.file.key }),
                            React.createElement(
                                'div',
                                null,
                                'baidu'
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
//# sourceMappingURL=0.3f7453765a3d91e1da70.hot-update.js.map