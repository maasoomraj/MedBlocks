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

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _voting = require('../ethereum/voting');

var _voting2 = _interopRequireDefault(_voting);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/tanuj/MedBlocks/pages/index.js?entry';


var VotingIndex = function (_Component) {
    (0, _inherits3.default)(VotingIndex, _Component);

    function VotingIndex() {
        (0, _classCallCheck3.default)(this, VotingIndex);

        return (0, _possibleConstructorReturn3.default)(this, (VotingIndex.__proto__ || (0, _getPrototypeOf2.default)(VotingIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(VotingIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('h1', { style: { paddingTop: '25px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, 'Democracy is the Strength of this Country'), _react2.default.createElement('div', { style: { paddingTop: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, !this.props.start ? _react2.default.createElement(_routes.Link, { route: '/register', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: 'massive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'Register')) : !this.props.end ? _react2.default.createElement(_routes.Link, { route: '/vote/details', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: 'massive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'Vote Now')) : _react2.default.createElement(_routes.Link, { route: '/results', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: 'massive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'Results')))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var start, end;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _voting2.default.methods.startVote().call();

                            case 2:
                                start = _context.sent;
                                _context.next = 5;
                                return _voting2.default.methods.endVote().call();

                            case 5:
                                end = _context.sent;
                                return _context.abrupt('return', { start: start, end: end });

                            case 7:
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

    return VotingIndex;
}(_react.Component);

exports.default = VotingIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwidm90aW5nIiwiTGluayIsIlZvdGluZ0luZGV4IiwicGFkZGluZ1RvcCIsInByb3BzIiwic3RhcnQiLCJlbmQiLCJtZXRob2RzIiwic3RhcnRWb3RlIiwiY2FsbCIsImVuZFZvdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUTs7QUFDUixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFZOzs7Ozs7O0ksQUFFZDs7Ozs7Ozs7Ozs7aUNBTU0sQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQVE7QUFBUjtBQUFBLCtCQUFRLGNBQUEsUUFBSSxPQUFPLEVBQUMsWUFBWixBQUFXLEFBQWE7OEJBQXhCO2dDQUFBO0FBQUE7ZUFBUixBQUFRLEFBQ1IsOERBQUEsY0FBQSxTQUFLLE9BQVUsRUFBQyxZQUFoQixBQUFlLEFBQWM7OEJBQTdCO2dDQUFBLEFBQ0U7QUFERjtnQkFDRyxLQUFBLEFBQUssTUFBTixBQUFZLHdCQUFTLEFBQUMsOEJBQUssT0FBTixBQUFhOzhCQUFiO2dDQUFBLEFBQXlCO0FBQXpCO2FBQUEsa0JBQXlCLEFBQUMseUNBQU8sTUFBUixBQUFlOzhCQUFmO2dDQUFBO0FBQUE7ZUFBOUMsQUFBcUIsQUFBeUIsZ0JBQXVELEtBQUEsQUFBSyxNQUFOLEFBQVksc0JBQU8sQUFBQyw4QkFBSyxPQUFOLEFBQWE7OEJBQWI7Z0NBQUEsQUFBNkI7QUFBN0I7YUFBQSxrQkFBNkIsQUFBQyx5Q0FBTyxNQUFSLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQUFoRCxBQUFtQixBQUE2QixZQUFoRCxtQkFBb0csQUFBQyw4QkFBSyxPQUFOLEFBQWE7OEJBQWI7Z0NBQUEsQUFBd0I7QUFBeEI7YUFBQSxrQkFBd0IsQUFBQyx5Q0FBTyxNQUFSLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQUoxTyxBQUNJLEFBQ0ksQUFDQSxBQUMwTSxBQUF3QixBQUs3Tzs7Ozs7Ozs7Ozs7O3VDQWR1QixpQkFBQSxBQUFPLFFBQVAsQUFBZSxZQUFmLEFBQTJCLEE7O2lDQUF6QztBOzt1Q0FDWSxpQkFBQSxBQUFPLFFBQVAsQUFBZSxVQUFmLEEsQUFBeUI7O2lDQUFyQztBO2lFQUNBLEVBQUMsT0FBRCxPQUFPLEtBQVAsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpZLEEsQUFtQjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3RhbnVqL01lZEJsb2NrcyJ9