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

var _voting = require('../../ethereum/voting');

var _voting2 = _interopRequireDefault(_voting);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/tanuj/MedBlocks/pages/vote/candidatedetail.js?entry';


var CandidateDetail = function (_Component) {
    (0, _inherits3.default)(CandidateDetail, _Component);

    function CandidateDetail() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CandidateDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CandidateDetail.__proto__ || (0, _getPrototypeOf2.default)(CandidateDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
                            _routes.Router.pushRoute('/');
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

    (0, _createClass3.default)(CandidateDetail, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('div', { style: { paddingTop: '25px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Name : ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), this.props.details.name), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Age: ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), this.props.details.age)), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Gender: ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), this.props.details.gender), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'PreviousRecord : ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }), this.props.details.previousRecord)), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Other Details : ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), this.props.adminDetails.otherDetails), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onVote, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Send Reports'))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, details, adminDetails, accounts, voter;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                _context2.next = 3;
                                return _voting2.default.methods.docterDetails(address).call();

                            case 3:
                                details = _context2.sent;
                                _context2.next = 6;
                                return _voting2.default.methods.adminDocterDetails(address).call();

                            case 6:
                                adminDetails = _context2.sent;
                                _context2.next = 9;
                                return _web2.default.eth.getAccounts();

                            case 9:
                                accounts = _context2.sent;
                                _context2.next = 12;
                                return _voting2.default.methods.patientDetails(accounts[0]).call();

                            case 12:
                                voter = _context2.sent;
                                return _context2.abrupt('return', { address: address, details: details, adminDetails: adminDetails });

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CandidateDetail;
}(_react.Component);

exports.default = CandidateDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZvdGUvY2FuZGlkYXRlZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiR3JpZCIsIkJ1dHRvbiIsInZvdGluZyIsIndlYjMiLCJSb3V0ZXIiLCJDYW5kaWRhdGVEZXRhaWwiLCJzdGF0ZSIsImVycnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25Wb3RlIiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInZvdGUiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJwYWRkaW5nVG9wIiwicHJvcHMiLCJkZXRhaWxzIiwibmFtZSIsImFnZSIsImdlbmRlciIsInByZXZpb3VzUmVjb3JkIiwiYWRtaW5EZXRhaWxzIiwib3RoZXJEZXRhaWxzIiwiYWRkcmVzcyIsInF1ZXJ5IiwiZG9jdGVyRGV0YWlscyIsImNhbGwiLCJhZG1pbkRvY3RlckRldGFpbHMiLCJwYXRpZW50RGV0YWlscyIsInZvdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O2tPLEFBVUY7MkJBQVEsQUFDWSxBQUNoQjtxQkFGSSxBQUVNLEE7QUFGTixBQUNKLGlCQUlKLEEsa0ZBQVEsbUJBQUE7Z0JBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQ0o7a0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFXLE1BQU8sY0FENUIsQUFDSixBQUFjLEFBQWlDOzRDQUQzQzs0Q0FBQTttQ0FHdUIsY0FBQSxBQUFLLElBSDVCLEFBR3VCLEFBQVM7OzZCQUExQjtBQUhOLGdEQUFBOzRD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