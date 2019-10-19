(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_LayoutManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoc/LayoutManager */ "./hoc/LayoutManager.js");
/* harmony import */ var _sass_global_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/global.sass */ "./sass/global.sass");
/* harmony import */ var _sass_global_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_global_sass__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Layout = function Layout(props) {
  return __jsx(_hoc_LayoutManager__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap",
    rel: "stylesheet"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
    integrity: "sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=",
    crossorigin: "anonymous"
  }), __jsx("title", null, props.pageTitle)), __jsx("div", {
    className: 'page-view ' + props.pageView
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NoSummonerSearched.js":
/*!******************************************!*\
  !*** ./components/NoSummonerSearched.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var NoSummonerSearched = function NoSummonerSearched(props) {
  return __jsx("div", null, __jsx("h1", null, "No Summoner Searched"));
};

/* harmony default export */ __webpack_exports__["default"] = (NoSummonerSearched);

/***/ }),

/***/ "./components/Summoner.js":
/*!********************************!*\
  !*** ./components/Summoner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _summoner_profile_SummonerProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summoner-profile/SummonerProfile */ "./components/summoner-profile/SummonerProfile.js");
/* harmony import */ var _NoSummonerSearched__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoSummonerSearched */ "./components/NoSummonerSearched.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Summoner = function Summoner(props) {
  var summonerProfile = null;

  if (props.summoner !== null) {
    summonerProfile = __jsx(_summoner_profile_SummonerProfile__WEBPACK_IMPORTED_MODULE_1__["default"], {
      summoner: props.summoner
    });
  } else {
    summonerProfile = __jsx(_NoSummonerSearched__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  }

  return __jsx("div", {
    className: "summoner-profile"
  }, summonerProfile);
};

/* harmony default export */ __webpack_exports__["default"] = (Summoner);

/***/ }),

/***/ "./components/SummonerSearch.js":
/*!**************************************!*\
  !*** ./components/SummonerSearch.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_partials_summoner_search_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/partials/summoner-search.sass */ "./sass/partials/summoner-search.sass");
/* harmony import */ var _sass_partials_summoner_search_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_partials_summoner_search_sass__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SummonerSearch = function SummonerSearch(props) {
  return __jsx("div", {
    className: "summonerSearch"
  }, __jsx("form", {
    onSubmit: props.searchSummoner,
    method: "POST"
  }, __jsx("input", {
    id: "summonerNameSearch",
    type: "text",
    name: "summonerName",
    placeholder: "Summoner to search"
  }), __jsx("i", {
    className: "fa fa-search"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SummonerSearch);

/***/ }),

/***/ "./components/summoner-profile/SummonerMatch.js":
/*!******************************************************!*\
  !*** ./components/summoner-profile/SummonerMatch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _champion_data_ChampionData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./champion-data/ChampionData */ "./components/summoner-profile/champion-data/ChampionData.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var SummonerMatch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SummonerMatch, _React$Component);

  function SummonerMatch() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SummonerMatch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SummonerMatch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      personID: null,
      person: null,
      champion: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SummonerMatch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          match = _this$props.match,
          summonerID = _this$props.summonerID;
      var personID = null;
      var champion = null;
      match.participantIdentities.map(function (person) {
        if (person.player.accountId === summonerID) {
          personID = person.participantId;
        }
      });
      var champID = match.participants[personID - 1].championId;
      var championData = this.props.championData;

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.props.championData).forEach(function (champ) {
        var champLoopID = championData[champ].key;

        if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(champLoopID) === _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(champID)) {
          champion = championData[champ];
          return;
        }
      });

      this.setState({
        personID: personID,
        person: match.participants[personID - 1],
        champion: champion
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          match = _this$props2.match,
          summonerID = _this$props2.summonerID;
      var matchWon = false;
      var matchClass = ['match'];
      var championData = null;

      if (this.state.person !== null) {
        match.teams.forEach(function (team) {
          if (team.teamId === _this2.state.person.teamId) {
            if (team.win !== 'Fail') {
              matchWon = true;
              matchClass.push('match-won');
            } else {
              matchClass.push('match-lost');
            }
          }
        });
        championData = __jsx(_champion_data_ChampionData__WEBPACK_IMPORTED_MODULE_10__["default"], {
          champion: this.state.champion
        });
      }

      return __jsx("div", {
        className: matchClass.join(' ')
      }, championData);
    }
  }]);

  return SummonerMatch;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SummonerMatch);

/***/ }),

/***/ "./components/summoner-profile/SummonerMatches.js":
/*!********************************************************!*\
  !*** ./components/summoner-profile/SummonerMatches.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SummonerMatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SummonerMatch */ "./components/summoner-profile/SummonerMatch.js");
/* harmony import */ var _static_ddragon_db_champion_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/ddragon/db/champion.json */ "./static/ddragon/db/champion.json");
var _static_ddragon_db_champion_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/ddragon/db/champion.json */ "./static/ddragon/db/champion.json", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SummonerMatches = function SummonerMatches(props) {
  var matches = props.matches,
      summonerID = props.summonerID;
  return __jsx("div", {
    className: "matches"
  }, matches.map(function (match, key) {
    return __jsx(_SummonerMatch__WEBPACK_IMPORTED_MODULE_1__["default"], {
      championData: _static_ddragon_db_champion_json__WEBPACK_IMPORTED_MODULE_2__.data,
      summonerID: summonerID,
      key: key,
      match: match
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SummonerMatches);

/***/ }),

/***/ "./components/summoner-profile/SummonerProfile.js":
/*!********************************************************!*\
  !*** ./components/summoner-profile/SummonerProfile.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/Wrapper */ "./hoc/Wrapper.js");
/* harmony import */ var _SummonerMatches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SummonerMatches */ "./components/summoner-profile/SummonerMatches.js");
/* harmony import */ var _sass_partials_summoner_profile_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sass/partials/summoner-profile.sass */ "./sass/partials/summoner-profile.sass");
/* harmony import */ var _sass_partials_summoner_profile_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_partials_summoner_profile_sass__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SummonerProfile = function SummonerProfile(props) {
  var _props$summoner = props.summoner,
      name = _props$summoner.name,
      summonerLevel = _props$summoner.summonerLevel,
      accountId = _props$summoner.accountId;
  return __jsx(_hoc_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx("div", {
    className: "summoner-information"
  }, __jsx("h1", null, name), __jsx("p", null, "lvl ", summonerLevel)), __jsx("div", {
    className: "summoner-matches"
  }, __jsx("div", {
    className: "title-block"
  }, __jsx("p", null, "Match History")), __jsx(_SummonerMatches__WEBPACK_IMPORTED_MODULE_2__["default"], {
    summonerID: accountId,
    matches: props.summoner.matches
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SummonerProfile);

/***/ }),

/***/ "./components/summoner-profile/champion-data/ChampionData.js":
/*!*******************************************************************!*\
  !*** ./components/summoner-profile/champion-data/ChampionData.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ChampionData = function ChampionData(props) {
  var champion = props.champion;

  var championImage = __jsx("img", {
    src: "/static/ddragon/img/champion/".concat(champion.image.full)
  });

  return __jsx("div", {
    className: "panel champion"
  }, __jsx("div", {
    className: "champion-image"
  }, championImage), __jsx("div", {
    className: "champion-name"
  }, __jsx("p", null, champion.id)));
};

/* harmony default export */ __webpack_exports__["default"] = (ChampionData);

/***/ }),

/***/ "./hoc/LayoutManager.js":
/*!******************************!*\
  !*** ./hoc/LayoutManager.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LayoutManager = function LayoutManager(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutManager);

/***/ }),

/***/ "./hoc/Wrapper.js":
/*!************************!*\
  !*** ./hoc/Wrapper.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Wrapper = function Wrapper(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/isomorphic-unfetch/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs").default || __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs"));


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fvagrant%2Fapps%2Fleague%2Fpages%2Findex.js!./":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fvagrant%2Fapps%2Fleague%2Fpages%2Findex.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    key: "charSet",
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      key: "viewport",
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new _Set();
  var tags = new _Set();
  var metaTypes = new _Set();
  var metaCategories = {};
  return function (h) {
    if (h.key && typeof h.key !== 'number' && h.key.indexOf('.$') === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
      return true;
    }

    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _Set();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js");

var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new _Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return (
    /*#__PURE__*/
    function (_react_1$Component) {
      _inherits(_class, _react_1$Component);

      _createClass(_class, null, [{
        key: "rewind",
        // Used when server rendering
        value: function rewind() {
          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

        if (isServer) {
          mountedInstances.add(_assertThisInitialized(_this));
          emitChange(_assertThisInitialized(_this));
        }

        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances["delete"](this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return _class;
    }(react_1.Component)
  );
};

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_13346faca0e924a89b24 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_13346faca0e924a89b24 */ "dll-reference dll_13346faca0e924a89b24"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.mjs":
/*!***********************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.mjs.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_SummonerSearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SummonerSearch */ "./components/SummonerSearch.js");
/* harmony import */ var _components_Summoner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Summoner */ "./components/Summoner.js");










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;






var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      currentSummoner: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getSummonerByName",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var summonerNameToGet, apiRequest, apiResponse, statusCode;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  currentSummoner: null
                });

                event.preventDefault();
                summonerNameToGet = document.querySelector("#summonerNameSearch").value;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('/api/user/getSummonerByName', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/js   on',
                    'Content-Type': 'application/json'
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    summonerName: summonerNameToGet
                  })
                });

              case 5:
                apiRequest = _context.sent;
                _context.next = 8;
                return apiRequest.json();

              case 8:
                apiResponse = _context.sent;

                if (apiResponse.summoner.status) {
                  statusCode = apiResponse.summoner.status.status_code;

                  _this.setState({
                    currentSummoner: null
                  });

                  alert(apiResponse.summoner.status.message);
                } else {
                  _this.setState({
                    currentSummoner: apiResponse.summoner
                  });
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var summoner = this.state.currentSummoner;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        pageView: "homepage",
        pageTitle: "Homepage"
      }, __jsx(_components_SummonerSearch__WEBPACK_IMPORTED_MODULE_13__["default"], {
        searchSummoner: function searchSummoner(event) {
          return _this2.getSummonerByName(event);
        }
      }), __jsx(_components_Summoner__WEBPACK_IMPORTED_MODULE_14__["default"], {
        summoner: summoner
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./static/ddragon/db/champion.json":
/*!*****************************************!*\
  !*** ./static/ddragon/db/champion.json ***!
  \*****************************************/
/*! exports provided: type, format, version, data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"champion\",\"format\":\"standAloneComplex\",\"version\":\"9.3.1\",\"data\":{\"Aatrox\":{\"version\":\"9.3.1\",\"id\":\"Aatrox\",\"key\":\"266\",\"name\":\"Aatrox\",\"title\":\"the Darkin Blade\",\"blurb\":\"Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...\",\"info\":{\"attack\":8,\"defense\":4,\"magic\":3,\"difficulty\":4},\"image\":{\"full\":\"Aatrox.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Blood Well\",\"stats\":{\"hp\":580,\"hpperlevel\":80,\"mp\":0,\"mpperlevel\":0,\"movespeed\":345,\"armor\":33,\"armorperlevel\":3.25,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8,\"hpregenperlevel\":0.75,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":5,\"attackspeedperlevel\":2.5,\"attackspeed\":0.651}},\"Ahri\":{\"version\":\"9.3.1\",\"id\":\"Ahri\",\"key\":\"103\",\"name\":\"Ahri\",\"title\":\"the Nine-Tailed Fox\",\"blurb\":\"Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature...\",\"info\":{\"attack\":3,\"defense\":4,\"magic\":8,\"difficulty\":5},\"image\":{\"full\":\"Ahri.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":526,\"hpperlevel\":92,\"mp\":418,\"mpperlevel\":25,\"movespeed\":330,\"armor\":20.88,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":6.5,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53.04,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2,\"attackspeed\":0.668}},\"Akali\":{\"version\":\"9.3.1\",\"id\":\"Akali\",\"key\":\"84\",\"name\":\"Akali\",\"title\":\"the Rogue Assassin\",\"blurb\":\"Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one...\",\"info\":{\"attack\":5,\"defense\":3,\"magic\":8,\"difficulty\":7},\"image\":{\"full\":\"Akali.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Assassin\"],\"partype\":\"Energy\",\"stats\":{\"hp\":550,\"hpperlevel\":85,\"mp\":200,\"mpperlevel\":0,\"movespeed\":345,\"armor\":23,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":6,\"hpregenperlevel\":0.5,\"mpregen\":50,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62.4,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":3.2,\"attackspeed\":0.625}},\"Alistar\":{\"version\":\"9.3.1\",\"id\":\"Alistar\",\"key\":\"12\",\"name\":\"Alistar\",\"title\":\"the Minotaur\",\"blurb\":\"Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly...\",\"info\":{\"attack\":6,\"defense\":9,\"magic\":5,\"difficulty\":7},\"image\":{\"full\":\"Alistar.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":573.36,\"hpperlevel\":106,\"mp\":278.84,\"mpperlevel\":38,\"movespeed\":330,\"armor\":44,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.85,\"mpregen\":8.5,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61.1116,\"attackdamageperlevel\":3.62,\"attackspeedperlevel\":2.125,\"attackspeed\":0.625}},\"Amumu\":{\"version\":\"9.3.1\",\"id\":\"Amumu\",\"key\":\"32\",\"name\":\"Amumu\",\"title\":\"the Sad Mummy\",\"blurb\":\"Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe...\",\"info\":{\"attack\":2,\"defense\":6,\"magic\":8,\"difficulty\":3},\"image\":{\"full\":\"Amumu.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":613.12,\"hpperlevel\":84,\"mp\":287.2,\"mpperlevel\":40,\"movespeed\":335,\"armor\":33,\"armorperlevel\":3.8,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.85,\"mpregen\":7.382,\"mpregenperlevel\":0.525,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53.38,\"attackdamageperlevel\":3.8,\"attackspeedperlevel\":2.18,\"attackspeed\":0.736}},\"Anivia\":{\"version\":\"9.3.1\",\"id\":\"Anivia\",\"key\":\"34\",\"name\":\"Anivia\",\"title\":\"the Cryophoenix\",\"blurb\":\"Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland...\",\"info\":{\"attack\":1,\"defense\":4,\"magic\":10,\"difficulty\":10},\"image\":{\"full\":\"Anivia.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":480,\"hpperlevel\":82,\"mp\":495,\"mpperlevel\":25,\"movespeed\":325,\"armor\":21.22,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":600,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":51.376,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":1.68,\"attackspeed\":0.625}},\"Annie\":{\"version\":\"9.3.1\",\"id\":\"Annie\",\"key\":\"1\",\"name\":\"Annie\",\"title\":\"the Dark Child\",\"blurb\":\"Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable...\",\"info\":{\"attack\":2,\"defense\":3,\"magic\":10,\"difficulty\":6},\"image\":{\"full\":\"Annie.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":524,\"hpperlevel\":88,\"mp\":418,\"mpperlevel\":25,\"movespeed\":335,\"armor\":19.22,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":625,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":50.41,\"attackdamageperlevel\":2.625,\"attackspeedperlevel\":1.36,\"attackspeed\":0.579}},\"Ashe\":{\"version\":\"9.3.1\",\"id\":\"Ashe\",\"key\":\"22\",\"name\":\"Ashe\",\"title\":\"the Frost Archer\",\"blurb\":\"Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice...\",\"info\":{\"attack\":7,\"defense\":3,\"magic\":2,\"difficulty\":4},\"image\":{\"full\":\"Ashe.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":539,\"hpperlevel\":85,\"mp\":280,\"mpperlevel\":32,\"movespeed\":325,\"armor\":26,\"armorperlevel\":3.4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":600,\"hpregen\":3.5,\"hpregenperlevel\":0.55,\"mpregen\":6.972,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":2.96,\"attackspeedperlevel\":3.33,\"attackspeed\":0.658}},\"AurelionSol\":{\"version\":\"9.3.1\",\"id\":\"AurelionSol\",\"key\":\"136\",\"name\":\"Aurelion Sol\",\"title\":\"The Star Forger\",\"blurb\":\"Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his...\",\"info\":{\"attack\":2,\"defense\":3,\"magic\":8,\"difficulty\":7},\"image\":{\"full\":\"AurelionSol.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":510,\"hpperlevel\":92,\"mp\":350,\"mpperlevel\":50,\"movespeed\":325,\"armor\":19,\"armorperlevel\":3.6,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":7,\"hpregenperlevel\":0.6,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":57,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":1.36,\"attackspeed\":0.625}},\"Azir\":{\"version\":\"9.3.1\",\"id\":\"Azir\",\"key\":\"268\",\"name\":\"Azir\",\"title\":\"the Emperor of the Sands\",\"blurb\":\"Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended...\",\"info\":{\"attack\":6,\"defense\":3,\"magic\":8,\"difficulty\":9},\"image\":{\"full\":\"Azir.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":552,\"hpperlevel\":92,\"mp\":438,\"mpperlevel\":21,\"movespeed\":335,\"armor\":19.04,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":7,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":52,\"attackdamageperlevel\":2.8,\"attackspeedperlevel\":1.5,\"attackspeed\":0.625}},\"Bard\":{\"version\":\"9.3.1\",\"id\":\"Bard\",\"key\":\"432\",\"name\":\"Bard\",\"title\":\"the Wandering Caretaker\",\"blurb\":\"A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic...\",\"info\":{\"attack\":4,\"defense\":4,\"magic\":5,\"difficulty\":9},\"image\":{\"full\":\"Bard.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":535,\"hpperlevel\":89,\"mp\":350,\"mpperlevel\":50,\"movespeed\":330,\"armor\":34,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":500,\"hpregen\":7.5,\"hpregenperlevel\":0.55,\"mpregen\":6,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":52,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2,\"attackspeed\":0.625}},\"Blitzcrank\":{\"version\":\"9.3.1\",\"id\":\"Blitzcrank\",\"key\":\"53\",\"name\":\"Blitzcrank\",\"title\":\"the Great Steam Golem\",\"blurb\":\"Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump...\",\"info\":{\"attack\":4,\"defense\":8,\"magic\":5,\"difficulty\":4},\"image\":{\"full\":\"Blitzcrank.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":582.6,\"hpperlevel\":95,\"mp\":267.2,\"mpperlevel\":40,\"movespeed\":325,\"armor\":44,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.75,\"mpregen\":8.5,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61.54,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":1.13,\"attackspeed\":0.625}},\"Brand\":{\"version\":\"9.3.1\",\"id\":\"Brand\",\"key\":\"63\",\"name\":\"Brand\",\"title\":\"the Burning Vengeance\",\"blurb\":\"Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the...\",\"info\":{\"attack\":2,\"defense\":2,\"magic\":9,\"difficulty\":4},\"image\":{\"full\":\"Brand.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":519.68,\"hpperlevel\":88,\"mp\":469,\"mpperlevel\":21,\"movespeed\":340,\"armor\":21.88,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":10.665,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":57.04,\"attackdamageperlevel\":3,\"attackspeedperlevel\":1.36,\"attackspeed\":0.625}},\"Braum\":{\"version\":\"9.3.1\",\"id\":\"Braum\",\"key\":\"201\",\"name\":\"Braum\",\"title\":\"the Heart of the Freljord\",\"blurb\":\"Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into...\",\"info\":{\"attack\":3,\"defense\":9,\"magic\":4,\"difficulty\":3},\"image\":{\"full\":\"Braum.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":540,\"hpperlevel\":87,\"mp\":310.6,\"mpperlevel\":45,\"movespeed\":335,\"armor\":47,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8,\"hpregenperlevel\":1,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55.376,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":3.5,\"attackspeed\":0.644}},\"Caitlyn\":{\"version\":\"9.3.1\",\"id\":\"Caitlyn\",\"key\":\"51\",\"name\":\"Caitlyn\",\"title\":\"the Sheriff of Piltover\",\"blurb\":\"Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a...\",\"info\":{\"attack\":8,\"defense\":2,\"magic\":2,\"difficulty\":6},\"image\":{\"full\":\"Caitlyn.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":481,\"hpperlevel\":91,\"mp\":313.7,\"mpperlevel\":35,\"movespeed\":325,\"armor\":28,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":650,\"hpregen\":3.5,\"hpregenperlevel\":0.55,\"mpregen\":7.4,\"mpregenperlevel\":0.55,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58,\"attackdamageperlevel\":2.88,\"attackspeedperlevel\":4,\"attackspeed\":0.625}},\"Camille\":{\"version\":\"9.3.1\",\"id\":\"Camille\",\"key\":\"164\",\"name\":\"Camille\",\"title\":\"the Steel Shadow\",\"blurb\":\"Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy...\",\"info\":{\"attack\":8,\"defense\":6,\"magic\":3,\"difficulty\":4},\"image\":{\"full\":\"Camille.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":575.6,\"hpperlevel\":85,\"mp\":338.8,\"mpperlevel\":32,\"movespeed\":340,\"armor\":35,\"armorperlevel\":3.8,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.8,\"mpregen\":8.15,\"mpregenperlevel\":0.75,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2.5,\"attackspeed\":0.625}},\"Cassiopeia\":{\"version\":\"9.3.1\",\"id\":\"Cassiopeia\",\"key\":\"69\",\"name\":\"Cassiopeia\",\"title\":\"the Serpent's Embrace\",\"blurb\":\"Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was...\",\"info\":{\"attack\":2,\"defense\":3,\"magic\":9,\"difficulty\":10},\"image\":{\"full\":\"Cassiopeia.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":537,\"hpperlevel\":87,\"mp\":418,\"mpperlevel\":31.5,\"movespeed\":328,\"armor\":25,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.5,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53,\"attackdamageperlevel\":3,\"attackspeedperlevel\":1.5,\"attackspeed\":0.647}},\"Chogath\":{\"version\":\"9.3.1\",\"id\":\"Chogath\",\"key\":\"31\",\"name\":\"Cho'Gath\",\"title\":\"the Terror of the Void\",\"blurb\":\"From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts...\",\"info\":{\"attack\":3,\"defense\":7,\"magic\":7,\"difficulty\":5},\"image\":{\"full\":\"Chogath.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":574.4,\"hpperlevel\":80,\"mp\":272.2,\"mpperlevel\":40,\"movespeed\":345,\"armor\":38,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.85,\"mpregen\":7.206,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":69,\"attackdamageperlevel\":4.2,\"attackspeedperlevel\":1.44,\"attackspeed\":0.625}},\"Corki\":{\"version\":\"9.3.1\",\"id\":\"Corki\",\"key\":\"42\",\"name\":\"Corki\",\"title\":\"the Daring Bombardier\",\"blurb\":\"The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He...\",\"info\":{\"attack\":8,\"defense\":3,\"magic\":6,\"difficulty\":6},\"image\":{\"full\":\"Corki.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":518,\"hpperlevel\":87,\"mp\":350.16,\"mpperlevel\":34,\"movespeed\":325,\"armor\":28,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":7.424,\"mpregenperlevel\":0.55,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.3,\"attackspeed\":0.638}},\"Darius\":{\"version\":\"9.3.1\",\"id\":\"Darius\",\"key\":\"122\",\"name\":\"Darius\",\"title\":\"the Hand of Noxus\",\"blurb\":\"There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that...\",\"info\":{\"attack\":9,\"defense\":5,\"magic\":1,\"difficulty\":2},\"image\":{\"full\":\"Darius.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":582.24,\"hpperlevel\":100,\"mp\":263,\"mpperlevel\":37.5,\"movespeed\":340,\"armor\":39,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":10,\"hpregenperlevel\":0.95,\"mpregen\":6.6,\"mpregenperlevel\":0.35,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":5,\"attackspeedperlevel\":1,\"attackspeed\":0.625}},\"Diana\":{\"version\":\"9.3.1\",\"id\":\"Diana\",\"key\":\"131\",\"name\":\"Diana\",\"title\":\"Scorn of the Moon\",\"blurb\":\"Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued...\",\"info\":{\"attack\":7,\"defense\":6,\"magic\":8,\"difficulty\":4},\"image\":{\"full\":\"Diana.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":594,\"hpperlevel\":95,\"mp\":372,\"mpperlevel\":20,\"movespeed\":345,\"armor\":31,\"armorperlevel\":3.6,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":150,\"hpregen\":7.5,\"hpregenperlevel\":0.85,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53.04,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.25,\"attackspeed\":0.625}},\"Draven\":{\"version\":\"9.3.1\",\"id\":\"Draven\",\"key\":\"119\",\"name\":\"Draven\",\"title\":\"the Glorious Executioner\",\"blurb\":\"In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and...\",\"info\":{\"attack\":9,\"defense\":3,\"magic\":1,\"difficulty\":8},\"image\":{\"full\":\"Draven.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":574,\"hpperlevel\":88,\"mp\":360.56,\"mpperlevel\":39,\"movespeed\":330,\"armor\":29,\"armorperlevel\":3.3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":3.75,\"hpregenperlevel\":0.7,\"mpregen\":8.042,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":3.61,\"attackspeedperlevel\":2.7,\"attackspeed\":0.679}},\"DrMundo\":{\"version\":\"9.3.1\",\"id\":\"DrMundo\",\"key\":\"36\",\"name\":\"Dr. Mundo\",\"title\":\"the Madman of Zaun\",\"blurb\":\"Utterly insane, unrepentantly homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. This monosyllabic monstrosity seems to want nothing more than pain—both the giving of it, and the...\",\"info\":{\"attack\":5,\"defense\":7,\"magic\":6,\"difficulty\":5},\"image\":{\"full\":\"DrMundo.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"None\",\"stats\":{\"hp\":582.52,\"hpperlevel\":89,\"mp\":0,\"mpperlevel\":0,\"movespeed\":345,\"armor\":36,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8,\"hpregenperlevel\":0.75,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61.27,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2.8,\"attackspeed\":0.721}},\"Ekko\":{\"version\":\"9.3.1\",\"id\":\"Ekko\",\"key\":\"245\",\"name\":\"Ekko\",\"title\":\"the Boy Who Shattered Time\",\"blurb\":\"A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this...\",\"info\":{\"attack\":5,\"defense\":3,\"magic\":7,\"difficulty\":8},\"image\":{\"full\":\"Ekko.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":585,\"hpperlevel\":85,\"mp\":280,\"mpperlevel\":50,\"movespeed\":340,\"armor\":32,\"armorperlevel\":3,\"spellblock\":32,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.9,\"mpregen\":7,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.3,\"attackspeed\":0.688}},\"Elise\":{\"version\":\"9.3.1\",\"id\":\"Elise\",\"key\":\"60\",\"name\":\"Elise\",\"title\":\"the Spider Queen\",\"blurb\":\"Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly...\",\"info\":{\"attack\":6,\"defense\":5,\"magic\":7,\"difficulty\":9},\"image\":{\"full\":\"Elise.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":534,\"hpperlevel\":93,\"mp\":324,\"mpperlevel\":50,\"movespeed\":330,\"armor\":27,\"armorperlevel\":3.35,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.6,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3,\"attackspeedperlevel\":1.75,\"attackspeed\":0.625}},\"Evelynn\":{\"version\":\"9.3.1\",\"id\":\"Evelynn\",\"key\":\"28\",\"name\":\"Evelynn\",\"title\":\"Agony's Embrace\",\"blurb\":\"Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim...\",\"info\":{\"attack\":4,\"defense\":2,\"magic\":7,\"difficulty\":10},\"image\":{\"full\":\"Evelynn.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":572,\"hpperlevel\":84,\"mp\":315.6,\"mpperlevel\":42,\"movespeed\":335,\"armor\":37,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.75,\"mpregen\":8.108,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.1,\"attackspeed\":0.667}},\"Ezreal\":{\"version\":\"9.3.1\",\"id\":\"Ezreal\",\"key\":\"81\",\"name\":\"Ezreal\",\"title\":\"the Prodigal Explorer\",\"blurb\":\"A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way...\",\"info\":{\"attack\":7,\"defense\":2,\"magic\":6,\"difficulty\":7},\"image\":{\"full\":\"Ezreal.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":491,\"hpperlevel\":86,\"mp\":360.6,\"mpperlevel\":42,\"movespeed\":325,\"armor\":22,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":4,\"hpregenperlevel\":0.55,\"mpregen\":8.092,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":2.5,\"attackspeedperlevel\":1.5,\"attackspeed\":0.625}},\"Fiddlesticks\":{\"version\":\"9.3.1\",\"id\":\"Fiddlesticks\",\"key\":\"9\",\"name\":\"Fiddlesticks\",\"title\":\"the Harbinger of Doom\",\"blurb\":\"Fiddlesticks is a ghastly, living scarecrow who stalks the darkness, wielding a cruel scythe and preying upon the unwary. Once a lonely man accused of bringing famine to his village, he was tied up and left to starve in his own barren field. Resurrected...\",\"info\":{\"attack\":2,\"defense\":3,\"magic\":9,\"difficulty\":9},\"image\":{\"full\":\"Fiddlesticks.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":524.4,\"hpperlevel\":80,\"mp\":500,\"mpperlevel\":28,\"movespeed\":335,\"armor\":30,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":480,\"hpregen\":5.5,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":48.36,\"attackdamageperlevel\":2.625,\"attackspeedperlevel\":2.11,\"attackspeed\":0.625}},\"Fiora\":{\"version\":\"9.3.1\",\"id\":\"Fiora\",\"key\":\"114\",\"name\":\"Fiora\",\"title\":\"the Grand Duelist\",\"blurb\":\"The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in...\",\"info\":{\"attack\":10,\"defense\":4,\"magic\":2,\"difficulty\":3},\"image\":{\"full\":\"Fiora.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":550,\"hpperlevel\":85,\"mp\":300,\"mpperlevel\":40,\"movespeed\":345,\"armor\":33,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":150,\"hpregen\":8.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":3.2,\"attackspeed\":0.69}},\"Fizz\":{\"version\":\"9.3.1\",\"id\":\"Fizz\",\"key\":\"105\",\"name\":\"Fizz\",\"title\":\"the Tidal Trickster\",\"blurb\":\"Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales...\",\"info\":{\"attack\":6,\"defense\":4,\"magic\":7,\"difficulty\":6},\"image\":{\"full\":\"Fizz.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":570,\"hpperlevel\":98,\"mp\":317.2,\"mpperlevel\":37,\"movespeed\":335,\"armor\":22.412,\"armorperlevel\":3.4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8,\"hpregenperlevel\":0.7,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58.04,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.1,\"attackspeed\":0.658}},\"Galio\":{\"version\":\"9.3.1\",\"id\":\"Galio\",\"key\":\"3\",\"name\":\"Galio\",\"title\":\"the Colossus\",\"blurb\":\"Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the...\",\"info\":{\"attack\":1,\"defense\":10,\"magic\":6,\"difficulty\":5},\"image\":{\"full\":\"Galio.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":562,\"hpperlevel\":112,\"mp\":500,\"mpperlevel\":20,\"movespeed\":335,\"armor\":24,\"armorperlevel\":3.5,\"spellblock\":32,\"spellblockperlevel\":1.25,\"attackrange\":150,\"hpregen\":8,\"hpregenperlevel\":0.8,\"mpregen\":9.335,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":59,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":1.5,\"attackspeed\":0.625}},\"Gangplank\":{\"version\":\"9.3.1\",\"id\":\"Gangplank\",\"key\":\"41\",\"name\":\"Gangplank\",\"title\":\"the Saltwater Scourge\",\"blurb\":\"As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once, he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous. Gangplank would see...\",\"info\":{\"attack\":7,\"defense\":6,\"magic\":4,\"difficulty\":9},\"image\":{\"full\":\"Gangplank.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":540,\"hpperlevel\":82,\"mp\":282,\"mpperlevel\":40,\"movespeed\":345,\"armor\":35,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":6,\"hpregenperlevel\":0.6,\"mpregen\":7.5,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.2,\"attackspeed\":0.658}},\"Garen\":{\"version\":\"9.3.1\",\"id\":\"Garen\",\"key\":\"86\",\"name\":\"Garen\",\"title\":\"The Might of Demacia\",\"blurb\":\"A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its...\",\"info\":{\"attack\":7,\"defense\":7,\"magic\":1,\"difficulty\":5},\"image\":{\"full\":\"Garen.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"None\",\"stats\":{\"hp\":616.28,\"hpperlevel\":84.25,\"mp\":0,\"mpperlevel\":0,\"movespeed\":340,\"armor\":36,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8,\"hpregenperlevel\":0.5,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":66,\"attackdamageperlevel\":4.5,\"attackspeedperlevel\":2.9,\"attackspeed\":0.625}},\"Gnar\":{\"version\":\"9.3.1\",\"id\":\"Gnar\",\"key\":\"150\",\"name\":\"Gnar\",\"title\":\"the Missing Link\",\"blurb\":\"Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed...\",\"info\":{\"attack\":6,\"defense\":5,\"magic\":5,\"difficulty\":8},\"image\":{\"full\":\"Gnar.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Rage\",\"stats\":{\"hp\":510,\"hpperlevel\":65,\"mp\":100,\"mpperlevel\":0,\"movespeed\":325,\"armor\":32,\"armorperlevel\":2.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":175,\"hpregen\":4.5,\"hpregenperlevel\":1.75,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":59,\"attackdamageperlevel\":3,\"attackspeedperlevel\":6,\"attackspeed\":0.625}},\"Gragas\":{\"version\":\"9.3.1\",\"id\":\"Gragas\",\"key\":\"79\",\"name\":\"Gragas\",\"title\":\"the Rabble Rouser\",\"blurb\":\"Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster on his own quest for the perfect pint of ale. Hailing from parts unknown, he now searches for rare ingredients among the unblemished wastes of the Freljord, trying each recipe as he...\",\"info\":{\"attack\":4,\"defense\":7,\"magic\":6,\"difficulty\":5},\"image\":{\"full\":\"Gragas.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":583.52,\"hpperlevel\":89,\"mp\":400,\"mpperlevel\":47,\"movespeed\":330,\"armor\":35,\"armorperlevel\":3.6,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":5.5,\"hpregenperlevel\":0.5,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61.38,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2.05,\"attackspeed\":0.675}},\"Graves\":{\"version\":\"9.3.1\",\"id\":\"Graves\",\"key\":\"104\",\"name\":\"Graves\",\"title\":\"the Outlaw\",\"blurb\":\"Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":3,\"difficulty\":3},\"image\":{\"full\":\"Graves.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":551.12,\"hpperlevel\":92,\"mp\":322.2,\"mpperlevel\":40,\"movespeed\":340,\"armor\":33,\"armorperlevel\":3.4,\"spellblock\":30,\"spellblockperlevel\":1,\"attackrange\":425,\"hpregen\":8,\"hpregenperlevel\":0.7,\"mpregen\":7.9,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":63,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.6,\"attackspeed\":0.475}},\"Hecarim\":{\"version\":\"9.3.1\",\"id\":\"Hecarim\",\"key\":\"120\",\"name\":\"Hecarim\",\"title\":\"the Shadow of War\",\"blurb\":\"Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was obliterated by the destructive energies of the Ruination, along with all his...\",\"info\":{\"attack\":8,\"defense\":6,\"magic\":4,\"difficulty\":6},\"image\":{\"full\":\"Hecarim.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":580,\"hpperlevel\":90,\"mp\":277.2,\"mpperlevel\":40,\"movespeed\":345,\"armor\":36,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":7,\"hpregenperlevel\":0.75,\"mpregen\":6.5,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":66,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":2.5,\"attackspeed\":0.67}},\"Heimerdinger\":{\"version\":\"9.3.1\",\"id\":\"Heimerdinger\",\"key\":\"74\",\"name\":\"Heimerdinger\",\"title\":\"the Revered Inventor\",\"blurb\":\"A brilliant yet eccentric yordle scientist, Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors Piltover has ever known. Relentless in his work to the point of neurotic obsession, he thrives on answering the universe's...\",\"info\":{\"attack\":2,\"defense\":6,\"magic\":8,\"difficulty\":8},\"image\":{\"full\":\"Heimerdinger.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":488,\"hpperlevel\":87,\"mp\":385,\"mpperlevel\":20,\"movespeed\":340,\"armor\":19.04,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":7,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55.536,\"attackdamageperlevel\":2.7,\"attackspeedperlevel\":1.36,\"attackspeed\":0.625}},\"Illaoi\":{\"version\":\"9.3.1\",\"id\":\"Illaoi\",\"key\":\"420\",\"name\":\"Illaoi\",\"title\":\"the Kraken Priestess\",\"blurb\":\"Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer...\",\"info\":{\"attack\":8,\"defense\":6,\"magic\":3,\"difficulty\":4},\"image\":{\"full\":\"Illaoi.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":585.6,\"hpperlevel\":95,\"mp\":300,\"mpperlevel\":40,\"movespeed\":340,\"armor\":35,\"armorperlevel\":3.8,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":9.5,\"hpregenperlevel\":0.8,\"mpregen\":7.5,\"mpregenperlevel\":0.75,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":5,\"attackspeedperlevel\":2.5,\"attackspeed\":0.571}},\"Irelia\":{\"version\":\"9.3.1\",\"id\":\"Irelia\",\"key\":\"39\",\"name\":\"Irelia\",\"title\":\"the Blade Dancer\",\"blurb\":\"The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of...\",\"info\":{\"attack\":7,\"defense\":4,\"magic\":5,\"difficulty\":5},\"image\":{\"full\":\"Irelia.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":580,\"hpperlevel\":95,\"mp\":350,\"mpperlevel\":30,\"movespeed\":335,\"armor\":36,\"armorperlevel\":3,\"spellblock\":32,\"spellblockperlevel\":1.25,\"attackrange\":200,\"hpregen\":8.5,\"hpregenperlevel\":0.85,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":63,\"attackdamageperlevel\":4,\"attackspeedperlevel\":2.5,\"attackspeed\":0.656}},\"Ivern\":{\"version\":\"9.3.1\",\"id\":\"Ivern\",\"key\":\"427\",\"name\":\"Ivern\",\"title\":\"the Green Father\",\"blurb\":\"Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow...\",\"info\":{\"attack\":3,\"defense\":5,\"magic\":7,\"difficulty\":7},\"image\":{\"full\":\"Ivern.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":585,\"hpperlevel\":95,\"mp\":450,\"mpperlevel\":60,\"movespeed\":330,\"armor\":27,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7,\"hpregenperlevel\":0.85,\"mpregen\":6,\"mpregenperlevel\":0.75,\"crit\":0,\"critperlevel\":0,\"attackdamage\":50,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.4,\"attackspeed\":0.644}},\"Janna\":{\"version\":\"9.3.1\",\"id\":\"Janna\",\"key\":\"40\",\"name\":\"Janna\",\"title\":\"the Storm's Fury\",\"blurb\":\"Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was brought into existence by the pleas of Runeterra's sailors who prayed for fair winds as they navigated...\",\"info\":{\"attack\":3,\"defense\":5,\"magic\":7,\"difficulty\":7},\"image\":{\"full\":\"Janna.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":500,\"hpperlevel\":70,\"mp\":350,\"mpperlevel\":64,\"movespeed\":315,\"armor\":28,\"armorperlevel\":3.8,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":11.5,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":46,\"attackdamageperlevel\":1.5,\"attackspeedperlevel\":2.95,\"attackspeed\":0.625}},\"JarvanIV\":{\"version\":\"9.3.1\",\"id\":\"JarvanIV\",\"key\":\"59\",\"name\":\"Jarvan IV\",\"title\":\"the Exemplar of Demacia\",\"blurb\":\"Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front...\",\"info\":{\"attack\":6,\"defense\":8,\"magic\":3,\"difficulty\":5},\"image\":{\"full\":\"JarvanIV.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":571.2,\"hpperlevel\":90,\"mp\":302.2,\"mpperlevel\":40,\"movespeed\":340,\"armor\":34,\"armorperlevel\":3.6,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8,\"hpregenperlevel\":0.7,\"mpregen\":6.756,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":3.4,\"attackspeedperlevel\":2.5,\"attackspeed\":0.658}},\"Jax\":{\"version\":\"9.3.1\",\"id\":\"Jax\",\"key\":\"24\",\"name\":\"Jax\",\"title\":\"Grandmaster at Arms\",\"blurb\":\"Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained...\",\"info\":{\"attack\":7,\"defense\":5,\"magic\":7,\"difficulty\":5},\"image\":{\"full\":\"Jax.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":592.8,\"hpperlevel\":85,\"mp\":338.8,\"mpperlevel\":32,\"movespeed\":350,\"armor\":36,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.55,\"mpregen\":7.576,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3.375,\"attackspeedperlevel\":3.4,\"attackspeed\":0.638}},\"Jayce\":{\"version\":\"9.3.1\",\"id\":\"Jayce\",\"key\":\"126\",\"name\":\"Jayce\",\"title\":\"the Defender of Tomorrow\",\"blurb\":\"Jayce is a brilliant inventor who has pledged his life to the defense of Piltover and its unyielding pursuit of progress. With his transforming hextech hammer in hand, Jayce uses his strength, courage, and considerable intelligence to protect his...\",\"info\":{\"attack\":8,\"defense\":4,\"magic\":3,\"difficulty\":7},\"image\":{\"full\":\"Jayce.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":576,\"hpperlevel\":95,\"mp\":357.2,\"mpperlevel\":37,\"movespeed\":335,\"armor\":27,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":125,\"hpregen\":7.5,\"hpregenperlevel\":0.8,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":3,\"attackspeed\":0.658}},\"Jhin\":{\"version\":\"9.3.1\",\"id\":\"Jhin\",\"key\":\"202\",\"name\":\"Jhin\",\"title\":\"the Virtuoso\",\"blurb\":\"Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin...\",\"info\":{\"attack\":10,\"defense\":2,\"magic\":6,\"difficulty\":6},\"image\":{\"full\":\"Jhin.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":556,\"hpperlevel\":91,\"mp\":300,\"mpperlevel\":50,\"movespeed\":330,\"armor\":24,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":3.75,\"hpregenperlevel\":0.55,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":57,\"attackdamageperlevel\":4.7,\"attackspeedperlevel\":0,\"attackspeed\":0.625}},\"Jinx\":{\"version\":\"9.3.1\",\"id\":\"Jinx\",\"key\":\"222\",\"name\":\"Jinx\",\"title\":\"the Loose Cannon\",\"blurb\":\"A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx...\",\"info\":{\"attack\":9,\"defense\":2,\"magic\":4,\"difficulty\":6},\"image\":{\"full\":\"Jinx.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":581,\"hpperlevel\":84,\"mp\":245,\"mpperlevel\":45,\"movespeed\":325,\"armor\":28,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":3.75,\"hpregenperlevel\":0.5,\"mpregen\":6.7,\"mpregenperlevel\":1,\"crit\":0,\"critperlevel\":0,\"attackdamage\":57,\"attackdamageperlevel\":3.4,\"attackspeedperlevel\":1,\"attackspeed\":0.625}},\"Kaisa\":{\"version\":\"9.3.1\",\"id\":\"Kaisa\",\"key\":\"145\",\"name\":\"Kai'Sa\",\"title\":\"Daughter of the Void\",\"blurb\":\"Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":3,\"difficulty\":6},\"image\":{\"full\":\"Kaisa.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":571,\"hpperlevel\":86,\"mp\":344.88,\"mpperlevel\":38,\"movespeed\":335,\"armor\":28,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":3.5,\"hpregenperlevel\":0.55,\"mpregen\":8.2,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":59,\"attackdamageperlevel\":1.7,\"attackspeedperlevel\":1.8,\"attackspeed\":0.644}},\"Kalista\":{\"version\":\"9.3.1\",\"id\":\"Kalista\",\"key\":\"429\",\"name\":\"Kalista\",\"title\":\"the Spear of Vengeance\",\"blurb\":\"A specter of wrath and retribution, Kalista is the undying spirit of vengeance, an armored nightmare summoned from the Shadow Isles to hunt deceivers and traitors. The betrayed may cry out in blood to be avenged, but Kalista only answers those willing...\",\"info\":{\"attack\":8,\"defense\":2,\"magic\":4,\"difficulty\":7},\"image\":{\"full\":\"Kalista.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":534,\"hpperlevel\":89,\"mp\":231.8,\"mpperlevel\":35,\"movespeed\":325,\"armor\":23,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":3.75,\"hpregenperlevel\":0.55,\"mpregen\":6.3,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":67,\"attackdamageperlevel\":4,\"attackspeedperlevel\":4,\"attackspeed\":0.694}},\"Karma\":{\"version\":\"9.3.1\",\"id\":\"Karma\",\"key\":\"43\",\"name\":\"Karma\",\"title\":\"the Enlightened One\",\"blurb\":\"No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can...\",\"info\":{\"attack\":1,\"defense\":7,\"magic\":8,\"difficulty\":5},\"image\":{\"full\":\"Karma.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":534,\"hpperlevel\":95,\"mp\":374,\"mpperlevel\":50,\"movespeed\":335,\"armor\":26,\"armorperlevel\":3.8,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":11.5,\"mpregenperlevel\":0.5,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53.544,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":2.3,\"attackspeed\":0.625}},\"Karthus\":{\"version\":\"9.3.1\",\"id\":\"Karthus\",\"key\":\"30\",\"name\":\"Karthus\",\"title\":\"the Deathsinger\",\"blurb\":\"The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath, but Karthus sees only beauty and purity in its embrace, a perfect union of...\",\"info\":{\"attack\":2,\"defense\":2,\"magic\":10,\"difficulty\":7},\"image\":{\"full\":\"Karthus.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":528,\"hpperlevel\":87,\"mp\":467,\"mpperlevel\":30.5,\"movespeed\":335,\"armor\":20.88,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":450,\"hpregen\":6.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":45.66,\"attackdamageperlevel\":3.25,\"attackspeedperlevel\":2.11,\"attackspeed\":0.625}},\"Kassadin\":{\"version\":\"9.3.1\",\"id\":\"Kassadin\",\"key\":\"38\",\"name\":\"Kassadin\",\"title\":\"the Void Walker\",\"blurb\":\"Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered. A widely traveled Shuriman guide and adventurer, he had chosen to raise a family among the peaceful southern tribes—until the day his village was...\",\"info\":{\"attack\":3,\"defense\":5,\"magic\":8,\"difficulty\":8},\"image\":{\"full\":\"Kassadin.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":576,\"hpperlevel\":90,\"mp\":397.6,\"mpperlevel\":67,\"movespeed\":340,\"armor\":19,\"armorperlevel\":2.8,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":150,\"hpregen\":6,\"hpregenperlevel\":0.5,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58.852,\"attackdamageperlevel\":3.9,\"attackspeedperlevel\":3.7,\"attackspeed\":0.64}},\"Katarina\":{\"version\":\"9.3.1\",\"id\":\"Katarina\",\"key\":\"55\",\"name\":\"Katarina\",\"title\":\"the Sinister Blade\",\"blurb\":\"Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven...\",\"info\":{\"attack\":4,\"defense\":3,\"magic\":9,\"difficulty\":8},\"image\":{\"full\":\"Katarina.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Mage\"],\"partype\":\"None\",\"stats\":{\"hp\":602,\"hpperlevel\":94,\"mp\":0,\"mpperlevel\":0,\"movespeed\":340,\"armor\":27.88,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7.5,\"hpregenperlevel\":0.7,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":2.74,\"attackspeed\":0.658}},\"Kayle\":{\"version\":\"9.3.1\",\"id\":\"Kayle\",\"key\":\"10\",\"name\":\"Kayle\",\"title\":\"The Judicator\",\"blurb\":\"A great hero and the strongest among her kind, Kayle is an angelic warrior dedicated to purging those beyond redemption. After conflict divided her people, she took up her enchanted armor and flaming sword in the name of order, disowning her very flesh...\",\"info\":{\"attack\":6,\"defense\":6,\"magic\":7,\"difficulty\":7},\"image\":{\"full\":\"Kayle.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":586,\"hpperlevel\":105,\"mp\":375,\"mpperlevel\":25,\"movespeed\":335,\"armor\":26.88,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.75,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":51,\"attackdamageperlevel\":2.2,\"attackspeedperlevel\":2.2,\"attackspeed\":0.702}},\"Kayn\":{\"version\":\"9.3.1\",\"id\":\"Kayn\",\"key\":\"141\",\"name\":\"Kayn\",\"title\":\"the Shadow Reaper\",\"blurb\":\"A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of...\",\"info\":{\"attack\":10,\"defense\":6,\"magic\":1,\"difficulty\":8},\"image\":{\"full\":\"Kayn.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":585,\"hpperlevel\":85,\"mp\":410,\"mpperlevel\":50,\"movespeed\":340,\"armor\":38,\"armorperlevel\":3.3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8,\"hpregenperlevel\":0.75,\"mpregen\":11.5,\"mpregenperlevel\":0.95,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":2.7,\"attackspeed\":0.669}},\"Kennen\":{\"version\":\"9.3.1\",\"id\":\"Kennen\",\"key\":\"85\",\"name\":\"Kennen\",\"title\":\"the Heart of the Tempest\",\"blurb\":\"More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his...\",\"info\":{\"attack\":6,\"defense\":4,\"magic\":7,\"difficulty\":4},\"image\":{\"full\":\"Kennen.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Marksman\"],\"partype\":\"Energy\",\"stats\":{\"hp\":541,\"hpperlevel\":84,\"mp\":200,\"mpperlevel\":0,\"movespeed\":335,\"armor\":29,\"armorperlevel\":3.75,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.65,\"mpregen\":50,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":50.544,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":3.4,\"attackspeed\":0.69}},\"Khazix\":{\"version\":\"9.3.1\",\"id\":\"Khazix\",\"key\":\"121\",\"name\":\"Kha'Zix\",\"title\":\"the Voidreaver\",\"blurb\":\"The Void grows, and the Void adapts—in none of its myriad spawn are these truths more apparent than Kha'Zix. Evolution drives the core of this mutating horror, born to survive and to slay the strong. Where it struggles to do so, it grows new, more...\",\"info\":{\"attack\":9,\"defense\":4,\"magic\":3,\"difficulty\":6},\"image\":{\"full\":\"Khazix.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":572.8,\"hpperlevel\":85,\"mp\":327.2,\"mpperlevel\":40,\"movespeed\":350,\"armor\":36,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7.5,\"hpregenperlevel\":0.75,\"mpregen\":7.59,\"mpregenperlevel\":0.5,\"crit\":0,\"critperlevel\":0,\"attackdamage\":63,\"attackdamageperlevel\":3.1,\"attackspeedperlevel\":2.7,\"attackspeed\":0.668}},\"Kindred\":{\"version\":\"9.3.1\",\"id\":\"Kindred\",\"key\":\"203\",\"name\":\"Kindred\",\"title\":\"The Eternal Hunters\",\"blurb\":\"Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his...\",\"info\":{\"attack\":8,\"defense\":2,\"magic\":2,\"difficulty\":4},\"image\":{\"full\":\"Kindred.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":540,\"hpperlevel\":85,\"mp\":300,\"mpperlevel\":35,\"movespeed\":325,\"armor\":29,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":500,\"hpregen\":7,\"hpregenperlevel\":0.55,\"mpregen\":6.972,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":65,\"attackdamageperlevel\":2.26,\"attackspeedperlevel\":3.5,\"attackspeed\":0.625}},\"Kled\":{\"version\":\"9.3.1\",\"id\":\"Kled\",\"key\":\"240\",\"name\":\"Kled\",\"title\":\"the Cantankerous Cavalier\",\"blurb\":\"A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the...\",\"info\":{\"attack\":8,\"defense\":2,\"magic\":2,\"difficulty\":7},\"image\":{\"full\":\"Kled.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Courage\",\"stats\":{\"hp\":340,\"hpperlevel\":70,\"mp\":100,\"mpperlevel\":0,\"movespeed\":345,\"armor\":35,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":6,\"hpregenperlevel\":0.75,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":65,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":3.5,\"attackspeed\":0.625}},\"KogMaw\":{\"version\":\"9.3.1\",\"id\":\"KogMaw\",\"key\":\"96\",\"name\":\"Kog'Maw\",\"title\":\"the Mouth of the Abyss\",\"blurb\":\"Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it...\",\"info\":{\"attack\":8,\"defense\":2,\"magic\":5,\"difficulty\":6},\"image\":{\"full\":\"KogMaw.png\",\"sprite\":\"champion1.png\",\"group\":\"champion\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":534,\"hpperlevel\":88,\"mp\":322.2,\"mpperlevel\":40,\"movespeed\":330,\"armor\":24,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":500,\"hpregen\":3.75,\"hpregenperlevel\":0.55,\"mpregen\":8.676,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":3.11,\"attackspeedperlevel\":2.65,\"attackspeed\":0.665}},\"Leblanc\":{\"version\":\"9.3.1\",\"id\":\"Leblanc\",\"key\":\"7\",\"name\":\"LeBlanc\",\"title\":\"the Deceiver\",\"blurb\":\"Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone...\",\"info\":{\"attack\":1,\"defense\":4,\"magic\":10,\"difficulty\":9},\"image\":{\"full\":\"Leblanc.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":528,\"hpperlevel\":92,\"mp\":334,\"mpperlevel\":50,\"movespeed\":340,\"armor\":21.88,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":7.5,\"hpregenperlevel\":0.55,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":54.88,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":1.4,\"attackspeed\":0.625}},\"LeeSin\":{\"version\":\"9.3.1\",\"id\":\"LeeSin\",\"key\":\"64\",\"name\":\"Lee Sin\",\"title\":\"the Blind Monk\",\"blurb\":\"A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":3,\"difficulty\":6},\"image\":{\"full\":\"LeeSin.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Energy\",\"stats\":{\"hp\":570.8,\"hpperlevel\":85,\"mp\":200,\"mpperlevel\":0,\"movespeed\":345,\"armor\":33,\"armorperlevel\":3.7,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7.5,\"hpregenperlevel\":0.7,\"mpregen\":50,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":69.18,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":3,\"attackspeed\":0.651}},\"Leona\":{\"version\":\"9.3.1\",\"id\":\"Leona\",\"key\":\"89\",\"name\":\"Leona\",\"title\":\"the Radiant Dawn\",\"blurb\":\"Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her...\",\"info\":{\"attack\":4,\"defense\":8,\"magic\":3,\"difficulty\":4},\"image\":{\"full\":\"Leona.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":576.16,\"hpperlevel\":87,\"mp\":302.2,\"mpperlevel\":40,\"movespeed\":335,\"armor\":47,\"armorperlevel\":3.6,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.85,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60.04,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.9,\"attackspeed\":0.625}},\"Lissandra\":{\"version\":\"9.3.1\",\"id\":\"Lissandra\",\"key\":\"127\",\"name\":\"Lissandra\",\"title\":\"the Ice Witch\",\"blurb\":\"Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The...\",\"info\":{\"attack\":2,\"defense\":5,\"magic\":8,\"difficulty\":6},\"image\":{\"full\":\"Lissandra.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":518,\"hpperlevel\":87,\"mp\":475,\"mpperlevel\":30,\"movespeed\":325,\"armor\":20.216,\"armorperlevel\":3.7,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":7,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53,\"attackdamageperlevel\":2.7,\"attackspeedperlevel\":1.36,\"attackspeed\":0.656}},\"Lucian\":{\"version\":\"9.3.1\",\"id\":\"Lucian\",\"key\":\"236\",\"name\":\"Lucian\",\"title\":\"the Purifier\",\"blurb\":\"Once a Sentinel of Light, Lucian is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. Consumed by the need to avenge his dead wife, he will not rest until Thresh, the specter who holds her...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":3,\"difficulty\":6},\"image\":{\"full\":\"Lucian.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":571,\"hpperlevel\":86,\"mp\":348.88,\"mpperlevel\":38,\"movespeed\":335,\"armor\":28,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":500,\"hpregen\":3.75,\"hpregenperlevel\":0.65,\"mpregen\":8.176,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":2.75,\"attackspeedperlevel\":3.3,\"attackspeed\":0.638}},\"Lulu\":{\"version\":\"9.3.1\",\"id\":\"Lulu\",\"key\":\"117\",\"name\":\"Lulu\",\"title\":\"the Fae Sorceress\",\"blurb\":\"The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this...\",\"info\":{\"attack\":4,\"defense\":5,\"magic\":7,\"difficulty\":5},\"image\":{\"full\":\"Lulu.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":525,\"hpperlevel\":74,\"mp\":350,\"mpperlevel\":55,\"movespeed\":330,\"armor\":28.22,\"armorperlevel\":3.7,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":6,\"hpregenperlevel\":0.6,\"mpregen\":11,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":46.368,\"attackdamageperlevel\":2.6,\"attackspeedperlevel\":2.25,\"attackspeed\":0.625}},\"Lux\":{\"version\":\"9.3.1\",\"id\":\"Lux\",\"key\":\"99\",\"name\":\"Lux\",\"title\":\"the Lady of Luminosity\",\"blurb\":\"Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve...\",\"info\":{\"attack\":2,\"defense\":4,\"magic\":9,\"difficulty\":5},\"image\":{\"full\":\"Lux.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":490,\"hpperlevel\":85,\"mp\":480,\"mpperlevel\":23.5,\"movespeed\":330,\"armor\":18.72,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53.54,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":1,\"attackspeed\":0.669}},\"Malphite\":{\"version\":\"9.3.1\",\"id\":\"Malphite\",\"key\":\"54\",\"name\":\"Malphite\",\"title\":\"Shard of the Monolith\",\"blurb\":\"A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his...\",\"info\":{\"attack\":5,\"defense\":9,\"magic\":7,\"difficulty\":2},\"image\":{\"full\":\"Malphite.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":574.2,\"hpperlevel\":90,\"mp\":282.2,\"mpperlevel\":40,\"movespeed\":335,\"armor\":37,\"armorperlevel\":3.75,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7,\"hpregenperlevel\":0.55,\"mpregen\":7.324,\"mpregenperlevel\":0.55,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61.97,\"attackdamageperlevel\":4,\"attackspeedperlevel\":3.4,\"attackspeed\":0.736}},\"Malzahar\":{\"version\":\"9.3.1\",\"id\":\"Malzahar\",\"key\":\"90\",\"name\":\"Malzahar\",\"title\":\"the Prophet of the Void\",\"blurb\":\"A zealous seer dedicated to the unification of all life, Malzahar truly believes the newly emergent Void to be the path to Runeterra's salvation. In the desert wastes of Shurima, he followed the voices that whispered in his mind, all the way to ancient...\",\"info\":{\"attack\":2,\"defense\":2,\"magic\":9,\"difficulty\":6},\"image\":{\"full\":\"Malzahar.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":537,\"hpperlevel\":87,\"mp\":375,\"mpperlevel\":27.5,\"movespeed\":335,\"armor\":18,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":500,\"hpregen\":6,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3,\"attackspeedperlevel\":1.5,\"attackspeed\":0.625}},\"Maokai\":{\"version\":\"9.3.1\",\"id\":\"Maokai\",\"key\":\"57\",\"name\":\"Maokai\",\"title\":\"the Twisted Treant\",\"blurb\":\"Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his...\",\"info\":{\"attack\":3,\"defense\":8,\"magic\":6,\"difficulty\":3},\"image\":{\"full\":\"Maokai.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":565,\"hpperlevel\":95,\"mp\":377.28,\"mpperlevel\":43,\"movespeed\":335,\"armor\":39,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":5,\"hpregenperlevel\":0.75,\"mpregen\":7.2,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":63.54,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":2.125,\"attackspeed\":0.8}},\"MasterYi\":{\"version\":\"9.3.1\",\"id\":\"MasterYi\",\"key\":\"11\",\"name\":\"Master Yi\",\"title\":\"the Wuju Bladesman\",\"blurb\":\"Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As one of...\",\"info\":{\"attack\":10,\"defense\":4,\"magic\":2,\"difficulty\":4},\"image\":{\"full\":\"MasterYi.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":598.56,\"hpperlevel\":92,\"mp\":250.56,\"mpperlevel\":42,\"movespeed\":355,\"armor\":33,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7.5,\"hpregenperlevel\":0.65,\"mpregen\":7.256,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":66,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2,\"attackspeed\":0.733}},\"MissFortune\":{\"version\":\"9.3.1\",\"id\":\"MissFortune\",\"key\":\"21\",\"name\":\"Miss Fortune\",\"title\":\"the Bounty Hunter\",\"blurb\":\"A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally...\",\"info\":{\"attack\":8,\"defense\":2,\"magic\":5,\"difficulty\":1},\"image\":{\"full\":\"MissFortune.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":541,\"hpperlevel\":91,\"mp\":325.84,\"mpperlevel\":35,\"movespeed\":325,\"armor\":28,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":3.75,\"hpregenperlevel\":0.65,\"mpregen\":8.042,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":50,\"attackdamageperlevel\":2.7,\"attackspeedperlevel\":3,\"attackspeed\":0.656}},\"MonkeyKing\":{\"version\":\"9.3.1\",\"id\":\"MonkeyKing\",\"key\":\"62\",\"name\":\"Wukong\",\"title\":\"the Monkey King\",\"blurb\":\"Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":2,\"difficulty\":3},\"image\":{\"full\":\"MonkeyKing.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":577.8,\"hpperlevel\":85,\"mp\":265.84,\"mpperlevel\":38,\"movespeed\":345,\"armor\":34,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":6,\"hpregenperlevel\":0.65,\"mpregen\":8.042,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":4,\"attackspeedperlevel\":3,\"attackspeed\":0.711}},\"Mordekaiser\":{\"version\":\"9.3.1\",\"id\":\"Mordekaiser\",\"key\":\"82\",\"name\":\"Mordekaiser\",\"title\":\"the Iron Revenant\",\"blurb\":\"The baleful revenant Mordekaiser is among the most terrifying and hateful spirits haunting the Shadow Isles. He has existed for countless centuries, shielded from true death by necromantic sorcery and the force of his own dark will. Those who dare face...\",\"info\":{\"attack\":4,\"defense\":6,\"magic\":7,\"difficulty\":4},\"image\":{\"full\":\"Mordekaiser.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\"],\"partype\":\"Shield\",\"stats\":{\"hp\":530,\"hpperlevel\":78,\"mp\":0,\"mpperlevel\":0,\"movespeed\":325,\"armor\":25,\"armorperlevel\":3.75,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":4,\"hpregenperlevel\":0.3,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":5,\"attackspeedperlevel\":2.2,\"attackspeed\":0.601}},\"Morgana\":{\"version\":\"9.3.1\",\"id\":\"Morgana\",\"key\":\"25\",\"name\":\"Morgana\",\"title\":\"Fallen Angel\",\"blurb\":\"Driven by vindictive obsession, Morgana is a potent mistress of suffering and the black arts. Once a being of grace and light, she was ripped from her kind during an ancient conflict that broke her soul, turning her into the cruel tormentor she is today...\",\"info\":{\"attack\":1,\"defense\":6,\"magic\":8,\"difficulty\":1},\"image\":{\"full\":\"Morgana.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":559.48,\"hpperlevel\":90,\"mp\":340.8,\"mpperlevel\":60,\"movespeed\":335,\"armor\":25.384,\"armorperlevel\":3.8,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":450,\"hpregen\":5.5,\"hpregenperlevel\":0.6,\"mpregen\":11,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55.46,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":1.53,\"attackspeed\":0.625}},\"Nami\":{\"version\":\"9.3.1\",\"id\":\"Nami\",\"key\":\"267\",\"name\":\"Nami\",\"title\":\"the Tidecaller\",\"blurb\":\"A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred...\",\"info\":{\"attack\":4,\"defense\":3,\"magic\":7,\"difficulty\":5},\"image\":{\"full\":\"Nami.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":489.32,\"hpperlevel\":74,\"mp\":377.24,\"mpperlevel\":43,\"movespeed\":335,\"armor\":29,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":11.5,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":51.208,\"attackdamageperlevel\":3.1,\"attackspeedperlevel\":2.61,\"attackspeed\":0.644}},\"Nasus\":{\"version\":\"9.3.1\",\"id\":\"Nasus\",\"key\":\"75\",\"name\":\"Nasus\",\"title\":\"the Curator of the Sands\",\"blurb\":\"Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient...\",\"info\":{\"attack\":7,\"defense\":5,\"magic\":6,\"difficulty\":6},\"image\":{\"full\":\"Nasus.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":561.2,\"hpperlevel\":90,\"mp\":325.6,\"mpperlevel\":42,\"movespeed\":350,\"armor\":34,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.9,\"mpregen\":7.44,\"mpregenperlevel\":0.5,\"crit\":0,\"critperlevel\":0,\"attackdamage\":67,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":3.48,\"attackspeed\":0.638}},\"Nautilus\":{\"version\":\"9.3.1\",\"id\":\"Nautilus\",\"key\":\"111\",\"name\":\"Nautilus\",\"title\":\"the Titan of the Depths\",\"blurb\":\"A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to...\",\"info\":{\"attack\":4,\"defense\":6,\"magic\":6,\"difficulty\":6},\"image\":{\"full\":\"Nautilus.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":576.48,\"hpperlevel\":86,\"mp\":400,\"mpperlevel\":47,\"movespeed\":325,\"armor\":35.46,\"armorperlevel\":3.75,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8.5,\"hpregenperlevel\":0.55,\"mpregen\":8.626,\"mpregenperlevel\":0.5,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":1,\"attackspeed\":0.706}},\"Neeko\":{\"version\":\"9.3.1\",\"id\":\"Neeko\",\"key\":\"518\",\"name\":\"Neeko\",\"title\":\"the Curious Chameleon\",\"blurb\":\"Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be...\",\"info\":{\"attack\":1,\"defense\":1,\"magic\":9,\"difficulty\":5},\"image\":{\"full\":\"Neeko.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":540,\"hpperlevel\":90,\"mp\":450,\"mpperlevel\":30,\"movespeed\":340,\"armor\":21,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":7.5,\"hpregenperlevel\":0.75,\"mpregen\":7,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":52,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.5,\"attackspeed\":0.645}},\"Nidalee\":{\"version\":\"9.3.1\",\"id\":\"Nidalee\",\"key\":\"76\",\"name\":\"Nidalee\",\"title\":\"the Bestial Huntress\",\"blurb\":\"Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will. Neither wholly woman nor beast, she viciously defends her territory from any and all trespassers, with carefully placed traps and deft spear...\",\"info\":{\"attack\":5,\"defense\":4,\"magic\":7,\"difficulty\":8},\"image\":{\"full\":\"Nidalee.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":545,\"hpperlevel\":85,\"mp\":295.6,\"mpperlevel\":45,\"movespeed\":335,\"armor\":28,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":6,\"hpregenperlevel\":0.6,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":3.22,\"attackspeed\":0.638}},\"Nocturne\":{\"version\":\"9.3.1\",\"id\":\"Nocturne\",\"key\":\"56\",\"name\":\"Nocturne\",\"title\":\"the Eternal Nightmare\",\"blurb\":\"A demonic amalgamation drawn from the nightmares that haunt every sentient mind, the thing known as Nocturne has become a primordial force of pure evil. It is liquidly chaotic in aspect, a faceless shadow with cold eyes and armed with wicked-looking...\",\"info\":{\"attack\":9,\"defense\":5,\"magic\":2,\"difficulty\":4},\"image\":{\"full\":\"Nocturne.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":582.8,\"hpperlevel\":85,\"mp\":273.8,\"mpperlevel\":35,\"movespeed\":345,\"armor\":36,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.75,\"mpregen\":6.756,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62,\"attackdamageperlevel\":3.1,\"attackspeedperlevel\":2.7,\"attackspeed\":0.721}},\"Nunu\":{\"version\":\"9.3.1\",\"id\":\"Nunu\",\"key\":\"20\",\"name\":\"Nunu & Willump\",\"title\":\"the Boy and His Yeti\",\"blurb\":\"Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu...\",\"info\":{\"attack\":4,\"defense\":6,\"magic\":7,\"difficulty\":4},\"image\":{\"full\":\"Nunu.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":590,\"hpperlevel\":90,\"mp\":283.56,\"mpperlevel\":42,\"movespeed\":345,\"armor\":32,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":5,\"hpregenperlevel\":0.8,\"mpregen\":7.44,\"mpregenperlevel\":0.5,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.25,\"attackspeed\":0.625}},\"Olaf\":{\"version\":\"9.3.1\",\"id\":\"Olaf\",\"key\":\"2\",\"name\":\"Olaf\",\"title\":\"the Berserker\",\"blurb\":\"An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great...\",\"info\":{\"attack\":9,\"defense\":5,\"magic\":3,\"difficulty\":3},\"image\":{\"full\":\"Olaf.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":597.24,\"hpperlevel\":93,\"mp\":315.6,\"mpperlevel\":42,\"movespeed\":350,\"armor\":35,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.9,\"mpregen\":7.466,\"mpregenperlevel\":0.575,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2.7,\"attackspeed\":0.694}},\"Orianna\":{\"version\":\"9.3.1\",\"id\":\"Orianna\",\"key\":\"61\",\"name\":\"Orianna\",\"title\":\"the Lady of Clockwork\",\"blurb\":\"Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice...\",\"info\":{\"attack\":4,\"defense\":3,\"magic\":9,\"difficulty\":7},\"image\":{\"full\":\"Orianna.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":530,\"hpperlevel\":91,\"mp\":418,\"mpperlevel\":25,\"movespeed\":325,\"armor\":17.04,\"armorperlevel\":3,\"spellblock\":26,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":7,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":40.368,\"attackdamageperlevel\":2.6,\"attackspeedperlevel\":3.5,\"attackspeed\":0.658}},\"Ornn\":{\"version\":\"9.3.1\",\"id\":\"Ornn\",\"key\":\"516\",\"name\":\"Ornn\",\"title\":\"The Fire below the Mountain\",\"blurb\":\"Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion...\",\"info\":{\"attack\":5,\"defense\":9,\"magic\":3,\"difficulty\":5},\"image\":{\"full\":\"Ornn.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":590,\"hpperlevel\":95,\"mp\":340.6,\"mpperlevel\":45,\"movespeed\":335,\"armor\":36,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":9,\"hpregenperlevel\":0.9,\"mpregen\":8.01,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":69,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2,\"attackspeed\":0.625}},\"Pantheon\":{\"version\":\"9.3.1\",\"id\":\"Pantheon\",\"key\":\"80\",\"name\":\"Pantheon\",\"title\":\"the Artisan of War\",\"blurb\":\"The peerless warrior known as Pantheon is a nigh-unstoppable paragon of battle. He was born among the Rakkor, a warlike people living on the flanks of Mount Targon, and after climbing the mountain's treacherous peak and being deemed worthy, he was...\",\"info\":{\"attack\":9,\"defense\":4,\"magic\":3,\"difficulty\":4},\"image\":{\"full\":\"Pantheon.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":579.16,\"hpperlevel\":87,\"mp\":317.12,\"mpperlevel\":31,\"movespeed\":355,\"armor\":37,\"armorperlevel\":3.9,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":150,\"hpregen\":8,\"hpregenperlevel\":0.65,\"mpregen\":7.356,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":2.9,\"attackspeedperlevel\":2.95,\"attackspeed\":0.696}},\"Poppy\":{\"version\":\"9.3.1\",\"id\":\"Poppy\",\"key\":\"78\",\"name\":\"Poppy\",\"title\":\"Keeper of the Hammer\",\"blurb\":\"Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said...\",\"info\":{\"attack\":6,\"defense\":7,\"magic\":2,\"difficulty\":6},\"image\":{\"full\":\"Poppy.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":540,\"hpperlevel\":90,\"mp\":280,\"mpperlevel\":40,\"movespeed\":345,\"armor\":38,\"armorperlevel\":3.5,\"spellblock\":32,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8,\"hpregenperlevel\":0.8,\"mpregen\":7,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":4,\"attackspeedperlevel\":2.5,\"attackspeed\":0.625}},\"Pyke\":{\"version\":\"9.3.1\",\"id\":\"Pyke\",\"key\":\"555\",\"name\":\"Pyke\",\"title\":\"the Bloodharbor Ripper\",\"blurb\":\"A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural...\",\"info\":{\"attack\":9,\"defense\":3,\"magic\":1,\"difficulty\":7},\"image\":{\"full\":\"Pyke.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":600,\"hpperlevel\":100,\"mp\":415,\"mpperlevel\":50,\"movespeed\":330,\"armor\":45,\"armorperlevel\":5,\"spellblock\":32,\"spellblockperlevel\":1.5,\"attackrange\":150,\"hpregen\":7,\"hpregenperlevel\":0.5,\"mpregen\":8,\"mpregenperlevel\":1,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62,\"attackdamageperlevel\":2,\"attackspeedperlevel\":2.5,\"attackspeed\":0.667}},\"Quinn\":{\"version\":\"9.3.1\",\"id\":\"Quinn\",\"key\":\"133\",\"name\":\"Quinn\",\"title\":\"Demacia's Wings\",\"blurb\":\"Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two...\",\"info\":{\"attack\":9,\"defense\":4,\"magic\":2,\"difficulty\":5},\"image\":{\"full\":\"Quinn.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":532.8,\"hpperlevel\":85,\"mp\":268.8,\"mpperlevel\":35,\"movespeed\":335,\"armor\":28,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":6.972,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":59,\"attackdamageperlevel\":2.4,\"attackspeedperlevel\":3.1,\"attackspeed\":0.668}},\"Rakan\":{\"version\":\"9.3.1\",\"id\":\"Rakan\",\"key\":\"497\",\"name\":\"Rakan\",\"title\":\"The Charmer\",\"blurb\":\"As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties...\",\"info\":{\"attack\":2,\"defense\":4,\"magic\":8,\"difficulty\":5},\"image\":{\"full\":\"Rakan.png\",\"sprite\":\"champion2.png\",\"group\":\"champion\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":480,\"hpperlevel\":85,\"mp\":315,\"mpperlevel\":50,\"movespeed\":335,\"armor\":29,\"armorperlevel\":3.9,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":300,\"hpregen\":5,\"hpregenperlevel\":0.5,\"mpregen\":8.75,\"mpregenperlevel\":0.5,\"crit\":0,\"critperlevel\":0,\"attackdamage\":70,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":3,\"attackspeed\":0.635}},\"Rammus\":{\"version\":\"9.3.1\",\"id\":\"Rammus\",\"key\":\"33\",\"name\":\"Rammus\",\"title\":\"the Armordillo\",\"blurb\":\"Idolized by many, dismissed by some, mystifying to all, the curious being Rammus is an enigma. Protected by a spiked shell, he inspires increasingly disparate theories on his origin wherever he goes—from demigod, to sacred oracle, to a mere beast...\",\"info\":{\"attack\":4,\"defense\":10,\"magic\":5,\"difficulty\":5},\"image\":{\"full\":\"Rammus.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":564.48,\"hpperlevel\":86,\"mp\":310.44,\"mpperlevel\":33,\"movespeed\":335,\"armor\":36,\"armorperlevel\":4.3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8,\"hpregenperlevel\":0.55,\"mpregen\":7.84,\"mpregenperlevel\":0.5,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55.88,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2.215,\"attackspeed\":0.625}},\"RekSai\":{\"version\":\"9.3.1\",\"id\":\"RekSai\",\"key\":\"421\",\"name\":\"Rek'Sai\",\"title\":\"the Void Burrower\",\"blurb\":\"An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":2,\"difficulty\":3},\"image\":{\"full\":\"RekSai.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\"],\"partype\":\"Fury\",\"stats\":{\"hp\":570,\"hpperlevel\":85,\"mp\":100,\"mpperlevel\":0,\"movespeed\":335,\"armor\":33,\"armorperlevel\":3.75,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":7.5,\"hpregenperlevel\":0.65,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":65.5,\"attackdamageperlevel\":3.35,\"attackspeedperlevel\":2,\"attackspeed\":0.667}},\"Renekton\":{\"version\":\"9.3.1\",\"id\":\"Renekton\",\"key\":\"58\",\"name\":\"Renekton\",\"title\":\"the Butcher of the Sands\",\"blurb\":\"Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":2,\"difficulty\":3},\"image\":{\"full\":\"Renekton.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Fury\",\"stats\":{\"hp\":572.16,\"hpperlevel\":87,\"mp\":100,\"mpperlevel\":0,\"movespeed\":345,\"armor\":35,\"armorperlevel\":3.8,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8,\"hpregenperlevel\":0.75,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":69,\"attackdamageperlevel\":3.75,\"attackspeedperlevel\":2.65,\"attackspeed\":0.665}},\"Rengar\":{\"version\":\"9.3.1\",\"id\":\"Rengar\",\"key\":\"107\",\"name\":\"Rengar\",\"title\":\"the Pridestalker\",\"blurb\":\"Rengar is a ferocious vastayan trophy hunter who lives for the thrill of tracking down and killing dangerous creatures. He scours the world for the most fearsome beasts he can find, especially seeking any trace of Kha'Zix, the void creature who...\",\"info\":{\"attack\":7,\"defense\":4,\"magic\":2,\"difficulty\":8},\"image\":{\"full\":\"Rengar.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Ferocity\",\"stats\":{\"hp\":585,\"hpperlevel\":90,\"mp\":4,\"mpperlevel\":0,\"movespeed\":345,\"armor\":34,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7,\"hpregenperlevel\":0.5,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3,\"attackspeed\":0.667}},\"Riven\":{\"version\":\"9.3.1\",\"id\":\"Riven\",\"key\":\"92\",\"name\":\"Riven\",\"title\":\"the Exile\",\"blurb\":\"Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":1,\"difficulty\":8},\"image\":{\"full\":\"Riven.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"None\",\"stats\":{\"hp\":558.48,\"hpperlevel\":86,\"mp\":0,\"mpperlevel\":0,\"movespeed\":340,\"armor\":33,\"armorperlevel\":3.2,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7,\"hpregenperlevel\":0.5,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.5,\"attackspeed\":0.625}},\"Rumble\":{\"version\":\"9.3.1\",\"id\":\"Rumble\",\"key\":\"68\",\"name\":\"Rumble\",\"title\":\"the Mechanized Menace\",\"blurb\":\"Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff...\",\"info\":{\"attack\":3,\"defense\":6,\"magic\":8,\"difficulty\":10},\"image\":{\"full\":\"Rumble.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Mage\"],\"partype\":\"Heat\",\"stats\":{\"hp\":589,\"hpperlevel\":85,\"mp\":100,\"mpperlevel\":0,\"movespeed\":345,\"armor\":30.88,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8,\"hpregenperlevel\":0.6,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61.036,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":1.85,\"attackspeed\":0.644}},\"Ryze\":{\"version\":\"9.3.1\",\"id\":\"Ryze\",\"key\":\"13\",\"name\":\"Ryze\",\"title\":\"the Rune Mage\",\"blurb\":\"Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments...\",\"info\":{\"attack\":2,\"defense\":2,\"magic\":10,\"difficulty\":7},\"image\":{\"full\":\"Ryze.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":570.48,\"hpperlevel\":98,\"mp\":400,\"mpperlevel\":50,\"movespeed\":340,\"armor\":21.552,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":7,\"hpregenperlevel\":0.55,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55.04,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.112,\"attackspeed\":0.625}},\"Sejuani\":{\"version\":\"9.3.1\",\"id\":\"Sejuani\",\"key\":\"113\",\"name\":\"Sejuani\",\"title\":\"Fury of the North\",\"blurb\":\"Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans...\",\"info\":{\"attack\":5,\"defense\":7,\"magic\":6,\"difficulty\":4},\"image\":{\"full\":\"Sejuani.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":560,\"hpperlevel\":105,\"mp\":400,\"mpperlevel\":40,\"movespeed\":340,\"armor\":34,\"armorperlevel\":4.25,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":150,\"hpregen\":8.5,\"hpregenperlevel\":0.85,\"mpregen\":7,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":4,\"attackspeedperlevel\":3,\"attackspeed\":0.625}},\"Shaco\":{\"version\":\"9.3.1\",\"id\":\"Shaco\",\"key\":\"35\",\"name\":\"Shaco\",\"title\":\"the Demon Jester\",\"blurb\":\"Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls...\",\"info\":{\"attack\":8,\"defense\":4,\"magic\":6,\"difficulty\":9},\"image\":{\"full\":\"Shaco.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":587,\"hpperlevel\":89,\"mp\":297.2,\"mpperlevel\":40,\"movespeed\":350,\"armor\":30,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.55,\"mpregen\":7.156,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":66,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":3,\"attackspeed\":0.694}},\"Shen\":{\"version\":\"9.3.1\",\"id\":\"Shen\",\"key\":\"98\",\"name\":\"Shen\",\"title\":\"the Eye of Twilight\",\"blurb\":\"Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit...\",\"info\":{\"attack\":3,\"defense\":9,\"magic\":3,\"difficulty\":4},\"image\":{\"full\":\"Shen.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Tank\"],\"partype\":\"Energy\",\"stats\":{\"hp\":540,\"hpperlevel\":85,\"mp\":400,\"mpperlevel\":0,\"movespeed\":340,\"armor\":34,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.75,\"mpregen\":50,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2,\"attackspeed\":0.751}},\"Shyvana\":{\"version\":\"9.3.1\",\"id\":\"Shyvana\",\"key\":\"102\",\"name\":\"Shyvana\",\"title\":\"the Half-Dragon\",\"blurb\":\"Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan...\",\"info\":{\"attack\":8,\"defense\":6,\"magic\":3,\"difficulty\":4},\"image\":{\"full\":\"Shyvana.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Fury\",\"stats\":{\"hp\":595,\"hpperlevel\":95,\"mp\":100,\"mpperlevel\":0,\"movespeed\":350,\"armor\":38,\"armorperlevel\":3.35,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.8,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":66,\"attackdamageperlevel\":3.4,\"attackspeedperlevel\":2.5,\"attackspeed\":0.658}},\"Singed\":{\"version\":\"9.3.1\",\"id\":\"Singed\",\"key\":\"27\",\"name\":\"Singed\",\"title\":\"the Mad Chemist\",\"blurb\":\"Singed is a Zaunite alchemist of unmatched intellect, who has devoted his life to pushing the boundaries of knowledge—with no price, even his own sanity, too high to pay. Is there a method to his madness? His concoctions rarely fail, but it appears to...\",\"info\":{\"attack\":4,\"defense\":8,\"magic\":7,\"difficulty\":5},\"image\":{\"full\":\"Singed.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":610,\"hpperlevel\":85,\"mp\":290.6,\"mpperlevel\":45,\"movespeed\":345,\"armor\":37,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8,\"hpregenperlevel\":0.55,\"mpregen\":7.524,\"mpregenperlevel\":0.55,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62.32,\"attackdamageperlevel\":3.375,\"attackspeedperlevel\":1.81,\"attackspeed\":0.613}},\"Sion\":{\"version\":\"9.3.1\",\"id\":\"Sion\",\"key\":\"14\",\"name\":\"Sion\",\"title\":\"The Undead Juggernaut\",\"blurb\":\"A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his...\",\"info\":{\"attack\":5,\"defense\":9,\"magic\":3,\"difficulty\":5},\"image\":{\"full\":\"Sion.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":542.64,\"hpperlevel\":73,\"mp\":325.6,\"mpperlevel\":42,\"movespeed\":345,\"armor\":32,\"armorperlevel\":3,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":7.5,\"hpregenperlevel\":0.8,\"mpregen\":8.008,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":4,\"attackspeedperlevel\":1.3,\"attackspeed\":0.679}},\"Sivir\":{\"version\":\"9.3.1\",\"id\":\"Sivir\",\"key\":\"15\",\"name\":\"Sivir\",\"title\":\"the Battle Mistress\",\"blurb\":\"Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless battles for those who can afford her exorbitant price. Known for her...\",\"info\":{\"attack\":9,\"defense\":3,\"magic\":1,\"difficulty\":4},\"image\":{\"full\":\"Sivir.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":532,\"hpperlevel\":88,\"mp\":284,\"mpperlevel\":50,\"movespeed\":335,\"armor\":26,\"armorperlevel\":3.25,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":500,\"hpregen\":3.25,\"hpregenperlevel\":0.55,\"mpregen\":8.012,\"mpregenperlevel\":0.9,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":3.11,\"attackspeedperlevel\":1.6,\"attackspeed\":0.625}},\"Skarner\":{\"version\":\"9.3.1\",\"id\":\"Skarner\",\"key\":\"72\",\"name\":\"Skarner\",\"title\":\"the Crystal Vanguard\",\"blurb\":\"Skarner is an immense crystalline scorpion from a hidden valley in Shurima. Part of the ancient Brackern race, Skarner and his kin are known for their great wisdom and deep connection to the land, as their souls are fused with powerful life crystals...\",\"info\":{\"attack\":7,\"defense\":6,\"magic\":5,\"difficulty\":5},\"image\":{\"full\":\"Skarner.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":601.28,\"hpperlevel\":90,\"mp\":320,\"mpperlevel\":40,\"movespeed\":335,\"armor\":38,\"armorperlevel\":3.8,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.85,\"mpregen\":7.206,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":65,\"attackdamageperlevel\":4.5,\"attackspeedperlevel\":2.1,\"attackspeed\":0.625}},\"Sona\":{\"version\":\"9.3.1\",\"id\":\"Sona\",\"key\":\"37\",\"name\":\"Sona\",\"title\":\"Maven of the Strings\",\"blurb\":\"Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a...\",\"info\":{\"attack\":5,\"defense\":2,\"magic\":8,\"difficulty\":4},\"image\":{\"full\":\"Sona.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":482.36,\"hpperlevel\":77,\"mp\":340.6,\"mpperlevel\":45,\"movespeed\":325,\"armor\":28,\"armorperlevel\":3.3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":11.5,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":49,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.3,\"attackspeed\":0.644}},\"Soraka\":{\"version\":\"9.3.1\",\"id\":\"Soraka\",\"key\":\"16\",\"name\":\"Soraka\",\"title\":\"the Starchild\",\"blurb\":\"A wanderer from the celestial dimensions beyond Mount Targon, Soraka gave up her immortality to protect the mortal races from their own more violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—even...\",\"info\":{\"attack\":2,\"defense\":5,\"magic\":7,\"difficulty\":3},\"image\":{\"full\":\"Soraka.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":529.04,\"hpperlevel\":78,\"mp\":350.8,\"mpperlevel\":60,\"movespeed\":325,\"armor\":32,\"armorperlevel\":3.8,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":2.5,\"hpregenperlevel\":0.5,\"mpregen\":11.5,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":50.04,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.14,\"attackspeed\":0.625}},\"Swain\":{\"version\":\"9.3.1\",\"id\":\"Swain\",\"key\":\"50\",\"name\":\"Swain\",\"title\":\"the Noxian Grand General\",\"blurb\":\"Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new...\",\"info\":{\"attack\":2,\"defense\":6,\"magic\":9,\"difficulty\":8},\"image\":{\"full\":\"Swain.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":525,\"hpperlevel\":90,\"mp\":468,\"mpperlevel\":28.5,\"movespeed\":335,\"armor\":22.72,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":7,\"hpregenperlevel\":0.65,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58,\"attackdamageperlevel\":2.7,\"attackspeedperlevel\":2.11,\"attackspeed\":0.625}},\"Sylas\":{\"version\":\"9.3.1\",\"id\":\"Sylas\",\"key\":\"517\",\"name\":\"Sylas\",\"title\":\"the Unshackled\",\"blurb\":\"Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him...\",\"info\":{\"attack\":3,\"defense\":4,\"magic\":8,\"difficulty\":5},\"image\":{\"full\":\"Sylas.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":585,\"hpperlevel\":85,\"mp\":280,\"mpperlevel\":50,\"movespeed\":340,\"armor\":32,\"armorperlevel\":3,\"spellblock\":36.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":9.5,\"hpregenperlevel\":1,\"mpregen\":7,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.5,\"attackspeed\":0.645}},\"Syndra\":{\"version\":\"9.3.1\",\"id\":\"Syndra\",\"key\":\"134\",\"name\":\"Syndra\",\"title\":\"the Dark Sovereign\",\"blurb\":\"Syndra is a fearsome Ionian mage with incredible power at her command. As a child, she disturbed the village elders with her reckless and wild magic. She was sent away to be taught greater control, but eventually discovered her supposed mentor was...\",\"info\":{\"attack\":2,\"defense\":3,\"magic\":9,\"difficulty\":8},\"image\":{\"full\":\"Syndra.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":523,\"hpperlevel\":90,\"mp\":480,\"mpperlevel\":30,\"movespeed\":330,\"armor\":24.712,\"armorperlevel\":3.4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":6.5,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53.872,\"attackdamageperlevel\":2.9,\"attackspeedperlevel\":2,\"attackspeed\":0.625}},\"TahmKench\":{\"version\":\"9.3.1\",\"id\":\"TahmKench\",\"key\":\"223\",\"name\":\"Tahm Kench\",\"title\":\"the River King\",\"blurb\":\"Known by many names throughout history, the demon Tahm Kench travels the waterways of Runeterra, feeding his insatiable appetite with the misery of others. Though he may appear singularly charming and proud, he swaggers through the physical realm like a...\",\"info\":{\"attack\":3,\"defense\":9,\"magic\":6,\"difficulty\":5},\"image\":{\"full\":\"TahmKench.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":540,\"hpperlevel\":102,\"mp\":325,\"mpperlevel\":40,\"movespeed\":335,\"armor\":47,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":6.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":1,\"crit\":0,\"critperlevel\":0,\"attackdamage\":56,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":2.5,\"attackspeed\":0.658}},\"Taliyah\":{\"version\":\"9.3.1\",\"id\":\"Taliyah\",\"key\":\"163\",\"name\":\"Taliyah\",\"title\":\"the Stoneweaver\",\"blurb\":\"Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe...\",\"info\":{\"attack\":1,\"defense\":7,\"magic\":8,\"difficulty\":5},\"image\":{\"full\":\"Taliyah.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":532,\"hpperlevel\":90,\"mp\":425,\"mpperlevel\":30,\"movespeed\":335,\"armor\":20,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":7,\"hpregenperlevel\":0.7,\"mpregen\":9.335,\"mpregenperlevel\":0.85,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":1.36,\"attackspeed\":0.625}},\"Talon\":{\"version\":\"9.3.1\",\"id\":\"Talon\",\"key\":\"91\",\"name\":\"Talon\",\"title\":\"the Blade's Shadow\",\"blurb\":\"Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive...\",\"info\":{\"attack\":9,\"defense\":3,\"magic\":1,\"difficulty\":7},\"image\":{\"full\":\"Talon.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":588,\"hpperlevel\":95,\"mp\":377.2,\"mpperlevel\":37,\"movespeed\":335,\"armor\":30,\"armorperlevel\":3.5,\"spellblock\":39,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.75,\"mpregen\":7.6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3.1,\"attackspeedperlevel\":2.9,\"attackspeed\":0.625}},\"Taric\":{\"version\":\"9.3.1\",\"id\":\"Taric\",\"key\":\"44\",\"name\":\"Taric\",\"title\":\"the Shield of Valoran\",\"blurb\":\"Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a...\",\"info\":{\"attack\":4,\"defense\":8,\"magic\":5,\"difficulty\":3},\"image\":{\"full\":\"Taric.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":575,\"hpperlevel\":90,\"mp\":300,\"mpperlevel\":60,\"movespeed\":340,\"armor\":40,\"armorperlevel\":3.4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":150,\"hpregen\":6,\"hpregenperlevel\":0.5,\"mpregen\":8.5,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2,\"attackspeed\":0.625}},\"Teemo\":{\"version\":\"9.3.1\",\"id\":\"Teemo\",\"key\":\"17\",\"name\":\"Teemo\",\"title\":\"the Swift Scout\",\"blurb\":\"Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout's Code, sometimes...\",\"info\":{\"attack\":5,\"defense\":3,\"magic\":7,\"difficulty\":6},\"image\":{\"full\":\"Teemo.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":528,\"hpperlevel\":90,\"mp\":334,\"mpperlevel\":20,\"movespeed\":330,\"armor\":24.3,\"armorperlevel\":3.75,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":500,\"hpregen\":5.5,\"hpregenperlevel\":0.65,\"mpregen\":9.6,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":54,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.38,\"attackspeed\":0.69}},\"Thresh\":{\"version\":\"9.3.1\",\"id\":\"Thresh\",\"key\":\"412\",\"name\":\"Thresh\",\"title\":\"the Chain Warden\",\"blurb\":\"Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once the custodian of countless arcane secrets, he sought a power greater than life or death, and now sustains himself by tormenting and breaking others with slow...\",\"info\":{\"attack\":5,\"defense\":6,\"magic\":6,\"difficulty\":7},\"image\":{\"full\":\"Thresh.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Fighter\"],\"partype\":\"Mana\",\"stats\":{\"hp\":560.52,\"hpperlevel\":93,\"mp\":273.92,\"mpperlevel\":44,\"movespeed\":335,\"armor\":28,\"armorperlevel\":0,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":450,\"hpregen\":7,\"hpregenperlevel\":0.55,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":56,\"attackdamageperlevel\":2.2,\"attackspeedperlevel\":3.5,\"attackspeed\":0.625}},\"Tristana\":{\"version\":\"9.3.1\",\"id\":\"Tristana\",\"key\":\"18\",\"name\":\"Tristana\",\"title\":\"the Yordle Gunner\",\"blurb\":\"While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her...\",\"info\":{\"attack\":9,\"defense\":3,\"magic\":5,\"difficulty\":4},\"image\":{\"full\":\"Tristana.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":559,\"hpperlevel\":88,\"mp\":246.76,\"mpperlevel\":32,\"movespeed\":325,\"armor\":26,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":3.75,\"hpregenperlevel\":0.65,\"mpregen\":7.206,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":3.11,\"attackspeedperlevel\":1.5,\"attackspeed\":0.656}},\"Trundle\":{\"version\":\"9.3.1\",\"id\":\"Trundle\",\"key\":\"48\",\"name\":\"Trundle\",\"title\":\"the Troll King\",\"blurb\":\"Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his...\",\"info\":{\"attack\":7,\"defense\":6,\"magic\":2,\"difficulty\":5},\"image\":{\"full\":\"Trundle.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":616.28,\"hpperlevel\":96,\"mp\":281.6,\"mpperlevel\":45,\"movespeed\":350,\"armor\":37,\"armorperlevel\":2.7,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":6,\"hpregenperlevel\":0.75,\"mpregen\":7.508,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.9,\"attackspeed\":0.67}},\"Tryndamere\":{\"version\":\"9.3.1\",\"id\":\"Tryndamere\",\"key\":\"23\",\"name\":\"Tryndamere\",\"title\":\"the Barbarian King\",\"blurb\":\"Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the...\",\"info\":{\"attack\":10,\"defense\":5,\"magic\":2,\"difficulty\":5},\"image\":{\"full\":\"Tryndamere.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Fury\",\"stats\":{\"hp\":625.64,\"hpperlevel\":98,\"mp\":100,\"mpperlevel\":0,\"movespeed\":345,\"armor\":33,\"armorperlevel\":3.1,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.9,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":69,\"attackdamageperlevel\":3.7,\"attackspeedperlevel\":2.9,\"attackspeed\":0.67}},\"TwistedFate\":{\"version\":\"9.3.1\",\"id\":\"TwistedFate\",\"key\":\"4\",\"name\":\"Twisted Fate\",\"title\":\"the Card Master\",\"blurb\":\"Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking...\",\"info\":{\"attack\":6,\"defense\":2,\"magic\":6,\"difficulty\":9},\"image\":{\"full\":\"TwistedFate.png\",\"sprite\":\"champion3.png\",\"group\":\"champion\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":534,\"hpperlevel\":94,\"mp\":333,\"mpperlevel\":19,\"movespeed\":335,\"armor\":20.542,\"armorperlevel\":3.15,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":5.5,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":49.954,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":3.22,\"attackspeed\":0.651}},\"Twitch\":{\"version\":\"9.3.1\",\"id\":\"Twitch\",\"key\":\"29\",\"name\":\"Twitch\",\"title\":\"the Plague Rat\",\"blurb\":\"A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really...\",\"info\":{\"attack\":9,\"defense\":2,\"magic\":3,\"difficulty\":6},\"image\":{\"full\":\"Twitch.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":582,\"hpperlevel\":84,\"mp\":287.2,\"mpperlevel\":40,\"movespeed\":330,\"armor\":27,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":3.75,\"hpregenperlevel\":0.6,\"mpregen\":7.256,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":59,\"attackdamageperlevel\":3.11,\"attackspeedperlevel\":3.38,\"attackspeed\":0.679}},\"Udyr\":{\"version\":\"9.3.1\",\"id\":\"Udyr\",\"key\":\"77\",\"name\":\"Udyr\",\"title\":\"the Spirit Walker\",\"blurb\":\"Udyr is more than a man; he is a vessel for the untamed power of four primal animal spirits. When tapping into the spirits' bestial natures, Udyr can harness their unique strengths: The tiger grants him speed and ferocity, the turtle resilience, the...\",\"info\":{\"attack\":8,\"defense\":7,\"magic\":4,\"difficulty\":7},\"image\":{\"full\":\"Udyr.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":593.32,\"hpperlevel\":99,\"mp\":270.4,\"mpperlevel\":30,\"movespeed\":345,\"armor\":34,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":6,\"hpregenperlevel\":0.75,\"mpregen\":7.506,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":66,\"attackdamageperlevel\":5,\"attackspeedperlevel\":2.67,\"attackspeed\":0.658}},\"Urgot\":{\"version\":\"9.3.1\",\"id\":\"Urgot\",\"key\":\"6\",\"name\":\"Urgot\",\"title\":\"the Dreadnought\",\"blurb\":\"Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":3,\"difficulty\":8},\"image\":{\"full\":\"Urgot.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":585,\"hpperlevel\":88,\"mp\":300,\"mpperlevel\":45,\"movespeed\":330,\"armor\":36,\"armorperlevel\":4.25,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":350,\"hpregen\":7.5,\"hpregenperlevel\":0.7,\"mpregen\":7.25,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":63,\"attackdamageperlevel\":4,\"attackspeedperlevel\":3.75,\"attackspeed\":0.625}},\"Varus\":{\"version\":\"9.3.1\",\"id\":\"Varus\",\"key\":\"110\",\"name\":\"Varus\",\"title\":\"the Arrow of Retribution\",\"blurb\":\"One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Great Darkin War, but escaped centuries later in the remade...\",\"info\":{\"attack\":7,\"defense\":3,\"magic\":4,\"difficulty\":2},\"image\":{\"full\":\"Varus.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":499,\"hpperlevel\":89,\"mp\":360.48,\"mpperlevel\":33,\"movespeed\":330,\"armor\":27,\"armorperlevel\":3.4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":575,\"hpregen\":3.5,\"hpregenperlevel\":0.55,\"mpregen\":7.34,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":59,\"attackdamageperlevel\":3.11,\"attackspeedperlevel\":3,\"attackspeed\":0.658}},\"Vayne\":{\"version\":\"9.3.1\",\"id\":\"Vayne\",\"key\":\"67\",\"name\":\"Vayne\",\"title\":\"the Night Hunter\",\"blurb\":\"Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when...\",\"info\":{\"attack\":10,\"defense\":1,\"magic\":1,\"difficulty\":8},\"image\":{\"full\":\"Vayne.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Marksman\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":515,\"hpperlevel\":89,\"mp\":231.8,\"mpperlevel\":35,\"movespeed\":330,\"armor\":23,\"armorperlevel\":3.4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":3.5,\"hpregenperlevel\":0.55,\"mpregen\":6.972,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":2.36,\"attackspeedperlevel\":3.3,\"attackspeed\":0.658}},\"Veigar\":{\"version\":\"9.3.1\",\"id\":\"Veigar\",\"key\":\"45\",\"name\":\"Veigar\",\"title\":\"the Tiny Master of Evil\",\"blurb\":\"An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been...\",\"info\":{\"attack\":2,\"defense\":2,\"magic\":10,\"difficulty\":7},\"image\":{\"full\":\"Veigar.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":505,\"hpperlevel\":94,\"mp\":490,\"mpperlevel\":26,\"movespeed\":340,\"armor\":22.55,\"armorperlevel\":3.75,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":6.5,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":50.71,\"attackdamageperlevel\":2.625,\"attackspeedperlevel\":2.24,\"attackspeed\":0.625}},\"Velkoz\":{\"version\":\"9.3.1\",\"id\":\"Velkoz\",\"key\":\"161\",\"name\":\"Vel'Koz\",\"title\":\"the Eye of the Void\",\"blurb\":\"It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to...\",\"info\":{\"attack\":2,\"defense\":2,\"magic\":10,\"difficulty\":8},\"image\":{\"full\":\"Velkoz.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":520,\"hpperlevel\":88,\"mp\":469,\"mpperlevel\":21,\"movespeed\":340,\"armor\":21.88,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":54.9379,\"attackdamageperlevel\":3.1416,\"attackspeedperlevel\":1.36,\"attackspeed\":0.625}},\"Vi\":{\"version\":\"9.3.1\",\"id\":\"Vi\",\"key\":\"254\",\"name\":\"Vi\",\"title\":\"the Piltover Enforcer\",\"blurb\":\"Once a criminal from the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures. Growing up all but alone, Vi developed finely honed survival instincts as well as a wickedly abrasive...\",\"info\":{\"attack\":8,\"defense\":5,\"magic\":3,\"difficulty\":4},\"image\":{\"full\":\"Vi.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":585,\"hpperlevel\":85,\"mp\":295,\"mpperlevel\":45,\"movespeed\":340,\"armor\":30,\"armorperlevel\":4,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":10,\"hpregenperlevel\":1,\"mpregen\":8,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2.5,\"attackspeed\":0.644}},\"Viktor\":{\"version\":\"9.3.1\",\"id\":\"Viktor\",\"key\":\"112\",\"name\":\"Viktor\",\"title\":\"the Machine Herald\",\"blurb\":\"The herald of a new age of technology, Viktor has devoted his life to the advancement of humankind. An idealist who seeks to lift the people of Zaun to a new level of understanding, he believes that only by embracing a glorious evolution of technology...\",\"info\":{\"attack\":2,\"defense\":4,\"magic\":10,\"difficulty\":9},\"image\":{\"full\":\"Viktor.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":528.04,\"hpperlevel\":90,\"mp\":405,\"mpperlevel\":25,\"movespeed\":335,\"armor\":22.72,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":8,\"hpregenperlevel\":0.65,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":52.04,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.11,\"attackspeed\":0.658}},\"Vladimir\":{\"version\":\"9.3.1\",\"id\":\"Vladimir\",\"key\":\"8\",\"name\":\"Vladimir\",\"title\":\"the Crimson Reaper\",\"blurb\":\"A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily...\",\"info\":{\"attack\":2,\"defense\":6,\"magic\":8,\"difficulty\":7},\"image\":{\"full\":\"Vladimir.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Tank\"],\"partype\":\"Crimson Rush\",\"stats\":{\"hp\":537,\"hpperlevel\":96,\"mp\":2,\"mpperlevel\":0,\"movespeed\":330,\"armor\":23,\"armorperlevel\":3.3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":450,\"hpregen\":7,\"hpregenperlevel\":0.6,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2,\"attackspeed\":0.658}},\"Volibear\":{\"version\":\"9.3.1\",\"id\":\"Volibear\",\"key\":\"106\",\"name\":\"Volibear\",\"title\":\"the Thunder's Roar\",\"blurb\":\"The thunderous demigod known as the Thousand-Pierced Bear is the battle-spirit of the Freljord. Thousands of years of constant and bitter wars, fought in the coldest winters, have hardened Volibear into a truly indomitable force, hurling bolts of...\",\"info\":{\"attack\":7,\"defense\":7,\"magic\":4,\"difficulty\":3},\"image\":{\"full\":\"Volibear.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":584.48,\"hpperlevel\":86,\"mp\":270.4,\"mpperlevel\":30,\"movespeed\":345,\"armor\":35,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":8,\"hpregenperlevel\":0.65,\"mpregen\":8.092,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":2.67,\"attackspeed\":0.658}},\"Warwick\":{\"version\":\"9.3.1\",\"id\":\"Warwick\",\"key\":\"19\",\"name\":\"Warwick\",\"title\":\"the Uncaged Wrath of Zaun\",\"blurb\":\"Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. Bursting out of the shadows, he preys upon...\",\"info\":{\"attack\":9,\"defense\":5,\"magic\":3,\"difficulty\":3},\"image\":{\"full\":\"Warwick.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":550,\"hpperlevel\":85,\"mp\":280,\"mpperlevel\":35,\"movespeed\":335,\"armor\":33,\"armorperlevel\":3.2,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":4,\"hpregenperlevel\":0.75,\"mpregen\":7.466,\"mpregenperlevel\":0.575,\"crit\":0,\"critperlevel\":0,\"attackdamage\":65,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.3,\"attackspeed\":0.638}},\"Xayah\":{\"version\":\"9.3.1\",\"id\":\"Xayah\",\"key\":\"498\",\"name\":\"Xayah\",\"title\":\"the Rebel\",\"blurb\":\"Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to...\",\"info\":{\"attack\":10,\"defense\":6,\"magic\":1,\"difficulty\":5},\"image\":{\"full\":\"Xayah.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"stats\":{\"hp\":561,\"hpperlevel\":86,\"mp\":340,\"mpperlevel\":40,\"movespeed\":325,\"armor\":28,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":3.25,\"hpregenperlevel\":0.75,\"mpregen\":8.25,\"mpregenperlevel\":0.75,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":2.9,\"attackspeedperlevel\":3.3,\"attackspeed\":0.625}},\"Xerath\":{\"version\":\"9.3.1\",\"id\":\"Xerath\",\"key\":\"101\",\"name\":\"Xerath\",\"title\":\"the Magus Ascendant\",\"blurb\":\"Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison. Driven...\",\"info\":{\"attack\":1,\"defense\":3,\"magic\":10,\"difficulty\":8},\"image\":{\"full\":\"Xerath.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":526,\"hpperlevel\":92,\"mp\":459,\"mpperlevel\":22,\"movespeed\":340,\"armor\":21.88,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":525,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":54.7,\"attackdamageperlevel\":3,\"attackspeedperlevel\":1.36,\"attackspeed\":0.625}},\"XinZhao\":{\"version\":\"9.3.1\",\"id\":\"XinZhao\",\"key\":\"5\",\"name\":\"Xin Zhao\",\"title\":\"the Seneschal of Demacia\",\"blurb\":\"Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave...\",\"info\":{\"attack\":8,\"defense\":6,\"magic\":3,\"difficulty\":2},\"image\":{\"full\":\"XinZhao.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Mana\",\"stats\":{\"hp\":570,\"hpperlevel\":92,\"mp\":273.8,\"mpperlevel\":35,\"movespeed\":345,\"armor\":35,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8,\"hpregenperlevel\":0.7,\"mpregen\":7.256,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":66,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.5,\"attackspeed\":0.645}},\"Yasuo\":{\"version\":\"9.3.1\",\"id\":\"Yasuo\",\"key\":\"157\",\"name\":\"Yasuo\",\"title\":\"the Unforgiven\",\"blurb\":\"An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self...\",\"info\":{\"attack\":8,\"defense\":4,\"magic\":4,\"difficulty\":10},\"image\":{\"full\":\"Yasuo.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Assassin\"],\"partype\":\"Flow\",\"stats\":{\"hp\":523,\"hpperlevel\":87,\"mp\":100,\"mpperlevel\":0,\"movespeed\":345,\"armor\":30,\"armorperlevel\":3.4,\"spellblock\":30,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":6.5,\"hpregenperlevel\":0.9,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":63,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":2.5,\"attackspeed\":0.697}},\"Yorick\":{\"version\":\"9.3.1\",\"id\":\"Yorick\",\"key\":\"83\",\"name\":\"Yorick\",\"title\":\"Shepherd of Souls\",\"blurb\":\"The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking spirits that he gathers to him. Yorick's monstrous...\",\"info\":{\"attack\":6,\"defense\":6,\"magic\":4,\"difficulty\":6},\"image\":{\"full\":\"Yorick.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"stats\":{\"hp\":580,\"hpperlevel\":100,\"mp\":300,\"mpperlevel\":40,\"movespeed\":340,\"armor\":39,\"armorperlevel\":4,\"spellblock\":32,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8,\"hpregenperlevel\":0.8,\"mpregen\":7.5,\"mpregenperlevel\":0.75,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62,\"attackdamageperlevel\":5,\"attackspeedperlevel\":2,\"attackspeed\":0.625}},\"Zac\":{\"version\":\"9.3.1\",\"id\":\"Zac\",\"key\":\"154\",\"name\":\"Zac\",\"title\":\"the Secret Weapon\",\"blurb\":\"Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally...\",\"info\":{\"attack\":3,\"defense\":7,\"magic\":7,\"difficulty\":8},\"image\":{\"full\":\"Zac.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"None\",\"stats\":{\"hp\":615,\"hpperlevel\":95,\"mp\":0,\"mpperlevel\":0,\"movespeed\":340,\"armor\":33,\"armorperlevel\":3.5,\"spellblock\":32,\"spellblockperlevel\":1.25,\"attackrange\":175,\"hpregen\":8,\"hpregenperlevel\":0.5,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":3.4,\"attackspeedperlevel\":1.6,\"attackspeed\":0.736}},\"Zed\":{\"version\":\"9.3.1\",\"id\":\"Zed\",\"key\":\"238\",\"name\":\"Zed\",\"title\":\"the Master of Shadows\",\"blurb\":\"Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock...\",\"info\":{\"attack\":9,\"defense\":2,\"magic\":1,\"difficulty\":7},\"image\":{\"full\":\"Zed.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Energy\",\"stats\":{\"hp\":584,\"hpperlevel\":85,\"mp\":200,\"mpperlevel\":0,\"movespeed\":345,\"armor\":32,\"armorperlevel\":3.5,\"spellblock\":32.1,\"spellblockperlevel\":1.25,\"attackrange\":125,\"hpregen\":7,\"hpregenperlevel\":0.65,\"mpregen\":50,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":63,\"attackdamageperlevel\":3.4,\"attackspeedperlevel\":2.1,\"attackspeed\":0.651}},\"Ziggs\":{\"version\":\"9.3.1\",\"id\":\"Ziggs\",\"key\":\"115\",\"name\":\"Ziggs\",\"title\":\"the Hexplosives Expert\",\"blurb\":\"With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town...\",\"info\":{\"attack\":2,\"defense\":4,\"magic\":9,\"difficulty\":4},\"image\":{\"full\":\"Ziggs.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":536,\"hpperlevel\":92,\"mp\":480,\"mpperlevel\":23.5,\"movespeed\":325,\"armor\":21.544,\"armorperlevel\":3.3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":6.5,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":54.208,\"attackdamageperlevel\":3.1,\"attackspeedperlevel\":2,\"attackspeed\":0.656}},\"Zilean\":{\"version\":\"9.3.1\",\"id\":\"Zilean\",\"key\":\"26\",\"name\":\"Zilean\",\"title\":\"the Chronokeeper\",\"blurb\":\"Once a powerful Icathian mage, Zilean became obsessed with the passage of time after witnessing his homeland's destruction by the Void. Unable to spare even a minute to grieve the catastrophic loss, he called upon ancient temporal magic to divine all...\",\"info\":{\"attack\":2,\"defense\":5,\"magic\":8,\"difficulty\":6},\"image\":{\"full\":\"Zilean.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"stats\":{\"hp\":504,\"hpperlevel\":82,\"mp\":452,\"mpperlevel\":30,\"movespeed\":335,\"armor\":24,\"armorperlevel\":3.8,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.5,\"mpregen\":11.335,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":51.64,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.13,\"attackspeed\":0.625}},\"Zoe\":{\"version\":\"9.3.1\",\"id\":\"Zoe\",\"key\":\"142\",\"name\":\"Zoe\",\"title\":\"the Aspect of Twilight\",\"blurb\":\"As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without...\",\"info\":{\"attack\":1,\"defense\":7,\"magic\":8,\"difficulty\":5},\"image\":{\"full\":\"Zoe.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":560,\"hpperlevel\":92,\"mp\":425,\"mpperlevel\":25,\"movespeed\":340,\"armor\":20.8,\"armorperlevel\":3.5,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":550,\"hpregen\":6.5,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":2.5,\"attackspeed\":0.625}},\"Zyra\":{\"version\":\"9.3.1\",\"id\":\"Zyra\",\"key\":\"143\",\"name\":\"Zyra\",\"title\":\"Rise of the Thorns\",\"blurb\":\"Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks...\",\"info\":{\"attack\":4,\"defense\":3,\"magic\":8,\"difficulty\":7},\"image\":{\"full\":\"Zyra.png\",\"sprite\":\"champion4.png\",\"group\":\"champion\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"stats\":{\"hp\":504,\"hpperlevel\":79,\"mp\":418,\"mpperlevel\":25,\"movespeed\":340,\"armor\":29,\"armorperlevel\":3,\"spellblock\":30,\"spellblockperlevel\":0.5,\"attackrange\":575,\"hpregen\":5.5,\"hpregenperlevel\":0.5,\"mpregen\":13,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53.376,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":2.11,\"attackspeed\":0.625}}}}");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fvagrant%2Fapps%2Fleague%2Fpages%2Findex.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fvagrant%2Fapps%2Fleague%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fvagrant%2Fapps%2Fleague%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_13346faca0e924a89b24":
/*!*******************************************!*\
  !*** external "dll_13346faca0e924a89b24" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_13346faca0e924a89b24;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map