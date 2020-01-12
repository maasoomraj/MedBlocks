'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
                    lineNumber: 10
                }
            }, _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('h1', { style: { paddingTop: '25px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'It is health that is real wealth and not pieces of gold and silver'), _react2.default.createElement('div', { style: { paddingTop: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement(_routes.Link, { route: '/register', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: 'massive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'Register')), ' ', _react2.default.createElement(_routes.Link, { route: '/vote/details', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: 'massive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'Patient Login')))));
        }
    }]);

    return VotingIndex;
}(_react.Component);

exports.default = VotingIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwidm90aW5nIiwiTGluayIsIlZvdGluZ0luZGV4IiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUTs7QUFDUixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFZOzs7Ozs7O0ksQUFFZDs7Ozs7Ozs7Ozs7aUNBQ00sQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQVE7QUFBUjtBQUFBLCtCQUFRLGNBQUEsUUFBSSxPQUFPLEVBQUMsWUFBWixBQUFXLEFBQWE7OEJBQXhCO2dDQUFBO0FBQUE7ZUFBUixBQUFRLEFBQ1IsdUZBQUEsY0FBQSxTQUFLLE9BQVUsRUFBQyxZQUFoQixBQUFlLEFBQWM7OEJBQTdCO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBYTs4QkFBYjtnQ0FBQSxBQUF5QjtBQUF6QjsrQkFBeUIsQUFBQyx5Q0FBTyxNQUFSLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQUR6QixBQUNBLEFBQXlCLGNBQWtELHFCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFhOzhCQUFiO2dDQUFBLEFBQTZCO0FBQTdCOytCQUE2QixBQUFDLHlDQUFPLE1BQVIsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBSmhILEFBQ0ksQUFDSSxBQUNBLEFBQzJFLEFBQTZCLEFBS25IOzs7OztBQVhxQixBLEFBYzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3RhbnVqL01lZEJsb2NrcyJ9