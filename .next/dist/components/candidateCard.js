'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _voting = require('../ethereum/voting');

var _voting2 = _interopRequireDefault(_voting);

var _routes = require('../routes');

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