webpackHotUpdate(10,{

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(486);

var _web = __webpack_require__(1044);

var _web2 = _interopRequireDefault(_web);

var _voting = __webpack_require__(1043);

var _voting2 = _interopRequireDefault(_voting);

var _routes = __webpack_require__(690);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/tanuj/MedBlocks/components/candidateCard.js';


var CandidateCard = function (_Component) {
    (0, _inherits3.default)(CandidateCard, _Component);

    function CandidateCard() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CandidateCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CandidateCard.__proto__ || (0, _getPrototypeOf2.default)(CandidateCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errrorMessage: '',
            loading: false
        }, _this.onVote = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.setState({ loading: true, errorMessage: '' });
                            _context.prev = 1;
                            _context.next = 4;
                            return _web2.default.eth.getAccounts();

                        case 4:
                            accounts = _context.sent;
                            _context.next = 7;
                            return _voting2.default.methods.vote().send({
                                from: accounts[0]
                            });

                        case 7:
                            _routes.Router.push('/');
                            _context.next = 13;
                            break;

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](1);

                            _this.setState({ errorMessage: _context.t0.message });

                        case 13:

                            _this.setState({ loading: false });

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[1, 10]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CandidateCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Card, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, this.props.candidate.name), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, this.props.candidate.age), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, this.props.candidate.gender)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onVote, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Send Report'), _react2.default.createElement(_routes.Link, { route: '/vote/candidateslist/' + this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'More Details'))));
        }
    }]);

    return CandidateCard;
}(_react.Component);

exports.default = CandidateCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FuZGlkYXRlQ2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJ3ZWIzIiwidm90aW5nIiwiUm91dGVyIiwiTGluayIsIkNhbmRpZGF0ZUNhcmQiLCJzdGF0ZSIsImVycnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25Wb3RlIiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInZvdGUiLCJzZW5kIiwiZnJvbSIsInB1c2giLCJtZXNzYWdlIiwicHJvcHMiLCJjYW5kaWRhdGUiLCJuYW1lIiwiYWdlIiwiZ2VuZGVyIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUyxBQUFXOzs7Ozs7O0lBRXZCLEE7Ozs7Ozs7Ozs7Ozs7Ozs4TixBQUNGOzJCQUFRLEFBQ1ksQUFDaEI7cUJBRkksQUFFTSxBO0FBRk4sQUFDSixpQkFJSixBLGtGQUFRLG1CQUFBO2dCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNKO2tDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVyxNQUFPLGNBRDVCLEFBQ0osQUFBYyxBQUFpQzs0Q0FEM0M7NENBQUE7bUNBR3VCLGNBQUEsQUFBSyxJQUg1QixBQUd1QixBQUFTOzs2QkFBMUI7QUFITixnREFBQTs0Q0FBQTtvREFJTSxBQUFPLFFBQVAsQUFBZSxPQUFmLEFBQXNCO3NDQUNqQixTQUxYLEFBSU0sQUFBMkIsQUFDdEIsQUFBUztBQURhLEFBQzdCLDZCQURFOzs2QkFHTjsyQ0FBQSxBQUFPLEtBUFAsQUFPQSxBQUFZOzRDQVBaO0FBQUE7OzZCQUFBOzRDQUFBOzREQVNBOztrQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFlLFlBVC9CLEFBU0EsQUFBYyxBQUFxQjs7NkJBR3ZDOztrQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQVpYLEFBWUosQUFBYyxBQUFXOzs2QkFackI7NkJBQUE7NENBQUE7O0FBQUE7cUNBQUE7QTs7Ozs7aUNBZ0JBLEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYztBQUFkO0FBQUEsb0JBQWMsQUFBSyxNQUFMLEFBQVcsVUFEekIsQUFDQSxBQUFtQyxBQUNuQyx1QkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQVk7QUFBWjtBQUFBLG9CQUFZLEFBQUssTUFBTCxBQUFXLFVBRnZCLEFBRUEsQUFBaUMsQUFDakMsc0JBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFtQjtBQUFuQjtBQUFBLG9CQUFtQixBQUFLLE1BQUwsQUFBVyxVQUpsQyxBQUNJLEFBR0EsQUFBd0MsQUFFeEMsMEJBQUMsY0FBRCxzQkFBQSxBQUFNLFdBQVEsT0FBZDs4QkFBQTtnQ0FBQSxBQUVRO0FBRlI7K0JBRVEsQUFBQyx5Q0FBTyxTQUFXLEtBQW5CLEFBQXdCLFFBQVEsU0FBVyxLQUFBLEFBQUssTUFBaEQsQUFBc0Q7OEJBQXREO2dDQUFBO0FBQUE7ZUFGUixBQUVRLEFBRUosZ0NBQUEsQUFBQyw4QkFBSyxpQ0FBaUMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUE7QUFBQTtBQUFBLGVBWmhCLEFBQ0ksQUFNSSxBQUlJLEFBQ0ksQUFLbkI7Ozs7O0FBeEN1QixBLEFBMkM1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjYW5kaWRhdGVDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RhbnVqL01lZEJsb2NrcyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/tanuj/MedBlocks/components/candidateCard.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/tanuj/MedBlocks/components/candidateCard.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuNTMwM2I5OTY3NjFlZmQyNmY2NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FuZGlkYXRlQ2FyZC5qcz9mYTc4NTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgdm90aW5nIGZyb20gJy4uL2V0aGVyZXVtL3ZvdGluZyc7XG5pbXBvcnQgeyBSb3V0ZXIgLCBMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5cbmNsYXNzIENhbmRpZGF0ZUNhcmQgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVycnJvck1lc3NhZ2UgOiAnJyxcbiAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxuICAgIH1cblxuICAgIG9uVm90ZT0gYXN5bmMoKT0+e1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nIDogdHJ1ZSAsIGVycm9yTWVzc2FnZSA6ICcnfSk7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGF3YWl0IHZvdGluZy5tZXRob2RzLnZvdGUoKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tIDogYWNjb3VudHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2UgOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmcgOiBmYWxzZX0pO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPnt0aGlzLnByb3BzLmNhbmRpZGF0ZS5uYW1lfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YT57dGhpcy5wcm9wcy5jYW5kaWRhdGUuYWdlfTwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPnt0aGlzLnByb3BzLmNhbmRpZGF0ZS5nZW5kZXJ9PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljayA9IHt0aGlzLm9uVm90ZX0gbG9hZGluZz0geyB0aGlzLnN0YXRlLmxvYWRpbmcgfT5TZW5kIFJlcG9ydDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlID0ge2Avdm90ZS9jYW5kaWRhdGVzbGlzdC8ke3RoaXMucHJvcHMuYWRkcmVzc31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+TW9yZSBEZXRhaWxzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmRpZGF0ZUNhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NhbmRpZGF0ZUNhcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFQQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBU0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7QUFpQkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQVFBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=