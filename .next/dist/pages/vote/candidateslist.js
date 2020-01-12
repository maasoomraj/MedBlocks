'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _candidateCard = require('../../components/candidateCard');

var _candidateCard2 = _interopRequireDefault(_candidateCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/tanuj/MedBlocks/pages/vote/candidateslist.js?entry';


var CandidateList = function (_Component) {
    (0, _inherits3.default)(CandidateList, _Component);

    function CandidateList() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CandidateList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CandidateList.__proto__ || (0, _getPrototypeOf2.default)(CandidateList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            approvedCandidates: [],
            voter: {}
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CandidateList, [{
        key: 'componentWillMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var candidates, accounts, voter;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                //let approvedCandidates = [];
                                candidates = [];
                                _context2.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context2.sent;
                                _context2.next = 6;
                                return _voting2.default.methods.patientDetails(accounts[0]).call();

                            case 6:
                                voter = _context2.sent;

                                if (voter.isVerified) {
                                    _context2.next = 11;
                                    break;
                                }

                                _routes.Router.push('/register/voter');
                                _context2.next = 15;
                                break;

                            case 11:
                                _context2.next = 13;
                                return _voting2.default.methods.getDocters().call();

                            case 13:
                                candidates = _context2.sent;

                                candidates.forEach(function () {
                                    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
                                        var candidate, candidatedetail;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return _voting2.default.methods.docterDetails(address).call();

                                                    case 2:
                                                        candidate = _context.sent;

                                                        if (candidate.isVerified) {
                                                            candidatedetail = {
                                                                candidate: candidate,
                                                                address: address
                                                            };

                                                            _this2.setState(function (prevState) {
                                                                return {
                                                                    approvedCandidates: [].concat((0, _toConsumableArray3.default)(prevState.approvedCandidates), [candidatedetail])
                                                                };
                                                            });
                                                            _this2.setState({ voter: voter });
                                                        }

                                                    case 4:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }));

                                    return function (_x) {
                                        return _ref3.apply(this, arguments);
                                    };
                                }());

                            case 15:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentWillMount() {
                return _ref2.apply(this, arguments);
            }

            return componentWillMount;
        }()
    }, {
        key: 'Candidates',
        value: function Candidates() {
            return this.state.approvedCandidates.map(function (candidatedetail, index) {
                return _react2.default.createElement(_candidateCard2.default, {
                    key: index,
                    candidate: candidatedetail.candidate,
                    address: candidatedetail.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, this.Candidates()));
        }
    }]);

    return CandidateList;
}(_react.Component);

exports.default = CandidateList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZvdGUvY2FuZGlkYXRlc2xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYXJkIiwid2ViMyIsInZvdGluZyIsIlJvdXRlciIsIkxpbmsiLCJDYW5kaWRhdGVDYXJkIiwiQ2FuZGlkYXRlTGlzdCIsInN0YXRlIiwiYXBwcm92ZWRDYW5kaWRhdGVzIiwidm90ZXIiLCJjYW5kaWRhdGVzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJwYXRpZW50RGV0YWlscyIsImNhbGwiLCJpc1ZlcmlmaWVkIiwicHVzaCIsImdldERvY3RlcnMiLCJmb3JFYWNoIiwiYWRkcmVzcyIsImRvY3RlckRldGFpbHMiLCJjYW5kaWRhdGUiLCJjYW5kaWRhdGVkZXRhaWwiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIm1hcCIsImluZGV4IiwiQ2FuZGlkYXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUzs7QUFDVCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUSxBQUFZOztBQUM3QixBQUFPLEFBQW1COzs7Ozs7Ozs7SSxBQUVwQjs7Ozs7Ozs7Ozs7Ozs7OE5BQ0YsQTtnQ0FBUSxBQUNpQixBQUNyQjttQkFGSSxBQUVJLEE7QUFGSixBQUNKOzs7Ozs7Ozs7Ozs7O2lDQUlBO0FBQ0k7QSw2Q0FBYSxBOzt1Q0FDTSxjQUFBLEFBQUssSUFBSSxBLEFBQVQ7O2lDQUFqQjtBOzt1Q0FDYyxpQkFBQSxBQUFPLFFBQVAsQUFBZSxlQUFlLFNBQTlCLEFBQThCLEFBQVMsSSxBQUF2QyxBQUEyQzs7aUNBQXpEO0E7O29DQUNGLE0sQUFBTTs7O0FBRU47OytDQUFBLEFBQU8sS0FBUCxBQUFZOzs7Ozs7dUNBSU8saUJBQUEsQUFBTyxRQUFQLEFBQWUsYUFBZixBQUE0QixBOztpQ0FBL0M7QSx1REFDQTs7MkNBQUEsQUFBVyxvQkFBWDt5SEFBbUIsaUJBQUEsQUFBTSxTQUFOO3VEQUFBO3NHQUFBO3NEQUFBO2lGQUFBO3lEQUFBO3dFQUFBOytEQUNPLGlCQUFBLEFBQU8sUUFBUCxBQUFlLGNBQWYsQUFBOEIsU0FEckMsQUFDTyxBQUF1Qzs7eURBQXpEO0FBRFcsNkVBRWY7OzREQUFHLFVBQUgsQUFBYSxZQUFXLEFBQ2hCO0FBRGdCOzJFQUNFLEFBQ04sQUFDWjt5RUFIZ0IsQUFDRSxBQUVSLEFBRWQ7QUFKc0IsQUFDbEI7O21FQUdKLEFBQUssU0FBUyxxQkFBQTs7bUlBQ2MsVUFBeEIsQUFBa0Msc0JBRHhCLEFBQWMsQUFDeEIsQUFBc0Q7QUFEOUIsQUFDeEI7QUFESixBQUdEO21FQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFTLEFBQ3pCO0FBWGM7O3lEQUFBO3lEQUFBO3dFQUFBOztBQUFBO29EQUFBO0FBQW5COzt5REFBQTtpRUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQWdCSSxBQUNSO3dCQUFPLEFBQUssTUFBTCxBQUFXLG1CQUFYLEFBQThCLElBQUksVUFBQSxBQUFDLGlCQUFELEFBQWlCLE9BQVEsQUFDOUQ7dUNBQ0ksQUFBQzt5QkFBRCxBQUNTLEFBQ0w7K0JBQWEsZ0JBRmpCLEFBRWlDLEFBQzdCOzZCQUFXLGdCQUhmLEFBRytCOztrQ0FIL0I7b0NBREosQUFDSSxBQU1QO0FBTk87QUFDSSxpQkFESjtBQUZSLEFBQU8sQUFTVixhQVRVOzs7O2lDQVdILEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUZKLEFBQ0ksQUFDQSxBQUNLLEFBQUssQUFJakI7Ozs7O0FBckR1QixBLEFBd0Q1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjYW5kaWRhdGVzbGlzdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS90YW51ai9NZWRCbG9ja3MifQ==