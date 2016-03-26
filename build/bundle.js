/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var IndexComponent = React.createClass({
		displayName: "IndexComponent",

		clickHandler: function clickHandler() {
			__webpack_require__(3);
		},
		render: function render() {
			document.body.style.visibility = "visible";

			return React.createElement(
				"div",
				{ className: "module-holder" },
				React.createElement(
					"h1",
					{ className: "page-header" },
					"Index"
				),
				React.createElement("br", null),
				React.createElement("br", null),
				React.createElement(
					"p",
					{ className: "well" },
					"Go to ",
					React.createElement(
						"a",
						{ onClick: this.clickHandler },
						"About"
					)
				)
			);
		}
	});

	ReactDOM.render(React.createElement(IndexComponent, null), document.querySelector('main'));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AboutComponent = React.createClass({
		displayName: 'AboutComponent',

		getInitialState: function getInitialState() {
			return { msg: '' };
		},
		clickHandler: function clickHandler() {
			__webpack_require__(5);
		},
		componentDidMount: function componentDidMount() {
			this.setState({ msg: 'Acabou de renderizar este AboutComponent' });
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'module-holder' },
				React.createElement(
					'h1',
					{ className: 'page-header' },
					'About'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'p',
					{ className: 'well' },
					'Go to ',
					React.createElement(
						'a',
						{ onClick: this.clickHandler },
						'Contact'
					)
				),
				React.createElement(
					'p',
					{ className: 'alert alert-success' },
					this.state.msg
				)
			);
		}
	});

	ReactDOM.render(React.createElement(AboutComponent, null), document.querySelector('main'));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var PowerRanger = React.createClass({
		displayName: "PowerRanger",

		render: function render() {
			return React.createElement(
				"li",
				null,
				this.props.fighter.color,
				" Ranger: ",
				this.props.fighter.name
			);
		}
	});

	var ContactComponent = React.createClass({
		displayName: "ContactComponent",

		getInitialState: function getInitialState() {
			return { rangers: null };
		},
		clickHandler: function clickHandler() {
			var powerRangers = [{ color: "Red", name: "Jason" }, { color: "Black", name: "Zack" }, { color: "Blue", name: "Billy" }, { color: "Pink", name: "Kimberly" }, { color: "Yellow", name: "Trini" }],
			    list = [];
			powerRangers.map(function (item) {
				list.push(React.createElement(PowerRanger, { fighter: item }));
			});
			this.setState({ rangers: list });
		},
		render: function render() {
			return React.createElement(
				"div",
				{ className: "module-holder" },
				React.createElement(
					"h1",
					{ className: "page-header" },
					"Contact"
				),
				React.createElement("br", null),
				React.createElement("br", null),
				React.createElement(
					"p",
					{ className: "well" },
					React.createElement(
						"a",
						{ onClick: this.clickHandler },
						"Show me the power rangers real names!"
					)
				),
				React.createElement(
					"ul",
					null,
					this.state.rangers
				)
			);
		}
	});

	ReactDOM.render(React.createElement(ContactComponent, null), document.querySelector('main'));

/***/ }
/******/ ]);