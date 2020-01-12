'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3.js');

var _web2 = _interopRequireDefault(_web);

var _Voting = require('./build/Voting.json');

var _Voting2 = _interopRequireDefault(_Voting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Voting2.default.interface), '0x9dF517c2299B2abF97603284252618395fb85Bc3');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3ZvdGluZy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiVm90aW5nIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW1CLEFBQW5COzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2IsS0FBSyxBQUFMLE1BQVcsaUJBQU8sQUFBbEIsQUFEYSxZQUViLEFBRmEsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ2b3RpbmcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdGFudWovTWVkQmxvY2tzIn0=