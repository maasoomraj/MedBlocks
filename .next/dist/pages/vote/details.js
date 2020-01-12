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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _voting = require('../../ethereum/voting');

var _voting2 = _interopRequireDefault(_voting);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/tanuj/MedBlocks/pages/vote/details.js?entry';


var VoterDetails = function (_Component) {
    (0, _inherits3.default)(VoterDetails, _Component);

    function VoterDetails() {
        (0, _classCallCheck3.default)(this, VoterDetails);

        return (0, _possibleConstructorReturn3.default)(this, (VoterDetails.__proto__ || (0, _getPrototypeOf2.default)(VoterDetails)).apply(this, arguments));
    }

    (0, _createClass3.default)(VoterDetails, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('div', { style: { paddingTop: '25px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Name : ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), this.props.voter.name), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Aadhar Number : ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), this.props.voter.aadhar)), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Constituency : ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), this.props.voter.constituency), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_routes.Link, { route: '/vote/candidateslist', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Vote Now')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts, voter;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;
                                _context.next = 5;
                                return _voting2.default.methods.voterDetails(accounts[0]).call();

                            case 5:
                                voter = _context.sent;

                                if (!(!voter.aadhar || !voter.isVerified)) {
                                    _context.next = 10;
                                    break;
                                }

                                _routes.Router.pushRoute('/register/voter');
                                _context.next = 11;
                                break;

                            case 10:
                                return _context.abrupt('return', { voter: voter });

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return VoterDetails;
}(_react.Component);

exports.default = VoterDetails;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZvdGUvZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwidm90aW5nIiwiUm91dGVyIiwiTGluayIsIlZvdGVyRGV0YWlscyIsInBhZGRpbmdUb3AiLCJwcm9wcyIsInZvdGVyIiwibmFtZSIsImFhZGhhciIsImNvbnN0aXR1ZW5jeSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwidm90ZXJEZXRhaWxzIiwiY2FsbCIsImlzVmVyaWZpZWQiLCJwdXNoUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFRLEFBQVk7Ozs7Ozs7SUFFdkIsQTs7Ozs7Ozs7Ozs7aUNBY00sQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUEsU0FBSyxPQUFTLEVBQUMsWUFBZixBQUFjLEFBQWM7OEJBQTVCO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxBQUFDLHVDQUFLLFNBQU4sQUFBaUI7OEJBQWpCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBQ1c7OzhCQUFBO2dDQURYLEFBQ1csQUFDTjtBQURNO0FBQUEscUJBQ04sQUFBSyxNQUFMLEFBQVcsTUFIcEIsQUFDSSxBQUVzQixBQUV0Qix1QkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUNvQjs7OEJBQUE7Z0NBRHBCLEFBQ29CLEFBQ2Y7QUFEZTtBQUFBLHFCQUNmLEFBQUssTUFBTCxBQUFXLE1BUnhCLEFBQ0ksQUFLSSxBQUVzQixBQUcxQiwwQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBQ21COzs4QkFBQTtnQ0FEbkIsQUFDbUIsQUFDZDtBQURjO0FBQUEscUJBQ2QsQUFBSyxNQUFMLEFBQVcsTUFIaEIsQUFDQSxBQUVzQixBQUV0QiwrQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ1E7QUFEUjtBQUFBLCtCQUNRLEFBQUMsOEJBQUssT0FBTixBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsZUFyQnhCLEFBQ0ksQUFDSSxBQUNBLEFBV0ksQUFLQSxBQUNRLEFBQ0ksQUFRM0I7Ozs7Ozs7Ozs7Ozt1Q0ExQzBCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7aUNBQTFCO0E7O3VDQUNjLGlCQUFBLEFBQU8sUUFBUCxBQUFlLGFBQWEsU0FBNUIsQUFBNEIsQUFBUyxJQUFyQyxBQUF5QyxBOztpQ0FBdkQ7QTs7c0NBQ0gsQ0FBQyxNQUFELEFBQU8sVUFBVSxDQUFDLE0sQUFBTTs7O0FBRXZCOzsrQ0FBQSxBQUFPLFVBQVAsQUFBaUI7Ozs7O2lFQUlWLEVBQUUsTyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVlEsQSxBQStDM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlscy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS90YW51ai9NZWRCbG9ja3MifQ==