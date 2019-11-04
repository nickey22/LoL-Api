(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

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
/* harmony import */ var _summoner_matches_SummonerMatches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summoner-matches/SummonerMatches */ "./components/summoner-profile/summoner-matches/SummonerMatches.js");
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
  }, __jsx("p", null, "Match History")), __jsx(_summoner_matches_SummonerMatches__WEBPACK_IMPORTED_MODULE_2__["default"], {
    summonerID: accountId,
    matches: props.summoner.matches
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SummonerProfile);

/***/ }),

/***/ "./components/summoner-profile/summoner-matches/SummonerMatches.js":
/*!*************************************************************************!*\
  !*** ./components/summoner-profile/summoner-matches/SummonerMatches.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _single_match_SummonerMatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-match/SummonerMatch */ "./components/summoner-profile/summoner-matches/single-match/SummonerMatch.js");
/* harmony import */ var _static_ddragon_db_champion_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/ddragon/db/champion.json */ "./static/ddragon/db/champion.json");
var _static_ddragon_db_champion_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../static/ddragon/db/champion.json */ "./static/ddragon/db/champion.json", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SummonerMatches = function SummonerMatches(props) {
  var matches = props.matches,
      summonerID = props.summonerID;
  return __jsx("div", {
    className: "matches"
  }, matches.map(function (match, key) {
    return __jsx(_single_match_SummonerMatch__WEBPACK_IMPORTED_MODULE_1__["default"], {
      matchData: _static_ddragon_db_champion_json__WEBPACK_IMPORTED_MODULE_2__.data,
      summonerID: summonerID,
      key: key,
      match: match
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SummonerMatches);

/***/ }),

/***/ "./components/summoner-profile/summoner-matches/single-match/MatchData.js":
/*!********************************************************************************!*\
  !*** ./components/summoner-profile/summoner-matches/single-match/MatchData.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _match_panels_ChampionItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match-panels/ChampionItems */ "./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionItems.js");
/* harmony import */ var _match_panels_ChampionKDA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match-panels/ChampionKDA */ "./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionKDA.js");
/* harmony import */ var _match_panels_ChampionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-panels/ChampionPanel */ "./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionPanel.js");
/* harmony import */ var _match_panels_GameDuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match-panels/GameDuration */ "./components/summoner-profile/summoner-matches/single-match/match-panels/GameDuration.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var MatchData = function MatchData(props) {
  var champion = props.champion,
      person = props.person,
      match = props.match,
      matchWon = props.matchWon;

  var championImage = __jsx("img", {
    src: "/static/ddragon/img/champion/".concat(champion.image.full)
  });

  return __jsx("div", {
    className: "match-wrapper"
  }, __jsx(_match_panels_GameDuration__WEBPACK_IMPORTED_MODULE_5__["default"], {
    matchWon: matchWon === true ? 'victory' : 'defeat',
    gameTime: new Date(match.gameDuration * 1000).toISOString().substr(11, 8)
  }), __jsx(_match_panels_ChampionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    championImage: championImage,
    championId: champion.id
  }), __jsx(_match_panels_ChampionKDA__WEBPACK_IMPORTED_MODULE_2__["default"], {
    stats: person.stats
  }), __jsx(_match_panels_ChampionItems__WEBPACK_IMPORTED_MODULE_1__["default"], {
    stats: person.stats
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MatchData);

/***/ }),

/***/ "./components/summoner-profile/summoner-matches/single-match/SummonerMatch.js":
/*!************************************************************************************!*\
  !*** ./components/summoner-profile/summoner-matches/single-match/SummonerMatch.js ***!
  \************************************************************************************/
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
/* harmony import */ var _MatchData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MatchData */ "./components/summoner-profile/summoner-matches/single-match/MatchData.js");









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
      var championData = this.props.matchData;

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(championData).forEach(function (champ) {
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
        championData = __jsx(_MatchData__WEBPACK_IMPORTED_MODULE_10__["default"], {
          matchWon: matchWon,
          match: match,
          person: this.state.person,
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

/***/ "./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionItems.js":
/*!*************************************************************************************************!*\
  !*** ./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionItems.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_ddragon_db_item_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../static/ddragon/db/item.json */ "./static/ddragon/db/item.json");
var _static_ddragon_db_item_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../static/ddragon/db/item.json */ "./static/ddragon/db/item.json", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ChampionItems = function ChampionItems(props) {
  var stats = props.stats;
  var items = [stats.item0, stats.item1, stats.item2, stats.item3, stats.item4, stats.item5];
  var itemsJSON = _static_ddragon_db_item_json__WEBPACK_IMPORTED_MODULE_1__.data;
  return __jsx("div", {
    className: "panel items"
  }, __jsx("div", {
    className: "items-wrapper"
  }, items.map(function (item, index) {
    return __jsx("div", {
      className: "item",
      key: index
    }, item === 0 ? null : __jsx("img", {
      src: "/static/ddragon/img/item/".concat(itemsJSON[item].image.full),
      alt: "item"
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChampionItems);

/***/ }),

/***/ "./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionKDA.js":
/*!***********************************************************************************************!*\
  !*** ./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionKDA.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ChampionKDA = function ChampionKDA(props) {
  var KDAString = props.stats.kills + '/' + props.stats.deaths + '/' + props.stats.assists;
  var KDA = props.stats.deaths !== 0 ? (props.stats.kills + props.stats.assists) / props.stats.deaths : props.stats.kills + props.stats.assists;
  return __jsx("div", {
    className: "panel kda"
  }, __jsx("p", null, KDAString), __jsx("p", null, KDA, " KDA"));
};

/* harmony default export */ __webpack_exports__["default"] = (ChampionKDA);

/***/ }),

/***/ "./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionPanel.js":
/*!*************************************************************************************************!*\
  !*** ./components/summoner-profile/summoner-matches/single-match/match-panels/ChampionPanel.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ChampionPanel = function ChampionPanel(props) {
  return __jsx("div", {
    className: "panel champion"
  }, __jsx("div", {
    className: "champion-image"
  }, props.championImage), __jsx("div", {
    className: "champion-name"
  }, __jsx("p", null, props.championId)));
};

/* harmony default export */ __webpack_exports__["default"] = (ChampionPanel);

/***/ }),

/***/ "./components/summoner-profile/summoner-matches/single-match/match-panels/GameDuration.js":
/*!************************************************************************************************!*\
  !*** ./components/summoner-profile/summoner-matches/single-match/match-panels/GameDuration.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var GameDuration = function GameDuration(props) {
  return __jsx("div", {
    className: "panel game-duration"
  }, __jsx("p", null, props.matchWon), __jsx("p", null, props.gameTime));
};

/* harmony default export */ __webpack_exports__["default"] = (GameDuration);

/***/ }),

/***/ "./components/wrappers/Layout.js":
/*!***************************************!*\
  !*** ./components/wrappers/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_LayoutManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/LayoutManager */ "./hoc/LayoutManager.js");
/* harmony import */ var _sass_global_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sass/global.sass */ "./sass/global.sass");
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
/* harmony import */ var _components_wrappers_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/wrappers/Layout */ "./components/wrappers/Layout.js");
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        currentSummoner: {
          "id": "3er44-Kp1Ay7Am1bguo70uPRVWsRjnkOAeSFp7_3ugdxOMI",
          "accountId": "N8s9iFVtxo-SvHARptdzGXbJBW-6EuR2-8fCk6XyALqxZA",
          "puuid": "8D8jK65d_8lKYCcez39Zo3MTXD5Uo8NyOe8g_9XNJuC7gyAOVVhmd7CajAIkvx37-A-znztNRHT69A",
          "name": "Deterence",
          "profileIconId": 508,
          "revisionDate": 1571446233000,
          "summonerLevel": 38,
          "matches": [{
            "gameId": 3178054253,
            "platformId": "NA1",
            "gameCreation": 1571443858168,
            "gameDuration": 2314,
            "queueId": 420,
            "mapId": 11,
            "seasonId": 13,
            "gameVersion": "9.20.292.2452",
            "gameMode": "CLASSIC",
            "gameType": "MATCHED_GAME",
            "teams": [{
              "teamId": 100,
              "win": "Fail",
              "firstBlood": true,
              "firstTower": false,
              "firstInhibitor": false,
              "firstBaron": false,
              "firstDragon": false,
              "firstRiftHerald": false,
              "towerKills": 4,
              "inhibitorKills": 1,
              "baronKills": 0,
              "dragonKills": 1,
              "vilemawKills": 0,
              "riftHeraldKills": 0,
              "dominionVictoryScore": 0,
              "bans": [{
                "championId": 35,
                "pickTurn": 1
              }, {
                "championId": 238,
                "pickTurn": 2
              }, {
                "championId": 53,
                "pickTurn": 3
              }, {
                "championId": 10,
                "pickTurn": 4
              }, {
                "championId": 350,
                "pickTurn": 5
              }]
            }, {
              "teamId": 200,
              "win": "Win",
              "firstBlood": false,
              "firstTower": true,
              "firstInhibitor": true,
              "firstBaron": true,
              "firstDragon": true,
              "firstRiftHerald": false,
              "towerKills": 11,
              "inhibitorKills": 4,
              "baronKills": 1,
              "dragonKills": 4,
              "vilemawKills": 0,
              "riftHeraldKills": 0,
              "dominionVictoryScore": 0,
              "bans": [{
                "championId": 11,
                "pickTurn": 6
              }, {
                "championId": 164,
                "pickTurn": 7
              }, {
                "championId": 157,
                "pickTurn": 8
              }, {
                "championId": 555,
                "pickTurn": 9
              }, {
                "championId": 36,
                "pickTurn": 10
              }]
            }],
            "participants": [{
              "participantId": 1,
              "teamId": 100,
              "championId": 122,
              "spell1Id": 6,
              "spell2Id": 4,
              "stats": {
                "participantId": 1,
                "win": false,
                "item0": 3742,
                "item1": 3071,
                "item2": 3047,
                "item3": 2053,
                "item4": 3211,
                "item5": 1028,
                "item6": 3364,
                "kills": 4,
                "deaths": 14,
                "assists": 3,
                "largestKillingSpree": 2,
                "largestMultiKill": 1,
                "killingSprees": 1,
                "longestTimeSpentLiving": 400,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 135080,
                "magicDamageDealt": 878,
                "physicalDamageDealt": 123874,
                "trueDamageDealt": 10326,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 18858,
                "magicDamageDealtToChampions": 130,
                "physicalDamageDealtToChampions": 15099,
                "trueDamageDealtToChampions": 3628,
                "totalHeal": 5169,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 32125,
                "damageDealtToObjectives": 5652,
                "damageDealtToTurrets": 2447,
                "visionScore": 18,
                "timeCCingOthers": 33,
                "totalDamageTaken": 45867,
                "magicalDamageTaken": 11550,
                "physicalDamageTaken": 30374,
                "trueDamageTaken": 3941,
                "goldEarned": 10371,
                "goldSpent": 10100,
                "turretKills": 1,
                "inhibitorKills": 0,
                "totalMinionsKilled": 158,
                "neutralMinionsKilled": 2,
                "neutralMinionsKilledTeamJungle": 2,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 202,
                "champLevel": 16,
                "visionWardsBoughtInGame": 0,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 10,
                "wardsKilled": 2,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8010,
                "perk0Var1": 571,
                "perk0Var2": 222,
                "perk0Var3": 743,
                "perk1": 9111,
                "perk1Var1": 497,
                "perk1Var2": 140,
                "perk1Var3": 0,
                "perk2": 9104,
                "perk2Var1": 30,
                "perk2Var2": 20,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 208,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8446,
                "perk4Var1": 1320,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8444,
                "perk5Var1": 1848,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8400,
                "statPerk0": 5005,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 1,
                "creepsPerMinDeltas": {
                  "10-20": 3,
                  "0-10": 4.300000000000001,
                  "30-end": 2.6,
                  "20-30": 5.7
                },
                "xpPerMinDeltas": {
                  "10-20": 259,
                  "0-10": 327.6,
                  "30-end": 460.8,
                  "20-30": 482.9
                },
                "goldPerMinDeltas": {
                  "10-20": 201.7,
                  "0-10": 218.1,
                  "30-end": 347.6,
                  "20-30": 290.20000000000005
                },
                "csDiffPerMinDeltas": {
                  "10-20": -3.4,
                  "0-10": -2.1999999999999993,
                  "30-end": -0.7999999999999998,
                  "20-30": -1.7000000000000002
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -316.1,
                  "0-10": -192.8,
                  "30-end": 197.40000000000003,
                  "20-30": -112.1
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 1298.1,
                  "0-10": 629.2,
                  "30-end": 2044.8,
                  "20-30": 1168.8
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -25.100000000000023,
                  "0-10": 147,
                  "30-end": -105.20000000000005,
                  "20-30": 168.7
                },
                "role": "SOLO",
                "lane": "TOP"
              }
            }, {
              "participantId": 2,
              "teamId": 100,
              "championId": 20,
              "spell1Id": 4,
              "spell2Id": 11,
              "stats": {
                "participantId": 2,
                "win": false,
                "item0": 3065,
                "item1": 1413,
                "item2": 3742,
                "item3": 3047,
                "item4": 3075,
                "item5": 1031,
                "item6": 3340,
                "kills": 4,
                "deaths": 8,
                "assists": 17,
                "largestKillingSpree": 0,
                "largestMultiKill": 1,
                "killingSprees": 0,
                "longestTimeSpentLiving": 469,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 215120,
                "magicDamageDealt": 130651,
                "physicalDamageDealt": 36556,
                "trueDamageDealt": 47912,
                "largestCriticalStrike": 45,
                "totalDamageDealtToChampions": 21428,
                "magicDamageDealtToChampions": 18039,
                "physicalDamageDealtToChampions": 2215,
                "trueDamageDealtToChampions": 1174,
                "totalHeal": 27806,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 77781,
                "damageDealtToObjectives": 4453,
                "damageDealtToTurrets": 0,
                "visionScore": 30,
                "timeCCingOthers": 59,
                "totalDamageTaken": 59774,
                "magicalDamageTaken": 16787,
                "physicalDamageTaken": 35443,
                "trueDamageTaken": 7543,
                "goldEarned": 14587,
                "goldSpent": 13650,
                "turretKills": 0,
                "inhibitorKills": 0,
                "totalMinionsKilled": 97,
                "neutralMinionsKilled": 113,
                "neutralMinionsKilledTeamJungle": 94,
                "neutralMinionsKilledEnemyJungle": 4,
                "totalTimeCrowdControlDealt": 656,
                "champLevel": 18,
                "visionWardsBoughtInGame": 0,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 14,
                "wardsKilled": 8,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8439,
                "perk0Var1": 1241,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8446,
                "perk1Var1": 0,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8429,
                "perk2Var1": 74,
                "perk2Var2": 25,
                "perk2Var3": 14,
                "perk3": 8242,
                "perk3Var1": 22,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 9111,
                "perk4Var1": 2120,
                "perk4Var2": 420,
                "perk4Var3": 0,
                "perk5": 9105,
                "perk5Var1": 18,
                "perk5Var2": 40,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8400,
                "perkSubStyle": 8000,
                "statPerk0": 5007,
                "statPerk1": 5002,
                "statPerk2": 5001
              },
              "timeline": {
                "participantId": 2,
                "creepsPerMinDeltas": {
                  "10-20": 1.8,
                  "0-10": 0.8,
                  "30-end": 2.6,
                  "20-30": 3.7
                },
                "xpPerMinDeltas": {
                  "10-20": 404.5,
                  "0-10": 268.6,
                  "30-end": 764.4,
                  "20-30": 606.2
                },
                "goldPerMinDeltas": {
                  "10-20": 368.8,
                  "0-10": 266.79999999999995,
                  "30-end": 411.2,
                  "20-30": 366.2
                },
                "csDiffPerMinDeltas": {
                  "10-20": 0.6000000000000001,
                  "0-10": 0.6000000000000001,
                  "30-end": -1.9999999999999996,
                  "20-30": 1.6999999999999997
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -113,
                  "0-10": -15.299999999999983,
                  "30-end": 129,
                  "20-30": 46.30000000000001
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 1270.5,
                  "0-10": 806.8,
                  "30-end": 2057.2,
                  "20-30": 2124.3
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 108.19999999999999,
                  "0-10": 162.00000000000006,
                  "30-end": 336.9999999999998,
                  "20-30": 565
                },
                "role": "NONE",
                "lane": "JUNGLE"
              }
            }, {
              "participantId": 3,
              "teamId": 100,
              "championId": 8,
              "spell1Id": 4,
              "spell2Id": 12,
              "stats": {
                "participantId": 3,
                "win": false,
                "item0": 3907,
                "item1": 3157,
                "item2": 3151,
                "item3": 3158,
                "item4": 1054,
                "item5": 1058,
                "item6": 3340,
                "kills": 3,
                "deaths": 6,
                "assists": 12,
                "largestKillingSpree": 2,
                "largestMultiKill": 2,
                "killingSprees": 1,
                "longestTimeSpentLiving": 658,
                "doubleKills": 1,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 159105,
                "magicDamageDealt": 142957,
                "physicalDamageDealt": 13428,
                "trueDamageDealt": 2720,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 21721,
                "magicDamageDealtToChampions": 20691,
                "physicalDamageDealtToChampions": 1029,
                "trueDamageDealtToChampions": 0,
                "totalHeal": 25851,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 24923,
                "damageDealtToObjectives": 7258,
                "damageDealtToTurrets": 3674,
                "visionScore": 29,
                "timeCCingOthers": 3,
                "totalDamageTaken": 36931,
                "magicalDamageTaken": 8842,
                "physicalDamageTaken": 24172,
                "trueDamageTaken": 3916,
                "goldEarned": 12501,
                "goldSpent": 11350,
                "turretKills": 0,
                "inhibitorKills": 1,
                "totalMinionsKilled": 219,
                "neutralMinionsKilled": 4,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 93,
                "champLevel": 17,
                "visionWardsBoughtInGame": 0,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 13,
                "wardsKilled": 6,
                "firstBloodKill": true,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8230,
                "perk0Var1": 16,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8275,
                "perk1Var1": 10,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8210,
                "perk2Var1": 0,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8236,
                "perk3Var1": 48,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8304,
                "perk4Var1": 10,
                "perk4Var2": 3,
                "perk4Var3": 0,
                "perk5": 8347,
                "perk5Var1": 0,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8200,
                "perkSubStyle": 8300,
                "statPerk0": 5008,
                "statPerk1": 5002,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 3,
                "creepsPerMinDeltas": {
                  "10-20": 6.199999999999999,
                  "0-10": 6.6,
                  "30-end": 5.4,
                  "20-30": 4.800000000000001
                },
                "xpPerMinDeltas": {
                  "10-20": 360.4,
                  "0-10": 424.1,
                  "30-end": 609.2,
                  "20-30": 432.4
                },
                "goldPerMinDeltas": {
                  "10-20": 285.3,
                  "0-10": 284.9,
                  "30-end": 498,
                  "20-30": 262.3
                },
                "csDiffPerMinDeltas": {
                  "10-20": 0.7999999999999998,
                  "0-10": -0.6999999999999997,
                  "30-end": 2.8000000000000003,
                  "20-30": 2
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -37.39999999999998,
                  "0-10": -43.80000000000001,
                  "30-end": 381.80000000000007,
                  "20-30": 4.400000000000034
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 852.4000000000001,
                  "0-10": 434,
                  "30-end": 1211.6,
                  "20-30": 1218.1
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 166.20000000000005,
                  "0-10": 132.3,
                  "30-end": 35,
                  "20-30": -44.69999999999993
                },
                "role": "SOLO",
                "lane": "MIDDLE"
              }
            }, {
              "participantId": 4,
              "teamId": 100,
              "championId": 25,
              "spell1Id": 4,
              "spell2Id": 14,
              "stats": {
                "participantId": 4,
                "win": false,
                "item0": 3905,
                "item1": 3105,
                "item2": 3092,
                "item3": 2065,
                "item4": 3801,
                "item5": 3117,
                "item6": 3364,
                "kills": 4,
                "deaths": 2,
                "assists": 23,
                "largestKillingSpree": 2,
                "largestMultiKill": 1,
                "killingSprees": 2,
                "longestTimeSpentLiving": 1477,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 28810,
                "magicDamageDealt": 22403,
                "physicalDamageDealt": 5413,
                "trueDamageDealt": 994,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 12624,
                "magicDamageDealtToChampions": 10636,
                "physicalDamageDealtToChampions": 994,
                "trueDamageDealtToChampions": 994,
                "totalHeal": 4340,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 12540,
                "damageDealtToObjectives": 1832,
                "damageDealtToTurrets": 327,
                "visionScore": 75,
                "timeCCingOthers": 60,
                "totalDamageTaken": 20490,
                "magicalDamageTaken": 6724,
                "physicalDamageTaken": 12090,
                "trueDamageTaken": 1675,
                "goldEarned": 11291,
                "goldSpent": 9875,
                "turretKills": 0,
                "inhibitorKills": 0,
                "totalMinionsKilled": 18,
                "neutralMinionsKilled": 0,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 103,
                "champLevel": 17,
                "visionWardsBoughtInGame": 9,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 40,
                "wardsKilled": 7,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 19,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8229,
                "perk0Var1": 1640,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8226,
                "perk1Var1": 250,
                "perk1Var2": 749,
                "perk1Var3": 0,
                "perk2": 8234,
                "perk2Var1": 17937,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8237,
                "perk3Var1": 785,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8313,
                "perk4Var1": 0,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8347,
                "perk5Var1": 0,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8200,
                "perkSubStyle": 8300,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 4,
                "creepsPerMinDeltas": {
                  "10-20": 0.5,
                  "0-10": 0.2,
                  "30-end": 1.4,
                  "20-30": 0.3
                },
                "xpPerMinDeltas": {
                  "10-20": 334,
                  "0-10": 271.2,
                  "30-end": 680.2,
                  "20-30": 508.9
                },
                "goldPerMinDeltas": {
                  "10-20": 229.1,
                  "0-10": 210.39999999999998,
                  "30-end": 394.4,
                  "20-30": 353.2
                },
                "csDiffPerMinDeltas": {
                  "10-20": 1.1,
                  "0-10": -1.0499999999999998,
                  "30-end": 1.4999999999999996,
                  "20-30": 0.6499999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 73.20000000000002,
                  "0-10": -13.800000000000011,
                  "30-end": 401.7000000000001,
                  "20-30": 83.84999999999997
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 251.3,
                  "0-10": 186.1,
                  "30-end": 788,
                  "20-30": 788.3
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -58.90000000000002,
                  "0-10": -29.30000000000001,
                  "30-end": -131.0999999999999,
                  "20-30": -389.75
                },
                "role": "DUO_SUPPORT",
                "lane": "BOTTOM"
              }
            }, {
              "participantId": 5,
              "teamId": 100,
              "championId": 45,
              "spell1Id": 4,
              "spell2Id": 12,
              "stats": {
                "participantId": 5,
                "win": false,
                "item0": 3285,
                "item1": 3157,
                "item2": 3040,
                "item3": 3041,
                "item4": 3089,
                "item5": 3020,
                "item6": 3363,
                "kills": 24,
                "deaths": 3,
                "assists": 4,
                "largestKillingSpree": 12,
                "largestMultiKill": 3,
                "killingSprees": 3,
                "longestTimeSpentLiving": 1450,
                "doubleKills": 4,
                "tripleKills": 2,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 324077,
                "magicDamageDealt": 312237,
                "physicalDamageDealt": 11304,
                "trueDamageDealt": 535,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 54746,
                "magicDamageDealtToChampions": 53816,
                "physicalDamageDealtToChampions": 676,
                "trueDamageDealtToChampions": 253,
                "totalHeal": 1964,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 12074,
                "damageDealtToObjectives": 11633,
                "damageDealtToTurrets": 5804,
                "visionScore": 24,
                "timeCCingOthers": 36,
                "totalDamageTaken": 17704,
                "magicalDamageTaken": 4902,
                "physicalDamageTaken": 10710,
                "trueDamageTaken": 2091,
                "goldEarned": 21219,
                "goldSpent": 16175,
                "turretKills": 1,
                "inhibitorKills": 0,
                "totalMinionsKilled": 276,
                "neutralMinionsKilled": 20,
                "neutralMinionsKilledTeamJungle": 14,
                "neutralMinionsKilledEnemyJungle": 2,
                "totalTimeCrowdControlDealt": 88,
                "champLevel": 18,
                "visionWardsBoughtInGame": 1,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 13,
                "wardsKilled": 2,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8229,
                "perk0Var1": 2508,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8226,
                "perk1Var1": 250,
                "perk1Var2": 1682,
                "perk1Var3": 0,
                "perk2": 8210,
                "perk2Var1": 40,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8236,
                "perk3Var1": 48,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8304,
                "perk4Var1": 12,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8345,
                "perk5Var1": 3,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8200,
                "perkSubStyle": 8300,
                "statPerk0": 5007,
                "statPerk1": 5002,
                "statPerk2": 5001
              },
              "timeline": {
                "participantId": 5,
                "creepsPerMinDeltas": {
                  "10-20": 9.3,
                  "0-10": 5.9,
                  "30-end": 6.8,
                  "20-30": 7.2
                },
                "xpPerMinDeltas": {
                  "10-20": 497.2,
                  "0-10": 295.3,
                  "30-end": 993.6,
                  "20-30": 695.6
                },
                "goldPerMinDeltas": {
                  "10-20": 435.2,
                  "0-10": 214,
                  "30-end": 848,
                  "20-30": 745.2
                },
                "csDiffPerMinDeltas": {
                  "10-20": 1.1,
                  "0-10": -1.0499999999999998,
                  "30-end": 1.4999999999999996,
                  "20-30": 0.6499999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 73.20000000000002,
                  "0-10": -13.800000000000011,
                  "30-end": 401.7000000000001,
                  "20-30": 83.84999999999997
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 149.6,
                  "0-10": 194.1,
                  "30-end": 757.4,
                  "20-30": 729.9000000000001
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -58.90000000000002,
                  "0-10": -29.30000000000001,
                  "30-end": -131.0999999999999,
                  "20-30": -389.75
                },
                "role": "DUO_CARRY",
                "lane": "BOTTOM"
              }
            }, {
              "participantId": 6,
              "teamId": 200,
              "championId": 91,
              "spell1Id": 14,
              "spell2Id": 4,
              "stats": {
                "participantId": 6,
                "win": true,
                "item0": 3814,
                "item1": 3077,
                "item2": 3142,
                "item3": 3117,
                "item4": 3147,
                "item5": 0,
                "item6": 3340,
                "kills": 6,
                "deaths": 10,
                "assists": 5,
                "largestKillingSpree": 2,
                "largestMultiKill": 1,
                "killingSprees": 2,
                "longestTimeSpentLiving": 809,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 161269,
                "magicDamageDealt": 602,
                "physicalDamageDealt": 156264,
                "trueDamageDealt": 4402,
                "largestCriticalStrike": 732,
                "totalDamageDealtToChampions": 20606,
                "magicDamageDealtToChampions": 602,
                "physicalDamageDealtToChampions": 19303,
                "trueDamageDealtToChampions": 700,
                "totalHeal": 3327,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 14028,
                "damageDealtToObjectives": 4821,
                "damageDealtToTurrets": 3159,
                "visionScore": 35,
                "timeCCingOthers": 3,
                "totalDamageTaken": 32004,
                "magicalDamageTaken": 22535,
                "physicalDamageTaken": 8799,
                "trueDamageTaken": 669,
                "goldEarned": 13310,
                "goldSpent": 11400,
                "turretKills": 1,
                "inhibitorKills": 0,
                "totalMinionsKilled": 195,
                "neutralMinionsKilled": 17,
                "neutralMinionsKilledTeamJungle": 4,
                "neutralMinionsKilledEnemyJungle": 9,
                "totalTimeCrowdControlDealt": 128,
                "champLevel": 16,
                "visionWardsBoughtInGame": 3,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 14,
                "wardsKilled": 5,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8112,
                "perk0Var1": 1088,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8139,
                "perk1Var1": 1661,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8138,
                "perk2Var1": 18,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8106,
                "perk3Var1": 5,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8233,
                "perk4Var1": 23,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8237,
                "perk5Var1": 666,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8100,
                "perkSubStyle": 8200,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 6,
                "creepsPerMinDeltas": {
                  "10-20": 5.4,
                  "0-10": 7.3,
                  "30-end": 2.6,
                  "20-30": 2.8000000000000003
                },
                "xpPerMinDeltas": {
                  "10-20": 397.79999999999995,
                  "0-10": 467.9,
                  "30-end": 227.4,
                  "20-30": 428
                },
                "goldPerMinDeltas": {
                  "10-20": 321.7,
                  "0-10": 260,
                  "30-end": 250,
                  "20-30": 394.6
                },
                "csDiffPerMinDeltas": {
                  "10-20": -0.7999999999999998,
                  "0-10": 0.6999999999999997,
                  "30-end": -2.8000000000000003,
                  "20-30": -2
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 37.39999999999998,
                  "0-10": 43.80000000000001,
                  "30-end": -381.80000000000007,
                  "20-30": -4.400000000000034
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 686.2,
                  "0-10": 301.7,
                  "30-end": 1176.6,
                  "20-30": 1262.8
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -166.20000000000005,
                  "0-10": -132.3,
                  "30-end": -35,
                  "20-30": 44.69999999999993
                },
                "role": "SOLO",
                "lane": "MIDDLE"
              }
            }, {
              "participantId": 7,
              "teamId": 200,
              "championId": 150,
              "spell1Id": 4,
              "spell2Id": 12,
              "stats": {
                "participantId": 7,
                "win": true,
                "item0": 3124,
                "item1": 3047,
                "item2": 3022,
                "item3": 3071,
                "item4": 3091,
                "item5": 3067,
                "item6": 3363,
                "kills": 11,
                "deaths": 7,
                "assists": 4,
                "largestKillingSpree": 7,
                "largestMultiKill": 2,
                "killingSprees": 2,
                "longestTimeSpentLiving": 869,
                "doubleKills": 1,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 227362,
                "magicDamageDealt": 35202,
                "physicalDamageDealt": 185656,
                "trueDamageDealt": 6503,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 35859,
                "magicDamageDealtToChampions": 6575,
                "physicalDamageDealtToChampions": 28807,
                "trueDamageDealtToChampions": 476,
                "totalHeal": 4232,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 34057,
                "damageDealtToObjectives": 14386,
                "damageDealtToTurrets": 10884,
                "visionScore": 39,
                "timeCCingOthers": 61,
                "totalDamageTaken": 47004,
                "magicalDamageTaken": 25371,
                "physicalDamageTaken": 19143,
                "trueDamageTaken": 2489,
                "goldEarned": 16177,
                "goldSpent": 15350,
                "turretKills": 3,
                "inhibitorKills": 0,
                "totalMinionsKilled": 228,
                "neutralMinionsKilled": 12,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 12,
                "totalTimeCrowdControlDealt": 809,
                "champLevel": 18,
                "visionWardsBoughtInGame": 4,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 15,
                "wardsKilled": 0,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": true,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8005,
                "perk0Var1": 2699,
                "perk0Var2": 1402,
                "perk0Var3": 1297,
                "perk1": 9111,
                "perk1Var1": 1261,
                "perk1Var2": 300,
                "perk1Var3": 0,
                "perk2": 9104,
                "perk2Var1": 12,
                "perk2Var2": 20,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 799,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8139,
                "perk4Var1": 1485,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8106,
                "perk5Var1": 5,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8100,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 7,
                "creepsPerMinDeltas": {
                  "10-20": 6.4,
                  "0-10": 6.5,
                  "30-end": 3.4,
                  "20-30": 7.4
                },
                "xpPerMinDeltas": {
                  "10-20": 575.1,
                  "0-10": 520.4,
                  "30-end": 263.4,
                  "20-30": 595
                },
                "goldPerMinDeltas": {
                  "10-20": 467.4,
                  "0-10": 386.5,
                  "30-end": 227.4,
                  "20-30": 477.2
                },
                "csDiffPerMinDeltas": {
                  "10-20": 3.4,
                  "0-10": 2.1999999999999993,
                  "30-end": 0.7999999999999998,
                  "20-30": 1.7000000000000002
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 316.1,
                  "0-10": 192.8,
                  "30-end": -197.40000000000003,
                  "20-30": 112.1
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 1323.2,
                  "0-10": 482.2,
                  "30-end": 2150,
                  "20-30": 1000.1
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 25.100000000000023,
                  "0-10": -147,
                  "30-end": 105.20000000000005,
                  "20-30": -168.7
                },
                "role": "SOLO",
                "lane": "TOP"
              }
            }, {
              "participantId": 8,
              "teamId": 200,
              "championId": 67,
              "spell1Id": 4,
              "spell2Id": 7,
              "stats": {
                "participantId": 8,
                "win": true,
                "item0": 3153,
                "item1": 3006,
                "item2": 3124,
                "item3": 3155,
                "item4": 3046,
                "item5": 3031,
                "item6": 3340,
                "kills": 11,
                "deaths": 9,
                "assists": 5,
                "largestKillingSpree": 4,
                "largestMultiKill": 3,
                "killingSprees": 3,
                "longestTimeSpentLiving": 620,
                "doubleKills": 1,
                "tripleKills": 1,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 223985,
                "magicDamageDealt": 5357,
                "physicalDamageDealt": 176086,
                "trueDamageDealt": 42541,
                "largestCriticalStrike": 851,
                "totalDamageDealtToChampions": 45118,
                "magicDamageDealtToChampions": 1568,
                "physicalDamageDealtToChampions": 28961,
                "trueDamageDealtToChampions": 14588,
                "totalHeal": 9509,
                "totalUnitsHealed": 2,
                "damageSelfMitigated": 15973,
                "damageDealtToObjectives": 23277,
                "damageDealtToTurrets": 10321,
                "visionScore": 38,
                "timeCCingOthers": 25,
                "totalDamageTaken": 36921,
                "magicalDamageTaken": 24740,
                "physicalDamageTaken": 10305,
                "trueDamageTaken": 1876,
                "goldEarned": 16863,
                "goldSpent": 15575,
                "turretKills": 3,
                "inhibitorKills": 3,
                "totalMinionsKilled": 230,
                "neutralMinionsKilled": 24,
                "neutralMinionsKilledTeamJungle": 16,
                "neutralMinionsKilledEnemyJungle": 4,
                "totalTimeCrowdControlDealt": 209,
                "champLevel": 16,
                "visionWardsBoughtInGame": 3,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 12,
                "wardsKilled": 4,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": true,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8005,
                "perk0Var1": 2807,
                "perk0Var2": 1304,
                "perk0Var3": 1503,
                "perk1": 9111,
                "perk1Var1": 938,
                "perk1Var2": 320,
                "perk1Var3": 0,
                "perk2": 9104,
                "perk2Var1": 19,
                "perk2Var2": 20,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 740,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8139,
                "perk4Var1": 1605,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8135,
                "perk5Var1": 4753,
                "perk5Var2": 5,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8100,
                "statPerk0": 5005,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 8,
                "creepsPerMinDeltas": {
                  "10-20": 7.3999999999999995,
                  "0-10": 8.2,
                  "30-end": 3.2,
                  "20-30": 4.9
                },
                "xpPerMinDeltas": {
                  "10-20": 385.20000000000005,
                  "0-10": 301.4,
                  "30-end": 476.2,
                  "20-30": 588.1
                },
                "goldPerMinDeltas": {
                  "10-20": 359.5,
                  "0-10": 292.7,
                  "30-end": 362.8,
                  "20-30": 540.9
                },
                "csDiffPerMinDeltas": {
                  "10-20": -1.1,
                  "0-10": 1.0499999999999998,
                  "30-end": -1.4999999999999996,
                  "20-30": -0.6499999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -73.20000000000002,
                  "0-10": 13.800000000000011,
                  "30-end": -401.7000000000001,
                  "20-30": -83.84999999999997
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 293.4,
                  "0-10": 257,
                  "30-end": 1371.2,
                  "20-30": 1789.1
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 58.90000000000002,
                  "0-10": 29.30000000000001,
                  "30-end": 131.0999999999999,
                  "20-30": 389.75
                },
                "role": "DUO_CARRY",
                "lane": "BOTTOM"
              }
            }, {
              "participantId": 9,
              "teamId": 200,
              "championId": 245,
              "spell1Id": 11,
              "spell2Id": 4,
              "stats": {
                "participantId": 9,
                "win": true,
                "item0": 1402,
                "item1": 3102,
                "item2": 3020,
                "item3": 3165,
                "item4": 3100,
                "item5": 1058,
                "item6": 3364,
                "kills": 5,
                "deaths": 8,
                "assists": 9,
                "largestKillingSpree": 2,
                "largestMultiKill": 1,
                "killingSprees": 2,
                "longestTimeSpentLiving": 560,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 252031,
                "magicDamageDealt": 192883,
                "physicalDamageDealt": 49389,
                "trueDamageDealt": 9758,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 36793,
                "magicDamageDealtToChampions": 29338,
                "physicalDamageDealtToChampions": 4051,
                "trueDamageDealtToChampions": 3403,
                "totalHeal": 17781,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 30520,
                "damageDealtToObjectives": 25726,
                "damageDealtToTurrets": 3877,
                "visionScore": 37,
                "timeCCingOthers": 22,
                "totalDamageTaken": 46974,
                "magicalDamageTaken": 23078,
                "physicalDamageTaken": 23071,
                "trueDamageTaken": 824,
                "goldEarned": 14803,
                "goldSpent": 14350,
                "turretKills": 1,
                "inhibitorKills": 1,
                "totalMinionsKilled": 62,
                "neutralMinionsKilled": 171,
                "neutralMinionsKilledTeamJungle": 105,
                "neutralMinionsKilledEnemyJungle": 17,
                "totalTimeCrowdControlDealt": 553,
                "champLevel": 17,
                "visionWardsBoughtInGame": 2,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 2,
                "wardsKilled": 7,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": true,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 2,
                "playerScore9": 0,
                "perk0": 8112,
                "perk0Var1": 2639,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8126,
                "perk1Var1": 1088,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8120,
                "perk2Var1": 0,
                "perk2Var2": 2,
                "perk2Var3": 1,
                "perk3": 8105,
                "perk3Var1": 16,
                "perk3Var2": 5,
                "perk3Var3": 0,
                "perk4": 8233,
                "perk4Var1": 19,
                "perk4Var2": 30,
                "perk4Var3": 0,
                "perk5": 8232,
                "perk5Var1": 7,
                "perk5Var2": 10,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8100,
                "perkSubStyle": 8200,
                "statPerk0": 5005,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 9,
                "creepsPerMinDeltas": {
                  "10-20": 1.2,
                  "0-10": 0.2,
                  "30-end": 4.6,
                  "20-30": 2
                },
                "xpPerMinDeltas": {
                  "10-20": 517.5,
                  "0-10": 283.9,
                  "30-end": 635.4,
                  "20-30": 559.9
                },
                "goldPerMinDeltas": {
                  "10-20": 412,
                  "0-10": 249,
                  "30-end": 594.6,
                  "20-30": 388.7
                },
                "csDiffPerMinDeltas": {
                  "10-20": -0.6000000000000001,
                  "0-10": -0.6000000000000001,
                  "30-end": 1.9999999999999996,
                  "20-30": -1.6999999999999997
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 113,
                  "0-10": 15.299999999999983,
                  "30-end": -129,
                  "20-30": -46.30000000000001
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 1162.3,
                  "0-10": 644.8,
                  "30-end": 1720.2,
                  "20-30": 1559.3
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -108.19999999999999,
                  "0-10": -162.00000000000006,
                  "30-end": -336.9999999999998,
                  "20-30": -565
                },
                "role": "NONE",
                "lane": "JUNGLE"
              }
            }, {
              "participantId": 10,
              "teamId": 200,
              "championId": 40,
              "spell1Id": 3,
              "spell2Id": 4,
              "stats": {
                "participantId": 10,
                "win": true,
                "item0": 3098,
                "item1": 0,
                "item2": 3222,
                "item3": 3504,
                "item4": 3174,
                "item5": 3009,
                "item6": 3364,
                "kills": 0,
                "deaths": 5,
                "assists": 14,
                "largestKillingSpree": 0,
                "largestMultiKill": 0,
                "killingSprees": 0,
                "longestTimeSpentLiving": 794,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 30432,
                "magicDamageDealt": 27716,
                "physicalDamageDealt": 2716,
                "trueDamageDealt": 0,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 8557,
                "magicDamageDealtToChampions": 8150,
                "physicalDamageDealtToChampions": 407,
                "trueDamageDealtToChampions": 0,
                "totalHeal": 7535,
                "totalUnitsHealed": 15,
                "damageSelfMitigated": 11992,
                "damageDealtToObjectives": 2660,
                "damageDealtToTurrets": 2660,
                "visionScore": 58,
                "timeCCingOthers": 38,
                "totalDamageTaken": 14001,
                "magicalDamageTaken": 11577,
                "physicalDamageTaken": 2233,
                "trueDamageTaken": 190,
                "goldEarned": 9766,
                "goldSpent": 8575,
                "turretKills": 1,
                "inhibitorKills": 0,
                "totalMinionsKilled": 27,
                "neutralMinionsKilled": 0,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 171,
                "champLevel": 15,
                "visionWardsBoughtInGame": 3,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 24,
                "wardsKilled": 6,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": true,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8214,
                "perk0Var1": 1120,
                "perk0Var2": 2837,
                "perk0Var3": 0,
                "perk1": 8226,
                "perk1Var1": 250,
                "perk1Var2": 885,
                "perk1Var3": 0,
                "perk2": 8210,
                "perk2Var1": 36,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8236,
                "perk3Var1": 48,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8347,
                "perk4Var1": 0,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8321,
                "perk5Var1": 10,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8200,
                "perkSubStyle": 8300,
                "statPerk0": 5007,
                "statPerk1": 5008,
                "statPerk2": 5001
              },
              "timeline": {
                "participantId": 10,
                "creepsPerMinDeltas": {
                  "10-20": 0.2,
                  "0-10": 0,
                  "30-end": 2,
                  "20-30": 1.3
                },
                "xpPerMinDeltas": {
                  "10-20": 299.6,
                  "0-10": 292.7,
                  "30-end": 394.2,
                  "20-30": 448.70000000000005
                },
                "goldPerMinDeltas": {
                  "10-20": 191.6,
                  "0-10": 140.4,
                  "30-end": 275.4,
                  "20-30": 342.5
                },
                "csDiffPerMinDeltas": {
                  "10-20": -1.1,
                  "0-10": 1.0499999999999998,
                  "30-end": -1.4999999999999996,
                  "20-30": -0.6499999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -73.20000000000002,
                  "0-10": 13.800000000000011,
                  "30-end": -401.7000000000001,
                  "20-30": -83.84999999999997
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 225.3,
                  "0-10": 181.8,
                  "30-end": 436.4,
                  "20-30": 508.6
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 58.90000000000002,
                  "0-10": 29.30000000000001,
                  "30-end": 131.0999999999999,
                  "20-30": 389.75
                },
                "role": "DUO_SUPPORT",
                "lane": "BOTTOM"
              }
            }],
            "participantIdentities": [{
              "participantId": 1,
              "player": {
                "platformId": "NA1",
                "accountId": "ZnJqvcakS-KPzurxaDYar_NL6BmA1LKNyFBVzlnOFzTULSc",
                "summonerName": "1 taps",
                "summonerId": "ELSh56TYN31bmY-Y5plvBW93xvD82KwYAMTaeSzcgwY1JUw",
                "currentPlatformId": "NA1",
                "currentAccountId": "ZnJqvcakS-KPzurxaDYar_NL6BmA1LKNyFBVzlnOFzTULSc",
                "matchHistoryUri": "/v1/stats/player_history/NA1/219854938",
                "profileIcon": 7
              }
            }, {
              "participantId": 2,
              "player": {
                "platformId": "NA1",
                "accountId": "nJZrRmLB86fTyaErFoQ_AyocR417kb1rXYF7Egi8Rt56DpE",
                "summonerName": "Tai op",
                "summonerId": "GANqOq-ftDvDWjLTqer0Og7xnSTEY4ymIO652jHMLDj_3a8",
                "currentPlatformId": "NA1",
                "currentAccountId": "nJZrRmLB86fTyaErFoQ_AyocR417kb1rXYF7Egi8Rt56DpE",
                "matchHistoryUri": "/v1/stats/player_history/NA1/240444349",
                "profileIcon": 7
              }
            }, {
              "participantId": 3,
              "player": {
                "platformId": "NA",
                "accountId": "ceDvqNsHkaE9lQPbRzTBWM62OMoH2UUpzgMJYyKRiAb84w",
                "summonerName": "StarkTheSavage",
                "summonerId": "M4JL1PWQWxlEGHy1u7Vb-n45DEUX9_OEh5dAJ4pDyRku9bI",
                "currentPlatformId": "NA1",
                "currentAccountId": "ceDvqNsHkaE9lQPbRzTBWM62OMoH2UUpzgMJYyKRiAb84w",
                "matchHistoryUri": "/v1/stats/player_history/NA/33360374",
                "profileIcon": 547
              }
            }, {
              "participantId": 4,
              "player": {
                "platformId": "NA",
                "accountId": "N8s9iFVtxo-SvHARptdzGXbJBW-6EuR2-8fCk6XyALqxZA",
                "summonerName": "Deterence",
                "summonerId": "3er44-Kp1Ay7Am1bguo70uPRVWsRjnkOAeSFp7_3ugdxOMI",
                "currentPlatformId": "NA1",
                "currentAccountId": "N8s9iFVtxo-SvHARptdzGXbJBW-6EuR2-8fCk6XyALqxZA",
                "matchHistoryUri": "/v1/stats/player_history/NA/36466846",
                "profileIcon": 508
              }
            }, {
              "participantId": 5,
              "player": {
                "platformId": "NA1",
                "accountId": "Kr5VbgQkFCE1uFb5hV0T4PrP7H1KpdI3T3OQEKpPo-ivY7k",
                "summonerName": "GO RNG 2019",
                "summonerId": "TprNoAuXfhJdBkhNPlsHrocNRFIKdu8fXqWp1ZEyvjbjkHs",
                "currentPlatformId": "NA1",
                "currentAccountId": "Kr5VbgQkFCE1uFb5hV0T4PrP7H1KpdI3T3OQEKpPo-ivY7k",
                "matchHistoryUri": "/v1/stats/player_history/NA1/220660417",
                "profileIcon": 3715
              }
            }, {
              "participantId": 6,
              "player": {
                "platformId": "NA1",
                "accountId": "-WOaEWb2-fAMmXmq5Y1bBjeR-l8MycrLWzh-4HYBUGLejIosMguC-chf",
                "summonerName": "AlvajXcRe",
                "summonerId": "9rGskmyyepBO1jjNyee46utDFwDHpOcWvsHN8HgRH3w0i7-7",
                "currentPlatformId": "NA1",
                "currentAccountId": "-WOaEWb2-fAMmXmq5Y1bBjeR-l8MycrLWzh-4HYBUGLejIosMguC-chf",
                "matchHistoryUri": "/v1/stats/player_history/NA1/2201047354952448",
                "profileIcon": 4331
              }
            }, {
              "participantId": 7,
              "player": {
                "platformId": "NA1",
                "accountId": "paV1Sg62-HlQ2obVPr3m4JoMUEUuXofZnPJQ2ZNOc4wPkg",
                "summonerName": "iCommander",
                "summonerId": "x2XkyCuouBQTJ0GNz_TPLrwFumzj0xZAVaYA2P1rzdSjYvA",
                "currentPlatformId": "NA1",
                "currentAccountId": "paV1Sg62-HlQ2obVPr3m4JoMUEUuXofZnPJQ2ZNOc4wPkg",
                "matchHistoryUri": "/v1/stats/player_history/NA1/42898141",
                "profileIcon": 4249
              }
            }, {
              "participantId": 8,
              "player": {
                "platformId": "NA1",
                "accountId": "OmpOyfXLDmlh5XvPYSV4TY1v1inlRxY8RzsddTR7ZMSt6g",
                "summonerName": "Bon Juvi",
                "summonerId": "YZE7SF-QL0d7uKgVfIzHZftwvpR1eoN5kxVN7QDh84z_n0A",
                "currentPlatformId": "NA1",
                "currentAccountId": "OmpOyfXLDmlh5XvPYSV4TY1v1inlRxY8RzsddTR7ZMSt6g",
                "matchHistoryUri": "/v1/stats/player_history/NA1/46910478",
                "profileIcon": 688
              }
            }, {
              "participantId": 9,
              "player": {
                "platformId": "NA1",
                "accountId": "kbVa9r619U75KrJKKPu5ByC3A7xAvvGFDgXOKuXfAg9LCA",
                "summonerName": "LalSidgeer",
                "summonerId": "4iCRk3HmBCl1NlwVXZHnjX2MxMwvdujOCkJTe_hjqP03MnU",
                "currentPlatformId": "NA1",
                "currentAccountId": "kbVa9r619U75KrJKKPu5ByC3A7xAvvGFDgXOKuXfAg9LCA",
                "matchHistoryUri": "/v1/stats/player_history/NA1/49426424",
                "profileIcon": 4249
              }
            }, {
              "participantId": 10,
              "player": {
                "platformId": "NA1",
                "accountId": "dmdG_4Aj0Wpu0D1kqVFfsmA2Dz6dYwIhEizT9AHezXQM7dA",
                "summonerName": "King of Vayne",
                "summonerId": "Tv4-0PCwII5noWxn9otCHj_7GoEdF4Da00AMrRqB8qQLWXE",
                "currentPlatformId": "NA1",
                "currentAccountId": "dmdG_4Aj0Wpu0D1kqVFfsmA2Dz6dYwIhEizT9AHezXQM7dA",
                "matchHistoryUri": "/v1/stats/player_history/NA1/201275784",
                "profileIcon": 3185
              }
            }]
          }, {
            "gameId": 3178015689,
            "platformId": "NA1",
            "gameCreation": 1571440821297,
            "gameDuration": 2187,
            "queueId": 420,
            "mapId": 11,
            "seasonId": 13,
            "gameVersion": "9.20.292.2452",
            "gameMode": "CLASSIC",
            "gameType": "MATCHED_GAME",
            "teams": [{
              "teamId": 100,
              "win": "Fail",
              "firstBlood": true,
              "firstTower": false,
              "firstInhibitor": false,
              "firstBaron": true,
              "firstDragon": false,
              "firstRiftHerald": true,
              "towerKills": 5,
              "inhibitorKills": 1,
              "baronKills": 2,
              "dragonKills": 2,
              "vilemawKills": 0,
              "riftHeraldKills": 1,
              "dominionVictoryScore": 0,
              "bans": [{
                "championId": 238,
                "pickTurn": 1
              }, {
                "championId": 53,
                "pickTurn": 2
              }, {
                "championId": 120,
                "pickTurn": 3
              }, {
                "championId": 121,
                "pickTurn": 4
              }, {
                "championId": 58,
                "pickTurn": 5
              }]
            }, {
              "teamId": 200,
              "win": "Win",
              "firstBlood": false,
              "firstTower": true,
              "firstInhibitor": true,
              "firstBaron": false,
              "firstDragon": true,
              "firstRiftHerald": false,
              "towerKills": 10,
              "inhibitorKills": 2,
              "baronKills": 0,
              "dragonKills": 3,
              "vilemawKills": 0,
              "riftHeraldKills": 0,
              "dominionVictoryScore": 0,
              "bans": [{
                "championId": 10,
                "pickTurn": 6
              }, {
                "championId": 121,
                "pickTurn": 7
              }, {
                "championId": 51,
                "pickTurn": 8
              }, {
                "championId": 35,
                "pickTurn": 9
              }, {
                "championId": -1,
                "pickTurn": 10
              }]
            }],
            "participants": [{
              "participantId": 1,
              "teamId": 100,
              "championId": 54,
              "spell1Id": 14,
              "spell2Id": 4,
              "stats": {
                "participantId": 1,
                "win": false,
                "item0": 3151,
                "item1": 3157,
                "item2": 3047,
                "item3": 3025,
                "item4": 3068,
                "item5": 0,
                "item6": 3340,
                "kills": 8,
                "deaths": 7,
                "assists": 8,
                "largestKillingSpree": 3,
                "largestMultiKill": 2,
                "killingSprees": 2,
                "longestTimeSpentLiving": 548,
                "doubleKills": 1,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 165784,
                "magicDamageDealt": 119767,
                "physicalDamageDealt": 41357,
                "trueDamageDealt": 4659,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 22431,
                "magicDamageDealtToChampions": 15484,
                "physicalDamageDealtToChampions": 5201,
                "trueDamageDealtToChampions": 1745,
                "totalHeal": 2751,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 46540,
                "damageDealtToObjectives": 9182,
                "damageDealtToTurrets": 1912,
                "visionScore": 26,
                "timeCCingOthers": 30,
                "totalDamageTaken": 22442,
                "magicalDamageTaken": 6740,
                "physicalDamageTaken": 12795,
                "trueDamageTaken": 2906,
                "goldEarned": 13715,
                "goldSpent": 13050,
                "turretKills": 0,
                "inhibitorKills": 1,
                "totalMinionsKilled": 208,
                "neutralMinionsKilled": 0,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 822,
                "champLevel": 18,
                "visionWardsBoughtInGame": 0,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 12,
                "wardsKilled": 7,
                "firstBloodKill": true,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8112,
                "perk0Var1": 1714,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8126,
                "perk1Var1": 765,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8138,
                "perk2Var1": 30,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8135,
                "perk3Var1": 2440,
                "perk3Var2": 4,
                "perk3Var3": 0,
                "perk4": 8224,
                "perk4Var1": 603,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8237,
                "perk5Var1": 510,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8100,
                "perkSubStyle": 8200,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 1,
                "creepsPerMinDeltas": {
                  "10-20": 6.7,
                  "0-10": 4.300000000000001,
                  "30-end": 7.2,
                  "20-30": 5.800000000000001
                },
                "xpPerMinDeltas": {
                  "10-20": 541,
                  "0-10": 360.79999999999995,
                  "30-end": 809,
                  "20-30": 529.1
                },
                "goldPerMinDeltas": {
                  "10-20": 476.4,
                  "0-10": 243.8,
                  "30-end": 420,
                  "20-30": 367.20000000000005
                },
                "csDiffPerMinDeltas": {
                  "10-20": 1.6000000000000003,
                  "0-10": -2.3,
                  "30-end": 3.4000000000000004,
                  "20-30": -0.09999999999999987
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 177.2,
                  "0-10": -61.10000000000002,
                  "30-end": 493.2,
                  "20-30": -84.4
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 574.4000000000001,
                  "0-10": 280,
                  "30-end": 485,
                  "20-30": 859.0999999999999
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -198.29999999999995,
                  "0-10": 53.7,
                  "30-end": -588,
                  "20-30": 159.19999999999996
                },
                "role": "SOLO",
                "lane": "MIDDLE"
              }
            }, {
              "participantId": 2,
              "teamId": 100,
              "championId": 517,
              "spell1Id": 4,
              "spell2Id": 12,
              "stats": {
                "participantId": 2,
                "win": false,
                "item0": 3152,
                "item1": 2033,
                "item2": 3157,
                "item3": 3165,
                "item4": 3100,
                "item5": 3020,
                "item6": 3340,
                "kills": 10,
                "deaths": 6,
                "assists": 3,
                "largestKillingSpree": 3,
                "largestMultiKill": 2,
                "killingSprees": 4,
                "longestTimeSpentLiving": 869,
                "doubleKills": 2,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 123236,
                "magicDamageDealt": 90251,
                "physicalDamageDealt": 13250,
                "trueDamageDealt": 19734,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 18536,
                "magicDamageDealtToChampions": 16808,
                "physicalDamageDealtToChampions": 600,
                "trueDamageDealtToChampions": 1127,
                "totalHeal": 7986,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 18069,
                "damageDealtToObjectives": 5681,
                "damageDealtToTurrets": 1845,
                "visionScore": 15,
                "timeCCingOthers": 16,
                "totalDamageTaken": 31054,
                "magicalDamageTaken": 7010,
                "physicalDamageTaken": 22278,
                "trueDamageTaken": 1765,
                "goldEarned": 13447,
                "goldSpent": 13200,
                "turretKills": 1,
                "inhibitorKills": 0,
                "totalMinionsKilled": 167,
                "neutralMinionsKilled": 1,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 448,
                "champLevel": 17,
                "visionWardsBoughtInGame": 0,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 10,
                "wardsKilled": 0,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8010,
                "perk0Var1": 379,
                "perk0Var2": 105,
                "perk0Var3": 469,
                "perk1": 9111,
                "perk1Var1": 488,
                "perk1Var2": 260,
                "perk1Var3": 0,
                "perk2": 9105,
                "perk2Var1": 17,
                "perk2Var2": 30,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 349,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8345,
                "perk4Var1": 3,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8352,
                "perk5Var1": 342,
                "perk5Var2": 1863,
                "perk5Var3": 1126,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8300,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 2,
                "creepsPerMinDeltas": {
                  "10-20": 4.8,
                  "0-10": 6.1,
                  "30-end": 3.8,
                  "20-30": 3.9
                },
                "xpPerMinDeltas": {
                  "10-20": 395.6,
                  "0-10": 476.5,
                  "30-end": 532.2,
                  "20-30": 478.1
                },
                "goldPerMinDeltas": {
                  "10-20": 350.5,
                  "0-10": 252.39999999999998,
                  "30-end": 451.6,
                  "20-30": 384.3
                },
                "csDiffPerMinDeltas": {
                  "10-20": -2,
                  "0-10": -1.1,
                  "30-end": -6.2,
                  "20-30": 0.7
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -93.00000000000003,
                  "0-10": 51,
                  "30-end": -133.19999999999993,
                  "20-30": -71.09999999999997
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 861.5999999999999,
                  "0-10": 450.79999999999995,
                  "30-end": 1008.6,
                  "20-30": 923
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 92.89999999999998,
                  "0-10": -47.79999999999998,
                  "30-end": -446.4,
                  "20-30": -231
                },
                "role": "SOLO",
                "lane": "TOP"
              }
            }, {
              "participantId": 3,
              "teamId": 100,
              "championId": 28,
              "spell1Id": 11,
              "spell2Id": 4,
              "stats": {
                "participantId": 3,
                "win": false,
                "item0": 1402,
                "item1": 1052,
                "item2": 3020,
                "item3": 3100,
                "item4": 3089,
                "item5": 1026,
                "item6": 3340,
                "kills": 2,
                "deaths": 8,
                "assists": 12,
                "largestKillingSpree": 0,
                "largestMultiKill": 1,
                "killingSprees": 0,
                "longestTimeSpentLiving": 792,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 187300,
                "magicDamageDealt": 158773,
                "physicalDamageDealt": 17542,
                "trueDamageDealt": 10983,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 14336,
                "magicDamageDealtToChampions": 12580,
                "physicalDamageDealtToChampions": 944,
                "trueDamageDealtToChampions": 812,
                "totalHeal": 9476,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 15189,
                "damageDealtToObjectives": 20514,
                "damageDealtToTurrets": 532,
                "visionScore": 28,
                "timeCCingOthers": 8,
                "totalDamageTaken": 27167,
                "magicalDamageTaken": 5757,
                "physicalDamageTaken": 18828,
                "trueDamageTaken": 2581,
                "goldEarned": 12599,
                "goldSpent": 11835,
                "turretKills": 0,
                "inhibitorKills": 0,
                "totalMinionsKilled": 29,
                "neutralMinionsKilled": 166,
                "neutralMinionsKilledTeamJungle": 119,
                "neutralMinionsKilledEnemyJungle": 2,
                "totalTimeCrowdControlDealt": 249,
                "champLevel": 16,
                "visionWardsBoughtInGame": 0,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 11,
                "wardsKilled": 4,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8112,
                "perk0Var1": 1380,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8143,
                "perk1Var1": 634,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8138,
                "perk2Var1": 30,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8105,
                "perk3Var1": 13,
                "perk3Var2": 4,
                "perk3Var3": 0,
                "perk4": 8233,
                "perk4Var1": 22,
                "perk4Var2": 50,
                "perk4Var3": 0,
                "perk5": 8236,
                "perk5Var1": 48,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8100,
                "perkSubStyle": 8200,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 3,
                "creepsPerMinDeltas": {
                  "10-20": 0.4,
                  "0-10": 0,
                  "30-end": 2.6,
                  "20-30": 1.2000000000000002
                },
                "xpPerMinDeltas": {
                  "10-20": 515.2,
                  "0-10": 327.5,
                  "30-end": 501,
                  "20-30": 430.7
                },
                "goldPerMinDeltas": {
                  "10-20": 387.9,
                  "0-10": 274.1,
                  "30-end": 321.8,
                  "20-30": 346.4
                },
                "csDiffPerMinDeltas": {
                  "10-20": -0.4,
                  "0-10": 0,
                  "30-end": 1.8,
                  "20-30": -0.3999999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 25.80000000000004,
                  "0-10": 69.70000000000002,
                  "30-end": 117,
                  "20-30": -58.599999999999994
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 756.2,
                  "0-10": 507.2,
                  "30-end": 756,
                  "20-30": 883.2
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 73.89999999999998,
                  "0-10": 23.30000000000001,
                  "30-end": 132.20000000000005,
                  "20-30": -99.40000000000003
                },
                "role": "NONE",
                "lane": "JUNGLE"
              }
            }, {
              "participantId": 4,
              "teamId": 100,
              "championId": 412,
              "spell1Id": 4,
              "spell2Id": 14,
              "stats": {
                "participantId": 4,
                "win": false,
                "item0": 3107,
                "item1": 2055,
                "item2": 3069,
                "item3": 3117,
                "item4": 3024,
                "item5": 3050,
                "item6": 3364,
                "kills": 1,
                "deaths": 6,
                "assists": 17,
                "largestKillingSpree": 0,
                "largestMultiKill": 1,
                "killingSprees": 0,
                "longestTimeSpentLiving": 557,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 18407,
                "magicDamageDealt": 12029,
                "physicalDamageDealt": 4740,
                "trueDamageDealt": 1638,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 8718,
                "magicDamageDealtToChampions": 6972,
                "physicalDamageDealtToChampions": 657,
                "trueDamageDealtToChampions": 1088,
                "totalHeal": 2832,
                "totalUnitsHealed": 5,
                "damageSelfMitigated": 20487,
                "damageDealtToObjectives": 3035,
                "damageDealtToTurrets": 319,
                "visionScore": 86,
                "timeCCingOthers": 38,
                "totalDamageTaken": 19735,
                "magicalDamageTaken": 6704,
                "physicalDamageTaken": 11705,
                "trueDamageTaken": 1325,
                "goldEarned": 9558,
                "goldSpent": 8325,
                "turretKills": 0,
                "inhibitorKills": 0,
                "totalMinionsKilled": 16,
                "neutralMinionsKilled": 4,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 116,
                "champLevel": 15,
                "visionWardsBoughtInGame": 7,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 41,
                "wardsKilled": 10,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8439,
                "perk0Var1": 372,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8463,
                "perk1Var1": 1150,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8444,
                "perk2Var1": 1030,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8451,
                "perk3Var1": 182,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8306,
                "perk4Var1": 0,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8345,
                "perk5Var1": 3,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8400,
                "perkSubStyle": 8300,
                "statPerk0": 5007,
                "statPerk1": 5002,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 4,
                "creepsPerMinDeltas": {
                  "10-20": 0.7,
                  "0-10": 0,
                  "30-end": 0.4,
                  "20-30": 0.7
                },
                "xpPerMinDeltas": {
                  "10-20": 336.8,
                  "0-10": 271.2,
                  "30-end": 596.6,
                  "20-30": 340.40000000000003
                },
                "goldPerMinDeltas": {
                  "10-20": 288.4,
                  "0-10": 154.4,
                  "30-end": 343.4,
                  "20-30": 249.3
                },
                "csDiffPerMinDeltas": {
                  "10-20": -1.4500000000000002,
                  "0-10": -0.5000000000000004,
                  "30-end": 0.20000000000000062,
                  "20-30": -0.8999999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -59.95000000000002,
                  "0-10": 3.6500000000000057,
                  "30-end": 245.7,
                  "20-30": -32.74999999999994
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 342,
                  "0-10": 258.8,
                  "30-end": 626.4,
                  "20-30": 797.5
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 126.79999999999995,
                  "0-10": -27.29999999999997,
                  "30-end": 288.89999999999986,
                  "20-30": 226.3499999999999
                },
                "role": "DUO_SUPPORT",
                "lane": "BOTTOM"
              }
            }, {
              "participantId": 5,
              "teamId": 100,
              "championId": 67,
              "spell1Id": 7,
              "spell2Id": 4,
              "stats": {
                "participantId": 5,
                "win": false,
                "item0": 3140,
                "item1": 3153,
                "item2": 3031,
                "item3": 3124,
                "item4": 3046,
                "item5": 3006,
                "item6": 3363,
                "kills": 8,
                "deaths": 4,
                "assists": 6,
                "largestKillingSpree": 5,
                "largestMultiKill": 1,
                "killingSprees": 1,
                "longestTimeSpentLiving": 1057,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 221398,
                "magicDamageDealt": 6094,
                "physicalDamageDealt": 152474,
                "trueDamageDealt": 62829,
                "largestCriticalStrike": 652,
                "totalDamageDealtToChampions": 31132,
                "magicDamageDealtToChampions": 1065,
                "physicalDamageDealtToChampions": 22888,
                "trueDamageDealtToChampions": 7178,
                "totalHeal": 4667,
                "totalUnitsHealed": 3,
                "damageSelfMitigated": 14179,
                "damageDealtToObjectives": 32671,
                "damageDealtToTurrets": 6065,
                "visionScore": 45,
                "timeCCingOthers": 19,
                "totalDamageTaken": 28364,
                "magicalDamageTaken": 8812,
                "physicalDamageTaken": 17447,
                "trueDamageTaken": 2104,
                "goldEarned": 16644,
                "goldSpent": 16250,
                "turretKills": 3,
                "inhibitorKills": 0,
                "totalMinionsKilled": 231,
                "neutralMinionsKilled": 16,
                "neutralMinionsKilledTeamJungle": 12,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 176,
                "champLevel": 17,
                "visionWardsBoughtInGame": 6,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 19,
                "wardsKilled": 7,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8005,
                "perk0Var1": 1970,
                "perk0Var2": 1238,
                "perk0Var3": 731,
                "perk1": 9111,
                "perk1Var1": 687,
                "perk1Var2": 280,
                "perk1Var3": 0,
                "perk2": 9104,
                "perk2Var1": 19,
                "perk2Var2": 50,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 568,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8304,
                "perk4Var1": 12,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8345,
                "perk5Var1": 3,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8300,
                "statPerk0": 5005,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 5,
                "creepsPerMinDeltas": {
                  "10-20": 6.6,
                  "0-10": 6.8,
                  "30-end": 6.2,
                  "20-30": 6.5
                },
                "xpPerMinDeltas": {
                  "10-20": 423.6,
                  "0-10": 311.8,
                  "30-end": 663.4,
                  "20-30": 576
                },
                "goldPerMinDeltas": {
                  "10-20": 393.79999999999995,
                  "0-10": 240.6,
                  "30-end": 672.2,
                  "20-30": 561.2
                },
                "csDiffPerMinDeltas": {
                  "10-20": -1.4500000000000002,
                  "0-10": -0.5000000000000004,
                  "30-end": 0.20000000000000062,
                  "20-30": -0.8999999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -59.95000000000002,
                  "0-10": 3.6500000000000057,
                  "30-end": 245.7,
                  "20-30": -32.74999999999994
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 537.3,
                  "0-10": 264.8,
                  "30-end": 1453.8,
                  "20-30": 1065.1
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 126.79999999999995,
                  "0-10": -27.29999999999997,
                  "30-end": 288.89999999999986,
                  "20-30": 226.3499999999999
                },
                "role": "DUO_CARRY",
                "lane": "BOTTOM"
              }
            }, {
              "participantId": 6,
              "teamId": 200,
              "championId": 60,
              "spell1Id": 4,
              "spell2Id": 11,
              "stats": {
                "participantId": 6,
                "win": true,
                "item0": 3108,
                "item1": 1029,
                "item2": 3742,
                "item3": 3020,
                "item4": 1402,
                "item5": 3116,
                "item6": 3364,
                "kills": 5,
                "deaths": 8,
                "assists": 14,
                "largestKillingSpree": 2,
                "largestMultiKill": 2,
                "killingSprees": 2,
                "longestTimeSpentLiving": 481,
                "doubleKills": 1,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 156068,
                "magicDamageDealt": 114036,
                "physicalDamageDealt": 30454,
                "trueDamageDealt": 11578,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 19783,
                "magicDamageDealtToChampions": 17318,
                "physicalDamageDealtToChampions": 888,
                "trueDamageDealtToChampions": 1576,
                "totalHeal": 7366,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 11847,
                "damageDealtToObjectives": 15599,
                "damageDealtToTurrets": 6602,
                "visionScore": 28,
                "timeCCingOthers": 43,
                "totalDamageTaken": 26890,
                "magicalDamageTaken": 13765,
                "physicalDamageTaken": 11271,
                "trueDamageTaken": 1853,
                "goldEarned": 12850,
                "goldSpent": 11005,
                "turretKills": 4,
                "inhibitorKills": 0,
                "totalMinionsKilled": 28,
                "neutralMinionsKilled": 123,
                "neutralMinionsKilledTeamJungle": 82,
                "neutralMinionsKilledEnemyJungle": 9,
                "totalTimeCrowdControlDealt": 268,
                "champLevel": 16,
                "visionWardsBoughtInGame": 5,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 6,
                "wardsKilled": 4,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8112,
                "perk0Var1": 1560,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8126,
                "perk1Var1": 593,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8138,
                "perk2Var1": 30,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8105,
                "perk3Var1": 15,
                "perk3Var2": 5,
                "perk3Var3": 0,
                "perk4": 8210,
                "perk4Var1": 0,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8236,
                "perk5Var1": 48,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8100,
                "perkSubStyle": 8200,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 6,
                "creepsPerMinDeltas": {
                  "10-20": 0.8,
                  "0-10": 0,
                  "30-end": 0.8,
                  "20-30": 1.6
                },
                "xpPerMinDeltas": {
                  "10-20": 489.4,
                  "0-10": 257.79999999999995,
                  "30-end": 384,
                  "20-30": 489.29999999999995
                },
                "goldPerMinDeltas": {
                  "10-20": 339,
                  "0-10": 226.10000000000002,
                  "30-end": 261.4,
                  "20-30": 416.4
                },
                "csDiffPerMinDeltas": {
                  "10-20": 0.4,
                  "0-10": 0,
                  "30-end": -1.8,
                  "20-30": 0.3999999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -25.80000000000004,
                  "0-10": -69.70000000000002,
                  "30-end": -117,
                  "20-30": 58.599999999999994
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 682.3,
                  "0-10": 483.9,
                  "30-end": 623.8,
                  "20-30": 982.6
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -73.89999999999998,
                  "0-10": -23.30000000000001,
                  "30-end": -132.20000000000005,
                  "20-30": 99.40000000000003
                },
                "role": "NONE",
                "lane": "JUNGLE"
              }
            }, {
              "participantId": 7,
              "teamId": 200,
              "championId": 157,
              "spell1Id": 4,
              "spell2Id": 14,
              "stats": {
                "participantId": 7,
                "win": true,
                "item0": 3031,
                "item1": 3139,
                "item2": 3006,
                "item3": 3046,
                "item4": 1031,
                "item5": 1055,
                "item6": 3340,
                "kills": 4,
                "deaths": 8,
                "assists": 8,
                "largestKillingSpree": 2,
                "largestMultiKill": 1,
                "killingSprees": 1,
                "longestTimeSpentLiving": 817,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 161875,
                "magicDamageDealt": 6708,
                "physicalDamageDealt": 153670,
                "trueDamageDealt": 1496,
                "largestCriticalStrike": 575,
                "totalDamageDealtToChampions": 13725,
                "magicDamageDealtToChampions": 627,
                "physicalDamageDealtToChampions": 11963,
                "trueDamageDealtToChampions": 1134,
                "totalHeal": 4371,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 25836,
                "damageDealtToObjectives": 4039,
                "damageDealtToTurrets": 1922,
                "visionScore": 26,
                "timeCCingOthers": 24,
                "totalDamageTaken": 25471,
                "magicalDamageTaken": 11283,
                "physicalDamageTaken": 12212,
                "trueDamageTaken": 1975,
                "goldEarned": 13071,
                "goldSpent": 12200,
                "turretKills": 1,
                "inhibitorKills": 0,
                "totalMinionsKilled": 200,
                "neutralMinionsKilled": 20,
                "neutralMinionsKilledTeamJungle": 6,
                "neutralMinionsKilledEnemyJungle": 8,
                "totalTimeCrowdControlDealt": 136,
                "champLevel": 17,
                "visionWardsBoughtInGame": 2,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 10,
                "wardsKilled": 5,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8010,
                "perk0Var1": 868,
                "perk0Var2": 530,
                "perk0Var3": 942,
                "perk1": 9111,
                "perk1Var1": 1022,
                "perk1Var2": 240,
                "perk1Var3": 0,
                "perk2": 9104,
                "perk2Var1": 19,
                "perk2Var2": 50,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 277,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8139,
                "perk4Var1": 722,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8135,
                "perk5Var1": 1657,
                "perk5Var2": 5,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8100,
                "statPerk0": 5005,
                "statPerk1": 5008,
                "statPerk2": 5003
              },
              "timeline": {
                "participantId": 7,
                "creepsPerMinDeltas": {
                  "10-20": 5.1,
                  "0-10": 6.6,
                  "30-end": 3.8,
                  "20-30": 5.9
                },
                "xpPerMinDeltas": {
                  "10-20": 363.8,
                  "0-10": 421.9,
                  "30-end": 315.8,
                  "20-30": 613.5
                },
                "goldPerMinDeltas": {
                  "10-20": 299.2,
                  "0-10": 298.5,
                  "30-end": 272.2,
                  "20-30": 450.1
                },
                "csDiffPerMinDeltas": {
                  "10-20": -1.6000000000000003,
                  "0-10": 2.3,
                  "30-end": -3.4000000000000004,
                  "20-30": 0.09999999999999987
                },
                "xpDiffPerMinDeltas": {
                  "10-20": -177.2,
                  "0-10": 61.10000000000002,
                  "30-end": -493.2,
                  "20-30": 84.4
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 772.7,
                  "0-10": 226.3,
                  "30-end": 1073,
                  "20-30": 699.9
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": 198.29999999999995,
                  "0-10": -53.7,
                  "30-end": 588,
                  "20-30": -159.19999999999996
                },
                "role": "SOLO",
                "lane": "MIDDLE"
              }
            }, {
              "participantId": 8,
              "teamId": 200,
              "championId": 555,
              "spell1Id": 4,
              "spell2Id": 14,
              "stats": {
                "participantId": 8,
                "win": true,
                "item0": 3142,
                "item1": 2421,
                "item2": 3096,
                "item3": 2055,
                "item4": 3147,
                "item5": 3117,
                "item6": 3364,
                "kills": 4,
                "deaths": 6,
                "assists": 7,
                "largestKillingSpree": 2,
                "largestMultiKill": 1,
                "killingSprees": 1,
                "longestTimeSpentLiving": 924,
                "doubleKills": 0,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 18244,
                "magicDamageDealt": 167,
                "physicalDamageDealt": 16192,
                "trueDamageDealt": 1885,
                "largestCriticalStrike": 0,
                "totalDamageDealtToChampions": 7201,
                "magicDamageDealtToChampions": 167,
                "physicalDamageDealtToChampions": 5416,
                "trueDamageDealtToChampions": 1617,
                "totalHeal": 7257,
                "totalUnitsHealed": 5,
                "damageSelfMitigated": 10515,
                "damageDealtToObjectives": 1704,
                "damageDealtToTurrets": 334,
                "visionScore": 74,
                "timeCCingOthers": 26,
                "totalDamageTaken": 21278,
                "magicalDamageTaken": 12658,
                "physicalDamageTaken": 6655,
                "trueDamageTaken": 1964,
                "goldEarned": 11021,
                "goldSpent": 9225,
                "turretKills": 0,
                "inhibitorKills": 1,
                "totalMinionsKilled": 25,
                "neutralMinionsKilled": 0,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 105,
                "champLevel": 14,
                "visionWardsBoughtInGame": 5,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 21,
                "wardsKilled": 19,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": true,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8439,
                "perk0Var1": 350,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 8463,
                "perk1Var1": 751,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 8444,
                "perk2Var1": 944,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "perk3": 8453,
                "perk3Var1": 649,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8009,
                "perk4Var1": 1279,
                "perk4Var2": 72,
                "perk4Var3": 0,
                "perk5": 8014,
                "perk5Var1": 27,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8400,
                "perkSubStyle": 8000,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 8,
                "creepsPerMinDeltas": {
                  "10-20": 0.7999999999999999,
                  "0-10": 0.30000000000000004,
                  "30-end": 0.6,
                  "20-30": 1.1
                },
                "xpPerMinDeltas": {
                  "10-20": 292.20000000000005,
                  "0-10": 283.20000000000005,
                  "30-end": 282.6,
                  "20-30": 311.29999999999995
                },
                "goldPerMinDeltas": {
                  "10-20": 280.4,
                  "0-10": 236.7,
                  "30-end": 215.4,
                  "20-30": 337.8
                },
                "csDiffPerMinDeltas": {
                  "10-20": 1.4500000000000002,
                  "0-10": 0.5000000000000004,
                  "30-end": -0.20000000000000062,
                  "20-30": 0.8999999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 59.95000000000002,
                  "0-10": -3.6500000000000057,
                  "30-end": -245.7,
                  "20-30": 32.74999999999994
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 421.90000000000003,
                  "0-10": 305,
                  "30-end": 864.4,
                  "20-30": 818.9000000000001
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -126.79999999999995,
                  "0-10": 27.29999999999997,
                  "30-end": -288.89999999999986,
                  "20-30": -226.3499999999999
                },
                "role": "DUO_SUPPORT",
                "lane": "BOTTOM"
              }
            }, {
              "participantId": 9,
              "teamId": 200,
              "championId": 145,
              "spell1Id": 7,
              "spell2Id": 4,
              "stats": {
                "participantId": 9,
                "win": true,
                "item0": 3046,
                "item1": 3157,
                "item2": 3006,
                "item3": 3124,
                "item4": 3115,
                "item5": 3042,
                "item6": 3363,
                "kills": 10,
                "deaths": 1,
                "assists": 6,
                "largestKillingSpree": 6,
                "largestMultiKill": 2,
                "killingSprees": 2,
                "longestTimeSpentLiving": 1783,
                "doubleKills": 3,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 256691,
                "magicDamageDealt": 54965,
                "physicalDamageDealt": 186245,
                "trueDamageDealt": 15480,
                "largestCriticalStrike": 381,
                "totalDamageDealtToChampions": 32283,
                "magicDamageDealtToChampions": 14380,
                "physicalDamageDealtToChampions": 17498,
                "trueDamageDealtToChampions": 404,
                "totalHeal": 3665,
                "totalUnitsHealed": 4,
                "damageSelfMitigated": 12129,
                "damageDealtToObjectives": 27107,
                "damageDealtToTurrets": 7829,
                "visionScore": 40,
                "timeCCingOthers": 4,
                "totalDamageTaken": 15840,
                "magicalDamageTaken": 5566,
                "physicalDamageTaken": 8519,
                "trueDamageTaken": 1753,
                "goldEarned": 17694,
                "goldSpent": 15875,
                "turretKills": 1,
                "inhibitorKills": 1,
                "totalMinionsKilled": 283,
                "neutralMinionsKilled": 35,
                "neutralMinionsKilledTeamJungle": 25,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 86,
                "champLevel": 18,
                "visionWardsBoughtInGame": 5,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 13,
                "wardsKilled": 3,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8005,
                "perk0Var1": 1170,
                "perk0Var2": 858,
                "perk0Var3": 312,
                "perk1": 9101,
                "perk1Var1": 3026,
                "perk1Var2": 3098,
                "perk1Var3": 0,
                "perk2": 9103,
                "perk2Var1": 26,
                "perk2Var2": 50,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 758,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8304,
                "perk4Var1": 11,
                "perk4Var2": 1,
                "perk4Var3": 5,
                "perk5": 8345,
                "perk5Var1": 3,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8300,
                "statPerk0": 5005,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 9,
                "creepsPerMinDeltas": {
                  "10-20": 9.4,
                  "0-10": 7.5,
                  "30-end": 5.6,
                  "20-30": 7.8999999999999995
                },
                "xpPerMinDeltas": {
                  "10-20": 588.1,
                  "0-10": 292.5,
                  "30-end": 486,
                  "20-30": 670.5999999999999
                },
                "goldPerMinDeltas": {
                  "10-20": 424.79999999999995,
                  "0-10": 255,
                  "30-end": 547.8,
                  "20-30": 592.2
                },
                "csDiffPerMinDeltas": {
                  "10-20": 1.4500000000000002,
                  "0-10": 0.5000000000000004,
                  "30-end": -0.20000000000000062,
                  "20-30": 0.8999999999999999
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 59.95000000000002,
                  "0-10": -3.6500000000000057,
                  "30-end": -245.7,
                  "20-30": 32.74999999999994
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 203.8,
                  "0-10": 273.2,
                  "30-end": 638,
                  "20-30": 591
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -126.79999999999995,
                  "0-10": 27.29999999999997,
                  "30-end": -288.89999999999986,
                  "20-30": -226.3499999999999
                },
                "role": "DUO_CARRY",
                "lane": "BOTTOM"
              }
            }, {
              "participantId": 10,
              "teamId": 200,
              "championId": 86,
              "spell1Id": 14,
              "spell2Id": 4,
              "stats": {
                "participantId": 10,
                "win": true,
                "item0": 3031,
                "item1": 3078,
                "item2": 3046,
                "item3": 3111,
                "item4": 3053,
                "item5": 1053,
                "item6": 3340,
                "kills": 8,
                "deaths": 6,
                "assists": 10,
                "largestKillingSpree": 4,
                "largestMultiKill": 3,
                "killingSprees": 3,
                "longestTimeSpentLiving": 585,
                "doubleKills": 2,
                "tripleKills": 1,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 221492,
                "magicDamageDealt": 0,
                "physicalDamageDealt": 209644,
                "trueDamageDealt": 11847,
                "largestCriticalStrike": 1040,
                "totalDamageDealtToChampions": 24980,
                "magicDamageDealtToChampions": 0,
                "physicalDamageDealtToChampions": 19028,
                "trueDamageDealtToChampions": 5951,
                "totalHeal": 3034,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 35507,
                "damageDealtToObjectives": 12723,
                "damageDealtToTurrets": 12723,
                "visionScore": 16,
                "timeCCingOthers": 35,
                "totalDamageTaken": 34833,
                "magicalDamageTaken": 12883,
                "physicalDamageTaken": 17543,
                "trueDamageTaken": 4405,
                "goldEarned": 16743,
                "goldSpent": 15583,
                "turretKills": 3,
                "inhibitorKills": 0,
                "totalMinionsKilled": 222,
                "neutralMinionsKilled": 44,
                "neutralMinionsKilledTeamJungle": 36,
                "neutralMinionsKilledEnemyJungle": 8,
                "totalTimeCrowdControlDealt": 141,
                "champLevel": 18,
                "visionWardsBoughtInGame": 0,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 11,
                "wardsKilled": 1,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": true,
                "firstTowerAssist": false,
                "firstInhibitorKill": false,
                "firstInhibitorAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8010,
                "perk0Var1": 1350,
                "perk0Var2": 710,
                "perk0Var3": 1661,
                "perk1": 9111,
                "perk1Var1": 1463,
                "perk1Var2": 360,
                "perk1Var3": 0,
                "perk2": 9105,
                "perk2Var1": 13,
                "perk2Var2": 20,
                "perk2Var3": 0,
                "perk3": 8299,
                "perk3Var1": 475,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8473,
                "perk4Var1": 1031,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8446,
                "perk5Var1": 2339,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8400,
                "statPerk0": 5008,
                "statPerk1": 5008,
                "statPerk2": 5002
              },
              "timeline": {
                "participantId": 10,
                "creepsPerMinDeltas": {
                  "10-20": 6.8,
                  "0-10": 7.2,
                  "30-end": 10,
                  "20-30": 3.2
                },
                "xpPerMinDeltas": {
                  "10-20": 488.6,
                  "0-10": 425.5,
                  "30-end": 665.4,
                  "20-30": 549.2
                },
                "goldPerMinDeltas": {
                  "10-20": 549.8,
                  "0-10": 261.7,
                  "30-end": 532.8,
                  "20-30": 480.5
                },
                "csDiffPerMinDeltas": {
                  "10-20": 2,
                  "0-10": 1.1,
                  "30-end": 6.2,
                  "20-30": -0.7
                },
                "xpDiffPerMinDeltas": {
                  "10-20": 93.00000000000003,
                  "0-10": -51,
                  "30-end": 133.19999999999993,
                  "20-30": 71.09999999999997
                },
                "damageTakenPerMinDeltas": {
                  "10-20": 768.7,
                  "0-10": 498.59999999999997,
                  "30-end": 1455,
                  "20-30": 1154
                },
                "damageTakenDiffPerMinDeltas": {
                  "10-20": -92.89999999999998,
                  "0-10": 47.79999999999998,
                  "30-end": 446.4,
                  "20-30": 231
                },
                "role": "SOLO",
                "lane": "TOP"
              }
            }],
            "participantIdentities": [{
              "participantId": 1,
              "player": {
                "platformId": "NA",
                "accountId": "KKxTg8ec56sY9kQe9bqwh5Z09moT6P_AWMOlr9MNDCWzfA",
                "summonerName": "MuseWood",
                "summonerId": "3ubQpX0Zs87xZfCcgHNMyq8FLsC34AdP2vH0CLs_2df9O8g",
                "currentPlatformId": "NA1",
                "currentAccountId": "KKxTg8ec56sY9kQe9bqwh5Z09moT6P_AWMOlr9MNDCWzfA",
                "matchHistoryUri": "/v1/stats/player_history/NA/39243567",
                "profileIcon": 4072
              }
            }, {
              "participantId": 2,
              "player": {
                "platformId": "NA1",
                "accountId": "bJUfJWRf1DMKu4WStUYM0q5D59vH0ZPvi4VjVFcbrfO0EPk",
                "summonerName": "ButtBoy fun time",
                "summonerId": "dGrO78xjd0oARRhGuyUOP7-b4NQ318pmPnrqPucNAzcK_90",
                "currentPlatformId": "NA1",
                "currentAccountId": "bJUfJWRf1DMKu4WStUYM0q5D59vH0ZPvi4VjVFcbrfO0EPk",
                "matchHistoryUri": "/v1/stats/player_history/NA1/203838317",
                "profileIcon": 3587
              }
            }, {
              "participantId": 3,
              "player": {
                "platformId": "NA1",
                "accountId": "X5bHjTEdGP6M7AEnhLyfMb0bPD8p5FRUGfvvRtDH71qP2qE",
                "summonerName": "MegaMax",
                "summonerId": "Mrt4zQfgUDORD-LBnElcCKosJf6oK24hY4bAzsxtoiD9-V8",
                "currentPlatformId": "NA1",
                "currentAccountId": "X5bHjTEdGP6M7AEnhLyfMb0bPD8p5FRUGfvvRtDH71qP2qE",
                "matchHistoryUri": "/v1/stats/player_history/NA1/213203413",
                "profileIcon": 4161
              }
            }, {
              "participantId": 4,
              "player": {
                "platformId": "NA",
                "accountId": "N8s9iFVtxo-SvHARptdzGXbJBW-6EuR2-8fCk6XyALqxZA",
                "summonerName": "Deterence",
                "summonerId": "3er44-Kp1Ay7Am1bguo70uPRVWsRjnkOAeSFp7_3ugdxOMI",
                "currentPlatformId": "NA1",
                "currentAccountId": "N8s9iFVtxo-SvHARptdzGXbJBW-6EuR2-8fCk6XyALqxZA",
                "matchHistoryUri": "/v1/stats/player_history/NA/36466846",
                "profileIcon": 508
              }
            }, {
              "participantId": 5,
              "player": {
                "platformId": "NA1",
                "accountId": "fDHSiryCMu-aDn4pUAZ3XVKm1Cz4Q5zwTNT8trXssvXQRQ",
                "summonerName": "Lion of the Rift",
                "summonerId": "kgSTlDe1Yi-fdc72BI-kqTQ_91ba5R_CCUC6A31yvFKxS3E",
                "currentPlatformId": "NA1",
                "currentAccountId": "fDHSiryCMu-aDn4pUAZ3XVKm1Cz4Q5zwTNT8trXssvXQRQ",
                "matchHistoryUri": "/v1/stats/player_history/NA1/48409990",
                "profileIcon": 3890
              }
            }, {
              "participantId": 6,
              "player": {
                "platformId": "NA1",
                "accountId": "uZwgDdwyYR3LMZaH-SxIRzFrBieev_D79Z_QwQIh7-i-qUwaDqhzU-mC",
                "summonerName": "Pole Position 2",
                "summonerId": "A6yOqY2i7bHHai13hp1qzOno5pSnqbWH5YucW9NU3bWva6WU",
                "currentPlatformId": "NA1",
                "currentAccountId": "uZwgDdwyYR3LMZaH-SxIRzFrBieev_D79Z_QwQIh7-i-qUwaDqhzU-mC",
                "matchHistoryUri": "/v1/stats/player_history/NA1/2148098228177120",
                "profileIcon": 4373
              }
            }, {
              "participantId": 7,
              "player": {
                "platformId": "NA1",
                "accountId": "KLeTGo9-Edvr91TQKl-SSPghGw7jER58K87_8T6UWSq2Nt8",
                "summonerName": "MÊ           ßâD",
                "summonerId": "WrHc-69TmDPTYIszrA4rTvSu-djKQATluF6HVgb9nm1tga8",
                "currentPlatformId": "NA1",
                "currentAccountId": "KLeTGo9-Edvr91TQKl-SSPghGw7jER58K87_8T6UWSq2Nt8",
                "matchHistoryUri": "/v1/stats/player_history/NA1/219456022",
                "profileIcon": 1594
              }
            }, {
              "participantId": 8,
              "player": {
                "platformId": "NA1",
                "accountId": "c2pvxXfSIaq5I0c5u5V3ZI8ibzL95pmy6PMfOfCIi-ipNVM",
                "summonerName": "Drew3G",
                "summonerId": "lkgFkd4sVgUhe5JLoNsjezMq7X2Qwir3p0WMLaxs_Jnv_vY",
                "currentPlatformId": "NA1",
                "currentAccountId": "c2pvxXfSIaq5I0c5u5V3ZI8ibzL95pmy6PMfOfCIi-ipNVM",
                "matchHistoryUri": "/v1/stats/player_history/NA1/227194068",
                "profileIcon": 4120
              }
            }, {
              "participantId": 9,
              "player": {
                "platformId": "NA1",
                "accountId": "3ht7HzckmfQ1xc8rCUhCGx4iBtazy_kqvMsvDWG0TeIYnmE",
                "summonerName": "DanLeeFor3",
                "summonerId": "oPYsub2C7kmRaJn6abiKNUQbksBooOv52CD7ICAunC7KZ2o",
                "currentPlatformId": "NA1",
                "currentAccountId": "3ht7HzckmfQ1xc8rCUhCGx4iBtazy_kqvMsvDWG0TeIYnmE",
                "matchHistoryUri": "/v1/stats/player_history/NA1/205474633",
                "profileIcon": 22
              }
            }, {
              "participantId": 10,
              "player": {
                "platformId": "NA1",
                "accountId": "3ISQDqG4U9EVDNRMenbqUN-pHkxRD73Q8OHB0GJzZkW5jG8",
                "summonerName": "cash hunter",
                "summonerId": "TD7SnCCaXL0JjjZIuOIYRdVW9VYk58epDxgZWY_y6cjjspk",
                "currentPlatformId": "NA1",
                "currentAccountId": "3ISQDqG4U9EVDNRMenbqUN-pHkxRD73Q8OHB0GJzZkW5jG8",
                "matchHistoryUri": "/v1/stats/player_history/NA1/221331195",
                "profileIcon": 4027
              }
            }]
          }]
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var summoner = this.state.currentSummoner;
      return __jsx(_components_wrappers_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        pageView: "homepage",
        pageTitle: "Homepage"
      }, __jsx(_components_SummonerSearch__WEBPACK_IMPORTED_MODULE_13__["default"], {
        searchSummoner: function searchSummoner(event) {
          return _this2.getSummonerByName(event);
        }
      }), __jsx("div", {
        className: "info-wrapper"
      }, __jsx(_components_Summoner__WEBPACK_IMPORTED_MODULE_14__["default"], {
        summoner: summoner
      })));
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

/***/ "./static/ddragon/db/item.json":
/*!*************************************!*\
  !*** ./static/ddragon/db/item.json ***!
  \*************************************/
/*! exports provided: type, version, basic, data, groups, tree, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"item\",\"version\":\"9.3.1\",\"basic\":{\"name\":\"\",\"rune\":{\"isrune\":false,\"tier\":1,\"type\":\"red\"},\"gold\":{\"base\":0,\"total\":0,\"sell\":0,\"purchasable\":false},\"group\":\"\",\"description\":\"\",\"colloq\":\";\",\"plaintext\":\"\",\"consumed\":false,\"stacks\":1,\"depth\":1,\"consumeOnFull\":false,\"from\":[],\"into\":[],\"specialRecipe\":0,\"inStore\":true,\"hideFromAll\":false,\"requiredChampion\":\"\",\"requiredAlly\":\"\",\"stats\":{\"FlatHPPoolMod\":0,\"rFlatHPModPerLevel\":0,\"FlatMPPoolMod\":0,\"rFlatMPModPerLevel\":0,\"PercentHPPoolMod\":0,\"PercentMPPoolMod\":0,\"FlatHPRegenMod\":0,\"rFlatHPRegenModPerLevel\":0,\"PercentHPRegenMod\":0,\"FlatMPRegenMod\":0,\"rFlatMPRegenModPerLevel\":0,\"PercentMPRegenMod\":0,\"FlatArmorMod\":0,\"rFlatArmorModPerLevel\":0,\"PercentArmorMod\":0,\"rFlatArmorPenetrationMod\":0,\"rFlatArmorPenetrationModPerLevel\":0,\"rPercentArmorPenetrationMod\":0,\"rPercentArmorPenetrationModPerLevel\":0,\"FlatPhysicalDamageMod\":0,\"rFlatPhysicalDamageModPerLevel\":0,\"PercentPhysicalDamageMod\":0,\"FlatMagicDamageMod\":0,\"rFlatMagicDamageModPerLevel\":0,\"PercentMagicDamageMod\":0,\"FlatMovementSpeedMod\":0,\"rFlatMovementSpeedModPerLevel\":0,\"PercentMovementSpeedMod\":0,\"rPercentMovementSpeedModPerLevel\":0,\"FlatAttackSpeedMod\":0,\"PercentAttackSpeedMod\":0,\"rPercentAttackSpeedModPerLevel\":0,\"rFlatDodgeMod\":0,\"rFlatDodgeModPerLevel\":0,\"PercentDodgeMod\":0,\"FlatCritChanceMod\":0,\"rFlatCritChanceModPerLevel\":0,\"PercentCritChanceMod\":0,\"FlatCritDamageMod\":0,\"rFlatCritDamageModPerLevel\":0,\"PercentCritDamageMod\":0,\"FlatBlockMod\":0,\"PercentBlockMod\":0,\"FlatSpellBlockMod\":0,\"rFlatSpellBlockModPerLevel\":0,\"PercentSpellBlockMod\":0,\"FlatEXPBonus\":0,\"PercentEXPBonus\":0,\"rPercentCooldownMod\":0,\"rPercentCooldownModPerLevel\":0,\"rFlatTimeDeadMod\":0,\"rFlatTimeDeadModPerLevel\":0,\"rPercentTimeDeadMod\":0,\"rPercentTimeDeadModPerLevel\":0,\"rFlatGoldPer10Mod\":0,\"rFlatMagicPenetrationMod\":0,\"rFlatMagicPenetrationModPerLevel\":0,\"rPercentMagicPenetrationMod\":0,\"rPercentMagicPenetrationModPerLevel\":0,\"FlatEnergyRegenMod\":0,\"rFlatEnergyRegenModPerLevel\":0,\"FlatEnergyPoolMod\":0,\"rFlatEnergyModPerLevel\":0,\"PercentLifeStealMod\":0,\"PercentSpellVampMod\":0},\"tags\":[],\"maps\":{\"1\":true,\"8\":true,\"10\":true,\"12\":true}},\"data\":{\"1001\":{\"name\":\"Boots of Speed\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Movement Speed\",\"into\":[\"3006\",\"3047\",\"3020\",\"3158\",\"3111\",\"3117\",\"3009\",\"3173\",\"4001\"],\"image\":{\"full\":\"1001.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":300,\"sell\":210},\"tags\":[\"Boots\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":25}},\"1004\":{\"name\":\"Faerie Charm\",\"description\":\"<stats><mana>+25% Base Mana Regen </mana></stats>\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Mana Regen\",\"into\":[\"3028\",\"3070\",\"3073\",\"3114\",\"3098\",\"2065\",\"3311\"],\"image\":{\"full\":\"1004.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":125,\"purchasable\":true,\"total\":125,\"sell\":88},\"tags\":[\"ManaRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"1006\":{\"name\":\"Rejuvenation Bead\",\"description\":\"<stats>+50% Base Health Regen </stats>\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Health Regen\",\"into\":[\"3077\",\"3308\",\"3305\",\"3097\",\"2053\",\"3801\",\"3096\",\"3194\",\"4401\"],\"image\":{\"full\":\"1006.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":150,\"purchasable\":true,\"total\":150,\"sell\":105},\"tags\":[\"HealthRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"1011\":{\"name\":\"Giant's Belt\",\"description\":\"<stats>+380 Health</stats>\",\"colloq\":\";\",\"plaintext\":\"Greatly increases Health\",\"from\":[\"1028\"],\"into\":[\"3083\",\"3084\",\"3022\",\"3143\",\"3742\"],\"image\":{\"full\":\"1011.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":1000,\"sell\":700},\"tags\":[\"Health\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":380},\"depth\":2},\"1018\":{\"name\":\"Cloak of Agility\",\"description\":\"<stats>+20% Critical Strike Chance</stats>\",\"colloq\":\";\",\"plaintext\":\"Increases critical strike chance\",\"into\":[\"3031\",\"3185\",\"3508\"],\"image\":{\"full\":\"1018.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":800,\"sell\":560},\"tags\":[\"CriticalStrike\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatCritChanceMod\":0.2}},\"1026\":{\"name\":\"Blasting Wand\",\"description\":\"<stats>+40 Ability Power</stats>\",\"colloq\":\";\",\"plaintext\":\"Moderately increases Ability Power\",\"into\":[\"3135\",\"3029\",\"3151\",\"3027\",\"3100\",\"3102\",\"3116\",\"3165\",\"3285\",\"3312\"],\"image\":{\"full\":\"1026.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":850,\"sell\":595},\"tags\":[\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":40}},\"1027\":{\"name\":\"Sapphire Crystal\",\"description\":\"<stats><mana>+250 Mana</mana></stats>\",\"colloq\":\";blue\",\"plaintext\":\"Increases Mana\",\"into\":[\"3057\",\"3070\",\"3010\",\"3024\",\"3073\",\"1402\",\"1414\",\"3802\",\"4104\"],\"image\":{\"full\":\"1027.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":350,\"sell\":245},\"tags\":[\"Mana\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":250}},\"1028\":{\"name\":\"Ruby Crystal\",\"description\":\"<stats>+150 Health</stats>\",\"colloq\":\";red\",\"plaintext\":\"Increases Health\",\"into\":[\"1011\",\"3075\",\"3211\",\"3136\",\"3068\",\"3069\",\"3010\",\"3801\",\"3044\",\"3052\",\"3053\",\"3067\",\"3092\",\"3814\",\"3116\",\"3401\",\"3748\",\"3751\",\"3916\"],\"image\":{\"full\":\"1028.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":280},\"tags\":[\"Health\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":150}},\"1029\":{\"name\":\"Cloth Armor\",\"description\":\"<stats>+15 Armor</stats>\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Armor\",\"into\":[\"3047\",\"1031\",\"3191\",\"3024\",\"3082\",\"3076\",\"2053\",\"3105\"],\"image\":{\"full\":\"1029.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":300,\"sell\":210},\"tags\":[\"Armor\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatArmorMod\":15}},\"1031\":{\"name\":\"Chain Vest\",\"description\":\"<stats>+40 Armor</stats>\",\"colloq\":\";\",\"plaintext\":\"Greatly increases Armor\",\"from\":[\"1029\"],\"into\":[\"3068\",\"3118\",\"3109\",\"3026\",\"3193\",\"3742\"],\"image\":{\"full\":\"1031.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":800,\"sell\":560},\"tags\":[\"Armor\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatArmorMod\":40},\"depth\":2},\"1033\":{\"name\":\"Null-Magic Mantle\",\"description\":\"<stats>+25 Magic Resist</stats>\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Magic Resist\",\"into\":[\"3111\",\"3211\",\"1057\",\"3028\",\"3140\",\"3155\",\"3105\",\"3190\",\"3102\",\"3194\"],\"image\":{\"full\":\"1033.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":450,\"sell\":315},\"tags\":[\"SpellBlock\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":25}},\"1036\":{\"name\":\"Long Sword\",\"description\":\"<stats>+10 Attack Damage</stats>\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Attack Damage\",\"into\":[\"3080\",\"3077\",\"3123\",\"1053\",\"1059\",\"3155\",\"3134\",\"3095\",\"3162\",\"3035\",\"3044\",\"3052\",\"3072\",\"3122\",\"3133\",\"3144\",\"3161\",\"4003\"],\"image\":{\"full\":\"1036.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":350,\"sell\":245},\"tags\":[\"Damage\",\"Lane\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":10}},\"1037\":{\"name\":\"Pickaxe\",\"description\":\"<stats>+25 Attack Damage</stats>\",\"colloq\":\";\",\"plaintext\":\"Moderately increases Attack Damage\",\"into\":[\"3231\",\"3230\",\"3124\",\"3004\",\"3005\",\"3008\",\"3031\",\"3036\",\"3053\",\"3074\",\"3814\",\"3813\",\"3812\",\"3139\",\"3181\",\"3508\"],\"image\":{\"full\":\"1037.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":875,\"purchasable\":true,\"total\":875,\"sell\":613},\"tags\":[\"Damage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25}},\"1038\":{\"name\":\"B. F. Sword\",\"description\":\"<stats>+40 Attack Damage</stats>\",\"colloq\":\";bf\",\"plaintext\":\"Greatly increases Attack Damage\",\"into\":[\"3172\",\"3080\",\"3095\",\"3026\",\"3031\",\"3072\",\"3161\",\"4403\"],\"image\":{\"full\":\"1038.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":1300,\"purchasable\":true,\"total\":1300,\"sell\":910},\"tags\":[\"Damage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":40}},\"1039\":{\"name\":\"Hunter's Talisman\",\"description\":\"<br><unique>UNIQUE Passive - Tooth:</unique> Damaging a monster with a spell or attack  steals 30 Health over 5 seconds and burns them for 60 magic damage. <mana>While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana.</mana> This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";jungle;Jungle\",\"plaintext\":\"Provides damage against Monsters and Mana Regen in the Jungle\",\"into\":[\"3706\",\"3715\"],\"image\":{\"full\":\"1039.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":350,\"sell\":245},\"tags\":[\"LifeSteal\",\"ManaRegen\",\"OnHit\",\"Jungle\"],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"60\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\"}},\"1041\":{\"name\":\"Hunter's Machete\",\"description\":\"<stats>+10% Life Steal vs. Monsters</stats><br><br><unique>UNIQUE Passive - Nail:</unique> Basic attacks vs. Monsters deal 35 bonus damage on hit. This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";jungle;Jungle\",\"plaintext\":\"Provides damage and life steal versus Monsters\",\"into\":[\"3706\",\"3715\"],\"image\":{\"full\":\"1041.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":350,\"sell\":245},\"tags\":[\"LifeSteal\",\"OnHit\",\"Jungle\"],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"35\",\"Effect2Amount\":\"0.1\"}},\"1042\":{\"name\":\"Dagger\",\"description\":\"<stats>+12% Attack Speed</stats>\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Attack Speed\",\"into\":[\"3172\",\"1043\",\"3091\",\"3006\",\"3085\",\"2015\",\"3086\",\"3046\",\"3101\",\"3131\"],\"image\":{\"full\":\"1042.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":300,\"sell\":210},\"tags\":[\"AttackSpeed\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentAttackSpeedMod\":0.12}},\"1043\":{\"name\":\"Recurve Bow\",\"description\":\"<stats>+25% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal an additional 15 physical damage on hit.\",\"colloq\":\";\",\"plaintext\":\"Greatly increases Attack Speed\",\"from\":[\"1042\",\"1042\"],\"into\":[\"3091\",\"3153\",\"3124\",\"3675\",\"1416\",\"1419\",\"3149\",\"4105\"],\"image\":{\"full\":\"1043.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":1000,\"sell\":700},\"tags\":[\"AttackSpeed\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentAttackSpeedMod\":0.25},\"effect\":{\"Effect1Amount\":\"15\"},\"depth\":2},\"1051\":{\"name\":\"Brawler's Gloves\",\"description\":\"<unique>UNIQUE Passive:</unique> +10% Critical Strike Chance\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Critical Strike Chance\",\"into\":[\"3086\",\"3046\",\"3122\"],\"image\":{\"full\":\"1051.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":280},\"tags\":[\"CriticalStrike\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"0.1\"}},\"1052\":{\"name\":\"Amplifying Tome\",\"description\":\"<stats>+20 Ability Power</stats>\",\"colloq\":\";amptome\",\"plaintext\":\"Slightly increases Ability Power\",\"into\":[\"3108\",\"3191\",\"3136\",\"3135\",\"3145\",\"3113\",\"3090\",\"3124\",\"3116\",\"3673\",\"3802\",\"3916\"],\"image\":{\"full\":\"1052.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":435,\"purchasable\":true,\"total\":435,\"sell\":305},\"tags\":[\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":20}},\"1053\":{\"name\":\"Vampiric Scepter\",\"description\":\"<stats>+15 Attack Damage<br>+10% Life Steal</stats>\",\"colloq\":\";\",\"plaintext\":\"Basic attacks restore Health\",\"from\":[\"1036\"],\"into\":[\"3072\",\"3074\",\"3812\",\"3139\",\"3144\",\"3181\",\"4403\"],\"image\":{\"full\":\"1053.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":550,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Damage\",\"LifeSteal\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":15,\"PercentLifeStealMod\":0.1},\"depth\":2},\"1054\":{\"name\":\"Doran's Shield\",\"description\":\"<stats>+80 Health</stats><br><br><passive>Passive: </passive>Restores 6 Health every 5 seconds.<br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.<br><unique>UNIQUE Passive:</unique> Regenerate up to 30 health over 10 seconds after taking damage from an enemy champion, based on percent missing health.\",\"colloq\":\";dshield\",\"plaintext\":\"Good defensive starting item\",\"image\":{\"full\":\"1054.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":450,\"sell\":180},\"tags\":[\"Health\",\"HealthRegen\",\"Lane\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":80,\"FlatHPRegenMod\":1.2},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"30\"}},\"1055\":{\"name\":\"Doran's Blade\",\"description\":\"<stats>+8 Attack Damage<br>+80 Health<br>+3% Life Steal</stats>\",\"colloq\":\";dblade\",\"plaintext\":\"Good starting item for attackers\",\"image\":{\"full\":\"1055.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":450,\"sell\":180},\"tags\":[\"Damage\",\"Health\",\"Lane\",\"LifeSteal\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":8,\"FlatHPPoolMod\":80,\"PercentLifeStealMod\":0.03},\"effect\":{\"Effect1Amount\":\"10\"}},\"1056\":{\"name\":\"Doran's Ring\",\"description\":\"<stats>+60 Health<br>+15 Ability Power<br><mana>+5 Mana per 5 seconds</mana></stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.\",\"colloq\":\";dring\",\"plaintext\":\"Good starting item for casters\",\"image\":{\"full\":\"1056.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"Health\",\"Lane\",\"ManaRegen\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":60,\"FlatMagicDamageMod\":15},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"5\"}},\"1057\":{\"name\":\"Negatron Cloak\",\"description\":\"<stats>+40 Magic Resist</stats>\",\"colloq\":\";\",\"plaintext\":\"Moderately increases Magic Resist\",\"from\":[\"1033\"],\"into\":[\"3170\",\"3091\",\"3193\",\"3001\",\"3512\",\"4401\"],\"image\":{\"full\":\"1057.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":270,\"purchasable\":true,\"total\":720,\"sell\":504},\"tags\":[\"SpellBlock\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":40},\"depth\":2},\"1058\":{\"name\":\"Needlessly Large Rod\",\"description\":\"<stats>+60 Ability Power</stats>\",\"colloq\":\";nlr\",\"plaintext\":\"Greatly increases Ability Power\",\"into\":[\"3089\",\"3090\",\"3128\",\"3907\",\"4403\"],\"image\":{\"full\":\"1058.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":1250,\"purchasable\":true,\"total\":1250,\"sell\":875},\"tags\":[\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":60}},\"1059\":{\"name\":\"Space Vampiric Scepter\",\"description\":\"<stats>+15 Attack Damage<br>+2.5% Life Steal</stats>\",\"colloq\":\";\",\"plaintext\":\"Basic attacks restore Health\",\"from\":[\"1036\"],\"into\":[\"3231\",\"3230\",\"3080\",\"3162\",\"3813\"],\"image\":{\"full\":\"1059.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":550,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Damage\",\"LifeSteal\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":15,\"PercentLifeStealMod\":0.025},\"depth\":2},\"1082\":{\"name\":\"The Dark Seal\",\"description\":\"<stats>+15 Ability Power<br>+25% Increased Healing from Potions<br><mana>+100 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +3 Ability Power per Glory.  <br><unique>UNIQUE Passive - Do or Die:</unique> Grants 2 Glory for a champion kill or 1 Glory for an assist, up to 10 Glory total. Lose 4 Glory on death.\",\"colloq\":\";Noxian\",\"plaintext\":\"Provides Ability Power and Mana.  Increases in power as you kill enemies.\",\"into\":[\"3041\"],\"image\":{\"full\":\"1082.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":350,\"sell\":245},\"tags\":[\"HealthRegen\",\"SpellDamage\",\"Mana\",\"Lane\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatMPPoolMod\":100,\"FlatMagicDamageMod\":15},\"effect\":{\"Effect1Amount\":\"0.25\",\"Effect2Amount\":\"2\",\"Effect3Amount\":\"1\",\"Effect4Amount\":\"10\",\"Effect5Amount\":\"3\",\"Effect6Amount\":\"4\"}},\"1083\":{\"name\":\"Cull\",\"description\":\"<stats>+7 Attack Damage<br>+3 Life on Hit</stats><br><br><unique>UNIQUE Passive:</unique> Killing a lane minion grants 1 additional Gold. Killing 100 lane minions grants an additional 350 bonus gold immediately and disables this passive.\",\"colloq\":\";dblade\",\"plaintext\":\"Provides damage and Life Steal on hit - Killing minions grant bonus Gold\",\"image\":{\"full\":\"1083.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":450,\"sell\":180},\"tags\":[\"Damage\",\"LifeSteal\",\"Lane\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":7},\"effect\":{\"Effect1Amount\":\"3\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"100\",\"Effect4Amount\":\"350\"}},\"1400\":{\"name\":\"Enchantment: Warrior\",\"description\":\"<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Grants Attack Damage and Cooldown Reduction\",\"from\":[\"3133\",\"3706\"],\"hideFromAll\":true,\"image\":{\"full\":\"1400.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":525,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":60},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":3},\"1401\":{\"name\":\"Enchantment: Cinderhulk\",\"description\":\"<stats>+300 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Grants Health and Immolate Aura\",\"from\":[\"3751\",\"3706\"],\"hideFromAll\":true,\"image\":{\"full\":\"1401.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":2500,\"sell\":1750},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"FlatHPPoolMod\":300},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":3},\"1402\":{\"name\":\"Enchantment: Runic Echoes\",\"description\":\"<stats>+80 Ability Power<br>+10% Cooldown Reduction<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 25% of your missing Mana.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Grants Ability Power and periodically empowers your Spells\",\"from\":[\"3108\",\"1027\",\"3706\"],\"hideFromAll\":true,\"image\":{\"full\":\"1402.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":375,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"FlatMPPoolMod\":300,\"FlatMagicDamageMod\":80},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":3},\"1412\":{\"name\":\"Enchantment: Warrior\",\"description\":\"<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Grants Attack Damage and Cooldown Reduction\",\"from\":[\"3133\",\"3715\"],\"hideFromAll\":true,\"image\":{\"full\":\"1412.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":525,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":60},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"4\",\"Effect7Amount\":\"3\",\"Effect8Amount\":\"18\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"0.2\",\"Effect11Amount\":\"0.1\"},\"depth\":3},\"1413\":{\"name\":\"Enchantment: Cinderhulk\",\"description\":\"<stats>+300 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Grants Health and Immolate Aura\",\"from\":[\"3751\",\"3715\"],\"hideFromAll\":true,\"image\":{\"full\":\"1413.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":2500,\"sell\":1750},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"FlatHPPoolMod\":300},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"4\",\"Effect7Amount\":\"3\",\"Effect8Amount\":\"18\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"0.2\",\"Effect11Amount\":\"0.1\"},\"depth\":3},\"1414\":{\"name\":\"Enchantment: Runic Echoes\",\"description\":\"<stats>+80 Ability Power<br>+10% Cooldown Reduction<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 25% of your missing Mana.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Grants Ability Power and periodically empowers your Spells\",\"from\":[\"3108\",\"1027\",\"3715\"],\"hideFromAll\":true,\"image\":{\"full\":\"1414.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":375,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"FlatMPPoolMod\":300,\"FlatMagicDamageMod\":80},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"4\",\"Effect7Amount\":\"3\",\"Effect8Amount\":\"18\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"0.2\",\"Effect11Amount\":\"0.1\"},\"depth\":3},\"1416\":{\"name\":\"Enchantment: Bloodrazor\",\"description\":\"<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Increases Attack Speed and deals damage based on the target's Health\",\"from\":[\"1043\",\"3706\"],\"hideFromAll\":true,\"image\":{\"full\":\"1416.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":625,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"PercentAttackSpeedMod\":0.5},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":3},\"1419\":{\"name\":\"Enchantment: Bloodrazor\",\"description\":\"<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Increases Attack Speed and deals damage based on the target's Health\",\"from\":[\"1043\",\"3715\"],\"hideFromAll\":true,\"image\":{\"full\":\"1419.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":625,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"PercentAttackSpeedMod\":0.5},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"4\",\"Effect7Amount\":\"3\",\"Effect8Amount\":\"18\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"0.2\",\"Effect11Amount\":\"0.1\"},\"depth\":3},\"2003\":{\"name\":\"Health Potion\",\"description\":\"<groupLimit>Limited to 5 at one time. Limited to 1 type of Healing Potion.</groupLimit><br><br><consumable>Click to Consume:</consumable> Restores 150 Health over 15 seconds.\",\"colloq\":\";\",\"plaintext\":\"Consume to restore Health over time\",\"stacks\":5,\"consumed\":true,\"image\":{\"full\":\"2003.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":50,\"purchasable\":true,\"total\":50,\"sell\":20},\"tags\":[\"Consumable\",\"Jungle\",\"Lane\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"150\",\"Effect2Amount\":\"15\"}},\"2004\":{\"name\":\"Mana Potion\",\"description\":\"<groupLimit>Limited to 5 at one time.</groupLimit><br><br><consumable>Click to Consume:</consumable> <mana>Restores 100 Mana over 15 seconds.</mana>\",\"colloq\":\";\",\"plaintext\":\"Consume to restore Mana over time\",\"stacks\":5,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2004.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":30,\"purchasable\":false,\"total\":30,\"sell\":12},\"tags\":[\"Consumable\",\"Lane\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"100\",\"Effect2Amount\":\"15\"}},\"2009\":{\"name\":\"Total Biscuit of Rejuvenation\",\"description\":\"<consumable>Click to Consume:</consumable> Restores 80 Health and 50 Mana over 10 seconds.\",\"colloq\":\";\",\"plaintext\":\"\",\"consumed\":true,\"inStore\":false,\"image\":{\"full\":\"2009.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"2010\":{\"name\":\"Total Biscuit of Everlasting Will\",\"description\":\"<consumable>Click to Consume:</consumable> Restores 15% of missing Health and Mana over 15 seconds.\",\"colloq\":\";\",\"plaintext\":\"\",\"stacks\":10,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2010.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":75,\"purchasable\":false,\"total\":75,\"sell\":30},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"15\"}},\"2011\":{\"name\":\"Elixir Of Skill\",\"description\":\"<consumable>Click to Consume:</consumable> Grants <font color='#29E3D6'>+1 Skill Point</font>.\",\"colloq\":\";\",\"plaintext\":\"\",\"stacks\":5,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2011.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Consumable\",\"Lane\",\"Jungle\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"2012\":{\"name\":\"Looted Biscuit of Rejuvenation\",\"description\":\"<consumable>Click to Consume:</consumable> Restores 15% of missing Health and Mana over 15 seconds.\",\"colloq\":\";\",\"plaintext\":\"\",\"stacks\":10,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2012.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":75,\"purchasable\":false,\"total\":75,\"sell\":30},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"15\"}},\"2013\":{\"name\":\"Looted Oracle's Extract\",\"description\":\"<consumable>Click to Consume:</consumable> Grants detection of nearby invisible or unseen enemy units for 15 to 40 seconds, based on level.\",\"colloq\":\";\",\"plaintext\":\"Allows champion to see invisible or unseen enemy units\",\"consumed\":true,\"consumeOnFull\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2013.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":60,\"purchasable\":false,\"total\":60,\"sell\":24},\"tags\":[\"Consumable\",\"Stealth\",\"Vision\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"15\",\"Effect2Amount\":\"40\",\"Effect3Amount\":\"6\",\"Effect4Amount\":\"18\"}},\"2015\":{\"name\":\"Kircheis Shard\",\"description\":\"<stats>+15% Attack Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Energized Strike:</unique> Your Energized attacks deal 50 bonus magic damage on hit.\",\"colloq\":\";\",\"plaintext\":\"Attack speed and a chargable magic hit\",\"from\":[\"1042\"],\"into\":[\"3094\",\"3095\",\"3087\"],\"image\":{\"full\":\"2015.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":600,\"sell\":420},\"tags\":[\"AttackSpeed\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentAttackSpeedMod\":0.15},\"effect\":{\"Effect1Amount\":\"50\"},\"depth\":2},\"2031\":{\"name\":\"Refillable Potion\",\"description\":\"<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.\",\"colloq\":\";\",\"plaintext\":\"Restores Health over time. Refills at shop.\",\"into\":[\"2032\",\"2033\"],\"image\":{\"full\":\"2031.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":150,\"purchasable\":true,\"total\":150,\"sell\":60},\"tags\":[\"HealthRegen\",\"Consumable\",\"Active\",\"Lane\",\"Jungle\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"125\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"12\",\"Effect4Amount\":\"2\"}},\"2032\":{\"name\":\"Hunter's Potion\",\"description\":\"<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 60 Health and 35 Mana over 8 seconds. Holds up to 5 charges and refills upon visiting the shop.<br><br>Killing a Large Monster grants 1 charge.<br><br><rules>(Killing a Large Monster at full charges will automatically consume the newest charge.)</rules>\",\"colloq\":\";\",\"plaintext\":\"Restores Health and Mana over time - Refills at shop and has increased capacity\",\"from\":[\"2031\"],\"image\":{\"full\":\"2032.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":250,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"HealthRegen\",\"ManaRegen\",\"Consumable\",\"Active\",\"Jungle\"],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"60\",\"Effect2Amount\":\"35\",\"Effect3Amount\":\"8\",\"Effect4Amount\":\"5\"},\"depth\":2},\"2033\":{\"name\":\"Corrupting Potion\",\"description\":\"<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health and 75 Mana over 12 seconds and grants <font color='#FF8811'><u>Touch of Corruption</u></font> during that time. Holds up to 3 charges that refills upon visiting the shop.<br><br><font color='#FF8811'><u>Touch of Corruption:</u></font> Damaging spells and attacks burn enemy champions for <scaleLevel>15 - 30</scaleLevel> magic damage over 3 seconds. (Half Damage for Area of Effect or Damage over Time spells. Damage increases with champion level.)<br><br><rules>(Corrupting Potion can be used even at full Health and Mana.)</rules>\",\"colloq\":\";\",\"plaintext\":\"Restores Health and Mana over time and boosts combat power - Refills at Shop\",\"from\":[\"2031\"],\"image\":{\"full\":\"2033.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":500,\"sell\":200},\"tags\":[\"Active\",\"Consumable\",\"HealthRegen\",\"Lane\",\"ManaRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"125\",\"Effect2Amount\":\"75\",\"Effect3Amount\":\"12\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"10\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"15\",\"Effect8Amount\":\"3\",\"Effect9Amount\":\"30\"},\"depth\":2},\"2047\":{\"name\":\"Oracle's Extract\",\"description\":\"<consumable>Click to Consume:</consumable> Grants detection of nearby invisible or unseen enemy units for 5 minutes.\",\"colloq\":\";\",\"plaintext\":\"Allows champion to see invisible or unseen enemy units\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"2047.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":300,\"sell\":120},\"tags\":[\"Consumable\",\"Stealth\",\"Vision\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{}},\"2050\":{\"name\":\"Explorer's Ward\",\"description\":\"<consumable>Click to Consume:</consumable> Places an invisible ward that reveals the surrounding area for 60 seconds.\",\"colloq\":\";\",\"plaintext\":\"\",\"inStore\":false,\"image\":{\"full\":\"2050.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Consumable\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"2051\":{\"name\":\"Guardian's Horn\",\"description\":\"<stats>+150 Health</stats><br><br><passive>Passive: </passive>Restores 20 Health every 5 seconds.<br><unique>UNIQUE Passive:</unique> Blocks 12 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).<br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>\",\"colloq\":\"Golden Arm of Kobe;Golden Bicep of Kobe;Horn; Horn of the ManWolf; ManWolf\",\"plaintext\":\"Good starting item for tanks\",\"image\":{\"full\":\"2051.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":950,\"purchasable\":true,\"total\":950,\"sell\":380},\"tags\":[\"Health\",\"HealthRegen\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{\"FlatHPPoolMod\":150,\"FlatHPRegenMod\":4},\"effect\":{\"Effect1Amount\":\"12\",\"Effect2Amount\":\"0.25\"}},\"2052\":{\"name\":\"Poro-Snax\",\"description\":\"This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br><i>All proceeds will be donated towards fighting Noxian animal cruelty.</i>\",\"colloq\":\";\",\"plaintext\":\"\",\"stacks\":2,\"consumed\":true,\"inStore\":false,\"image\":{\"full\":\"2052.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"2053\":{\"name\":\"Raptor Cloak\",\"description\":\"<stats>+30 Armor<br>+125% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.\",\"colloq\":\";\",\"plaintext\":\"Enhances Movement Speed near turrets\",\"from\":[\"1006\",\"1029\"],\"into\":[\"3056\",\"3306\",\"3512\"],\"image\":{\"full\":\"2053.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Armor\",\"HealthRegen\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{\"FlatArmorMod\":30},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"2\"},\"depth\":2},\"2054\":{\"name\":\"Diet Poro-Snax\",\"description\":\"All the flavor of regular Poro-Snax, without the calories! Keeps your Poro happy AND healthy.<br><br><consumable>Click to Consume:</consumable> Gives your Poros a delicious healthy treat.\",\"colloq\":\"\",\"plaintext\":\"\",\"consumed\":true,\"inStore\":false,\"image\":{\"full\":\"2054.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"2055\":{\"name\":\"Control Ward\",\"description\":\"<groupLimit>Can only carry 2 Control Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Places a ward that grants vision of the surrounding area. This device will also reveal invisible traps and reveal / disable wards. Control Wards do not disable other Control Wards. Camouflaged units will also be revealed. <br><br>Limit 1 <font color='#BBFFFF'>Control Ward</font> on the map per player.\",\"colloq\":\"orange;\",\"plaintext\":\"Used to disable wards and invisible traps in an area.\",\"stacks\":2,\"consumed\":true,\"image\":{\"full\":\"2055.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":75,\"purchasable\":true,\"total\":75,\"sell\":30},\"tags\":[\"Consumable\",\"Lane\",\"Stealth\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"1\",\"Effect2Amount\":\"2\"}},\"2056\":{\"name\":\"Pilfered Stealth Ward\",\"description\":\"<groupLimit>Can only carry 3 Stealth Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <scaleLevel>60 - 120</scaleLevel> seconds.\",\"colloq\":\"green;\",\"plaintext\":\"Use to temporarily provide vision in an area\",\"stacks\":3,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2056.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":60,\"purchasable\":false,\"total\":60,\"sell\":24},\"tags\":[\"Consumable\",\"Lane\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"60\",\"Effect2Amount\":\"3\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"120\"}},\"2057\":{\"name\":\"Peering Farsight Ward\",\"description\":\"<consumable>Click to Consume:</consumable> Reveals an area and places a visible fragile ward up to 2000 units away. This ward is untargetable by allies.\",\"colloq\":\"blue; totem;\",\"plaintext\":\"Grants increased range and reveals the targetted area\",\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2057.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":60,\"purchasable\":false,\"total\":60,\"sell\":24},\"tags\":[\"Vision\",\"Active\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"2000\",\"Effect2Amount\":\"2\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"198\",\"Effect5Amount\":\"60\",\"Effect6Amount\":\"9\",\"Effect7Amount\":\"30\",\"Effect8Amount\":\"120\",\"Effect9Amount\":\"6.5\",\"Effect10Amount\":\"198\",\"Effect11Amount\":\"99\",\"Effect12Amount\":\"60\",\"Effect13Amount\":\"180\",\"Effect14Amount\":\"10\",\"Effect15Amount\":\"45\"}},\"2058\":{\"name\":\"Travel Size Elixir of Iron\",\"description\":\"<consumable>Click to Consume:</consumable> Grants +150 Health, 25% Tenacity, increased champion size, and <font color='#FF8811'><u>Path of Iron</u></font> for 45 to 90 seconds, based on level.<br><br><font color='#FF8811'><u>Path of Iron:</u></font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><rules>(Travel Size Elixirs may stack with one another.)</rules>\",\"colloq\":\";white\",\"plaintext\":\"Temporarily increases defenses. Leaves a trail for allies to follow.\",\"consumed\":true,\"consumeOnFull\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2058.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":80,\"purchasable\":false,\"total\":80,\"sell\":32},\"tags\":[\"Health\",\"Consumable\",\"NonbootsMovement\",\"Tenacity\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"150\",\"Effect2Amount\":\"0.25\",\"Effect3Amount\":\"0.75\",\"Effect4Amount\":\"0.15\",\"Effect5Amount\":\"0.15\",\"Effect6Amount\":\"6\",\"Effect7Amount\":\"18\",\"Effect8Amount\":\"9\",\"Effect9Amount\":\"1.5\"}},\"2059\":{\"name\":\"Travel Size Elixir of Sorcery\",\"description\":\"<consumable>Click to Consume:</consumable> Grants +25 Ability Power, 7.5 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery</u></font> for 45 to 90 seconds, based on level. <br><br><font color='#FF8811'><u>Sorcery:</u></font> Damaging a champion or turret deals 15 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><rules>(Travel Size Elixirs may stack with one another.)</rules><br>\",\"colloq\":\";blue\",\"plaintext\":\"Temporarily grants Ability Power and Bonus Damage to champions and turrets.\",\"consumed\":true,\"consumeOnFull\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2059.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":80,\"purchasable\":false,\"total\":80,\"sell\":32},\"tags\":[\"Consumable\",\"ManaRegen\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"25\",\"Effect3Amount\":\"15\",\"Effect4Amount\":\"0.75\",\"Effect5Amount\":\"5\",\"Effect6Amount\":\"1.5\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"9\",\"Effect9Amount\":\"1.5\",\"Effect10Amount\":\"6\",\"Effect11Amount\":\"18\"}},\"2060\":{\"name\":\"Travel Size Elixir of Wrath\",\"description\":\"<consumable>Click to Consume:</consumable> Grants +15 Attack Damage and <font color='#FF8811'><u>Bloodlust</u></font> for 45 to 90 seconds, based on level.<br><br><font color='#FF8811'><u>Bloodlust:</u></font> Dealing physical damage to champions heals for 10% of the damage dealt.<br><br><rules>(Travel Size Elixirs may stack with one another.)</rules>\",\"colloq\":\";red\",\"plaintext\":\"Temporarily grants Attack Damage and heals you when dealing physical damage to champions.\",\"consumed\":true,\"consumeOnFull\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2060.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":80,\"purchasable\":false,\"total\":80,\"sell\":32},\"tags\":[\"Consumable\",\"Damage\",\"LifeSteal\",\"SpellVamp\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"15\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"0.1\",\"Effect4Amount\":\"0.75\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"1.5\",\"Effect7Amount\":\"6\",\"Effect8Amount\":\"9\",\"Effect9Amount\":\"18\"}},\"2061\":{\"name\":\"Pilfered Health Potion\",\"description\":\"<consumable>Click to Consume:</consumable> Restores 50 Health over 5 seconds.\",\"colloq\":\";\",\"plaintext\":\"Consume to restore Health over time\",\"stacks\":5,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2061.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":40,\"purchasable\":false,\"total\":40,\"sell\":16},\"tags\":[\"Consumable\",\"Jungle\",\"Lane\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"50\",\"Effect2Amount\":\"5\"}},\"2062\":{\"name\":\"Pilfered Potion of Rouge\",\"description\":\"<consumable>Click to Consume:</consumable> Grants 10 (+1/Level) Adaptive Force for 45 seconds. \",\"colloq\":\";\",\"plaintext\":\"Consume to gain a short window of power.\",\"stacks\":5,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2062.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":80,\"purchasable\":false,\"total\":80,\"sell\":32},\"tags\":[\"Consumable\",\"Jungle\",\"Lane\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"10\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"45\"}},\"2065\":{\"name\":\"Shurelya's Reverie\",\"description\":\"<stats>+40 Ability Power<br>+200 Health<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> +5% Movement Speed<br><active>UNIQUE Active:</active> Grants yourself and nearby allies +40% Movement Speed for 3 seconds. (90 second cooldown).\",\"colloq\":\";shurelya;reverie;\",\"plaintext\":\"Grants Health, Ability Power, Mana Regeneration, Cooldown Reduction, and Movement Speed. Activate to speed up nearby allies.\",\"from\":[\"3067\",\"3113\",\"1004\"],\"image\":{\"full\":\"2065.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":475,\"purchasable\":true,\"total\":2250,\"sell\":1575},\"tags\":[\"Health\",\"SpellDamage\",\"ManaRegen\",\"Active\",\"CooldownReduction\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":200,\"FlatMagicDamageMod\":40},\"effect\":{\"Effect1Amount\":\"0.4\",\"Effect2Amount\":\"3\",\"Effect3Amount\":\"90\",\"Effect4Amount\":\"-0.1\",\"Effect5Amount\":\"0.05\",\"Effect6Amount\":\"2\"},\"depth\":3},\"2138\":{\"name\":\"Elixir of Iron\",\"description\":\"<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +300 Health, 25% Tenacity, increased champion size, and <font color='#FF8811'><u>Path of Iron</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Path of Iron:</u></font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>\",\"colloq\":\";white\",\"plaintext\":\"Temporarily increases defenses. Leaves a trail for allies to follow.\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"2138.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":500,\"sell\":200},\"tags\":[\"Health\",\"Consumable\",\"NonbootsMovement\",\"Tenacity\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"300\",\"Effect2Amount\":\"0.25\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"0.15\",\"Effect5Amount\":\"0.15\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"9\"}},\"2139\":{\"name\":\"Elixir of Sorcery\",\"description\":\"<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +50 Ability Power, 15 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery</u></font> for 3 minutes. <br><br><font color='#FF8811'><u>Sorcery:</u></font> Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules><br>\",\"colloq\":\";blue\",\"plaintext\":\"Temporarily grants Ability Power and Bonus Damage to champions and turrets.\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"2139.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":500,\"sell\":200},\"tags\":[\"Consumable\",\"ManaRegen\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"50\",\"Effect2Amount\":\"50\",\"Effect3Amount\":\"25\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"5\",\"Effect6Amount\":\"3\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"9\"}},\"2140\":{\"name\":\"Elixir of Wrath\",\"description\":\"<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +30 Attack Damage and <font color='#FF8811'><u>Bloodlust</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Bloodlust:</u></font> Dealing physical damage to champions heals for 15% of the damage dealt.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>\",\"colloq\":\";red\",\"plaintext\":\"Temporarily grants Attack Damage and heals you when dealing physical damage to champions.\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"2140.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":500,\"sell\":200},\"tags\":[\"Consumable\",\"Damage\",\"LifeSteal\",\"SpellVamp\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"30\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"0.15\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"9\"}},\"2319\":{\"name\":\"Sly Sack of Gold\",\"description\":\"<mainText><font color='#FF9900'>Click to Consume:</font> Contains 40-110 gold.<br><br>Can be sold for @Value@ gold.</mainText>\",\"colloq\":\"BodyBlocking Body Block\",\"plaintext\":\"Filled with gold\",\"stacks\":50,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2319.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":65,\"purchasable\":false,\"total\":65,\"sell\":65},\"tags\":[\"Consumable\",\"GoldPer\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"40\",\"Effect2Amount\":\"110\"}},\"2403\":{\"name\":\"Minion Dematerializer\",\"description\":\"<consumable>Click to Consume:</consumable> Kill target Lane Minion (550 Range, 10 Second Cooldown).\",\"colloq\":\";\",\"plaintext\":\"\",\"stacks\":10,\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"2403.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"2419\":{\"name\":\"Commencing Stopwatch\",\"description\":\"Transforms into a Stopwatch after 10 minutes. That Stopwatch contributes 250 gold for the items it builds into.<br><br><rules>(Stopwatch normally contributes 600 gold)</rules>\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"into\":[\"2420\"],\"image\":{\"full\":\"2419.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{}},\"2420\":{\"name\":\"Stopwatch\",\"description\":\"<active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (One time use).\",\"colloq\":\";zhg;zonyas\",\"plaintext\":\"Activate to become invincible but unable to take actions\",\"into\":[\"3157\",\"3026\",\"3193\",\"3090\",\"4003\"],\"image\":{\"full\":\"2420.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":600,\"sell\":240},\"tags\":[\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"2.5\"}},\"2421\":{\"name\":\"Broken Stopwatch\",\"description\":\"<unique>UNIQUE Passive:</unique> Is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you Broken Stopwatches.</rules>\",\"colloq\":\";\",\"plaintext\":\"Upgrades to stopwatch\",\"hideFromAll\":true,\"into\":[\"3157\",\"3026\",\"3193\",\"3090\"],\"image\":{\"full\":\"2421.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":600,\"sell\":240},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"300\"}},\"2422\":{\"name\":\"Slightly Magical Boots\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed<br><br><unique>UNIQUE Passive:</unique> +10 Movement Speed<br><br>Boots that build from Slightly Magical Boots retains the +10 Movement Speed.\",\"colloq\":\";\",\"plaintext\":\"Slightly increases Movement Speed\",\"inStore\":false,\"into\":[\"3006\",\"3047\",\"3020\",\"3158\",\"3111\",\"3117\",\"3009\",\"4001\"],\"image\":{\"full\":\"2422.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":false,\"total\":300,\"sell\":210},\"tags\":[\"Boots\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":25}},\"2423\":{\"name\":\"Stopwatch\",\"description\":\"<active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (One time use).\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"into\":[\"3157\",\"3026\",\"3193\",\"3090\"],\"image\":{\"full\":\"2423.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":false,\"total\":600,\"sell\":240},\"tags\":[\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"2.5\"}},\"2424\":{\"name\":\"Broken Stopwatch\",\"description\":\"<unique>UNIQUE Passive:</unique> Is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you Broken Stopwatches.</rules>\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"hideFromAll\":true,\"into\":[\"3157\",\"3026\",\"3193\",\"3090\"],\"image\":{\"full\":\"2424.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":false,\"total\":600,\"sell\":240},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"300\"}},\"3001\":{\"name\":\"Abyssal Mask\",\"description\":\"<stats>+350 Health<br><mana>+300 Mana</mana><br>+55 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 15% more magic damage.\",\"colloq\":\";\",\"plaintext\":\"Nearby enemies take more magic damage\",\"from\":[\"3010\",\"1057\"],\"into\":[\"3379\"],\"image\":{\"full\":\"3001.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":1180,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"Health\",\"SpellBlock\",\"HealthRegen\",\"Mana\",\"ManaRegen\",\"Aura\",\"CooldownReduction\",\"MagicPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":350,\"FlatSpellBlockMod\":55,\"FlatMPPoolMod\":300},\"effect\":{\"Effect1Amount\":\"-10\",\"Effect2Amount\":\"-25\",\"Effect3Amount\":\"0.15\",\"Effect4Amount\":\"25\",\"Effect5Amount\":\"0.2\",\"Effect6Amount\":\"0.15\",\"Effect7Amount\":\"325\"},\"depth\":3},\"3003\":{\"name\":\"Archangel's Staff\",\"description\":\"<stats>+50 Ability Power<br><mana>+650 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 1% of maximum Mana. Refunds 25% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +8 maximum Mana (max +750 Mana) for each Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>\",\"colloq\":\";aa\",\"plaintext\":\"Increases Ability Power based on maximum Mana\",\"from\":[\"3070\",\"3802\"],\"image\":{\"full\":\"3003.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":1050,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"SpellDamage\",\"Mana\",\"ManaRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":650,\"FlatMagicDamageMod\":50},\"effect\":{\"Effect1Amount\":\"0.01\",\"Effect2Amount\":\"8\",\"Effect3Amount\":\"750\",\"Effect4Amount\":\"2\",\"Effect5Amount\":\"8\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0.25\",\"Effect8Amount\":\"3\",\"Effect9Amount\":\"12\",\"Effect10Amount\":\"-0.1\"},\"depth\":3},\"3004\":{\"name\":\"Manamune\",\"description\":\"<stats>+25 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +5 maximum Mana (max +750 Mana) for each basic attack or Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>\",\"colloq\":\";\",\"plaintext\":\"Increases Attack Damage based on maximum Mana\",\"from\":[\"3070\",\"1037\"],\"image\":{\"full\":\"3004.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":675,\"purchasable\":true,\"total\":2400,\"sell\":1680},\"tags\":[\"Damage\",\"Mana\",\"ManaRegen\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25,\"FlatMPPoolMod\":250},\"effect\":{\"Effect1Amount\":\"0.02\",\"Effect2Amount\":\"4\",\"Effect3Amount\":\"750\",\"Effect4Amount\":\"2\",\"Effect5Amount\":\"8\",\"Effect6Amount\":\"1\",\"Effect7Amount\":\"0.15\",\"Effect8Amount\":\"5\",\"Effect9Amount\":\"3\",\"Effect10Amount\":\"12\"},\"depth\":3},\"3005\":{\"name\":\"Atma's Reckoning\",\"description\":\"<stats>+25 Attack Damage<br>+30 Armor<br>+30 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> For each second in combat with enemy champions, turrets, or epic monsters, gain Attack Damage equal to 0.5% of maximum health , up to 2.5% .\",\"colloq\":\";wreckoning;Wreckoning\",\"plaintext\":\"Increases Attack Damage based on maximum Health\",\"from\":[\"3105\",\"1037\"],\"image\":{\"full\":\"3005.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":925,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"SpellBlock\",\"Armor\",\"Damage\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":25,\"FlatSpellBlockMod\":30,\"FlatArmorMod\":30},\"effect\":{\"Effect1Amount\":\"0.005\",\"Effect2Amount\":\"5\",\"Effect3Amount\":\"0.025\",\"Effect4Amount\":\"25\",\"Effect5Amount\":\"0.2\",\"Effect6Amount\":\"75\"},\"depth\":3},\"3006\":{\"name\":\"Berserker's Greaves\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats> +35% Attack Speed</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed\",\"colloq\":\";\",\"plaintext\":\"Enhances Movement Speed and Attack Speed\",\"from\":[\"1001\",\"1042\"],\"image\":{\"full\":\"3006.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"AttackSpeed\",\"Boots\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":45,\"PercentAttackSpeedMod\":0.35},\"depth\":2},\"3007\":{\"name\":\"Archangel's Staff (Quick Charge)\",\"description\":\"<stats>+50 Ability Power<br><mana>+650 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 1% of maximum Mana. Refunds 25% of Mana spent. <br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +12 maximum Mana (max +750 Mana) for each Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>\",\"colloq\":\";aa\",\"plaintext\":\"Increases Ability Power based on maximum Mana\",\"from\":[\"3073\",\"3802\"],\"image\":{\"full\":\"3007.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":1050,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"SpellDamage\",\"Mana\",\"ManaRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":650,\"FlatMagicDamageMod\":50},\"effect\":{\"Effect1Amount\":\"0.01\",\"Effect2Amount\":\"12\",\"Effect3Amount\":\"750\",\"Effect4Amount\":\"2\",\"Effect5Amount\":\"8\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0.25\",\"Effect8Amount\":\"3\",\"Effect9Amount\":\"12\",\"Effect10Amount\":\"-0.1\"},\"depth\":3},\"3008\":{\"name\":\"Manamune (Quick Charge)\",\"description\":\"<stats>+25 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +6 maximum Mana (max +750 Mana) for each basic attack or Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>\",\"colloq\":\";\",\"plaintext\":\"Increases Attack Damage based on maximum Mana\",\"from\":[\"3073\",\"1037\"],\"image\":{\"full\":\"3008.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":675,\"purchasable\":true,\"total\":2400,\"sell\":1680},\"tags\":[\"Damage\",\"Mana\",\"ManaRegen\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25,\"FlatMPPoolMod\":250},\"effect\":{\"Effect1Amount\":\"0.02\",\"Effect2Amount\":\"6\",\"Effect3Amount\":\"750\",\"Effect4Amount\":\"2\",\"Effect5Amount\":\"8\",\"Effect6Amount\":\"1\",\"Effect7Amount\":\"0.15\",\"Effect8Amount\":\"6\",\"Effect9Amount\":\"3\",\"Effect10Amount\":\"12\"},\"depth\":3},\"3009\":{\"name\":\"Boots of Swiftness\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +55 Movement Speed<br><unique>UNIQUE Passive - Slow Resist:</unique> Movement slowing effects are reduced by 25%.\",\"colloq\":\";\",\"plaintext\":\"Enhances Movement Speed and reduces the effect of slows\",\"from\":[\"1001\"],\"image\":{\"full\":\"3009.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Boots\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":55},\"effect\":{\"Effect1Amount\":\"0.25\"},\"depth\":2},\"3010\":{\"name\":\"Catalyst of Aeons\",\"description\":\"<stats>+225 Health<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. <br><br>Spending Mana restores 20% of the cost as Health, up to 15 per spell cast.  <br><br><rules>(Toggled Spells heal for a maximum of 15 per second.)</rules>\",\"colloq\":\";\",\"plaintext\":\"Spend Mana to recover Health\",\"from\":[\"1028\",\"1027\"],\"into\":[\"3027\",\"3029\",\"3001\",\"4402\"],\"image\":{\"full\":\"3010.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"Health\",\"HealthRegen\",\"Mana\",\"ManaRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":225,\"FlatMPPoolMod\":300},\"effect\":{\"Effect1Amount\":\"150\",\"Effect2Amount\":\"200\",\"Effect3Amount\":\"8\",\"Effect4Amount\":\"15\",\"Effect5Amount\":\"0.2\",\"Effect6Amount\":\"0.15\"},\"depth\":2},\"3020\":{\"name\":\"Sorcerer's Shoes\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+18 <a href='FlatMagicPen'>Magic Penetration</a></stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed\",\"colloq\":\";\",\"plaintext\":\"Enhances Movement Speed and magic damage\",\"from\":[\"1001\"],\"image\":{\"full\":\"3020.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"Boots\",\"MagicPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":45},\"effect\":{\"Effect1Amount\":\"18\"},\"depth\":2},\"3022\":{\"name\":\"Frozen Mallet\",\"description\":\"<stats>+700 Health<br>+30 Attack Damage</stats><br><br><unique>UNIQUE Passive - Icy:</unique> Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 20% slow for ranged attacks).\",\"colloq\":\";fm\",\"plaintext\":\"Basic attacks slow enemies\",\"from\":[\"3052\",\"1011\"],\"image\":{\"full\":\"3022.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":900,\"purchasable\":true,\"total\":3100,\"sell\":2170},\"tags\":[\"Damage\",\"Health\",\"OnHit\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":30,\"FlatHPPoolMod\":700},\"effect\":{\"Effect1Amount\":\"1.5\",\"Effect2Amount\":\"0.4\",\"Effect3Amount\":\"0.2\"},\"depth\":3},\"3024\":{\"name\":\"Glacial Shroud\",\"description\":\"<stats>+20 Armor<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction\",\"colloq\":\";\",\"plaintext\":\"Increases Armor and Cooldown Reduction\",\"from\":[\"1027\",\"1029\"],\"into\":[\"3110\",\"3025\",\"3050\",\"3800\",\"3187\"],\"image\":{\"full\":\"3024.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":250,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Armor\",\"CooldownReduction\",\"Mana\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":250,\"FlatArmorMod\":20},\"effect\":{\"Effect1Amount\":\"-0.1\"},\"depth\":2},\"3025\":{\"name\":\"Iceborn Gauntlet\",\"description\":\"<stats>+65 Armor<br>+20% Cooldown Reduction<br><mana>+500 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.\",\"colloq\":\";frozen fist\",\"plaintext\":\"Basic attacks create a slow field after spell cast\",\"from\":[\"3057\",\"3024\"],\"into\":[\"3387\"],\"image\":{\"full\":\"3025.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":750,\"purchasable\":true,\"total\":2700,\"sell\":1890},\"tags\":[\"Armor\",\"Mana\",\"CooldownReduction\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":500,\"FlatArmorMod\":65},\"effect\":{\"Effect1Amount\":\"-0.2\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"-0.3\",\"Effect5Amount\":\"1.5\"},\"depth\":3},\"3026\":{\"name\":\"Guardian Angel\",\"description\":\"<stats>+45 Attack Damage<br>+40 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Upon taking lethal damage, restores 50% of base Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).\",\"colloq\":\";ga\",\"plaintext\":\"Periodically revives champion upon death\",\"from\":[\"1038\",\"1031\",\"2420\"],\"image\":{\"full\":\"3026.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":100,\"purchasable\":true,\"total\":2800,\"sell\":1120},\"tags\":[\"Armor\",\"Damage\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":45,\"FlatArmorMod\":40},\"effect\":{\"Effect1Amount\":\"0.5\",\"Effect2Amount\":\"4\",\"Effect3Amount\":\"300\",\"Effect4Amount\":\"0.3\"},\"depth\":3},\"3027\":{\"name\":\"Rod of Ages\",\"description\":\"<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.\",\"colloq\":\";roa\",\"plaintext\":\"Greatly increases Health, Mana, and Ability Power\",\"from\":[\"3010\",\"1026\"],\"image\":{\"full\":\"3027.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":750,\"purchasable\":true,\"total\":2700,\"sell\":1890},\"tags\":[\"Health\",\"HealthRegen\",\"Mana\",\"ManaRegen\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":300,\"FlatMPPoolMod\":300,\"FlatMagicDamageMod\":60},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"4\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"10\",\"Effect6Amount\":\"150\",\"Effect7Amount\":\"200\",\"Effect8Amount\":\"8\",\"Effect9Amount\":\"25\",\"Effect10Amount\":\"0.2\",\"Effect11Amount\":\"0.15\"},\"depth\":3},\"3028\":{\"name\":\"Chalice of Harmony\",\"description\":\"<stats>+30 Magic Resist<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.</unique>\",\"colloq\":\";\",\"plaintext\":\"Increases Mana and Health Regeneration\",\"from\":[\"1004\",\"1033\",\"1004\"],\"into\":[\"3174\",\"3222\"],\"image\":{\"full\":\"3028.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":100,\"purchasable\":true,\"total\":800,\"sell\":560},\"tags\":[\"SpellBlock\",\"HealthRegen\",\"ManaRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":30},\"effect\":{\"Effect1Amount\":\"2\",\"Effect2Amount\":\"5\",\"Effect3Amount\":\"600\",\"Effect4Amount\":\"180\",\"Effect5Amount\":\"8\",\"Effect6Amount\":\"1\",\"Effect7Amount\":\"1\"},\"depth\":2},\"3029\":{\"name\":\"Rod of Ages (Quick Charge)\",\"description\":\"<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.\",\"colloq\":\";roa\",\"plaintext\":\"Greatly increases Health, Mana, and Ability Power\",\"from\":[\"3010\",\"1026\"],\"image\":{\"full\":\"3029.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":0,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":750,\"purchasable\":true,\"total\":2700,\"sell\":1890},\"tags\":[\"Health\",\"HealthRegen\",\"Mana\",\"ManaRegen\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":300,\"FlatMPPoolMod\":300,\"FlatMagicDamageMod\":60},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"4\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"10\",\"Effect6Amount\":\"150\",\"Effect7Amount\":\"200\",\"Effect8Amount\":\"8\",\"Effect9Amount\":\"25\",\"Effect10Amount\":\"0.2\",\"Effect11Amount\":\"0.15\"},\"depth\":3},\"3030\":{\"name\":\"Hextech GLP-800\",\"description\":\"<stats>+80 Ability Power<br><mana>+600 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Active - Frost Bolt:</unique> Fires a spray of icy bolts that explode on first unit hit, dealing <scaleLevel>100 - 200</scaleLevel> (+20% of your Ability Power) magic damage to all enemies hit. (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br> Enemies hit are slowed by 65% decaying over 2 second.\",\"colloq\":\"frost cannon;\",\"plaintext\":\"Activate to fire icy bolts to slow enemies\",\"from\":[\"3802\",\"3145\"],\"image\":{\"full\":\"3030.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":48,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":2800,\"sell\":1960},\"tags\":[\"SpellDamage\",\"Mana\",\"Active\",\"CooldownReduction\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":600,\"FlatMagicDamageMod\":80},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"2\",\"Effect5Amount\":\"0.65\",\"Effect6Amount\":\"100\",\"Effect7Amount\":\"200\",\"Effect8Amount\":\"0.2\",\"Effect9Amount\":\"25\",\"Effect10Amount\":\"0.2\",\"Effect11Amount\":\"0.15\",\"Effect12Amount\":\"40\",\"Effect13Amount\":\"-0.1\",\"Effect14Amount\":\"10\",\"Effect15Amount\":\"-0.65\"},\"depth\":3},\"3031\":{\"name\":\"Infinity Edge\",\"description\":\"<stats>+80 Attack Damage<br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strikes deal 225% damage instead of 200%.\",\"colloq\":\";ie\",\"plaintext\":\"Massively enhances critical strikes\",\"from\":[\"1038\",\"1037\",\"1018\"],\"into\":[\"3371\"],\"image\":{\"full\":\"3031.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":96,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":425,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"CriticalStrike\",\"Damage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":80,\"FlatCritChanceMod\":0.25},\"effect\":{\"Effect1Amount\":\"2.25\"},\"depth\":2},\"3033\":{\"name\":\"Mortal Reminder\",\"description\":\"<stats>+45 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +25% <a href='FlatArmorPen'>Armor Penetration</a><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 5 seconds.\",\"colloq\":\";lw;grievous\",\"plaintext\":\"Overcomes enemies with high Health recovery and Armor\",\"from\":[\"3035\",\"3123\"],\"image\":{\"full\":\"3033.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":144,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":550,\"purchasable\":true,\"total\":2800,\"sell\":1960},\"tags\":[\"ArmorPenetration\",\"Damage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":45},\"effect\":{\"Effect1Amount\":\"5\",\"Effect2Amount\":\"0.25\"},\"depth\":3},\"3035\":{\"name\":\"Last Whisper\",\"description\":\"<stats>+20 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +20% <a href='FlatArmorPen'>Armor Penetration</a>\",\"colloq\":\";lw\",\"plaintext\":\"Overcomes enemies with high Armor\",\"from\":[\"1036\",\"1036\"],\"into\":[\"3033\",\"3036\"],\"image\":{\"full\":\"3035.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":192,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":750,\"purchasable\":true,\"total\":1450,\"sell\":1015},\"tags\":[\"ArmorPenetration\",\"Damage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":20},\"effect\":{\"Effect1Amount\":\"0.25\",\"Effect2Amount\":\"0.35\",\"Effect3Amount\":\"0.2\"},\"depth\":2},\"3036\":{\"name\":\"Lord Dominik's Regards\",\"description\":\"<stats>+45 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +35% <a href='FlatArmorPen'>Armor Penetration</a>\",\"colloq\":\";lw\",\"plaintext\":\"Overcomes enemies with high health and armor\",\"from\":[\"3035\",\"1037\"],\"image\":{\"full\":\"3036.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":240,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":475,\"purchasable\":true,\"total\":2800,\"sell\":1960},\"tags\":[\"Damage\",\"ArmorPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":45},\"effect\":{\"Effect1Amount\":\"0.35\"},\"depth\":3},\"3040\":{\"name\":\"Seraph's Embrace\",\"description\":\"<stats>+50 Ability Power<br><mana>+1400 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 15% of current Mana to grant a shield for 2 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"\",\"specialRecipe\":3003,\"inStore\":false,\"image\":{\"full\":\"3040.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":288,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":3200,\"purchasable\":false,\"total\":3200,\"sell\":2240},\"tags\":[\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":1400,\"FlatMagicDamageMod\":50},\"effect\":{\"Effect1Amount\":\"0.03\",\"Effect2Amount\":\"0.15\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"150\",\"Effect5Amount\":\"120\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0.25\",\"Effect8Amount\":\"-0.1\"}},\"3041\":{\"name\":\"Mejai's Soulstealer\",\"description\":\"<stats>+20 Ability Power<br><mana>+200 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +5 Ability Power per Glory. Grants 10% Movement Speed if you have at least 10 Glory.<br><unique>UNIQUE Passive - Do or Die:</unique> Grants 4 Glory for a champion kill or 2 Glory for an assist, up to 25 Glory total. Lose 10 stacks of Glory upon dying.\",\"colloq\":\";\",\"plaintext\":\"Grants Ability Power for kills and assists\",\"from\":[\"1082\"],\"image\":{\"full\":\"3041.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":336,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":1050,\"purchasable\":true,\"total\":1400,\"sell\":980},\"tags\":[\"SpellDamage\",\"Mana\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatMPPoolMod\":200,\"FlatMagicDamageMod\":20},\"effect\":{\"Effect1Amount\":\"5\",\"Effect2Amount\":\"4\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"25\",\"Effect5Amount\":\"0.5\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"10\",\"Effect8Amount\":\"10\"},\"depth\":2},\"3042\":{\"name\":\"Muramana\",\"description\":\"<stats>+25 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana>\",\"colloq\":\";\",\"plaintext\":\"\",\"specialRecipe\":3004,\"inStore\":false,\"image\":{\"full\":\"3042.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":384,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":2400,\"purchasable\":false,\"total\":2400,\"sell\":1680},\"tags\":[\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25,\"FlatMPPoolMod\":1000},\"effect\":{\"Effect1Amount\":\"0.15\"}},\"3043\":{\"name\":\"Muramana\",\"description\":\"<stats>+25 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana>\",\"colloq\":\"\",\"plaintext\":\"\",\"specialRecipe\":3008,\"inStore\":false,\"image\":{\"full\":\"3043.png\",\"sprite\":\"item0.png\",\"group\":\"item\",\"x\":432,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":2400,\"purchasable\":false,\"total\":2400,\"sell\":1680},\"tags\":[\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25,\"FlatMPPoolMod\":1000},\"effect\":{\"Effect1Amount\":\"0.15\"}},\"3044\":{\"name\":\"Phage\",\"description\":\"<stats>+200 Health<br>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.\",\"colloq\":\";\",\"plaintext\":\"Attacks and kills give a small burst of speed\",\"from\":[\"1028\",\"1036\"],\"into\":[\"3078\",\"3071\"],\"image\":{\"full\":\"3044.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":1250,\"sell\":875},\"tags\":[\"Damage\",\"Health\",\"NonbootsMovement\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":15,\"FlatHPPoolMod\":200},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"2\",\"Effect3Amount\":\"60\"},\"depth\":2},\"3046\":{\"name\":\"Phantom Dancer\",\"description\":\"<stats>+30% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Spectral Waltz:</unique> Basic attacking a champion grants ghosting and 7% Movement Speed for 2 seconds.<br><unique>UNIQUE Passive - Lifeline:</unique> If you would take damage that would reduce your Health below 30%, gain a shield that absorbs up to 240 - 600 damage for 2 seconds. (90 second cooldown)\",\"colloq\":\";pd\",\"plaintext\":\"Move faster while attacking enemies and gain a shield when on low health.\",\"from\":[\"1042\",\"3086\",\"1051\"],\"image\":{\"full\":\"3046.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":700,\"purchasable\":true,\"total\":2600,\"sell\":1820},\"tags\":[\"AttackSpeed\",\"CriticalStrike\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatCritChanceMod\":0.25,\"PercentMovementSpeedMod\":0.05,\"PercentAttackSpeedMod\":0.3},\"effect\":{\"Effect1Amount\":\"0.24\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"550\",\"Effect4Amount\":\"0.07\",\"Effect5Amount\":\"0.3\",\"Effect6Amount\":\"2.5\",\"Effect7Amount\":\"90\",\"Effect8Amount\":\"240\",\"Effect9Amount\":\"600\",\"Effect10Amount\":\"40\",\"Effect11Amount\":\"5\",\"Effect12Amount\":\"0.3\",\"Effect13Amount\":\"0.7\",\"Effect14Amount\":\"2\",\"Effect15Amount\":\"300\",\"Effect16Amount\":\"1\",\"Effect17Amount\":\"0.4\",\"Effect18Amount\":\"9\"},\"depth\":3},\"3047\":{\"name\":\"Ninja Tabi\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+20 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Blocks 12% of the damage from basic attacks.<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed\",\"colloq\":\";\",\"plaintext\":\"Enhances Movement Speed and reduces incoming basic attack damage\",\"from\":[\"1001\",\"1029\"],\"image\":{\"full\":\"3047.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"Armor\",\"Boots\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":45,\"FlatArmorMod\":20},\"effect\":{\"Effect1Amount\":\"0.12\"},\"depth\":2},\"3048\":{\"name\":\"Seraph's Embrace\",\"description\":\"<stats>+50 Ability Power<br><mana>+1400 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 15% of current Mana to grant a shield for 2 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).\",\"colloq\":\"\",\"plaintext\":\"\",\"specialRecipe\":3007,\"inStore\":false,\"image\":{\"full\":\"3048.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":3200,\"purchasable\":false,\"total\":3200,\"sell\":2240},\"tags\":[\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":1400,\"FlatMagicDamageMod\":50},\"effect\":{\"Effect1Amount\":\"0.03\",\"Effect2Amount\":\"0.15\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"150\",\"Effect5Amount\":\"120\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0.25\",\"Effect8Amount\":\"-0.1\"}},\"3050\":{\"name\":\"Zeke's Convergence\",\"description\":\"<stats>+60 Armor<br>+30 Magic Resist<br><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><mainText><active>UNIQUE Active - Conduit:</active> Bind to an ally without an existing Conduit.<br><unique>UNIQUE Passive:</unique> Casting your ultimate near your ally surrounds you with a frost storm and ignites your ally's basic attacks for 10 seconds. Enemies inside your frost storm are slowed by 20% and your ally's attacks burn their target for 30% bonus magic damage over 2 seconds (45 second cooldown).<br><br><unlockedPassive>Frostfire Covenant:</unlockedPassive> Your frost storm ignites when it slows a burning enemy, dealing 40 magic damage per second and slowing by 40% instead for 3 seconds.</maintext><br><br><rules>(Champions can only be linked by one Zeke's Convergence at a time.)</rules>\",\"colloq\":\";haroldandkumar\",\"plaintext\":\"Grants you and your ally bonuses when you cast your ultimate.\",\"from\":[\"3105\",\"3024\"],\"image\":{\"full\":\"3050.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":250,\"purchasable\":true,\"total\":2250,\"sell\":1575},\"tags\":[\"SpellBlock\",\"Armor\",\"Mana\",\"Aura\",\"Active\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":30,\"FlatMPPoolMod\":250,\"FlatArmorMod\":60},\"effect\":{\"Effect1Amount\":\"-0.1\",\"Effect2Amount\":\"20\",\"Effect3Amount\":\"40\",\"Effect4Amount\":\"0.3\",\"Effect5Amount\":\"1000\",\"Effect6Amount\":\"0.5\",\"Effect7Amount\":\"10\",\"Effect8Amount\":\"3\",\"Effect9Amount\":\"45\",\"Effect10Amount\":\"3\",\"Effect11Amount\":\"2\",\"Effect12Amount\":\"300\",\"Effect13Amount\":\"40\",\"Effect14Amount\":\"2\",\"Effect15Amount\":\"0.5\"},\"depth\":3},\"3052\":{\"name\":\"Jaurim's Fist\",\"description\":\"<stats>+15 Attack Damage<br>+200 Health</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 5 maximum Health. This bonus stacks up to 20 times.\",\"colloq\":\";enforcer\",\"plaintext\":\"Attack Damage and stacking Health on Unit Kill\",\"from\":[\"1036\",\"1028\"],\"into\":[\"3104\",\"3022\",\"3053\",\"3748\"],\"image\":{\"full\":\"3052.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":1200,\"sell\":840},\"tags\":[\"Health\",\"Damage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":15,\"FlatHPPoolMod\":200},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"5\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"100\"},\"depth\":2},\"3053\":{\"name\":\"Sterak's Gage\",\"description\":\"<stats>+450 Health</stats><br><br><unique>UNIQUE Passive - Giant Strength:</unique> Gain 50% of your Base Attack Damage as Bonus Attack Damage <br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain a shield for 75% of your bonus Health. After 0.75 seconds, the shield decays over 3 seconds (60 second cooldown).<br><br><unlockedPassive>Sterak's Fury:</unlockedPassive> When <i>Lifeline</i> triggers, grow in size and strength, gaining +30% Tenacity for 8 seconds.\",\"colloq\":\";juggernaut;primal\",\"plaintext\":\"Shields against large bursts of damage\",\"from\":[\"3052\",\"1037\",\"1028\"],\"image\":{\"full\":\"3053.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":725,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"Health\",\"Damage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":450},\"effect\":{\"Effect1Amount\":\"400\",\"Effect2Amount\":\"0.5\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"0.75\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"8\",\"Effect7Amount\":\"60\",\"Effect8Amount\":\"3\",\"Effect9Amount\":\"1800\",\"Effect10Amount\":\"0.75\",\"Effect11Amount\":\"0.3\"},\"depth\":3},\"3056\":{\"name\":\"Ohmwrecker\",\"description\":\"<stats>+300 Health<br>+50 Armor<br>+150% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds.<br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets) and Void Gates.\",\"colloq\":\";\",\"plaintext\":\"Temporarily disables enemy turrets\",\"from\":[\"2053\",\"3067\"],\"image\":{\"full\":\"3056.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":950,\"purchasable\":true,\"total\":2650,\"sell\":1855},\"tags\":[\"Active\",\"Armor\",\"CooldownReduction\",\"Health\",\"HealthRegen\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":300,\"FlatArmorMod\":50},\"effect\":{\"Effect1Amount\":\"3\",\"Effect2Amount\":\"120\",\"Effect3Amount\":\"8\",\"Effect4Amount\":\"0.2\",\"Effect5Amount\":\"1\"},\"depth\":3},\"3057\":{\"name\":\"Sheen\",\"description\":\"<stats><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Grants a bonus to next attack after spell cast\",\"from\":[\"1027\"],\"into\":[\"3078\",\"3100\",\"3025\"],\"image\":{\"full\":\"3057.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":700,\"purchasable\":true,\"total\":1050,\"sell\":735},\"tags\":[\"Mana\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":250},\"effect\":{\"Effect1Amount\":\"1.5\",\"Effect2Amount\":\"1\"},\"depth\":2},\"3065\":{\"name\":\"Spirit Visage\",\"description\":\"<stats>+450 Health<br>+55 Magic Resist<br>+100% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Increases all healing received by 30%.\",\"colloq\":\";sv\",\"plaintext\":\"Increases Health and healing effects\",\"from\":[\"3211\",\"3067\"],\"image\":{\"full\":\"3065.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":2800,\"sell\":1960},\"tags\":[\"CooldownReduction\",\"Health\",\"HealthRegen\",\"SpellBlock\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":450,\"FlatSpellBlockMod\":55},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"0.3\",\"Effect3Amount\":\"0.5\"},\"depth\":3},\"3067\":{\"name\":\"Kindlegem\",\"description\":\"<stats>+200 Health  </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction\",\"colloq\":\";\",\"plaintext\":\"Increases Health and Cooldown Reduction\",\"from\":[\"1028\"],\"into\":[\"3187\",\"3065\",\"3071\",\"3309\",\"3118\",\"3109\",\"3083\",\"3152\",\"2065\",\"3056\",\"3161\",\"4403\"],\"image\":{\"full\":\"3067.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":800,\"sell\":560},\"tags\":[\"CooldownReduction\",\"Health\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":200},\"effect\":{\"Effect1Amount\":\"-0.1\"},\"depth\":2},\"3068\":{\"name\":\"Sunfire Cape\",\"description\":\"<stats>+425 Health<br>+60 Armor  </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 25 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.\",\"colloq\":\";\",\"plaintext\":\"Constantly deals damage to nearby enemies\",\"from\":[\"1031\",\"1028\",\"3751\"],\"into\":[\"3373\"],\"image\":{\"full\":\"3068.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":650,\"purchasable\":true,\"total\":2750,\"sell\":1925},\"tags\":[\"Armor\",\"Health\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":425,\"FlatArmorMod\":60},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"0.5\"},\"depth\":3},\"3069\":{\"name\":\"Remnant of the Ascended\",\"description\":\"<stats>+200 Health<br>+10 Movement Speed<br>+125% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor: </unique>Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>45</font> gold or <font color='#44DDFF'>6%</font> missing mana (minimum 10). Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><rules><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE</font></rules>\",\"colloq\":\";shurelya;reverie; Eye of Ascension;\",\"plaintext\":\"Provides Gold, Mana, and Stealth Wards over time\",\"from\":[\"3096\",\"1028\"],\"image\":{\"full\":\"3069.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":250,\"purchasable\":true,\"total\":1500,\"sell\":600},\"tags\":[\"Health\",\"HealthRegen\",\"ManaRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatHPPoolMod\":200},\"effect\":{\"Effect1Amount\":\"-0.1\",\"Effect2Amount\":\"2\",\"Effect3Amount\":\"15\",\"Effect4Amount\":\"25\",\"Effect5Amount\":\"0.4\",\"Effect6Amount\":\"3\",\"Effect7Amount\":\"60\",\"Effect8Amount\":\"10\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"500\",\"Effect11Amount\":\"45\",\"Effect12Amount\":\"0.06\",\"Effect13Amount\":\"10\",\"Effect14Amount\":\"10\"},\"depth\":3},\"3070\":{\"name\":\"Tear of the Goddess\",\"description\":\"<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 10% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 4 maximum Mana on Mana expenditure (up to 3 times per 12 seconds).<br><br>Caps at +750 Mana.</mana>\",\"colloq\":\";\",\"plaintext\":\"Increases maximum Mana as Mana is spent\",\"from\":[\"1027\",\"1004\"],\"into\":[\"3003\",\"3004\"],\"image\":{\"full\":\"3070.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":375,\"purchasable\":true,\"total\":850,\"sell\":595},\"tags\":[\"Mana\",\"ManaRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":250},\"effect\":{\"Effect1Amount\":\"4\",\"Effect2Amount\":\"8\",\"Effect3Amount\":\"1\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"750\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"0.1\",\"Effect8Amount\":\"3\",\"Effect9Amount\":\"12\"},\"depth\":2},\"3071\":{\"name\":\"The Black Cleaver\",\"description\":\"<stats>+400 Health<br>+40 Attack Damage<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 4% for 6 seconds (stacks up to 6 times, up to 24%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.\",\"colloq\":\";bc\",\"plaintext\":\"Dealing physical damage to enemy champions reduces their Armor\",\"from\":[\"3044\",\"3067\"],\"into\":[\"3380\"],\"image\":{\"full\":\"3071.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":950,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"ArmorPenetration\",\"CooldownReduction\",\"Damage\",\"Health\",\"NonbootsMovement\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":40,\"FlatHPPoolMod\":400},\"effect\":{\"Effect1Amount\":\"-0.2\",\"Effect2Amount\":\"0.04\",\"Effect3Amount\":\"6\",\"Effect4Amount\":\"6\",\"Effect5Amount\":\"0.24\",\"Effect6Amount\":\"20\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"60\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"0.01\"},\"depth\":3},\"3072\":{\"name\":\"The Bloodthirster\",\"description\":\"<stats>+80 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.\",\"colloq\":\";bt\",\"plaintext\":\"Grants Attack Damage, Life Steal and Life Steal now overheals\",\"from\":[\"1038\",\"1036\",\"1053\"],\"image\":{\"full\":\"3072.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":950,\"purchasable\":true,\"total\":3500,\"sell\":2450},\"tags\":[\"Damage\",\"LifeSteal\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":80},\"effect\":{\"Effect1Amount\":\"50\",\"Effect2Amount\":\"350\",\"Effect3Amount\":\"25\",\"Effect4Amount\":\"0.2\"},\"depth\":3},\"3073\":{\"name\":\"Tear of the Goddess (Quick Charge)\",\"description\":\"<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 10% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 6 maximum Mana on Mana expenditure (up to 3 times per 12 seconds).<br><br>Caps at +750 Mana.</mana>\",\"colloq\":\";\",\"plaintext\":\"Increases maximum Mana as Mana is spent\",\"from\":[\"1027\",\"1004\"],\"into\":[\"3007\",\"3008\"],\"image\":{\"full\":\"3073.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":375,\"purchasable\":true,\"total\":850,\"sell\":595},\"tags\":[\"Mana\",\"ManaRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":250},\"effect\":{\"Effect1Amount\":\"6\",\"Effect2Amount\":\"8\",\"Effect3Amount\":\"1\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"750\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"0.1\",\"Effect8Amount\":\"3\",\"Effect9Amount\":\"12\"},\"depth\":2},\"3074\":{\"name\":\"Ravenous Hydra\",\"description\":\"<stats>+80 Attack Damage<br>+100% Base Health Regen <br>+12% Life Steal</stats><br><br><passive>Passive:</passive> 50% of total Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Melee attacks hit nearby enemies, dealing damage and restoring Health\",\"from\":[\"3077\",\"1053\",\"1037\"],\"image\":{\"full\":\"3074.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":3500,\"sell\":2450},\"tags\":[\"Active\",\"Damage\",\"HealthRegen\",\"LifeSteal\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":80,\"PercentLifeStealMod\":0.12},\"effect\":{\"Effect1Amount\":\"0.2\",\"Effect2Amount\":\"0.6\",\"Effect3Amount\":\"0.6\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"10\"},\"depth\":3},\"3075\":{\"name\":\"Thornmail\",\"description\":\"<stats>+250 Health<br>+80 Armor</stats><br><br><unique>UNIQUE Passive - Thorns:</unique> Upon being hit by a basic attack, reflects magic damage equal to 10% of your bonus Armor plus 25, inflicting <a href='GrievousWounds'>Grievous Wounds</a> on the attacker for 1 second.<br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second.\",\"colloq\":\";grievous\",\"plaintext\":\"Returns damage taken from basic attacks as magic damage\",\"from\":[\"3076\",\"1028\",\"3082\"],\"image\":{\"full\":\"3075.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"Health\",\"Armor\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":250,\"FlatArmorMod\":80},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"0.15\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"0.1\"},\"depth\":3},\"3076\":{\"name\":\"Bramble Vest\",\"description\":\"<stats>+35 Armor</stats><br><br><unique>UNIQUE Passive - Thorns:</unique> Upon being hit by a basic attack, reflects magic damage equal to 3 plus 10% of your bonus Armor, inflicting <a href='GrievousWounds'>Grievous Wounds</a> on the attacker for 1 second.\",\"colloq\":\";grievous\",\"plaintext\":\"Prevents enemies from using Life Steal against you.\",\"from\":[\"1029\",\"1029\"],\"into\":[\"3075\"],\"image\":{\"full\":\"3076.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":1000,\"sell\":700},\"tags\":[\"Armor\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatArmorMod\":35},\"effect\":{\"Effect1Amount\":\"0.1\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"3\"},\"depth\":2},\"3077\":{\"name\":\"Tiamat\",\"description\":\"<stats>+25 Attack Damage<br>+50% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (enemies closest to the target take the most damage) (10 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Melee attacks hit nearby enemies\",\"from\":[\"1036\",\"1006\",\"1036\"],\"into\":[\"3074\",\"3748\",\"3230\"],\"image\":{\"full\":\"3077.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":475,\"purchasable\":true,\"total\":1325,\"sell\":928},\"tags\":[\"HealthRegen\",\"Damage\",\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25},\"effect\":{\"Effect1Amount\":\"0.2\",\"Effect2Amount\":\"0.6\",\"Effect3Amount\":\"0.6\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"10\"},\"depth\":2},\"3078\":{\"name\":\"Trinity Force\",\"description\":\"<stats>+250 Health<br><mana>+250 Mana</mana><br>+25 Attack Damage<br>+40% Attack Speed<br>+20% Cooldown Reduction<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).\",\"colloq\":\";triforce;tons of damage\",\"plaintext\":\"Tons of Damage\",\"from\":[\"3101\",\"3057\",\"3044\"],\"into\":[\"3384\"],\"image\":{\"full\":\"3078.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":333,\"purchasable\":true,\"total\":3733,\"sell\":2613},\"tags\":[\"Health\",\"Damage\",\"AttackSpeed\",\"Mana\",\"CooldownReduction\",\"OnHit\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25,\"PercentMovementSpeedMod\":0.05,\"FlatHPPoolMod\":250,\"FlatMPPoolMod\":250,\"PercentAttackSpeedMod\":0.4},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"60\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"2\",\"Effect5Amount\":\"1.5\"},\"depth\":3},\"3080\":{\"name\":\"Space Bloodthirster\",\"description\":\"<stats>+65 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +5% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.\",\"colloq\":\";bt\",\"plaintext\":\"Grants Attack Damage, Life Steal and Life Steal now overheals\",\"from\":[\"1038\",\"1036\",\"1059\"],\"image\":{\"full\":\"3080.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":750,\"purchasable\":true,\"total\":3300,\"sell\":2310},\"tags\":[\"Damage\",\"LifeSteal\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":65},\"effect\":{\"Effect1Amount\":\"50\",\"Effect2Amount\":\"350\",\"Effect3Amount\":\"25\",\"Effect4Amount\":\"0.05\"},\"depth\":3},\"3082\":{\"name\":\"Warden's Mail\",\"description\":\"<stats>+40 Armor</stats><br><br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds.\",\"colloq\":\";\",\"plaintext\":\"Slows Attack Speed of enemy champions when receiving basic attacks\",\"from\":[\"1029\",\"1029\"],\"into\":[\"3110\",\"3143\",\"3075\"],\"image\":{\"full\":\"3082.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":1000,\"sell\":700},\"tags\":[\"Armor\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatArmorMod\":40},\"effect\":{\"Effect1Amount\":\"-0.15\",\"Effect2Amount\":\"1\"},\"depth\":2},\"3083\":{\"name\":\"Warmog's Armor\",\"description\":\"<stats>+800 Health<br>+200% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Grants <unlockedPassive>Warmog's Heart</unlockedPassive> if you have at least 3000 maximum Health.<br><br><unlockedPassive>Warmog's Heart:</unlockedPassive> Restores 25% of maximum Health every 5 seconds if damage hasn't been taken within 6 seconds (3 seconds for damage from minions and monsters).\",\"colloq\":\";\",\"plaintext\":\"Grants massive Health and Health Regen\",\"from\":[\"1011\",\"3067\",\"3801\"],\"image\":{\"full\":\"3083.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":2850,\"sell\":1995},\"tags\":[\"Health\",\"HealthRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":800},\"effect\":{\"Effect1Amount\":\"0.015\",\"Effect2Amount\":\"5\",\"Effect3Amount\":\"0.25\",\"Effect4Amount\":\"2999\",\"Effect5Amount\":\"6\",\"Effect6Amount\":\"-0.1\",\"Effect7Amount\":\"6\",\"Effect8Amount\":\"3\",\"Effect9Amount\":\"3000\"},\"depth\":3},\"3084\":{\"name\":\"Overlord's Bloodmail\",\"description\":\"<stats>+800 Health<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> Upon champion kill or assist, restores 300 Health over 5 seconds.\",\"colloq\":\";\",\"plaintext\":\"Restores Health on kill or assist\",\"from\":[\"1011\",\"3801\"],\"image\":{\"full\":\"3084.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":900,\"purchasable\":true,\"total\":2550,\"sell\":1785},\"tags\":[\"Health\",\"HealthRegen\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":800},\"effect\":{\"Effect1Amount\":\"300\",\"Effect2Amount\":\"5\"},\"depth\":3},\"3085\":{\"name\":\"Runaan's Hurricane\",\"description\":\"<stats>+40% Attack Speed<br>+25% Critical Strike Chance<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Wind's Fury:</unique> When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (40% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects.\",\"colloq\":\";\",\"plaintext\":\"Ranged attacks fire two bolts at nearby enemies\",\"from\":[\"1042\",\"3086\",\"1042\"],\"image\":{\"full\":\"3085.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":2600,\"sell\":1820},\"tags\":[\"CriticalStrike\",\"AttackSpeed\",\"OnHit\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatCritChanceMod\":0.25,\"PercentMovementSpeedMod\":0.07,\"PercentAttackSpeedMod\":0.4},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"40\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"1\"},\"depth\":3},\"3086\":{\"name\":\"Zeal\",\"description\":\"<stats>+15% Attack Speed<br>+15% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed\",\"colloq\":\";\",\"plaintext\":\"Slight bonuses to Critical Strike Chance, Movement Speed and Attack Speed\",\"from\":[\"1051\",\"1042\"],\"into\":[\"3085\",\"3094\",\"3046\",\"3087\",\"4403\"],\"image\":{\"full\":\"3086.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":1200,\"sell\":840},\"tags\":[\"AttackSpeed\",\"CriticalStrike\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatCritChanceMod\":0.15,\"PercentAttackSpeedMod\":0.15},\"effect\":{\"Effect1Amount\":\"0.05\"},\"depth\":2},\"3087\":{\"name\":\"Statikk Shiv\",\"description\":\"<stats>+40% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Shiv Lightning:</unique> Your Energized attacks deal 60~140 bonus magic damage (based on level) to up to 5 targets on hit. This effect can critically strike.\",\"colloq\":\";\",\"plaintext\":\"Movement builds charges that release chain lightning on basic attack\",\"from\":[\"3086\",\"2015\"],\"image\":{\"full\":\"3087.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":2600,\"sell\":1820},\"tags\":[\"AttackSpeed\",\"CriticalStrike\",\"NonbootsMovement\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatCritChanceMod\":0.25,\"PercentMovementSpeedMod\":0.05,\"PercentAttackSpeedMod\":0.4},\"effect\":{\"Effect1Amount\":\"100\",\"Effect2Amount\":\"80\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"750\",\"Effect5Amount\":\"60\",\"Effect6Amount\":\"140\",\"Effect7Amount\":\"5\"},\"depth\":3},\"3089\":{\"name\":\"Rabadon's Deathcap\",\"description\":\"<stats>+120 Ability Power  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 40%.\",\"colloq\":\";dc;banksys;hat\",\"plaintext\":\"Massively increases Ability Power\",\"from\":[\"1058\",\"1058\"],\"into\":[\"3374\"],\"image\":{\"full\":\"3089.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":1100,\"purchasable\":true,\"total\":3600,\"sell\":2520},\"tags\":[\"SpellDamage\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":120},\"effect\":{\"Effect1Amount\":\"40\"},\"depth\":2},\"3090\":{\"name\":\"Wooglet's Witchcap\",\"description\":\"<stats>+100 Ability Power<br>+45 Armor  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 25%<br><active>UNIQUE Active:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).\",\"colloq\":\";hat\",\"plaintext\":\"Massively increases Ability Power and can be activated to enter stasis\",\"from\":[\"3191\",\"1058\",\"2420\"],\"into\":[\"3385\"],\"image\":{\"full\":\"3090.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"Active\",\"Armor\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":100,\"FlatArmorMod\":45},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"2.5\",\"Effect3Amount\":\"120\"},\"depth\":3},\"3091\":{\"name\":\"Wit's End\",\"description\":\"<stats>+40% Attack Speed<br>+40 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 42 bonus magic damage on hit.<br><unique>UNIQUE Passive:</unique> Basic attacks steal 3 Magic Resist from the target on hit (6 if the attacker is melee), up to a maximum of 30 Magic Resist.\",\"colloq\":\";\",\"plaintext\":\"Deals bonus magic damage on basic attacks\",\"from\":[\"1043\",\"1057\",\"1042\"],\"image\":{\"full\":\"3091.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":380,\"purchasable\":true,\"total\":2400,\"sell\":1680},\"tags\":[\"AttackSpeed\",\"OnHit\",\"SpellBlock\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":40,\"PercentAttackSpeedMod\":0.4},\"effect\":{\"Effect1Amount\":\"42\",\"Effect2Amount\":\"6\",\"Effect3Amount\":\"30\",\"Effect4Amount\":\"3\"},\"depth\":3},\"3092\":{\"name\":\"Remnant of the Watchers\",\"description\":\"<stats>+200 Health<br>+35 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 18 additional magic damage and grant 20 Gold per unique spell cast. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"Eye of the Watchers;\",\"plaintext\":\"Provides Ability Power and Stealth Wards over time\",\"from\":[\"3098\",\"1028\"],\"image\":{\"full\":\"3092.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":550,\"purchasable\":true,\"total\":1800,\"sell\":720},\"tags\":[\"Health\",\"SpellDamage\",\"ManaRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatHPPoolMod\":200,\"FlatMagicDamageMod\":35},\"effect\":{\"Effect1Amount\":\"18\",\"Effect2Amount\":\"20\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"30\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"1\",\"Effect8Amount\":\"2\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"-0.4\",\"Effect11Amount\":\"5\",\"Effect12Amount\":\"6\",\"Effect13Amount\":\"50\",\"Effect14Amount\":\"90\",\"Effect15Amount\":\"0.25\",\"Effect16Amount\":\"2\",\"Effect17Amount\":\"500\",\"Effect18Amount\":\"0.5\",\"Effect19Amount\":\"1\",\"Effect20Amount\":\"10\"},\"depth\":3},\"3094\":{\"name\":\"Rapid Firecannon\",\"description\":\"<stats>+30% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Firecannon:</unique> Your Energized attacks gain 35% bonus Range (+150 range maximum) and deal 60~140 bonus magic damage (based on level) on hit.<br><br>Attacks become Energized 25% faster. Energized attacks function on structures.\",\"colloq\":\";canon;rapidfire;rfc\",\"plaintext\":\"Movement builds charges that release a sieging fire attack on release\",\"from\":[\"3086\",\"2015\"],\"image\":{\"full\":\"3094.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":2600,\"sell\":1820},\"tags\":[\"AttackSpeed\",\"CriticalStrike\",\"NonbootsMovement\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatCritChanceMod\":0.25,\"PercentMovementSpeedMod\":0.05,\"PercentAttackSpeedMod\":0.3},\"effect\":{\"Effect1Amount\":\"0.35\",\"Effect2Amount\":\"150\",\"Effect3Amount\":\"60\",\"Effect4Amount\":\"140\",\"Effect5Amount\":\"5\",\"Effect6Amount\":\"0.25\"},\"depth\":3},\"3095\":{\"name\":\"Stormrazor\",\"description\":\"<stats>+55 Attack Damage<br>+25% Attack Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Storm:</unique> Your Energized attacks deal <magicDamage>50 bonus magic damage</magicDamage> on hit.<br><br>Your Energized effects have all of their respective effects increased by +30% and also slow for 40% movement speed decaying over 1 seconds.\",\"colloq\":\";Windblade\",\"plaintext\":\"Tremendously empower other Energized effects.\",\"from\":[\"1038\",\"1036\",\"2015\"],\"image\":{\"full\":\"3095.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":3100,\"sell\":2170},\"tags\":[\"Damage\",\"AttackSpeed\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":55,\"PercentAttackSpeedMod\":0.25},\"effect\":{\"Effect1Amount\":\"50\",\"Effect2Amount\":\"50\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"0.3\",\"Effect5Amount\":\"0.4\",\"Effect6Amount\":\"1\"},\"depth\":3},\"3096\":{\"name\":\"Nomad's Medallion\",\"description\":\"<stats>+10 Movement Speed<br>+50% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>45</font> gold or <font color='#44DDFF'>6%</font> missing mana (minimum 10). Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><rules><font color='#447777'>''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE</font></rules>\",\"colloq\":\"Nomad's Eye;\",\"plaintext\":\"Grants gold and mana when nearby minions die that you didn't kill\",\"from\":[\"1006\",\"3301\"],\"into\":[\"3069\"],\"image\":{\"full\":\"3096.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":850,\"sell\":340},\"tags\":[\"HealthRegen\",\"ManaRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"2\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"50\",\"Effect4Amount\":\"10\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0\",\"Effect10Amount\":\"500\",\"Effect11Amount\":\"45\",\"Effect12Amount\":\"0.06\",\"Effect13Amount\":\"10\",\"Effect14Amount\":\"10\"},\"depth\":2},\"3097\":{\"name\":\"Targon's Brace\",\"description\":\"<stats>+125 Health<br>+50% Base Health Regen <br>+1 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+15 per level) Health. Killing a minion heals the owner and the nearest allied champion for 40 Health (+2% missing health) and grants them kill Gold. 50% healing if the owner is ranged. These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"Celestial Eye;\",\"plaintext\":\"Periodically kill enemy minions to heal and grant gold to a nearby ally\",\"from\":[\"3302\",\"1006\"],\"into\":[\"3401\"],\"image\":{\"full\":\"3097.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":850,\"sell\":340},\"tags\":[\"Aura\",\"GoldPer\",\"Health\",\"HealthRegen\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatHPPoolMod\":125},\"effect\":{\"Effect1Amount\":\"200\",\"Effect2Amount\":\"40\",\"Effect3Amount\":\"1\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"1\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"500\",\"Effect12Amount\":\"30\",\"Effect13Amount\":\"3\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"15\",\"Effect16Amount\":\"0.02\",\"Effect17Amount\":\"0.5\",\"Effect18Amount\":\"10\"},\"depth\":2},\"3098\":{\"name\":\"Frostfang\",\"description\":\"<stats>+20 Ability Power<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 18 additional magic damage and grant 20 Gold per unique spell cast. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"Eye of Frost;\",\"plaintext\":\"Grants gold when you damage an enemy\",\"from\":[\"3303\",\"1004\"],\"into\":[\"3092\"],\"image\":{\"full\":\"3098.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":325,\"purchasable\":true,\"total\":850,\"sell\":340},\"tags\":[\"SpellDamage\",\"ManaRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":20},\"effect\":{\"Effect1Amount\":\"18\",\"Effect2Amount\":\"20\",\"Effect3Amount\":\"6\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"30\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"5\",\"Effect10Amount\":\"1\",\"Effect11Amount\":\"0\",\"Effect12Amount\":\"0\",\"Effect13Amount\":\"0\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"0\",\"Effect16Amount\":\"0\",\"Effect17Amount\":\"500\",\"Effect18Amount\":\"0.5\",\"Effect19Amount\":\"0\",\"Effect20Amount\":\"10\"},\"depth\":2},\"3100\":{\"name\":\"Lich Bane\",\"description\":\"<stats>+80 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Grants a bonus to next attack after spell cast\",\"from\":[\"3057\",\"3113\",\"1026\"],\"image\":{\"full\":\"3100.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"SpellDamage\",\"Mana\",\"CooldownReduction\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentMovementSpeedMod\":0.07,\"FlatMPPoolMod\":250,\"FlatMagicDamageMod\":80},\"effect\":{\"Effect1Amount\":\"0.75\",\"Effect2Amount\":\"0.5\",\"Effect3Amount\":\"1.5\"},\"depth\":3},\"3101\":{\"name\":\"Stinger\",\"description\":\"<stats>+35% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction\",\"colloq\":\";\",\"plaintext\":\"Increased Attack Speed and Cooldown Reduction\",\"from\":[\"1042\",\"1042\"],\"into\":[\"3115\",\"3137\",\"3078\"],\"image\":{\"full\":\"3101.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"AttackSpeed\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentAttackSpeedMod\":0.35},\"effect\":{\"Effect1Amount\":\"10\"},\"depth\":2},\"3102\":{\"name\":\"Banshee's Veil\",\"description\":\"<stats>+75 Ability Power<br>+60 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.\",\"colloq\":\";bv\",\"plaintext\":\"Periodically blocks enemy abilities\",\"from\":[\"3108\",\"1033\",\"1026\"],\"image\":{\"full\":\"3102.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"SpellBlock\",\"SpellDamage\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":60,\"FlatMagicDamageMod\":75},\"effect\":{\"Effect1Amount\":\"40\",\"Effect2Amount\":\"45\",\"Effect3Amount\":\"10\",\"Effect4Amount\":\"-0.1\",\"Effect5Amount\":\"8\",\"Effect6Amount\":\"2\"},\"depth\":3},\"3104\":{\"name\":\"Lord Van Damm's Pillager\",\"description\":\"<stats>+300 Health<br>+50 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Ashes to Ashes:</unique> Controlling the nearest Altar sets you aflame, dealing 25 (+1 per champion level) magic damage per second to nearby enemies (Deals 50% bonus damage to minions and monsters). Controlling the furthest Altar causes your basic attacks to burn targets for up to 114 true damage (based on champion level) over 3 seconds.\",\"colloq\":\"lvd;\",\"plaintext\":\"Reduces Armor of nearby enemies\",\"from\":[\"3133\",\"3052\"],\"image\":{\"full\":\"3104.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":700,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"Health\",\"Damage\",\"Aura\",\"CooldownReduction\",\"OnHit\",\"ArmorPenetration\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":50,\"FlatHPPoolMod\":300},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"0.5\"},\"depth\":3},\"3105\":{\"name\":\"Aegis of the Legion\",\"description\":\"<stats>+30 Armor<br>+30 Magic Resist</stats>\",\"colloq\":\";\",\"plaintext\":\"Grants Armor and Magic Resistance\",\"from\":[\"1033\",\"1029\"],\"into\":[\"3190\",\"3005\",\"3050\",\"4403\"],\"image\":{\"full\":\"3105.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"SpellBlock\",\"Armor\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":30,\"FlatArmorMod\":30},\"depth\":2},\"3107\":{\"name\":\"Redemption\",\"description\":\"<stats>+200 Health<br>+50% Base Health Regen <br><mana>+150% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 10 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown). Heal and Shield Power is 3 times as effective on Redemption's heal.<br><br>Can be used while dead.<br><br><rules>Half effect if the target has been affected by another Redemption recently.</rules>\",\"colloq\":\";\",\"plaintext\":\"Activate to heal allies and damage enemies in an area\",\"from\":[\"3114\",\"3801\"],\"into\":[\"3382\"],\"image\":{\"full\":\"3107.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":650,\"purchasable\":true,\"total\":2100,\"sell\":1470},\"tags\":[\"Health\",\"HealthRegen\",\"ManaRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":200},\"effect\":{\"Effect1Amount\":\"0.1\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"20\",\"Effect4Amount\":\"0.1\",\"Effect5Amount\":\"250\",\"Effect6Amount\":\"120\",\"Effect7Amount\":\"550\",\"Effect8Amount\":\"5500\",\"Effect9Amount\":\"0.5\",\"Effect10Amount\":\"8\",\"Effect11Amount\":\"3\"},\"depth\":3},\"3108\":{\"name\":\"Fiendish Codex\",\"description\":\"<stats>+35 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction\",\"colloq\":\";\",\"plaintext\":\"Increases Ability Power and Cooldown Reduction\",\"from\":[\"1052\"],\"into\":[\"3174\",\"3115\",\"3157\",\"1402\",\"1414\",\"3128\",\"3102\",\"3905\",\"4104\"],\"image\":{\"full\":\"3108.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":465,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"CooldownReduction\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":35},\"effect\":{\"Effect1Amount\":\"-0.1\"},\"depth\":2},\"3109\":{\"name\":\"Knight's Vow\",\"description\":\"<stats>+250 Health<br>+40 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Designate an allied champion as your <a href='KnightsVowPartner'>Partner</a> (90 second cooldown).<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, gain +20 additional Armor and +15% Movement Speed towards them.<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, heal for 12% of the damage your <a href='KnightsVowPartner'>Partner</a> deals to champions and redirect 12% of the damage your <a href='KnightsVowPartner'>Partner</a> takes from champions to you as <font color='#FFFFFF'>true</font> damage (healing and damage redirection are reduced by 50% if you are ranged).<br><br><rules>(Champions can only be linked by one Knight's Vow at a time.)</rules>\",\"colloq\":\";\",\"plaintext\":\"Partner with an ally to protect each other\",\"from\":[\"3067\",\"1031\"],\"image\":{\"full\":\"3109.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":2200,\"sell\":1540},\"tags\":[\"Health\",\"Armor\",\"Aura\",\"CooldownReduction\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":250,\"FlatArmorMod\":40},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"0.15\",\"Effect3Amount\":\"0.12\",\"Effect4Amount\":\"0.12\",\"Effect5Amount\":\"90\",\"Effect6Amount\":\"0.5\",\"Effect7Amount\":\"1000\"},\"depth\":3},\"3110\":{\"name\":\"Frozen Heart\",\"description\":\"<stats>+100 Armor<br>+20% Cooldown Reduction<br><mana>+400 Mana</mana></stats><br><br><aura>UNIQUE Aura:</aura> Reduces the Attack Speed of nearby enemies by 15%.\",\"colloq\":\";fh\",\"plaintext\":\"Massively increases Armor and slows enemy basic attacks\",\"from\":[\"3082\",\"3024\"],\"image\":{\"full\":\"3110.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":2700,\"sell\":1890},\"tags\":[\"Armor\",\"Aura\",\"CooldownReduction\",\"Mana\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":400,\"FlatArmorMod\":100},\"effect\":{\"Effect1Amount\":\"-0.2\",\"Effect2Amount\":\"-0.15\"},\"depth\":3},\"3111\":{\"name\":\"Mercury's Treads\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 30%.\",\"colloq\":\";\",\"plaintext\":\"Increases Movement Speed and reduces duration of disabling effects\",\"from\":[\"1001\",\"1033\"],\"image\":{\"full\":\"3111.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"Boots\",\"SpellBlock\",\"Tenacity\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":45,\"FlatSpellBlockMod\":25},\"depth\":2},\"3112\":{\"name\":\"Guardian's Orb\",\"description\":\"<stats>+150 Health<br>+35 Ability Power<br><mana>+10 Mana regen per 5 seconds</mana></stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>\",\"colloq\":\";\",\"plaintext\":\"Good starting item for mages\",\"image\":{\"full\":\"3112.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":950,\"purchasable\":true,\"total\":950,\"sell\":380},\"tags\":[\"Health\",\"SpellDamage\",\"ManaRegen\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{\"FlatHPPoolMod\":150,\"FlatMagicDamageMod\":35}},\"3113\":{\"name\":\"Aether Wisp\",\"description\":\"<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed\",\"colloq\":\";\",\"plaintext\":\"Increases Ability Power and Movement Speed\",\"from\":[\"1052\"],\"into\":[\"2065\",\"3100\",\"3504\",\"3673\",\"3905\",\"3907\"],\"image\":{\"full\":\"3113.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":415,\"purchasable\":true,\"total\":850,\"sell\":595},\"tags\":[\"NonbootsMovement\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":30},\"effect\":{\"Effect1Amount\":\"0.05\"},\"depth\":2},\"3114\":{\"name\":\"Forbidden Idol\",\"description\":\"<stats><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> +5% Heal and Shield Power\",\"colloq\":\";\",\"plaintext\":\"Increases Heal and Shield Power, Mana Regeneration, and Cooldown Reduction\",\"from\":[\"1004\",\"1004\"],\"into\":[\"3107\",\"3222\",\"3504\"],\"image\":{\"full\":\"3114.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":550,\"purchasable\":true,\"total\":800,\"sell\":560},\"tags\":[\"CooldownReduction\",\"ManaRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"-0.1\",\"Effect2Amount\":\"0.05\"},\"depth\":2},\"3115\":{\"name\":\"Nashor's Tooth\",\"description\":\"<stats>+50% Attack Speed<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.<br>\",\"colloq\":\";\",\"plaintext\":\"Increases Attack Speed, Ability Power, and Cooldown Reduction\",\"from\":[\"3101\",\"3108\"],\"image\":{\"full\":\"3115.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":1000,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"AttackSpeed\",\"CooldownReduction\",\"OnHit\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":80,\"PercentAttackSpeedMod\":0.5},\"depth\":3},\"3116\":{\"name\":\"Rylai's Crystal Scepter\",\"description\":\"<stats>+300 Health<br>+90 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Damaging spells and abilities reduce enemy movement speed by 20% for 1 second.\",\"colloq\":\";\",\"plaintext\":\"Abilities slow enemies\",\"from\":[\"1026\",\"1052\",\"1028\"],\"image\":{\"full\":\"3116.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":915,\"purchasable\":true,\"total\":2600,\"sell\":1820},\"tags\":[\"Health\",\"SpellDamage\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":300,\"FlatMagicDamageMod\":90},\"effect\":{\"Effect1Amount\":\"-0.2\",\"Effect2Amount\":\"-0.2\",\"Effect3Amount\":\"-0.2\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"1\",\"Effect6Amount\":\"1\"},\"depth\":2},\"3117\":{\"name\":\"Boots of Mobility\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed. Increases to +115 Movement Speed when out of combat for 5 seconds.\",\"colloq\":\";\",\"plaintext\":\"Greatly enhances Movement Speed when out of combat\",\"from\":[\"1001\"],\"image\":{\"full\":\"3117.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Boots\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":115},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"25\"},\"depth\":2},\"3118\":{\"name\":\"Space Knight's Vow\",\"description\":\"<stats>+250 Health<br>+40 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Designate an allied champion as your <a href='KnightsVowPartner'>Partner</a> (90 second cooldown).<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, gain +20 additional Armor and +15% Movement Speed towards them.<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, heal for 3% of the damage your <a href='KnightsVowPartner'>Partner</a> deals to champions and redirect 12% of the damage your <a href='KnightsVowPartner'>Partner</a> takes from champions to you as <font color='#FFFFFF'>true</font> damage (healing and damage redirection are reduced by 50% if you are ranged).<br><br><rules>(Champions can only be linked by one Knight's Vow at a time.)</rules>\",\"colloq\":\";\",\"plaintext\":\"Partner with an ally to protect each other\",\"from\":[\"3067\",\"1031\"],\"image\":{\"full\":\"3118.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":2200,\"sell\":1540},\"tags\":[\"Health\",\"Armor\",\"Aura\",\"CooldownReduction\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":250,\"FlatArmorMod\":40},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"0.15\",\"Effect3Amount\":\"0.03\",\"Effect4Amount\":\"0.12\",\"Effect5Amount\":\"90\",\"Effect6Amount\":\"0.5\",\"Effect7Amount\":\"1000\"},\"depth\":3},\"3122\":{\"name\":\"Wicked Hatchet\",\"description\":\"<stats>+20 Attack Damage<br>+10% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.\",\"colloq\":\";ie\",\"plaintext\":\"Critical Strikes cause your target to bleed\",\"from\":[\"1051\",\"1036\"],\"into\":[\"3185\"],\"image\":{\"full\":\"3122.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":1200,\"sell\":840},\"tags\":[\"CriticalStrike\",\"Damage\",\"OnHit\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":20,\"FlatCritChanceMod\":0.1},\"effect\":{\"Effect1Amount\":\"0.6\",\"Effect2Amount\":\"3\"},\"depth\":2},\"3123\":{\"name\":\"Executioner's Calling\",\"description\":\"<stats>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 3 seconds.\",\"colloq\":\";grievous\",\"plaintext\":\"Overcomes enemies with high health gain\",\"from\":[\"1036\"],\"into\":[\"3033\"],\"image\":{\"full\":\"3123.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":800,\"sell\":560},\"tags\":[\"Damage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":15},\"effect\":{\"Effect1Amount\":\"3\"},\"depth\":2},\"3124\":{\"name\":\"Guinsoo's Rageblade\",\"description\":\"<stats>+25 Attack Damage<br>+25 Ability Power<br>+25% Attack Speed</stats><br><br><passive>Passive: </passive>Basic attacks deal 15 magic damage on hit.<br><unique>UNIQUE Passive - Last Whisper:</unique> Gain 6 (+0.5 per champion level)% <a href='FlatArmorPen'>Armor Penetration</a>.<br><unique>UNIQUE Passive - Dissolve:</unique> Gain 6 (+0.5 per champion level)% <a href='TotalMagicPen'>Magic Penetration</a>.<br><unique>UNIQUE Passive:</unique> Basic attacks grant +8% Attack Speed for 5 seconds (up to 6 stacks). At max stacks, gain <unlockedPassive>Guinsoo's Rage</unlockedPassive>.<br><br><unlockedPassive>Guinsoo's Rage:</unlockedPassive> Every other basic attack triggers on hit effects twice.<br><br><rules><font color='#8c8c8c'>While at half stacks, melee champions' next attack will fully stack Rageblade.</font></rules>\",\"colloq\":\";\",\"plaintext\":\"Increases Attack Speed, Armor Penetration, and Magic Penetration\",\"from\":[\"1052\",\"1043\",\"1037\"],\"image\":{\"full\":\"3124.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":790,\"purchasable\":true,\"total\":3100,\"sell\":2170},\"tags\":[\"Damage\",\"AttackSpeed\",\"SpellDamage\",\"OnHit\",\"MagicPenetration\",\"ArmorPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25,\"FlatMagicDamageMod\":25,\"PercentAttackSpeedMod\":0.25},\"effect\":{\"Effect1Amount\":\"0.08\",\"Effect2Amount\":\"2.5\",\"Effect3Amount\":\"2.5\",\"Effect4Amount\":\"5\",\"Effect5Amount\":\"6\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"0.1\",\"Effect8Amount\":\"15\",\"Effect9Amount\":\"1\",\"Effect10Amount\":\"3\",\"Effect11Amount\":\"0.06\",\"Effect12Amount\":\"0.5\"},\"depth\":3},\"3128\":{\"name\":\"Deathfire Grasp\",\"description\":\"<stats>+120 Ability Power<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Deals 15% of target champion's maximum Health in magic damage and increases all subsequent magic damage taken by the target by 20% for 4 seconds (90 second cooldown).\",\"colloq\":\";dfg\",\"plaintext\":\"Activate to increase all magic damage dealt to an enemy champion\",\"from\":[\"1058\",\"3108\"],\"image\":{\"full\":\"3128.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"Active\",\"CooldownReduction\",\"SpellDamage\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":120},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"0.15\",\"Effect3Amount\":\"0.2\"},\"depth\":3},\"3131\":{\"name\":\"Sword of the Divine\",\"description\":\"<stats>+25 Attack Damage<br>+25% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><active>UNIQUE Active:</active> Grants +100% Attack Speed and 100% Critical Strike Chance for 3 seconds or 3 critical strikes (90 second cooldown).\",\"colloq\":\";sotd;lethality\",\"plaintext\":\"Activate to gain 100% Critical Strike Chance for a short duration\",\"from\":[\"3134\",\"1042\",\"1042\"],\"image\":{\"full\":\"3131.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":2500,\"sell\":1750},\"tags\":[\"Damage\",\"CriticalStrike\",\"AttackSpeed\",\"Active\",\"ArmorPenetration\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":25,\"PercentAttackSpeedMod\":0.25},\"effect\":{\"Effect1Amount\":\"18\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"1\",\"Effect6Amount\":\"90\"},\"depth\":3},\"3133\":{\"name\":\"Caulfield's Warhammer\",\"description\":\"<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction\",\"colloq\":\";\",\"plaintext\":\"Attack Damage and Cooldown Reduction\",\"stacks\":0,\"from\":[\"1036\",\"1036\"],\"into\":[\"3142\",\"1400\",\"3163\",\"3104\",\"1412\",\"3813\",\"3812\",\"3147\",\"3156\",\"3508\",\"4102\",\"3671\",\"4402\"],\"image\":{\"full\":\"3133.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"Damage\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25},\"effect\":{\"Effect1Amount\":\"-0.1\"},\"depth\":2},\"3134\":{\"name\":\"Serrated Dirk\",\"description\":\"<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive - Headhunter:</unique> After killing any enemy, your next damaging spell will deal 40 bonus physical damage (30 second cooldown).\",\"colloq\":\";lethality\",\"plaintext\":\"Increases Attack Damage and Lethality\",\"stacks\":0,\"from\":[\"1036\",\"1036\"],\"into\":[\"3142\",\"3814\",\"3131\",\"3147\",\"4004\"],\"image\":{\"full\":\"3134.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"Damage\",\"ArmorPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"40\",\"Effect5Amount\":\"25000\",\"Effect6Amount\":\"30\"},\"depth\":2},\"3135\":{\"name\":\"Void Staff\",\"description\":\"<stats>+70 Ability Power</stats><br><br><unique>UNIQUE Passive - Dissolve:</unique> +40% <a href='TotalMagicPen'>Magic Penetration</a>.\",\"colloq\":\";\",\"plaintext\":\"Increases magic damage\",\"from\":[\"1026\",\"1052\"],\"image\":{\"full\":\"3135.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":1365,\"purchasable\":true,\"total\":2650,\"sell\":1855},\"tags\":[\"MagicPenetration\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":70},\"effect\":{\"Effect1Amount\":\"0.4\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"4\"},\"depth\":2},\"3136\":{\"name\":\"Haunting Guise\",\"description\":\"<stats>+35 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Madness:</unique> Deal 2% more damage for each second in combat with champions (10% maximum).\",\"colloq\":\";mask\",\"plaintext\":\"Increases magic damage\",\"stacks\":0,\"from\":[\"1028\",\"1052\"],\"into\":[\"3151\"],\"image\":{\"full\":\"3136.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":665,\"purchasable\":true,\"total\":1500,\"sell\":1050},\"tags\":[\"Health\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":200,\"FlatMagicDamageMod\":35},\"effect\":{\"Effect1Amount\":\"15\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"1\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"15\",\"Effect6Amount\":\"33\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"10\",\"Effect9Amount\":\"5\"},\"depth\":2},\"3137\":{\"name\":\"Dervish Blade\",\"description\":\"<stats>+50% Attack Speed<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Activate to remove all debuffs and grant massive Movement Speed\",\"from\":[\"3140\",\"3101\"],\"image\":{\"full\":\"3137.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":2700,\"sell\":1890},\"tags\":[\"Active\",\"AttackSpeed\",\"CooldownReduction\",\"NonbootsMovement\",\"SpellBlock\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatSpellBlockMod\":45,\"PercentAttackSpeedMod\":0.5},\"effect\":{\"Effect1Amount\":\"0.5\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"90\"},\"depth\":3},\"3139\":{\"name\":\"Mercurial Scimitar\",\"description\":\"<stats>+50 Attack Damage<br>+35 Magic Resist<br>+10% Life Steal</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Activate to remove all crowd control debuffs and grant massive Movement Speed\",\"from\":[\"3140\",\"1037\",\"1053\"],\"image\":{\"full\":\"3139.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":325,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"SpellBlock\",\"Damage\",\"LifeSteal\",\"Active\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":50,\"FlatSpellBlockMod\":35,\"PercentLifeStealMod\":0.1},\"effect\":{\"Effect1Amount\":\"0.5\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"90\"},\"depth\":3},\"3140\":{\"name\":\"Quicksilver Sash\",\"description\":\"<stats>+30 Magic Resist</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs (90 second cooldown).\",\"colloq\":\";qss\",\"plaintext\":\"Activate to remove all crowd control debuffs\",\"from\":[\"1033\"],\"into\":[\"3139\",\"3137\",\"3231\"],\"image\":{\"full\":\"3140.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":1300,\"sell\":910},\"tags\":[\"Active\",\"SpellBlock\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":30},\"effect\":{\"Effect1Amount\":\"90\"},\"depth\":2},\"3142\":{\"name\":\"Youmuu's Ghostblade\",\"description\":\"<stats>+55 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +40 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed for 6 seconds (45 second cooldown).\",\"colloq\":\";lethality\",\"plaintext\":\"Activate to greatly increase Movement Speed\",\"from\":[\"3133\",\"3134\"],\"into\":[\"3388\"],\"image\":{\"full\":\"3142.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":700,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"Damage\",\"Active\",\"CooldownReduction\",\"NonbootsMovement\",\"ArmorPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":55},\"effect\":{\"Effect1Amount\":\"45\",\"Effect2Amount\":\"18\",\"Effect3Amount\":\"0.2\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"6\",\"Effect6Amount\":\"40\"},\"depth\":3},\"3143\":{\"name\":\"Randuin's Omen\",\"description\":\"<stats>+400 Health<br>+60 Armor</stats><br><br><unique>UNIQUE Passive:</unique> -20% damage taken from basic attack critical strikes.<br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second.<br><active>UNIQUE Active:</active> Slows the Movement Speed of nearby enemy units by 55% for 2 seconds (60 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Greatly increases defenses, activate to slow nearby enemies\",\"from\":[\"3082\",\"1011\"],\"image\":{\"full\":\"3143.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":900,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"Active\",\"Armor\",\"Health\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":400,\"FlatArmorMod\":60},\"effect\":{\"Effect1Amount\":\"2\",\"Effect2Amount\":\"0.2\",\"Effect3Amount\":\"-0.55\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"-0.15\",\"Effect6Amount\":\"0.15\",\"Effect7Amount\":\"0.3\"},\"depth\":3},\"3144\":{\"name\":\"Bilgewater Cutlass\",\"description\":\"<stats>+25 Attack Damage<br>+10% Life Steal</stats><br><br><active>UNIQUE Active:</active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Activate to deal magic damage and slow target champion\",\"from\":[\"1053\",\"1036\"],\"into\":[\"3146\",\"3153\"],\"image\":{\"full\":\"3144.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":250,\"purchasable\":true,\"total\":1500,\"sell\":1050},\"tags\":[\"Active\",\"Damage\",\"LifeSteal\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":25,\"PercentLifeStealMod\":0.1},\"effect\":{\"Effect1Amount\":\"-0.25\",\"Effect2Amount\":\"2\",\"Effect3Amount\":\"90\",\"Effect4Amount\":\"100\"},\"depth\":3},\"3145\":{\"name\":\"Hextech Revolver\",\"description\":\"<stats>+40 Ability Power</stats><br><br><unique>UNIQUE Passive - Magic Bolt:</unique> Damaging an enemy champion with a basic attack shocks them for <scaleLevel>50 - 125</scaleLevel> bonus magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Magic Bolt's cooldown is reduced by Active Item cooldown reduction.<br><br><rules>(Damage scales based on level. Hextech effects can trigger other item spell effects.)</rules>\",\"colloq\":\";\",\"plaintext\":\"Increases Ability Power. Deal bonus magic damage on attack periodically.\",\"from\":[\"1052\",\"1052\"],\"into\":[\"3146\",\"3152\",\"3030\",\"3148\"],\"image\":{\"full\":\"3145.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":180,\"purchasable\":true,\"total\":1050,\"sell\":735},\"tags\":[\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":40},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"50\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"125\",\"Effect5Amount\":\"40\"},\"depth\":2},\"3146\":{\"name\":\"Hextech Gunblade\",\"description\":\"<stats>+40 Attack Damage<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><active>UNIQUE Active - Lightning Bolt:</active> Deals <scaleLevel>175 - 253</scaleLevel> (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).\",\"colloq\":\";\",\"plaintext\":\"Increases Attack Damage and Ability Power, activate to slow a target\",\"from\":[\"3144\",\"3145\"],\"image\":{\"full\":\"3146.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"Active\",\"Damage\",\"LifeSteal\",\"Slow\",\"SpellDamage\",\"SpellVamp\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":40,\"FlatMagicDamageMod\":80},\"effect\":{\"Effect1Amount\":\"0.15\",\"Effect2Amount\":\"40\",\"Effect3Amount\":\"175\",\"Effect4Amount\":\"253\",\"Effect5Amount\":\"0.4\",\"Effect6Amount\":\"2\"},\"depth\":4},\"3147\":{\"name\":\"Duskblade of Draktharr\",\"description\":\"<stats>+55 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> +21 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive - Blackout:</unique> When spotted by an enemy ward, reveal traps and disable wards around you for 8 seconds. Melee attacks instantly kill these devices. (90 second cooldown).<br><unique>UNIQUE Passive - Nightstalker:</unique> After being unseen for at least 1 second, your next basic attack against an enemy champion deals <scaleLevel>30 - 150</scaleLevel> bonus physical damage and slows them by 99% for 0.25 seconds. Ranged basic attacks do not apply the slow. (Lasts for 5 seconds after being seen by an enemy champion).\",\"colloq\":\";lethality\",\"plaintext\":\"Deals additional physical damage when ambushing enemies and provides trap and ward detection periodically\",\"from\":[\"3134\",\"3133\"],\"image\":{\"full\":\"3147.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":700,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"Damage\",\"Vision\",\"CooldownReduction\",\"OnHit\",\"ArmorPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":55},\"effect\":{\"Effect1Amount\":\"21\",\"Effect2Amount\":\"45\",\"Effect3Amount\":\"150\",\"Effect4Amount\":\"90\",\"Effect5Amount\":\"30\",\"Effect6Amount\":\"150\",\"Effect7Amount\":\"99\",\"Effect8Amount\":\"0.25\",\"Effect9Amount\":\"5\",\"Effect10Amount\":\"30\",\"Effect11Amount\":\"1\",\"Effect12Amount\":\"150\",\"Effect13Amount\":\"8\"},\"depth\":3},\"3148\":{\"name\":\"Space Hextech Gunblade\",\"description\":\"<stats>+40 Attack Damage<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 4% of damage dealt. This is 33% as effective for Area of Effect damage.<br><active>UNIQUE Active - Lightning Bolt:</active> Deals <scaleLevel>175 - 253</scaleLevel> (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).\",\"colloq\":\";\",\"plaintext\":\"Increases Attack Damage and Ability Power, activate to slow a target\",\"from\":[\"3162\",\"3145\"],\"image\":{\"full\":\"3148.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"Active\",\"Damage\",\"LifeSteal\",\"Slow\",\"SpellDamage\",\"SpellVamp\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":40,\"FlatMagicDamageMod\":80},\"effect\":{\"Effect1Amount\":\"0.04\",\"Effect2Amount\":\"40\",\"Effect3Amount\":\"175\",\"Effect4Amount\":\"253\",\"Effect5Amount\":\"0.4\",\"Effect6Amount\":\"2\"},\"depth\":4},\"3149\":{\"name\":\"Space Blade of the Ruined King\",\"description\":\"<stats>+40 Attack Damage<br>+25% Attack Speed<br>+3% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><rules>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</rules>\",\"colloq\":\";brk;bork;bork;bork;botrk\",\"plaintext\":\"Deals damage based on target's Health, can steal Movement Speed\",\"from\":[\"3162\",\"1043\"],\"image\":{\"full\":\"3149.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":700,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"Damage\",\"AttackSpeed\",\"LifeSteal\",\"Active\",\"Slow\",\"OnHit\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":40,\"PercentAttackSpeedMod\":0.25,\"PercentLifeStealMod\":0.03},\"effect\":{\"Effect1Amount\":\"0.08\"},\"depth\":4},\"3151\":{\"name\":\"Liandry's Torment\",\"description\":\"<stats>+75 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Madness:</unique> Deal 2% more damage for each second in combat with champions (10% maximum).<br><unique>UNIQUE Passive - Torment:</unique> Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 1.5% of their maximum Health per second. Burn damage is increased to 2.5% against <a href='MovementImpaired'>movement-impaired</a> units.\",\"colloq\":\";mask\",\"plaintext\":\"Spell damage burns enemies for a portion of their Health\",\"stacks\":0,\"from\":[\"3136\",\"1026\"],\"image\":{\"full\":\"3151.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":750,\"purchasable\":true,\"total\":3100,\"sell\":2170},\"tags\":[\"Health\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":300,\"FlatMagicDamageMod\":75},\"effect\":{\"Effect1Amount\":\"15\",\"Effect2Amount\":\"0.015\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"100\",\"Effect5Amount\":\"2\",\"Effect6Amount\":\"10\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"2.5\"},\"depth\":3},\"3152\":{\"name\":\"Hextech Protobelt-01\",\"description\":\"<stats>+300 Health<br>+60 Ability Power<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Fire Bolt:</unique> Dash forward and unleash a nova of fire bolts that deal <scaleLevel>75 - 150</scaleLevel> (+25% of your Ability Power) as magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Champions and Monsters hit by multiple fire bolts take 10% damage per additional bolt.<br><br><rules>(This dash cannot pass through terrain.)</rules>\",\"colloq\":\"rocket belt;\",\"plaintext\":\"Activate to dash forward and unleash a fiery explosion\",\"from\":[\"3145\",\"3067\"],\"image\":{\"full\":\"3152.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":650,\"purchasable\":true,\"total\":2500,\"sell\":1750},\"tags\":[\"Health\",\"SpellDamage\",\"Active\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":300,\"FlatMagicDamageMod\":60},\"effect\":{\"Effect1Amount\":\"0.12\",\"Effect2Amount\":\"0.04\",\"Effect3Amount\":\"40\",\"Effect4Amount\":\"75\",\"Effect5Amount\":\"150\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"0.25\",\"Effect8Amount\":\"40\",\"Effect9Amount\":\"0.5\"},\"depth\":3},\"3153\":{\"name\":\"Blade of the Ruined King\",\"description\":\"<stats>+40 Attack Damage<br>+25% Attack Speed<br>+12% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><rules>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</rules>\",\"colloq\":\";brk;bork;bork;bork;botrk\",\"plaintext\":\"Deals damage based on target's Health, can steal Movement Speed\",\"from\":[\"3144\",\"1043\"],\"into\":[\"3389\"],\"image\":{\"full\":\"3153.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":700,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"Damage\",\"AttackSpeed\",\"LifeSteal\",\"Active\",\"Slow\",\"OnHit\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":40,\"PercentAttackSpeedMod\":0.25,\"PercentLifeStealMod\":0.12},\"effect\":{\"Effect1Amount\":\"0.08\"},\"depth\":4},\"3155\":{\"name\":\"Hexdrinker\",\"description\":\"<stats>+20 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 110 to 280 (based on level) magic damage for 5 seconds (90 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Increases Attack Damage and Magic Resist\",\"stacks\":0,\"from\":[\"1036\",\"1033\"],\"into\":[\"3156\",\"3163\"],\"image\":{\"full\":\"3155.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":1300,\"sell\":910},\"tags\":[\"Damage\",\"SpellBlock\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":20,\"FlatSpellBlockMod\":35},\"effect\":{\"Effect1Amount\":\"0.3\",\"Effect2Amount\":\"110\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"90\",\"Effect5Amount\":\"280\",\"Effect6Amount\":\"100\",\"Effect7Amount\":\"10\"},\"depth\":2},\"3156\":{\"name\":\"Maw of Malmortius\",\"description\":\"<stats>+50 Attack Damage<br>+50 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs up to 350 magic damage within 5 seconds (90 second cooldown).<br><unlockedPassive>Lifegrip:</unlockedPassive> When <i>Lifeline</i> triggers, gain +20 Attack Damage, +10% Spell Vamp and +10% Life Steal until out of combat.\",\"colloq\":\";\",\"plaintext\":\"Grants bonus Attack Damage when Health is low\",\"stacks\":0,\"from\":[\"3155\",\"3133\"],\"image\":{\"full\":\"3156.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":3250,\"sell\":2275},\"tags\":[\"SpellBlock\",\"Damage\",\"LifeSteal\",\"CooldownReduction\",\"SpellVamp\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":50,\"FlatSpellBlockMod\":50},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"35\",\"Effect3Amount\":\"0.3\",\"Effect4Amount\":\"350\",\"Effect5Amount\":\"5\",\"Effect6Amount\":\"90\",\"Effect7Amount\":\"20\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0.1\",\"Effect10Amount\":\"0.1\"},\"depth\":3},\"3157\":{\"name\":\"Zhonya's Hourglass\",\"description\":\"<stats>+75 Ability Power<br>+45 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).\",\"colloq\":\";zhg;zonyas\",\"plaintext\":\"Activate to become invincible but unable to take actions\",\"from\":[\"3191\",\"3108\",\"2420\"],\"into\":[\"3386\"],\"image\":{\"full\":\"3157.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"Armor\",\"SpellDamage\",\"Active\",\"CooldownReduction\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":75,\"FlatArmorMod\":45},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"2.5\",\"Effect3Amount\":\"120\"},\"depth\":3},\"3158\":{\"name\":\"Ionian Boots of Lucidity\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive:</unique> Reduces Summoner Spell cooldowns by 10%<br><br><br><rules><font color='#FDD017'>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''</font></rules>\",\"colloq\":\";\",\"plaintext\":\"Increases Movement Speed and Cooldown Reduction\",\"from\":[\"1001\"],\"image\":{\"full\":\"3158.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Boots\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMovementSpeedMod\":45},\"effect\":{\"Effect1Amount\":\"-0.1\",\"Effect2Amount\":\"0.1\"},\"depth\":2},\"3161\":{\"name\":\"Spear of Shojin\",\"description\":\"<stats>+60 Attack Damage<br>+250 Health<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> After you cast your ultimate, your next basic attack within 10 seconds grants <unlockedPassive>Awakened Dragon</unlockedPassive> for 6 seconds (30 second cooldown).<br><br><unlockedPassive>Awakened Dragon:</unlockedPassive> Gain 50% attack speed, and basic attacks refund 20% of your remaining non-ultimate cooldowns.\",\"colloq\":\";\",\"plaintext\":\"After casting your ultimate, your basic attacks reduces your remaining non-ultimate cooldowns.\",\"stacks\":0,\"from\":[\"1038\",\"3067\",\"1036\"],\"image\":{\"full\":\"3161.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":950,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"Health\",\"Damage\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":60,\"FlatHPPoolMod\":250},\"effect\":{\"Effect1Amount\":\"0.01\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0.5\",\"Effect4Amount\":\"0.2\",\"Effect5Amount\":\"6\",\"Effect6Amount\":\"30\",\"Effect7Amount\":\"0.2\",\"Effect8Amount\":\"10\"},\"depth\":3},\"3162\":{\"name\":\"Space Bilgewater Cutlass\",\"description\":\"<stats>+25 Attack Damage<br>+2.5% Life Steal</stats><br><br><active>UNIQUE Active:</active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Activate to deal magic damage and slow target champion\",\"from\":[\"1059\",\"1036\"],\"into\":[\"3146\",\"3153\",\"3148\",\"3149\"],\"image\":{\"full\":\"3162.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":250,\"purchasable\":true,\"total\":1500,\"sell\":1050},\"tags\":[\"Active\",\"Damage\",\"LifeSteal\",\"Slow\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":25,\"PercentLifeStealMod\":0.025},\"effect\":{\"Effect1Amount\":\"-0.25\",\"Effect2Amount\":\"2\",\"Effect3Amount\":\"90\",\"Effect4Amount\":\"100\"},\"depth\":3},\"3163\":{\"name\":\"Space Maw of Malmortius\",\"description\":\"<stats>+50 Attack Damage<br>+50 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs up to 350 magic damage within 5 seconds (90 second cooldown).<br><unlockedPassive>Lifegrip:</unlockedPassive> When <i>Lifeline</i> triggers, gain +20 Attack Damage, +2.5% Spell Vamp and +2.5% Life Steal until out of combat.\",\"colloq\":\";\",\"plaintext\":\"Grants bonus Attack Damage when Health is low\",\"stacks\":0,\"from\":[\"3155\",\"3133\"],\"image\":{\"full\":\"3163.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":3250,\"sell\":2275},\"tags\":[\"SpellBlock\",\"Damage\",\"LifeSteal\",\"CooldownReduction\",\"SpellVamp\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":50,\"FlatSpellBlockMod\":50},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"35\",\"Effect3Amount\":\"0.3\",\"Effect4Amount\":\"350\",\"Effect5Amount\":\"5\",\"Effect6Amount\":\"90\",\"Effect7Amount\":\"20\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0.025\",\"Effect10Amount\":\"0.025\"},\"depth\":3},\"3165\":{\"name\":\"Morellonomicon\",\"description\":\"<stats>+70 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Touch of Death:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a><br><unique>UNIQUE Passive - Cursed Strike:</unique> Magic damage dealt to champions inflicts them with <a href='GrievousWounds'>Grievous Wounds</a> for 3 seconds.\",\"colloq\":\";nmst;grievous\",\"plaintext\":\"Increases magic damage\",\"from\":[\"3916\",\"1026\"],\"image\":{\"full\":\"3165.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":550,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"Health\",\"SpellDamage\",\"MagicPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":300,\"FlatMagicDamageMod\":70},\"effect\":{\"Effect1Amount\":\"15\",\"Effect2Amount\":\"40\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"0.2\",\"Effect5Amount\":\"60\",\"Effect6Amount\":\"1\",\"Effect7Amount\":\"50\",\"Effect8Amount\":\"150\",\"Effect9Amount\":\"20\"},\"depth\":3},\"3170\":{\"name\":\"Moonflair Spellblade\",\"description\":\"<stats>+50 Ability Power<br>+50 Armor<br>+50 Magic Resist</stats><br><br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.\",\"colloq\":\";\",\"plaintext\":\"Improves defense and reduces duration of disabling effects\",\"from\":[\"3191\",\"1057\"],\"image\":{\"full\":\"3170.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":580,\"purchasable\":true,\"total\":2400,\"sell\":1680},\"tags\":[\"Armor\",\"SpellBlock\",\"SpellDamage\",\"Tenacity\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatSpellBlockMod\":50,\"FlatMagicDamageMod\":50,\"FlatArmorMod\":50},\"depth\":3},\"3172\":{\"name\":\"Zephyr\",\"description\":\"<stats>+50 Attack Damage<br>+40% Attack Speed<br>+10% Movement Speed</stats><br><br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.\",\"colloq\":\";\",\"plaintext\":\"Mobility and Tenacity\",\"from\":[\"1038\",\"1042\",\"1042\"],\"image\":{\"full\":\"3172.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":900,\"purchasable\":true,\"total\":2800,\"sell\":1960},\"tags\":[\"Damage\",\"AttackSpeed\",\"NonbootsMovement\",\"Tenacity\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":50,\"PercentMovementSpeedMod\":0.1,\"PercentAttackSpeedMod\":0.4},\"depth\":2},\"3173\":{\"name\":\"Eleisa's Miracle\",\"description\":\"<stats>+10 Health Regen per 5 seconds<br>+15 Mana Regen per 5 seconds</stats><br><br><unique>UNIQUE Passive - Eleisa's Blessing:</unique> Upon gaining 3 levels with this item, all effects of this item become permanent, and this item is consumed.<br><br><i>(Unique Passives with the same name do not stack.)</i>\",\"colloq\":\";\",\"plaintext\":\"Increases Movement Speed and Cooldown Reduction\",\"from\":[\"1001\"],\"image\":{\"full\":\"3173.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Boots\",\"CooldownReduction\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatMovementSpeedMod\":45},\"effect\":{\"Effect1Amount\":\"-0.1\",\"Effect2Amount\":\"0.1\"},\"depth\":2},\"3174\":{\"name\":\"Athene's Unholy Grail\",\"description\":\"<stats>+30 Ability Power<br>+30 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> Gain 35% of the <a href='premitigation'><font color='#6666FF'><u>premitigation</u></font></a> damage dealt to champions as Blood Charges, up to <scaleLevel>100 - 250</scaleLevel> max. Healing or shielding another ally consumes charges equal to 100% of the heal or shield value, healing the ally for that amount.<br><unique>UNIQUE Passive - Dissonance:</unique> Grants 5 ability power per 25% Base Mana Regen you have. Disables <unique>Harmony</unique> on your other items.<br><br><rules>(Maximum amount of Blood Charges stored is based on level. Healing amplification is applied to the total heal value.)</rules>\",\"colloq\":\";\",\"plaintext\":\"Deal damage to empower your heals and shields\",\"from\":[\"3108\",\"3028\"],\"image\":{\"full\":\"3174.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":2100,\"sell\":1470},\"tags\":[\"SpellBlock\",\"HealthRegen\",\"SpellDamage\",\"ManaRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":30,\"FlatMagicDamageMod\":30},\"effect\":{\"Effect1Amount\":\"10\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"5\",\"Effect6Amount\":\"0.35\",\"Effect7Amount\":\"100\",\"Effect8Amount\":\"250\",\"Effect9Amount\":\"1\",\"Effect10Amount\":\"1\",\"Effect11Amount\":\"0.25\",\"Effect12Amount\":\"600\",\"Effect13Amount\":\"8\",\"Effect14Amount\":\"90\"},\"depth\":3},\"3175\":{\"name\":\"Head of Kha'Zix\",\"description\":\"<unique>UNIQUE Active - Bonetooth Totem:</unique> Places a Stealth Ward that lasts 180 seconds (90 Second cooldown). Limit 3 Stealth Wards on the map per player.<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Rengar gains the movement speed bonus of Thrill of the Hunt while he is stealthed.\",\"colloq\":\"\",\"plaintext\":\"\",\"specialRecipe\":3169,\"inStore\":false,\"requiredChampion\":\"Rengar\",\"hideFromAll\":true,\"image\":{\"full\":\"3175.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":0,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"125\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"180\",\"Effect5Amount\":\"90\"}},\"3181\":{\"name\":\"Sanguine Blade\",\"description\":\"<stats>+45 Attack Damage<br>+10% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).\",\"colloq\":\";\",\"plaintext\":\"Greatly increases Attack Damage and Life Steal\",\"from\":[\"1037\",\"1053\"],\"image\":{\"full\":\"3181.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":48,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":625,\"purchasable\":true,\"total\":2400,\"sell\":1680},\"tags\":[\"Damage\",\"LifeSteal\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":45,\"PercentLifeStealMod\":0.1},\"effect\":{\"Effect1Amount\":\"6\",\"Effect2Amount\":\"0.01\",\"Effect3Amount\":\"8\",\"Effect4Amount\":\"5\"},\"depth\":3},\"3184\":{\"name\":\"Guardian's Hammer\",\"description\":\"<stats>+150 Health<br>+20 Attack Damage<br>+10% Life Steal</stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>\",\"colloq\":\";dblade\",\"plaintext\":\"Good starting item for attackers\",\"image\":{\"full\":\"3184.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":96,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":950,\"purchasable\":true,\"total\":950,\"sell\":380},\"tags\":[\"Health\",\"Damage\",\"LifeSteal\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":20,\"FlatHPPoolMod\":150,\"PercentLifeStealMod\":0.1}},\"3185\":{\"name\":\"The Lightbringer\",\"description\":\"<stats>+30 Attack Damage<br>+30% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration.<br><unique>UNIQUE Passive - Trap Detection:</unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:</active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).\",\"colloq\":\";lb\",\"plaintext\":\"Critical Strikes cause your target to bleed and be revealed\",\"from\":[\"3122\",\"1018\"],\"image\":{\"full\":\"3185.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":144,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":2350,\"sell\":1645},\"tags\":[\"Active\",\"CriticalStrike\",\"Damage\",\"OnHit\",\"Stealth\",\"Vision\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":30,\"FlatCritChanceMod\":0.3},\"effect\":{\"Effect1Amount\":\"0.9\",\"Effect2Amount\":\"3\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"5\",\"Effect5Amount\":\"3\",\"Effect6Amount\":\"60\"},\"depth\":3},\"3187\":{\"name\":\"Arcane Sweeper\",\"description\":\"<stats>+225 Health<br>+250 Mana<br>+25 Armor<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Trap Detection:</unique> Grants <font color='#ee91d7'>True Sight</font>  of nearby enemy traps.<br><active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions in the area for 3 seconds (60 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Activate to reveal a nearby area of the map\",\"from\":[\"3024\",\"3067\"],\"image\":{\"full\":\"3187.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":192,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":2050,\"sell\":1435},\"tags\":[\"Active\",\"Armor\",\"CooldownReduction\",\"Health\",\"Mana\",\"Stealth\",\"Vision\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":225,\"FlatMPPoolMod\":250,\"FlatArmorMod\":25},\"effect\":{\"Effect1Amount\":\"-0.2\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"5\",\"Effect5Amount\":\"3\",\"Effect6Amount\":\"60\"},\"depth\":3},\"3190\":{\"name\":\"Locket of the Iron Solari\",\"description\":\"<stats>+30 Armor<br>+60 Magic Resist</stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allied champions for 2.5 seconds that absorbs up to 30 (+15 per level) <scaleHealth>(+20% of your bonus health)</scaleHealth> damage (120 second cooldown).<br><br><rules>Shield per level uses the higher of your level or the target's level.<br>Shield ratio scales with your level.<br>Shield amount is reduced to 25% if the target has been affected by another Locket of the Iron Solari in the last 20 seconds.</rules>\",\"colloq\":\";\",\"plaintext\":\"Activate to shield nearby allies from damage\",\"from\":[\"3105\",\"1033\"],\"into\":[\"3383\"],\"image\":{\"full\":\"3190.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":240,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":650,\"purchasable\":true,\"total\":2200,\"sell\":1540},\"tags\":[\"SpellBlock\",\"Armor\",\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":60,\"FlatArmorMod\":30},\"effect\":{\"Effect1Amount\":\"30\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"2.5\",\"Effect4Amount\":\"0.25\",\"Effect5Amount\":\"20\",\"Effect6Amount\":\"120\",\"Effect7Amount\":\"0.2\"},\"depth\":3},\"3191\":{\"name\":\"Seeker's Armguard\",\"description\":\"<stats>+30 Armor<br>+20 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.\",\"colloq\":\";\",\"plaintext\":\"Increases Armor and Ability Power\",\"from\":[\"1029\",\"1052\",\"1029\"],\"into\":[\"3090\",\"3170\",\"3157\"],\"image\":{\"full\":\"3191.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":288,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":65,\"purchasable\":true,\"total\":1100,\"sell\":770},\"tags\":[\"Armor\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":20,\"FlatArmorMod\":30},\"effect\":{\"Effect1Amount\":\"0.5\",\"Effect2Amount\":\"30\"},\"depth\":2},\"3193\":{\"name\":\"Gargoyle Stoneplate\",\"description\":\"<stats>+40 Armor<br>+40 Magic Resist</stats></stats><br><br><unique>UNIQUE Passive - Stone Skin:</unique> If 3+ enemy champions are nearby, grants 40 bonus Armor and Magic Resist.<br><unique>UNIQUE Active - Metallicize:</unique> Increases Health by 40% and increases champion size, but reduces damage dealt by 60% for 4 seconds (90 second cooldown). If <unique>Stone Skin</unique> is active, the Health increase becomes 100% instead.\",\"colloq\":\";\",\"plaintext\":\"Greatly increases defense near multiple enemies.\",\"from\":[\"1031\",\"1057\",\"2420\"],\"image\":{\"full\":\"3193.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":336,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":380,\"purchasable\":true,\"total\":2500,\"sell\":1750},\"tags\":[\"Health\",\"SpellBlock\",\"Armor\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":40,\"FlatArmorMod\":40},\"effect\":{\"Effect1Amount\":\"40\",\"Effect2Amount\":\"850\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"4\",\"Effect5Amount\":\"0.6\",\"Effect6Amount\":\"0.4\",\"Effect7Amount\":\"0.07\",\"Effect8Amount\":\"1\",\"Effect9Amount\":\"0.25\",\"Effect10Amount\":\"90\",\"Effect11Amount\":\"1\"},\"depth\":3},\"3194\":{\"name\":\"Adaptive Helm\",\"description\":\"<stats>+350 Health<br>+55 Magic Resist<br>+100% Base Health Regeneration <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Taking magic damage from a spell or effect reduces all subsequent magic damage from that same spell or effect by 20% for 4 seconds.\",\"colloq\":\";\",\"plaintext\":\"Reduces damage from repeated spells and effects.\",\"from\":[\"1033\",\"3211\",\"1006\"],\"image\":{\"full\":\"3194.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":384,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":1000,\"purchasable\":true,\"total\":2800,\"sell\":1960},\"tags\":[\"Health\",\"SpellBlock\",\"HealthRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":350,\"FlatSpellBlockMod\":55},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"4\",\"Effect3Amount\":\"25\"},\"depth\":3},\"3196\":{\"name\":\"The Hex Core mk-1\",\"description\":\"<stats>+3 Ability Power per level<br>+15 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.\",\"colloq\":\";viktor\",\"plaintext\":\"Allows Viktor to improve an ability of his choice\",\"from\":[\"3200\"],\"requiredChampion\":\"Viktor\",\"into\":[\"3197\"],\"image\":{\"full\":\"3196.png\",\"sprite\":\"item1.png\",\"group\":\"item\",\"x\":432,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":1150,\"purchasable\":true,\"total\":1150,\"sell\":805},\"tags\":[\"Mana\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"3\",\"Effect2Amount\":\"15\"},\"depth\":2},\"3197\":{\"name\":\"The Hex Core mk-2\",\"description\":\"<stats>+6 Ability Power per level<br>+20 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.\",\"colloq\":\";viktor\",\"plaintext\":\"Allows Viktor to improve an ability of his choice\",\"from\":[\"3196\"],\"requiredChampion\":\"Viktor\",\"into\":[\"3198\"],\"image\":{\"full\":\"3197.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":1000,\"purchasable\":true,\"total\":2150,\"sell\":1505},\"tags\":[\"Mana\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"6\",\"Effect2Amount\":\"20\"},\"depth\":3},\"3198\":{\"name\":\"Perfect Hex Core\",\"description\":\"<stats>+10 Ability Power per level<br>+25 Mana per level</stats><br><br><unique>UNIQUE Passive - Glorious Evolution:</unique> Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.\",\"colloq\":\";viktor\",\"plaintext\":\"Allows Viktor to improve an ability of his choice\",\"from\":[\"3197\"],\"requiredChampion\":\"Viktor\",\"image\":{\"full\":\"3198.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":850,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"Mana\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"10\",\"Effect2Amount\":\"25\"},\"depth\":4},\"3200\":{\"name\":\"Prototype Hex Core\",\"description\":\"<stats>+1 Ability Power per level<br>+10 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> This item can be upgraded three times to enhance Viktor's basic abilities.\",\"colloq\":\";viktor\",\"plaintext\":\"Increases Ability Power and can be upgraded to improve Viktor's abilities\",\"inStore\":false,\"requiredChampion\":\"Viktor\",\"into\":[\"3196\"],\"image\":{\"full\":\"3200.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"1\",\"Effect2Amount\":\"10\"}},\"3211\":{\"name\":\"Spectre's Cowl\",\"description\":\"<stats>+250 Health<br>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.\",\"colloq\":\";hat\",\"plaintext\":\"Improves defense and grants regeneration upon being damaged\",\"from\":[\"1028\",\"1033\"],\"into\":[\"3065\",\"3194\"],\"image\":{\"full\":\"3211.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":350,\"purchasable\":true,\"total\":1200,\"sell\":840},\"tags\":[\"Health\",\"HealthRegen\",\"SpellBlock\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":250,\"FlatSpellBlockMod\":25},\"effect\":{\"Effect1Amount\":\"1.5\",\"Effect2Amount\":\"10\"},\"depth\":2},\"3222\":{\"name\":\"Mikael's Crucible\",\"description\":\"<stats>+40 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Heal and Shield Power<br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.<br><active>UNIQUE Active:</active> Cleanses all stuns, roots, taunts, fears, silences, and slows on an allied champion and grants them slow immunity for 2 seconds (120 second cooldown). <br><br>Cleansing an effect grants the ally 40% movement speed for 2 seconds.\",\"colloq\":\";\",\"plaintext\":\"Activate to remove all disabling effects from an allied champion\",\"from\":[\"3028\",\"3114\"],\"image\":{\"full\":\"3222.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":2100,\"sell\":1470},\"tags\":[\"SpellBlock\",\"HealthRegen\",\"ManaRegen\",\"Active\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":40},\"effect\":{\"Effect1Amount\":\"2\",\"Effect2Amount\":\"5\",\"Effect3Amount\":\"0.5\",\"Effect4Amount\":\"0.25\",\"Effect5Amount\":\"600\",\"Effect6Amount\":\"8\",\"Effect7Amount\":\"90\",\"Effect8Amount\":\"1\",\"Effect9Amount\":\"1\",\"Effect10Amount\":\"0.4\",\"Effect11Amount\":\"0.2\",\"Effect12Amount\":\"2\",\"Effect13Amount\":\"120\"},\"depth\":3},\"3230\":{\"name\":\"Space Ravenous Hydra\",\"description\":\"<stats>+80 Attack Damage<br>+100% Base Health Regen <br>+3% Life Steal</stats><br><br><passive>Passive:</passive> 50% of total Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Melee attacks hit nearby enemies, dealing damage and restoring Health\",\"from\":[\"3077\",\"1059\",\"1037\"],\"image\":{\"full\":\"3230.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":3500,\"sell\":2450},\"tags\":[\"Active\",\"Damage\",\"HealthRegen\",\"LifeSteal\",\"OnHit\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":80,\"PercentLifeStealMod\":0.03},\"effect\":{\"Effect1Amount\":\"0.2\",\"Effect2Amount\":\"0.6\",\"Effect3Amount\":\"0.6\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"10\"},\"depth\":3},\"3231\":{\"name\":\"Space Mercurial Scimitar\",\"description\":\"<stats>+50 Attack Damage<br>+35 Magic Resist<br>+2.5% Life Steal</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Activate to remove all crowd control debuffs and grant massive Movement Speed\",\"from\":[\"3140\",\"1037\",\"1059\"],\"image\":{\"full\":\"3231.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":325,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"SpellBlock\",\"Damage\",\"LifeSteal\",\"Active\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":50,\"FlatSpellBlockMod\":35,\"PercentLifeStealMod\":0.025},\"effect\":{\"Effect1Amount\":\"0.5\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"90\"},\"depth\":3},\"3285\":{\"name\":\"Luden's Echo\",\"description\":\"<stats>+90 Ability Power<br><mana>+600 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.\",\"colloq\":\";\",\"plaintext\":\"Increases Ability Power, Mana, and Cooldown Reduction\",\"from\":[\"3802\",\"1026\"],\"into\":[\"3390\"],\"image\":{\"full\":\"3285.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":1050,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"SpellDamage\",\"Mana\",\"CooldownReduction\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":600,\"FlatMagicDamageMod\":90},\"effect\":{\"Effect1Amount\":\"100\",\"Effect2Amount\":\"100\",\"Effect3Amount\":\"4\",\"Effect4Amount\":\"0.1\",\"Effect5Amount\":\"35\",\"Effect6Amount\":\"10\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"-0.1\"},\"depth\":3},\"3301\":{\"name\":\"Ancient Coin\",\"description\":\"<stats>+5 Movement Speed<br>+5% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>25</font> gold or <font color='#44DDFF'>6%</font> missing mana (minimum 10). Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 500 gold using this item and upgrade to <font color='#CFBF84'>Nomad's Medallion</font>.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><i><font color='#447777'>''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE</font></i>\",\"colloq\":\";\",\"plaintext\":\"Grants gold and mana when nearby minions die that you didn't kill\",\"into\":[\"3096\"],\"image\":{\"full\":\"3301.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"ManaRegen\",\"GoldPer\",\"CooldownReduction\",\"NonbootsMovement\",\"Lane\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"5\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0\",\"Effect10Amount\":\"500\",\"Effect11Amount\":\"45\",\"Effect12Amount\":\"0.06\",\"Effect13Amount\":\"10\",\"Effect14Amount\":\"10\"}},\"3302\":{\"name\":\"Relic Shield\",\"description\":\"<stats>+50 Health<br>+1 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 Health (+2% missing health) and grants them kill Gold. 50% healing if the owner is ranged. These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges.<hr><passive>QUEST:</passive> Earn 500 gold using this item and upgrade to <font color='#CFBF84'>Targon's Brace</font>.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";\",\"plaintext\":\"Kill minions periodically to heal and grant gold to a nearby ally\",\"into\":[\"3097\"],\"image\":{\"full\":\"3302.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"Aura\",\"GoldPer\",\"Health\",\"Lane\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatHPPoolMod\":50},\"effect\":{\"Effect1Amount\":\"195\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"1\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"1\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"500\",\"Effect12Amount\":\"40\",\"Effect13Amount\":\"2\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"5\",\"Effect16Amount\":\"0.02\",\"Effect17Amount\":\"0.5\",\"Effect18Amount\":\"10\"}},\"3303\":{\"name\":\"Spellthief's Edge\",\"description\":\"<stats>+10 Ability Power<br>+2 Gold per 10 seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 13 additional magic damage and grant 10 Gold per unique spell cast. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 500 gold using this item and upgrade to <font color='#CFBF84'>Frostfang</font>.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";\",\"plaintext\":\"Grants gold when you damage enemies\",\"into\":[\"3098\"],\"image\":{\"full\":\"3303.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"GoldPer\",\"Lane\",\"ManaRegen\",\"SpellDamage\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":10},\"effect\":{\"Effect1Amount\":\"13\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"6\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"30\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"0\",\"Effect12Amount\":\"0\",\"Effect13Amount\":\"0\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"0\",\"Effect16Amount\":\"0\",\"Effect17Amount\":\"500\",\"Effect18Amount\":\"0.5\",\"Effect19Amount\":\"1\",\"Effect20Amount\":\"10\"}},\"3304\":{\"name\":\"Timeworn Ancient Coin\",\"description\":\"<stats>+5 Movement Speed<br>+5% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>25</font> gold or <font color='#44DDFF'>6%</font> missing mana (minimum 10). Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 750 gold using this item and upgrade to <font color='#CFBF84'>Timeworn Nomad's Medallion</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and allied champions moving toward you gain 8% movement speed.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><i><font color='#447777'>''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE</font></i>\",\"colloq\":\";\",\"plaintext\":\"Grants gold and mana when nearby minions die that you didn't kill\",\"into\":[\"3305\"],\"image\":{\"full\":\"3304.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"ManaRegen\",\"GoldPer\",\"CooldownReduction\",\"Lane\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0\",\"Effect10Amount\":\"750\",\"Effect11Amount\":\"40\",\"Effect12Amount\":\"0.06\",\"Effect13Amount\":\"10\",\"Effect14Amount\":\"5\"}},\"3305\":{\"name\":\"Timeworn Nomad's Medallion\",\"description\":\"<stats>+10 Movement Speed<br>+50% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>45</font> gold or <font color='#44DDFF'>6%</font> missing mana (minimum 10). Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and allied champions moving toward you gain 8% movement speed.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><rules><font color='#447777'>''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE</font></rules>\",\"colloq\":\";\",\"plaintext\":\"Grants gold and mana when nearby minions die that you didn't kill\",\"from\":[\"1006\",\"3304\"],\"into\":[\"3306\"],\"image\":{\"full\":\"3305.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":850,\"sell\":340},\"tags\":[\"HealthRegen\",\"ManaRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"2\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"50\",\"Effect4Amount\":\"10\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0\",\"Effect10Amount\":\"750\",\"Effect11Amount\":\"45\",\"Effect12Amount\":\"0.06\",\"Effect13Amount\":\"10\",\"Effect14Amount\":\"10\"},\"depth\":2},\"3306\":{\"name\":\"Timeworn Talisman of Ascension\",\"description\":\"<stats>+10 Movement Speed<br>+45 Armor<br>+175% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><unique>UNIQUE Passive - Favor: </unique>Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>45</font> gold or <font color='#44DDFF'>6%</font> missing mana (minimum 10). Cannon minions always drop coins.<br><active>UNIQUE Active:</active> Grants nearby allies +@Effect5Amount*100@% Movement Speed for @Effect6Amount@ seconds (60 second cooldown).<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and allied champions moving toward you gain 8% movement speed.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><rules><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE</font></rules>\",\"colloq\":\";shurelya;reverie\",\"plaintext\":\"Increases Health / Mana Regeneration and Cooldown Reduction. Activate to speed up nearby allies.\",\"from\":[\"3305\",\"2053\"],\"image\":{\"full\":\"3306.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":2200,\"sell\":880},\"tags\":[\"HealthRegen\",\"Armor\",\"ManaRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatArmorMod\":45},\"effect\":{\"Effect1Amount\":\"-0.1\",\"Effect2Amount\":\"2\",\"Effect3Amount\":\"15\",\"Effect4Amount\":\"25\",\"Effect5Amount\":\"0.4\",\"Effect6Amount\":\"3\",\"Effect7Amount\":\"60\",\"Effect8Amount\":\"20\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"750\",\"Effect11Amount\":\"45\",\"Effect12Amount\":\"0.06\",\"Effect13Amount\":\"10\",\"Effect14Amount\":\"10\"},\"depth\":3},\"3307\":{\"name\":\"Timeworn Relic Shield\",\"description\":\"<stats>+50 Health<br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 Health (+2% missing health) and grants them kill Gold. Healing is halved if the owner is ranged. These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges.<hr><passive>QUEST:</passive> Earn 750 gold using this item and upgrade to <font color='#CFBF84'>Timeworn Targon's Brace</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";\",\"plaintext\":\"Kill minions periodically to heal and grant gold to a nearby ally\",\"into\":[\"3308\"],\"image\":{\"full\":\"3307.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"Aura\",\"GoldPer\",\"Health\",\"Lane\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":50},\"effect\":{\"Effect1Amount\":\"195\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"750\",\"Effect12Amount\":\"40\",\"Effect13Amount\":\"2\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"5\",\"Effect16Amount\":\"0.02\",\"Effect17Amount\":\"0.5\",\"Effect18Amount\":\"10\"}},\"3308\":{\"name\":\"Timeworn Targon's Brace\",\"description\":\"<stats>+125 Health<br>+50% Base Health Regen <br>+4 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+10 per level) Health. Killing a minion heals the owner and the nearest allied champion for 40 Health (+2% missing health) and grants them kill Gold. Healing is halved if the owner is ranged. These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges.<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";\",\"plaintext\":\"Periodically kill enemy minions to heal and grant gold to a nearby ally\",\"from\":[\"3307\",\"1006\"],\"into\":[\"3309\"],\"image\":{\"full\":\"3308.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":850,\"sell\":340},\"tags\":[\"Aura\",\"GoldPer\",\"Health\",\"HealthRegen\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":125},\"effect\":{\"Effect1Amount\":\"200\",\"Effect2Amount\":\"40\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"4\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"750\",\"Effect12Amount\":\"30\",\"Effect13Amount\":\"3\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"10\",\"Effect16Amount\":\"0.02\",\"Effect17Amount\":\"0.5\",\"Effect18Amount\":\"10\"},\"depth\":2},\"3309\":{\"name\":\"Timeworn Face of the Mountain\",\"description\":\"<stats>+350 Health<br>+100% Base Health Regen <br>+10% Cooldown Reduction<br>+4 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health (+2% missing health) and grants them kill Gold. Healing is halved if the owner is ranged. These effects require a nearby ally. Recharges every 20 seconds. Max 4 charges.<br><unique>UNIQUE Active:</unique> Grant a shield to you and an ally equal to 10% of your maximum Health for 4 seconds. After 4 seconds, the shields explode to slow nearby enemies by 40% for 2 seconds (60 second cooldown).  Automatically targets the most wounded ally if cast upon self.<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";\",\"plaintext\":\"Shield an ally from damage based on your Health\",\"from\":[\"3308\",\"3067\"],\"image\":{\"full\":\"3309.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":2100,\"sell\":840},\"tags\":[\"Health\",\"HealthRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\",\"Slow\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":350},\"effect\":{\"Effect1Amount\":\"320\",\"Effect2Amount\":\"50\",\"Effect3Amount\":\"0.1\",\"Effect4Amount\":\"4\",\"Effect5Amount\":\"-0.4\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"60\",\"Effect8Amount\":\"120\",\"Effect9Amount\":\"4\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"750\",\"Effect12Amount\":\"20\",\"Effect13Amount\":\"4\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"20\",\"Effect16Amount\":\"0.02\",\"Effect17Amount\":\"0.5\",\"Effect18Amount\":\"10\"},\"depth\":3},\"3310\":{\"name\":\"Timeworn Spellthief's Edge\",\"description\":\"<stats>+10 Ability Power<br>+2 Gold per 10 seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 13 additional magic damage and grant 10 Gold per unique spell cast. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 750 gold using this item and upgrade to <font color='#CFBF84'>Timeworn Frostfang</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";\",\"plaintext\":\"Grants gold when you damage enemies\",\"into\":[\"3311\"],\"image\":{\"full\":\"3310.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"GoldPer\",\"Lane\",\"ManaRegen\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":10},\"effect\":{\"Effect1Amount\":\"13\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"6\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"30\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"0\",\"Effect12Amount\":\"0\",\"Effect13Amount\":\"0\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"0\",\"Effect16Amount\":\"0\",\"Effect17Amount\":\"750\",\"Effect18Amount\":\"0.5\",\"Effect19Amount\":\"0\",\"Effect20Amount\":\"10\"}},\"3311\":{\"name\":\"Timeworn Frostfang\",\"description\":\"<stats>+20 Ability Power<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 18 additional magic damage and grant 20 Gold per unique spell cast. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\";\",\"plaintext\":\"Grants gold when you damage an enemy\",\"from\":[\"3310\",\"1004\"],\"into\":[\"3312\"],\"image\":{\"full\":\"3311.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":325,\"purchasable\":true,\"total\":850,\"sell\":340},\"tags\":[\"SpellDamage\",\"ManaRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":20},\"effect\":{\"Effect1Amount\":\"18\",\"Effect2Amount\":\"20\",\"Effect3Amount\":\"6\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"30\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"5\",\"Effect10Amount\":\"1\",\"Effect11Amount\":\"0\",\"Effect12Amount\":\"0\",\"Effect13Amount\":\"0\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"0\",\"Effect16Amount\":\"0\",\"Effect17Amount\":\"750\",\"Effect18Amount\":\"0.5\",\"Effect19Amount\":\"1\",\"Effect20Amount\":\"10\"},\"depth\":2},\"3312\":{\"name\":\"Timeworn Frost Queen's Claim\",\"description\":\"<stats>+60 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 18 additional magic damage and grant 20 Gold per unique spell cast. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<br><active>UNIQUE Active:</active> Summon 2 icy ghosts for 6 seconds that seek out nearby enemy champions. Ghosts reveal enemies on contact and slow them by 40% for between 2 and 5 seconds based on how far the ghosts have traveled (90 second cooldown).<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"spooky ghosts;\",\"plaintext\":\"Sends out seeking wraiths that track hidden enemies and slow them\",\"from\":[\"3311\",\"1026\"],\"image\":{\"full\":\"3312.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":2200,\"sell\":880},\"tags\":[\"Active\",\"CooldownReduction\",\"GoldPer\",\"ManaRegen\",\"Slow\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":60},\"effect\":{\"Effect1Amount\":\"18\",\"Effect2Amount\":\"20\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"30\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"1\",\"Effect8Amount\":\"2\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"-0.4\",\"Effect11Amount\":\"5\",\"Effect12Amount\":\"6\",\"Effect13Amount\":\"50\",\"Effect14Amount\":\"90\",\"Effect15Amount\":\"0.25\",\"Effect16Amount\":\"2\",\"Effect17Amount\":\"750\",\"Effect18Amount\":\"0.5\",\"Effect19Amount\":\"1\",\"Effect20Amount\":\"10\"},\"depth\":3},\"3340\":{\"name\":\"Warding Totem (Trinket)\",\"description\":\"<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consume a charge to place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <scaleLevel>90 - 120</scaleLevel> seconds. <br><br>Stores one charge every <scaleLevel>240 - 120</scaleLevel> seconds, up to 2 maximum charges.<br><br>Ward duration and recharge time gradually improve with level.<br><br><rules>(Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.)</rules>\",\"colloq\":\"yellow; totem; trinket\",\"plaintext\":\"Periodically place a Stealth Ward\",\"image\":{\"full\":\"3340.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Jungle\",\"Lane\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"90\",\"Effect2Amount\":\"240\",\"Effect3Amount\":\"120\",\"Effect4Amount\":\"120\",\"Effect5Amount\":\"2\",\"Effect6Amount\":\"9\",\"Effect7Amount\":\"30\",\"Effect8Amount\":\"120\"}},\"3345\":{\"name\":\"Soul Anchor (Trinket)\",\"description\":\"<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consumes a charge to instantly revive at your Summoner Platform and grants 125% Movement Speed that decays over 12 seconds.<br><br><rules>Additional charges are gained at levels 9 and 14.</rules><br><br><font color='#BBFFFF'>(Max: 2 charges)</font></rules><br><br>\",\"colloq\":\"\",\"plaintext\":\"Consumes charge to revive champion.\",\"inStore\":false,\"image\":{\"full\":\"3345.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3348\":{\"name\":\"Arcane Sweeper\",\"description\":\"<active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting <font color='#ee91d7'>True Sight</font> of traps in the area for 3 seconds (90 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Activate to reveal a nearby area of the map\",\"inStore\":false,\"image\":{\"full\":\"3348.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Vision\",\"Trinket\",\"Stealth\",\"Active\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"5\",\"Effect5Amount\":\"3\",\"Effect6Amount\":\"90\"}},\"3361\":{\"name\":\"Greater Stealth Totem (Trinket)\",\"description\":\"<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds.  Stores a charge every 60 seconds, up to 2 total. Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>\",\"colloq\":\"yellow;\",\"plaintext\":\"Periodically place a Stealth Ward\",\"inStore\":false,\"image\":{\"full\":\"3361.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":250,\"purchasable\":false,\"total\":250,\"sell\":175},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"180\",\"Effect2Amount\":\"60\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"9\",\"Effect7Amount\":\"30\",\"Effect8Amount\":\"120\"}},\"3362\":{\"name\":\"Greater Vision Totem (Trinket)\",\"description\":\"<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 <font color='#BBFFFF'>Vision Ward</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>\",\"colloq\":\"yellow;\",\"plaintext\":\"Periodically place a Vision Ward\",\"inStore\":false,\"image\":{\"full\":\"3362.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":250,\"purchasable\":false,\"total\":250,\"sell\":175},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"120\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"9\",\"Effect7Amount\":\"30\",\"Effect8Amount\":\"120\"}},\"3363\":{\"name\":\"Farsight Alteration\",\"description\":\"<levelLimit>Level 9+ required to upgrade.</levelLimit><br><groupLimit>Limited to 1 Trinket.</groupLimit><br><br>Alters the <font color='#FFFFFF'>Warding Totem</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Massively increased cast range (+650%)<br><font color='#00FF00'>+</font> Infinite duration and does not count towards ward limit<br><font color='#FF0000'>-</font> <font color='#FF6600'>10% increased cooldown</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Ward is visible, fragile, untargetable by allies</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>45% reduced ward vision radius</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Cannot store charges</font></stats>\",\"colloq\":\"blue; totem; trinket\",\"plaintext\":\"Grants increased range and reveals the targetted area\",\"image\":{\"full\":\"3363.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"4000\",\"Effect2Amount\":\"2\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"198\",\"Effect5Amount\":\"60\",\"Effect6Amount\":\"9\",\"Effect7Amount\":\"30\",\"Effect8Amount\":\"120\",\"Effect9Amount\":\"6.5\",\"Effect10Amount\":\"198\",\"Effect11Amount\":\"99\",\"Effect12Amount\":\"60\",\"Effect13Amount\":\"180\",\"Effect14Amount\":\"10\",\"Effect15Amount\":\"45\"}},\"3364\":{\"name\":\"Oracle Lens\",\"description\":\"<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Scans around you, warning against hidden hostile units, and revealing invisible traps and revealing / disabling nearby wards for 10 seconds (90 to 60 second cooldown).</maintext>\",\"colloq\":\"red; lens; trinket\",\"plaintext\":\"Disables nearby invisible wards and traps for a duration\",\"image\":{\"full\":\"3364.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"6\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"90\",\"Effect4Amount\":\"60\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"1\",\"Effect7Amount\":\"30\",\"Effect8Amount\":\"120\",\"Effect9Amount\":\"60\"}},\"3371\":{\"name\":\"Molten Edge\",\"description\":\"<stats><font color='#FFFFFF'>+110 Attack Damage</font><br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strikes deal 225% damage instead of 200%.\",\"colloq\":\";ie;Ornn;forge;Masterwork\",\"plaintext\":\"Massively enhances critical strikes\",\"from\":[\"3031\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3371.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"Damage\",\"CriticalStrike\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":110,\"FlatCritChanceMod\":0.25},\"effect\":{\"Effect1Amount\":\"2.25\"},\"depth\":3},\"3373\":{\"name\":\"Forgefire Cape\",\"description\":\"<stats><font color='#FFFFFF'>+625 Health</font><br><font color='#FFFFFF'>+90 Armor</font></stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 25 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.\",\"colloq\":\";Ornn;forge;Masterwork\",\"plaintext\":\"Constantly deals damage to nearby enemies\",\"from\":[\"3068\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3373.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":2750,\"sell\":1925},\"tags\":[\"Health\",\"Armor\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":625,\"FlatArmorMod\":90},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"0.5\"},\"depth\":4},\"3374\":{\"name\":\"Rabadon's Deathcrown\",\"description\":\"<stats><font color='#FFFFFF'>+175 Ability Power</font>  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 40%.\",\"colloq\":\";dc;banksys;hat;Ornn;forge;Masterwork\",\"plaintext\":\"Massively increases Ability Power\",\"from\":[\"3089\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3374.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":3600,\"sell\":2520},\"tags\":[\"SpellDamage\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":175},\"effect\":{\"Effect1Amount\":\"40\"},\"depth\":3},\"3379\":{\"name\":\"Infernal Mask\",\"description\":\"<stats><font color='#FFFFFF'>+550 Health</font><br><mana>+300 Mana</mana><br><font color='#FFFFFF'>+90 Magic Resist</font><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 15% more magic damage.\",\"colloq\":\";Ornn;forge;Masterwork\",\"plaintext\":\"Nearby enemies take more magic damage\",\"from\":[\"3001\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3379.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"Health\",\"SpellBlock\",\"HealthRegen\",\"Mana\",\"ManaRegen\",\"Aura\",\"CooldownReduction\",\"MagicPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":550,\"FlatSpellBlockMod\":90,\"FlatMPPoolMod\":300},\"effect\":{\"Effect1Amount\":\"-10\",\"Effect2Amount\":\"-25\",\"Effect3Amount\":\"0.15\",\"Effect4Amount\":\"25\",\"Effect5Amount\":\"0.2\",\"Effect6Amount\":\"0.15\"},\"depth\":4},\"3380\":{\"name\":\"The Obsidian Cleaver\",\"description\":\"<stats><font color='#FFFFFF'>+550 Health</font><br><font color='#FFFFFF'>+60 Attack Damage</font><br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 4% for 6 seconds (stacks up to 6 times, up to 24%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.\",\"colloq\":\";bc;Ornn;forge;Masterwork\",\"plaintext\":\"Dealing physical damage to enemy champions reduces their Armor\",\"from\":[\"3071\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3380.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"ArmorPenetration\",\"CooldownReduction\",\"Damage\",\"Health\",\"NonbootsMovement\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":60,\"FlatHPPoolMod\":550},\"effect\":{\"Effect1Amount\":\"-0.2\",\"Effect2Amount\":\"0.04\",\"Effect3Amount\":\"6\",\"Effect4Amount\":\"6\",\"Effect5Amount\":\"0.24\",\"Effect6Amount\":\"20\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"60\",\"Effect9Amount\":\"2\",\"Effect10Amount\":\"0.01\"},\"depth\":4},\"3382\":{\"name\":\"Salvation\",\"description\":\"<stats><font color='#FFFFFF'>+300 Health</font><br><font color='#FFFFFF'>+150% Base Health Regen </font><br><font color='#FFFFFF'>+200% Base Mana Regen </font><br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 10 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown). Heal and Shield Power is 3 times as effective on Salvation's heal.<br><br>Can be used while dead.<br><br><rules>Half effect if the target has been affected by Redemption recently.</rules>\",\"colloq\":\";Ornn;forge;Masterwork\",\"plaintext\":\"Activate to heal allies and damage enemies in an area\",\"from\":[\"3107\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3382.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":2100,\"sell\":1470},\"tags\":[\"Health\",\"HealthRegen\",\"ManaRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":300},\"effect\":{\"Effect1Amount\":\"0.1\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"20\",\"Effect4Amount\":\"0.1\",\"Effect5Amount\":\"250\",\"Effect6Amount\":\"120\",\"Effect7Amount\":\"550\",\"Effect8Amount\":\"5500\",\"Effect9Amount\":\"0.5\",\"Effect10Amount\":\"8\",\"Effect11Amount\":\"3\"},\"depth\":4},\"3383\":{\"name\":\"Circlet of the Iron Solari\",\"description\":\"<stats><font color='#FFFFFF'>+45 Armor</font><br><font color='#FFFFFF'>+75 Magic Resist</font></stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allied champions for 2.5 seconds that absorbs up to 30 (+15 per level) <scaleHealth>(+20% of your bonus health)</scaleHealth> damage (120 second cooldown).<br><br><rules>Shield per level uses the higher of your level or the target's level.<br>Shield ratio scales with your level.<br>Shield amount is reduced to 25% if the target has been affected by another Locket of the Iron Solari in the last 20 seconds.</rules>\",\"colloq\":\";Ornn;forge;Masterwork\",\"plaintext\":\"Activate to shield nearby allies from damage\",\"from\":[\"3190\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3383.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":2200,\"sell\":1540},\"tags\":[\"SpellBlock\",\"Armor\",\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatSpellBlockMod\":75,\"FlatArmorMod\":45},\"effect\":{\"Effect1Amount\":\"30\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"2.5\",\"Effect4Amount\":\"0.25\",\"Effect5Amount\":\"20\",\"Effect6Amount\":\"120\",\"Effect7Amount\":\"0.2\"},\"depth\":4},\"3384\":{\"name\":\"Trinity Fusion\",\"description\":\"<stats><font color='#FFFFFF'>+350 Health</font><br><font color='#FFFFFF'><mana>+350 Mana</mana></font><br><font color='#FFFFFF'>+35 Attack Damage</font><br><font color='#FFFFFF'>+50% Attack Speed</font><br>+20% Cooldown Reduction<br><font color='#FFFFFF'>+8% Movement Speed</font></stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).\",\"colloq\":\";triforce;tons of damage;Ornn;forge;Masterwork\",\"plaintext\":\"Tons of Damage\",\"from\":[\"3078\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3384.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":3733,\"sell\":2613},\"tags\":[\"Health\",\"Damage\",\"AttackSpeed\",\"Mana\",\"CooldownReduction\",\"OnHit\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":35,\"PercentMovementSpeedMod\":0.08,\"FlatHPPoolMod\":350,\"FlatMPPoolMod\":350,\"PercentAttackSpeedMod\":0.5},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"60\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"2\",\"Effect5Amount\":\"1.5\"},\"depth\":4},\"3385\":{\"name\":\"Wooglet's Witchcrown\",\"description\":\"<stats><font color='#FFFFFF'>+155 Ability Power</font><br>+45 Armor  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 25%<br><active>UNIQUE Active:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).\",\"colloq\":\";hat;Ornn;Forge\",\"plaintext\":\"Massively increases Ability Power and can be activated to enter stasis\",\"from\":[\"3090\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3385.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":3400,\"sell\":2380},\"tags\":[\"Active\",\"Armor\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":false,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":155,\"FlatArmorMod\":45},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"2.5\",\"Effect3Amount\":\"120\"},\"depth\":4},\"3386\":{\"name\":\"Zhonya's Paradox\",\"description\":\"<stats><font color='#FFFFFF'>+100 Ability Power</font><br><font color='#FFFFFF'>+60 Armor</font><br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).\",\"colloq\":\";zhg;zonyas;ornn;forge\",\"plaintext\":\"Activate to become invincible but unable to take actions\",\"from\":[\"3157\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3386.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"Armor\",\"SpellDamage\",\"Active\",\"CooldownReduction\"],\"maps\":{\"10\":false,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":100,\"FlatArmorMod\":60},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"2.5\",\"Effect3Amount\":\"120\"},\"depth\":4},\"3387\":{\"name\":\"Frozen Fist\",\"description\":\"<stats><font color='#FFFFFF'>+95 Armor</font><br>+20% Cooldown Reduction<br><font color='#FFFFFF'>+700 Mana</font></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.\",\"colloq\":\";frozen fist;Ornn\",\"plaintext\":\"Basic attacks create a slow field after spell cast\",\"from\":[\"3025\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3387.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":2700,\"sell\":1890},\"tags\":[\"Armor\",\"Mana\",\"CooldownReduction\",\"Slow\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":700,\"FlatArmorMod\":95},\"effect\":{\"Effect1Amount\":\"-0.2\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"-0.3\",\"Effect5Amount\":\"1.5\"},\"depth\":4},\"3388\":{\"name\":\"Youmuu's Wraithblade\",\"description\":\"<stats><font color='#FFFFFF'>+75 Attack Damage</font><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> <font color='#FFFFFF'>+25 <a href='Lethality'>Lethality</a></font><br><unique>UNIQUE Passive:</unique> +40 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed for 6 seconds (45 second cooldown).\",\"colloq\":\";lethality;Ornn\",\"plaintext\":\"Activate to greatly increase Movement Speed\",\"from\":[\"3142\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3388.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"Damage\",\"Active\",\"CooldownReduction\",\"NonbootsMovement\",\"ArmorPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":75},\"effect\":{\"Effect1Amount\":\"45\",\"Effect2Amount\":\"25\",\"Effect3Amount\":\"0.2\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"6\",\"Effect6Amount\":\"40\"},\"depth\":4},\"3389\":{\"name\":\"Might of the Ruined King\",\"description\":\"<stats><font color='#FFFFFF'>+55 Attack Damage</font><br><font color='#FFFFFF'>+40% Attack Speed</font><br>+12% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><rules>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</rules>\",\"colloq\":\";brk;bork;bork;bork;botrk;Ornn\",\"plaintext\":\"Deals damage based on target's Health, can steal Movement Speed\",\"from\":[\"3153\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3389.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":144,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"Damage\",\"AttackSpeed\",\"LifeSteal\",\"Active\",\"Slow\",\"OnHit\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":55,\"PercentAttackSpeedMod\":0.4,\"PercentLifeStealMod\":0.12},\"effect\":{\"Effect1Amount\":\"0.08\"},\"depth\":5},\"3390\":{\"name\":\"Luden's Pulse\",\"description\":\"<stats><font color='#FFFFFF'>+120 Ability Power</font><br><mana><font color='#FFFFFF'>+850 Mana</font></mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.\",\"colloq\":\";Ornn\",\"plaintext\":\"Increases Ability Power, Mana, and Cooldown Reduction\",\"from\":[\"3285\"],\"requiredAlly\":\"Ornn\",\"image\":{\"full\":\"3390.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"SpellDamage\",\"Mana\",\"CooldownReduction\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":850,\"FlatMagicDamageMod\":120},\"effect\":{\"Effect1Amount\":\"100\",\"Effect2Amount\":\"100\",\"Effect3Amount\":\"4\",\"Effect4Amount\":\"0.1\",\"Effect5Amount\":\"35\",\"Effect6Amount\":\"10\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"-0.1\"},\"depth\":4},\"3400\":{\"name\":\"'Your Cut'\",\"description\":\"<spellPassive>Click to Consume:</spellPassive> Gain <gold>Gold</gold>!\",\"colloq\":\"\",\"plaintext\":\"\",\"consumed\":true,\"inStore\":false,\"hideFromAll\":true,\"image\":{\"full\":\"3400.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Consumable\",\"GoldPer\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"3401\":{\"name\":\"Remnant of the Aspect\",\"description\":\"<stats>+350 Health<br>+200% Base Health Regen <br>+10% Cooldown Reduction<br>+1 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+30 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health (+2% missing health) and grants them kill Gold. 50% healing if the owner is ranged. These effects require a nearby ally. Recharges every 20 seconds. Max 4 charges.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>\",\"colloq\":\"Eye of the Aspect;\",\"plaintext\":\"Provides Health and Stealth Wards over time\",\"from\":[\"3097\",\"1028\"],\"image\":{\"full\":\"3401.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":550,\"purchasable\":true,\"total\":1800,\"sell\":720},\"tags\":[\"Health\",\"HealthRegen\",\"Active\",\"GoldPer\",\"CooldownReduction\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatHPPoolMod\":350},\"effect\":{\"Effect1Amount\":\"320\",\"Effect2Amount\":\"50\",\"Effect3Amount\":\"0.1\",\"Effect4Amount\":\"4\",\"Effect5Amount\":\"-0.4\",\"Effect6Amount\":\"2\",\"Effect7Amount\":\"60\",\"Effect8Amount\":\"120\",\"Effect9Amount\":\"1\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"500\",\"Effect12Amount\":\"20\",\"Effect13Amount\":\"4\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"30\",\"Effect16Amount\":\"0.02\",\"Effect17Amount\":\"0.5\",\"Effect18Amount\":\"10\"},\"depth\":3},\"3410\":{\"name\":\"Head of Kha'Zix\",\"description\":\"<unique>UNIQUE Active - Sweeping Lens:</unique> Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a medium radius and grants detection of invisible units for 10 seconds (60 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.\",\"colloq\":\"\",\"plaintext\":\"\",\"specialRecipe\":3169,\"inStore\":false,\"requiredChampion\":\"Rengar\",\"hideFromAll\":true,\"image\":{\"full\":\"3410.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"125\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"6\",\"Effect5Amount\":\"10\",\"Effect6Amount\":\"60\"}},\"3416\":{\"name\":\"Head of Kha'Zix\",\"description\":\"<unique>UNIQUE Active - Scrying:</unique> Reveals a small location within 4000 range for 2 seconds. Enemy champions found will be revealed for 5 seconds (90 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.\",\"colloq\":\"\",\"plaintext\":\"\",\"specialRecipe\":3169,\"inStore\":false,\"requiredChampion\":\"Rengar\",\"hideFromAll\":true,\"image\":{\"full\":\"3416.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"125\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"4000\",\"Effect5Amount\":\"2\",\"Effect6Amount\":\"5\",\"Effect7Amount\":\"90\"}},\"3422\":{\"name\":\"Head of Kha'Zix\",\"description\":\"<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.\",\"colloq\":\"\",\"plaintext\":\"\",\"specialRecipe\":3169,\"inStore\":false,\"requiredChampion\":\"Rengar\",\"hideFromAll\":true,\"image\":{\"full\":\"3422.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":true,\"11\":false,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"125\",\"Effect3Amount\":\"5\"}},\"3455\":{\"name\":\"Head of Kha'Zix\",\"description\":\"<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.\",\"colloq\":\"\",\"plaintext\":\"\",\"specialRecipe\":3169,\"inStore\":false,\"requiredChampion\":\"Rengar\",\"hideFromAll\":true,\"image\":{\"full\":\"3455.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"125\",\"Effect3Amount\":\"5\"}},\"3460\":{\"name\":\"Golden Transcendence\",\"description\":\"<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"image\":{\"full\":\"3460.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3461\":{\"name\":\"Golden Transcendence (Disabled)\",\"description\":\"<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"image\":{\"full\":\"3461.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3462\":{\"name\":\"Seer Stone (Trinket)\",\"description\":\"<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>2500</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)\",\"colloq\":\"blue;\",\"plaintext\":\"Briefly reveals a nearby targeted area\",\"inStore\":false,\"image\":{\"full\":\"3462.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":192,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"2500\",\"Effect2Amount\":\"60\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"5\",\"Effect5Amount\":\"550\"}},\"3504\":{\"name\":\"Ardent Censer\",\"description\":\"<stats>+60 Ability Power<br>+10% Cooldown Reduction<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Heal and Shield Power<br><unique>UNIQUE Passive:</unique> +8% Movement Speed<br><unique>UNIQUE Passive:</unique> Whenever you heal or shield an ally, you and your ally gain 10% - 30% Attack Speed and your attacks deal an additional 5 - 20 on-hit magic damage for 6 seconds. <br><br><rules>This does not include regeneration effects. Bonus effects are based on target's level.</rules>\",\"colloq\":\"\",\"plaintext\":\"Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage.\",\"from\":[\"3114\",\"3113\"],\"image\":{\"full\":\"3504.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":650,\"purchasable\":true,\"total\":2300,\"sell\":1610},\"tags\":[\"CooldownReduction\",\"ManaRegen\",\"NonbootsMovement\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMagicDamageMod\":60},\"effect\":{\"Effect1Amount\":\"0.08\",\"Effect2Amount\":\"0.1\",\"Effect3Amount\":\"6\",\"Effect4Amount\":\"5\",\"Effect5Amount\":\"0.1\",\"Effect6Amount\":\"0.3\",\"Effect7Amount\":\"20\"},\"depth\":3},\"3508\":{\"name\":\"Essence Reaver\",\"description\":\"<stats>+60 Attack Damage<br>+20% Cooldown Reduction<br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks refund 1.5% of your missing mana.\",\"colloq\":\";\",\"plaintext\":\"Grants Critical Strike Chance, Cooldown Reduction, Attack Damage and restores mana on hit.\",\"from\":[\"1037\",\"3133\",\"1018\"],\"image\":{\"full\":\"3508.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":425,\"purchasable\":true,\"total\":3200,\"sell\":2240},\"tags\":[\"Damage\",\"CriticalStrike\",\"AttackSpeed\",\"Mana\",\"ManaRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":60,\"FlatCritChanceMod\":0.25},\"effect\":{\"Effect1Amount\":\"0.015\",\"Effect2Amount\":\"0\",\"Effect3Amount\":\"0.5\",\"Effect4Amount\":\"0.2\",\"Effect5Amount\":\"6\",\"Effect6Amount\":\"30\",\"Effect7Amount\":\"0.2\",\"Effect8Amount\":\"10\"},\"depth\":3},\"3512\":{\"name\":\"Zz'Rot Portal\",\"description\":\"<stats>+55 Armor<br>+55 Magic Resist<br>+125% Base Health Regen <br></stats><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><active>UNIQUE Active:</active> Spawns a <a href='VoidGate'>Void Gate</a> for 120 seconds (120 second cooldown).<br><br>Every 4 seconds the gate makes a <a href='Voidspawn'>Voidspawn</a>. The first and every fourth Voidspawn gains 15% of maximum Health as damage.\",\"colloq\":\";Void Gate\",\"plaintext\":\"Makes a Voidspawn generating Void Gate to push a lane with.\",\"from\":[\"2053\",\"1057\"],\"image\":{\"full\":\"3512.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":1080,\"purchasable\":true,\"total\":2700,\"sell\":1890},\"tags\":[\"SpellBlock\",\"HealthRegen\",\"Armor\",\"Active\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatSpellBlockMod\":55,\"FlatArmorMod\":55},\"effect\":{\"Effect1Amount\":\"20\",\"Effect2Amount\":\"4\",\"Effect3Amount\":\"50\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"120\",\"Effect6Amount\":\"120\",\"Effect7Amount\":\"0.5\",\"Effect8Amount\":\"0.15\",\"Effect9Amount\":\"3\",\"Effect10Amount\":\"20\",\"Effect11Amount\":\"2\",\"Effect12Amount\":\"100\",\"Effect13Amount\":\"20\",\"Effect14Amount\":\"50\",\"Effect15Amount\":\"2\"},\"depth\":3},\"3513\":{\"name\":\"Eye of the Herald\",\"description\":\"<br><unique>UNIQUE Passive - Glimpse of the Void:</unique> The holder of the Eye of the Herald has Empowered Recall.<br><br><active>UNIQUE Active:</active> Channel for 3.5 seconds to crush the Eye of the Herald, summoning the Rift Herald to siege enemy turrets.<br><br>The Eye of the Herald will be lost to the Void if not used within 240 seconds.</font>\",\"colloq\":\";Herald's Eye\",\"plaintext\":\"Eye of the Herald - a Gift of the Void.\",\"consumed\":true,\"inStore\":false,\"image\":{\"full\":\"3513.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Trinket\",\"Active\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"240\",\"Effect2Amount\":\"3.5\",\"Effect3Amount\":\"40\"}},\"3514\":{\"name\":\"Eye of the Herald\",\"description\":\"<br><unique>UNIQUE Passive - Glimpse of the Void:</unique> The holder of the Eye of the Herald has Empowered Recall.<br><br><active>UNIQUE Active:</active> Channel for 3.5 seconds to crush the Eye of the Herald, summoning the Rift Herald to siege enemy turrets.<br><br>The Eye of the Herald will be lost to the Void if not used within 240 seconds.\",\"colloq\":\";Herald's Eye\",\"plaintext\":\"Eye of the Herald - a Gift of the Void.\",\"consumed\":true,\"inStore\":false,\"image\":{\"full\":\"3514.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Trinket\",\"Active\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"240\",\"Effect2Amount\":\"3.5\",\"Effect3Amount\":\"40\"}},\"3520\":{\"name\":\"Ghost Poro\",\"description\":\"<subtitleLeft><font color='#FFFFFF'>(Trinket)</font></subtitleLeft><br><mainText><active>Active:</active> Command your Ghost Poro to stay in a brush. Gain additional stats if you or your Ghost Poro are in enemy territory.<mainText></mainText>\",\"colloq\":\"\",\"plaintext\":\"\",\"consumed\":true,\"inStore\":false,\"image\":{\"full\":\"3520.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Vision\",\"Trinket\",\"Active\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"240\",\"Effect2Amount\":\"3.5\",\"Effect3Amount\":\"42\"}},\"3599\":{\"name\":\"The Black Spear\",\"description\":\"<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.\",\"colloq\":\";spear\",\"plaintext\":\"Kalista's spear that binds an Oathsworn Ally.\",\"requiredChampion\":\"Kalista\",\"image\":{\"full\":\"3599.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"3600\":{\"name\":\"The Black Spear\",\"description\":\"<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.\",\"colloq\":\";spear\",\"plaintext\":\"Kalista's spear that binds an Oathsworn Ally.\",\"requiredChampion\":\"Sylas\",\"image\":{\"full\":\"3600.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Active\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"3630\":{\"name\":\"Siege Teleport\",\"description\":\"<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"image\":{\"full\":\"3630.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":10,\"purchasable\":false,\"total\":10,\"sell\":7},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3631\":{\"name\":\"Siege Ballista\",\"description\":\"<br><font color='#FF9900'>Deploys a ballista that shoots the closest turret.</font><br><br>Places a long range ballista if within 2200 range of an enemy turret. After a 5 second delay, it will begin firing at the nearest enemy turret, dealing heavy damage. If the targeted turret expires, the ballista will as well.\",\"colloq\":\"\",\"plaintext\":\"Place a long range anti-turret ballista\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"3631.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":240,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"5\",\"Effect2Amount\":\"5\",\"Effect3Amount\":\"20\",\"Effect4Amount\":\"3\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"2200\",\"Effect7Amount\":\"10\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0.5\"}},\"3633\":{\"name\":\"Siege Teleport\",\"description\":\"<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"image\":{\"full\":\"3633.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":10,\"purchasable\":false,\"total\":10,\"sell\":7},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3634\":{\"name\":\"Tower: Beam of Ruination\",\"description\":\"<br><font color='#FF9900'>Attach, then recast to fire a damaging beam from a turret to your cursor.</font><br><br><font color='#FF9900'>First Cast:</font> Attach a Slayer Beam to the target turret that can be fired 3 times.<br></br><font color='#FF9900'>Next Three Casts:</font> Fires the attached beam towards your cursor, dealing 30/level + 30% of the hit target's maximum health (20% damage to minions) in magic damage to all targets in a line.<br></br><br></br>Beam will last 15 seconds, or until it has been fired 3 times.\",\"colloq\":\"\",\"plaintext\":\"Attaches a three shot beam to a turret which can then be aimed and fired\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"3634.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"3\",\"Effect2Amount\":\"1.5\",\"Effect3Amount\":\"3000\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"30\",\"Effect6Amount\":\"0.2\",\"Effect7Amount\":\"15\",\"Effect8Amount\":\"0.3\",\"Effect9Amount\":\"0\",\"Effect10Amount\":\"76\"}},\"3635\":{\"name\":\"Port Pad\",\"description\":\"<br><font color='#FF9900'>Deploy an additional teleport target.</font><br><br>Places a Port Pad at target location. After a 4 second delay, it activates, allowing you or your allies to teleport to it from base.\",\"colloq\":\"\",\"plaintext\":\"Creates another point for your team to Teleport to\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"3635.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"4\",\"Effect2Amount\":\"1000\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"10\"}},\"3636\":{\"name\":\"Tower: Storm Bulwark\",\"description\":\"<br><font color='#FF9900'>Makes a turret go invulnerable, then rain fire.</font><br><br>Makes the target turret invulnerable for 6 seconds. Two seconds before expiry, it unleashes a missile volley, dealing 2600 true damage over the remaining time to all nearby enemies.<br><br>Cannot be used on the same turret more than once in 15 seconds.\",\"colloq\":\"\",\"plaintext\":\"Make a turret go invulnerable while charging a powerful barrage\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"3636.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{\"FlatCritChanceMod\":3},\"effect\":{\"Effect1Amount\":\"6\",\"Effect2Amount\":\"15\",\"Effect3Amount\":\"650\",\"Effect4Amount\":\"825\",\"Effect5Amount\":\"1.2\"}},\"3637\":{\"name\":\"Nexus Siege: Siege Weapon Slot\",\"description\":\"In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"image\":{\"full\":\"3637.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":10,\"purchasable\":false,\"total\":10,\"sell\":7},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3640\":{\"name\":\"Flash Zone\",\"description\":\"<br><font color='#FF9900'>Allows team to cast Flash repeatedly in a limited zone.</font><br><br>Creates a magic zone for your team for 5 seconds. While in this zone, you and your allies have your summoner spells replaced by an instant cast blink that moves you to any location in the zone (1 second cooldown).\",\"colloq\":\"\",\"plaintext\":\"Allows you and allies to repeatedly flash while in a zone\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"3640.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"1\",\"Effect2Amount\":\"5\"}},\"3641\":{\"name\":\"Vanguard Banner\",\"description\":\"<br><font color='#FF9900'>Place a banner that buffs minions.</font><br><br>Place a Vanguard Banner at target location. After a 2 second delay, any nearby minions will be granted a buff, increasing their damage by 50%, and granting them 50 Armor and 100 Magic Resistance while within range.\",\"colloq\":\"\",\"plaintext\":\"Strengthens nearby minions\",\"consumed\":true,\"image\":{\"full\":\"3641.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"0.5\",\"Effect3Amount\":\"50\",\"Effect4Amount\":\"100\",\"Effect5Amount\":\"5\",\"Effect6Amount\":\"0.3\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"10\",\"Effect9Amount\":\"1400\"}},\"3642\":{\"name\":\"Siege Refund\",\"description\":\"Refunds all purchased Siege Weapons for their full price.\",\"colloq\":\"\",\"plaintext\":\"Refunds all current Siege Weapons\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"3642.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"1\"}},\"3643\":{\"name\":\"Entropy Field\",\"description\":\"<br><font color='#FF9900'>Stun minions and slow champions in an area.</font><br><br>Places an Entropy Field at target location for 5 seconds.  Enemy minions and Siege Ballistas trapped in the field are unable to move or attack while in the field.  Enemy champions in the field have their Movement Speed reduced by 25%.\",\"colloq\":\"\",\"plaintext\":\"Places a field that stuns enemy minions and slows champions\",\"consumed\":true,\"consumeOnFull\":true,\"image\":{\"full\":\"3643.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"5\",\"Effect2Amount\":\"600\",\"Effect3Amount\":\"25\"}},\"3645\":{\"name\":\"Seer Stone (Trinket)\",\"description\":\"<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>1400</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)\",\"colloq\":\"blue;\",\"plaintext\":\"Briefly reveals a nearby targeted area\",\"inStore\":false,\"image\":{\"full\":\"3645.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":288,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[\"Active\",\"Trinket\",\"Vision\"],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"1400\",\"Effect2Amount\":\"60\",\"Effect3Amount\":\"3\",\"Effect4Amount\":\"5\",\"Effect5Amount\":\"550\"}},\"3647\":{\"name\":\"Shield Totem\",\"description\":\"<br><font color='#FF9900'>Place a totem that shields nearby deployables.</font><br><br>Places a Shield Totem at target location. After a 2 second delay, the totem will activate, granting a 2 (+1 per additional Shield Totem) strength shield to all nearby deployables.\",\"colloq\":\"\",\"plaintext\":\"Grants bonus health to nearby Siege Weapons\",\"consumed\":true,\"image\":{\"full\":\"3647.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"2\",\"Effect2Amount\":\"3\",\"Effect3Amount\":\"2\",\"Effect4Amount\":\"1\",\"Effect5Amount\":\"1000\",\"Effect6Amount\":\"0.25\",\"Effect7Amount\":\"10\",\"Effect8Amount\":\"1\",\"Effect9Amount\":\"4\"}},\"3648\":{\"name\":\"Siege Teleport (Inactive)\",\"description\":\"\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"image\":{\"full\":\"3648.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{}},\"3649\":{\"name\":\"Siege Sight Warder\",\"description\":\"<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Places a <font color='#FFFFFF'>Stealth Ward</font> that lasts <font color='#FFFFFF'>30</font> seconds (30 second cooldown).\",\"colloq\":\"\",\"plaintext\":\"\",\"inStore\":false,\"image\":{\"full\":\"3649.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":false,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"30\"}},\"3671\":{\"name\":\"Enchantment: Warrior\",\"description\":\"<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>\",\"colloq\":\";\",\"plaintext\":\"\",\"from\":[\"3133\"],\"hideFromAll\":true,\"image\":{\"full\":\"3671.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":525,\"purchasable\":true,\"total\":1625,\"sell\":1138},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":60},\"depth\":3},\"3672\":{\"name\":\"Enchantment: Cinderhulk\",\"description\":\"<stats>+325 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. \",\"colloq\":\";\",\"plaintext\":\"\",\"from\":[\"3751\"],\"hideFromAll\":true,\"image\":{\"full\":\"3672.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":525,\"purchasable\":true,\"total\":1425,\"sell\":998},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":325},\"depth\":3},\"3673\":{\"name\":\"Enchantment: Runic Echoes\",\"description\":\"<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.\",\"colloq\":\";\",\"plaintext\":\"\",\"from\":[\"3113\",\"1052\"],\"hideFromAll\":true,\"image\":{\"full\":\"3673.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":340,\"purchasable\":true,\"total\":1625,\"sell\":1138},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentMovementSpeedMod\":0.07,\"FlatMagicDamageMod\":60},\"depth\":3},\"3675\":{\"name\":\"Enchantment: Bloodrazor\",\"description\":\"<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.\",\"colloq\":\";\",\"plaintext\":\"\",\"from\":[\"1043\"],\"hideFromAll\":true,\"image\":{\"full\":\"3675.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":625,\"purchasable\":true,\"total\":1625,\"sell\":1138},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentAttackSpeedMod\":0.5},\"depth\":3},\"3680\":{\"name\":\"Frosted Snax\",\"description\":\"<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King lobs many projectiles at far-away enemies, each dealing <scaleLevel>213-775</scaleLevel> magic damage to targets in the center of the impact, scaling down to <scaleLevel>85-310</scaleLevel> on the edge. (120s cooldown)\",\"colloq\":\"\",\"plaintext\":\"King: Fires a barrage of icy artillery\",\"image\":{\"full\":\"3680.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Trinket\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"5\",\"Effect2Amount\":\"120\",\"Effect3Amount\":\"40\",\"Effect4Amount\":\"15\",\"Effect5Amount\":\"250\",\"Effect6Amount\":\"213\",\"Effect7Amount\":\"775\",\"Effect8Amount\":\"85\",\"Effect9Amount\":\"310\"}},\"3681\":{\"name\":\"Super Spicy Snax\",\"description\":\"<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King breathes fire for 4 seconds, dealing <scaleLevel>705-1479</scaleLevel> true damage over the duration to enemies caught in the cone. Deals up to 560 true damage to Turrets. (120s cooldown)\",\"colloq\":\"\",\"plaintext\":\"King: Shoots flames that burn units and Turrets\",\"image\":{\"full\":\"3681.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Trinket\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"4\",\"Effect2Amount\":\"120\",\"Effect3Amount\":\"700\",\"Effect4Amount\":\"2.35\",\"Effect5Amount\":\"560\",\"Effect6Amount\":\"705\",\"Effect7Amount\":\"1479\"}},\"3682\":{\"name\":\"Espresso Snax\",\"description\":\"<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King leaps into the air and crashes down twice, knocking enemies away and dealing <scaleLevel>40-190</scaleLevel> physical damage. He also gains a decaying shield for <font color='#FF3300'>20% of his maximum health</font>, lasting 4 seconds. (30s cooldown)\",\"colloq\":\"\",\"plaintext\":\"King: Knocks back and grants a large shield\",\"image\":{\"full\":\"3682.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":336,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Trinket\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"1.8\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"10\",\"Effect4Amount\":\"10\",\"Effect5Amount\":\"20\",\"Effect6Amount\":\"4\",\"Effect7Amount\":\"600\",\"Effect8Amount\":\"40\",\"Effect9Amount\":\"190\",\"Effect10Amount\":\"500\"}},\"3683\":{\"name\":\"Rainbow Snax Party Pack!\",\"description\":\"<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King tosses many Snax behind the enemy, attracting Poros which dash back towards him. Enemy champions hit will be knocked forwards and dealt <scaleLevel>230-680</scaleLevel> physical damage. (120s cooldown)\",\"colloq\":\"\",\"plaintext\":\"King: Poros knock enemies towards him\",\"image\":{\"full\":\"3683.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[\"Trinket\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":true},\"stats\":{},\"effect\":{\"Effect1Amount\":\"6\",\"Effect2Amount\":\"120\",\"Effect3Amount\":\"140\",\"Effect4Amount\":\"30\",\"Effect5Amount\":\"1\",\"Effect6Amount\":\"1500\",\"Effect7Amount\":\"1650\",\"Effect8Amount\":\"1000\",\"Effect9Amount\":\"230\",\"Effect10Amount\":\"680\",\"Effect11Amount\":\"2\"}},\"3690\":{\"name\":\"Cosmic Shackle\",\"description\":\"\",\"colloq\":\";\",\"plaintext\":\"\",\"image\":{\"full\":\"3690.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3691\":{\"name\":\"Singularity Lantern\",\"description\":\"\",\"colloq\":\";\",\"plaintext\":\"\",\"image\":{\"full\":\"3691.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3692\":{\"name\":\"Dark Matter Scythe\",\"description\":\"\",\"colloq\":\";\",\"plaintext\":\"\",\"image\":{\"full\":\"3692.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{}},\"3693\":{\"name\":\"Gravity Boots\",\"description\":\"\",\"colloq\":\";\",\"plaintext\":\"\",\"image\":{\"full\":\"3693.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatMovementSpeedMod\":50}},\"3694\":{\"name\":\"Cloak of Stars\",\"description\":\"\",\"colloq\":\";\",\"plaintext\":\"\",\"image\":{\"full\":\"3694.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatMovementSpeedMod\":50}},\"3695\":{\"name\":\"Dark Star Sigil\",\"description\":\"\",\"colloq\":\";\",\"plaintext\":\"\",\"image\":{\"full\":\"3695.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatMovementSpeedMod\":50}},\"3706\":{\"name\":\"Stalker's Blade\",\"description\":\"<groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br>+10% Life Steal vs. Monsters<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks vs. monsters deal 40 bonus damage.  Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 80 magic damage.<mana> While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana.</mana> This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.\",\"colloq\":\";jungle;Jungle;jangle\",\"plaintext\":\"Lets your Smite slow Champions\",\"from\":[\"1039\",\"1041\"],\"into\":[\"1400\",\"1401\",\"1402\",\"1416\"],\"image\":{\"full\":\"3706.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":1000,\"sell\":700},\"tags\":[\"LifeSteal\",\"ManaRegen\",\"Slow\",\"OnHit\",\"NonbootsMovement\",\"Jungle\"],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":2},\"3715\":{\"name\":\"Skirmisher's Sabre\",\"description\":\"<groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br>+10% Life Steal vs. Monsters<br><br><unique>UNIQUE Passive - Challenging Smite:</unique> Smite can be cast on enemy champions, marking them for 4 seconds. While marked your basic attacks deal bonus true damage over 2.5 seconds, and their damage to you is reduced by 20%.<br>Basic attacks vs. monsters deal 40 bonus damage. Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 80 magic damage. While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana. This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.\",\"colloq\":\";jungle;Jungle\",\"plaintext\":\"Lets your Smite mark Champions, giving you combat power against them.\",\"from\":[\"1039\",\"1041\"],\"into\":[\"1412\",\"1413\",\"1414\",\"1419\"],\"image\":{\"full\":\"3715.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":300,\"purchasable\":true,\"total\":1000,\"sell\":700},\"tags\":[\"LifeSteal\",\"ManaRegen\",\"OnHit\",\"Jungle\"],\"maps\":{\"10\":true,\"11\":true,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"4\",\"Effect7Amount\":\"2.5\",\"Effect8Amount\":\"14.5\",\"Effect9Amount\":\"1.5\",\"Effect10Amount\":\"0.2\",\"Effect11Amount\":\"0.1\"},\"depth\":2},\"3742\":{\"name\":\"Dead Man's Plate\",\"description\":\"<stats>+425 Health<br>+60 Armor</stats><br><br><unique>UNIQUE Passive - Dreadnought:</unique> While moving, build stacks of Momentum, increasing movement speed by up to 60 at 100 stacks. Momentum decays while under the effect of a stun, taunt, fear, polymorph, or immobilize effect.<br><unique>UNIQUE Passive - Crushing Blow:</unique> Basic attacks deal 1 magic damage per stack of Momentum, discharging all stacks. At max stacks, if the attacker is melee, they also slow the target by 50% for 1 second.<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText>\",\"colloq\":\";juggernaut;dreadnought\",\"plaintext\":\"Build momentum as you move around then smash into enemies.\",\"from\":[\"1031\",\"1011\"],\"image\":{\"full\":\"3742.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":384,\"w\":48,\"h\":48},\"gold\":{\"base\":1100,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"Health\",\"Armor\",\"OnHit\",\"NonbootsMovement\",\"Bilgewater\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":425,\"FlatArmorMod\":60},\"effect\":{\"Effect1Amount\":\"60\",\"Effect2Amount\":\"100\",\"Effect3Amount\":\"1\",\"Effect4Amount\":\"-0.5\",\"Effect5Amount\":\"1\"},\"depth\":3},\"3748\":{\"name\":\"Titanic Hydra\",\"description\":\"<stats>+450 Health<br>+40 Attack Damage<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 5 + 1% of your maximum health as bonus physical damage  to your target and 40 + 2.5% of your maximum health as physical damage  to other enemies in a cone on hit.<br><active>UNIQUE Active - Crescent:</active> Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage  in a larger cone for your next basic attack (20 second cooldown).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>\",\"colloq\":\";juggernaut\",\"plaintext\":\"Deals area of effect damage based on owner's health\",\"from\":[\"3077\",\"1028\",\"3052\"],\"image\":{\"full\":\"3748.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":0,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":575,\"purchasable\":true,\"total\":3500,\"sell\":2450},\"tags\":[\"Health\",\"HealthRegen\",\"Damage\",\"Active\",\"OnHit\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":40,\"FlatHPPoolMod\":450},\"effect\":{\"Effect1Amount\":\"0.025\",\"Effect2Amount\":\"40\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0.1\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"20\",\"Effect8Amount\":\"40\",\"Effect9Amount\":\"0.01\",\"Effect10Amount\":\"5\"},\"depth\":3},\"3751\":{\"name\":\"Bami's Cinder\",\"description\":\"<stats>+200 Health  </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 100% bonus damage to minions and monsters.\",\"colloq\":\";\",\"plaintext\":\"Grants Health and Immolate Aura\",\"from\":[\"1028\"],\"into\":[\"3068\",\"1401\",\"1413\",\"3672\",\"4103\"],\"image\":{\"full\":\"3751.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":48,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":500,\"purchasable\":true,\"total\":900,\"sell\":630},\"tags\":[\"Health\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":200},\"effect\":{\"Effect1Amount\":\"5\",\"Effect2Amount\":\"1\",\"Effect3Amount\":\"100\",\"Effect4Amount\":\"325\"},\"depth\":2},\"3800\":{\"name\":\"Righteous Glory\",\"description\":\"<stats>+400 Health<br><mana>+300 Mana</mana><br>+30 Armor<br>+100% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active:</unique> Grants 75% Movement Speed when moving towards enemies or enemy turrets for 4 seconds. Once near an enemy (or after 4 seconds) a shockwave is emitted, slowing nearby enemy champion Movement Speed by 75% for 2 second(s) (90 second cooldown).\",\"colloq\":\";\",\"plaintext\":\"Grants Health, Mana, and Armor. Activate to speed towards enemies and slow them.\",\"from\":[\"3024\",\"3801\"],\"image\":{\"full\":\"3800.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":96,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":1100,\"purchasable\":true,\"total\":2650,\"sell\":1855},\"tags\":[\"Health\",\"HealthRegen\",\"Armor\",\"Mana\",\"Active\",\"CooldownReduction\",\"Slow\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":400,\"FlatMPPoolMod\":300,\"FlatArmorMod\":30},\"effect\":{\"Effect1Amount\":\"0.75\",\"Effect2Amount\":\"4\",\"Effect3Amount\":\"-0.75\",\"Effect4Amount\":\"2\",\"Effect5Amount\":\"90\",\"Effect6Amount\":\"225\",\"Effect7Amount\":\"450\"},\"depth\":3},\"3801\":{\"name\":\"Crystalline Bracer\",\"description\":\"<stats>+200 Health<br>+50% Base Health Regen </stats>\",\"colloq\":\";\",\"plaintext\":\"Grants Health and Health Regen\",\"from\":[\"1028\",\"1006\"],\"into\":[\"3084\",\"3083\",\"3800\",\"3107\"],\"image\":{\"full\":\"3801.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":144,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":100,\"purchasable\":true,\"total\":650,\"sell\":455},\"tags\":[\"Health\",\"HealthRegen\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":200},\"depth\":2},\"3802\":{\"name\":\"Lost Chapter\",\"description\":\"<stats>+40 Ability Power<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Haste:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Upon levelling up, restores 20% of your maximum Mana over 3 seconds.\",\"colloq\":\";\",\"plaintext\":\"Restores Mana upon levelling up.\",\"from\":[\"1052\",\"1027\",\"1052\"],\"into\":[\"3003\",\"3007\",\"3030\",\"3285\"],\"image\":{\"full\":\"3802.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":192,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":80,\"purchasable\":true,\"total\":1300,\"sell\":910},\"tags\":[\"SpellDamage\",\"Mana\",\"ManaRegen\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatMPPoolMod\":300,\"FlatMagicDamageMod\":40},\"effect\":{\"Effect1Amount\":\"25\",\"Effect2Amount\":\"-0.1\",\"Effect3Amount\":\"15\",\"Effect4Amount\":\"10\",\"Effect5Amount\":\"20\",\"Effect6Amount\":\"5\",\"Effect7Amount\":\"0.2\",\"Effect8Amount\":\"3\"},\"depth\":2},\"3812\":{\"name\":\"Death's Dance\",\"description\":\"<stats>+80 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><unique>UNIQUE Passive:</unique> 30% of damage taken is dealt as a Bleed effect over 3 seconds instead.\",\"colloq\":\";Bloodbag\",\"plaintext\":\"Trades incoming damage now for incoming damage later\",\"stacks\":0,\"from\":[\"1053\",\"1037\",\"3133\"],\"image\":{\"full\":\"3812.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":240,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":625,\"purchasable\":true,\"total\":3500,\"sell\":2450},\"tags\":[\"Damage\",\"LifeSteal\",\"CooldownReduction\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":80},\"effect\":{\"Effect1Amount\":\"0.15\",\"Effect2Amount\":\"0.3\",\"Effect3Amount\":\"3\"},\"depth\":3},\"3813\":{\"name\":\"Space Death's Dance\",\"description\":\"<stats>+80 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 4% of damage dealt. This is 33% as effective for Area of Effect damage.<br><unique>UNIQUE Passive:</unique> 30% of damage taken is dealt as a Bleed effect over 3 seconds instead.\",\"colloq\":\";Bloodbag\",\"plaintext\":\"Trades incoming damage now for incoming damage later\",\"stacks\":0,\"from\":[\"1059\",\"1037\",\"3133\"],\"image\":{\"full\":\"3813.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":288,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":625,\"purchasable\":true,\"total\":3500,\"sell\":2450},\"tags\":[\"Damage\",\"LifeSteal\",\"CooldownReduction\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":80},\"effect\":{\"Effect1Amount\":\"0.04\",\"Effect2Amount\":\"0.3\",\"Effect3Amount\":\"3\"},\"depth\":3},\"3814\":{\"name\":\"Edge of Night\",\"description\":\"<stats>+250 Health<br>+55 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Active - Night's Veil:</unique> Channel for 1 second to grant a spell shield that blocks the next enemy ability. Lasts for 7 seconds (40 second cooldown).<br><br><rules>(Can move while channeling, but taking damage breaks the channel.)</rules>\",\"colloq\":\";lethality\",\"plaintext\":\"Blocks an incoming enemy spell.\",\"stacks\":0,\"from\":[\"1037\",\"3134\",\"1028\"],\"image\":{\"full\":\"3814.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":336,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":625,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"Health\",\"Damage\",\"Active\",\"ArmorPenetration\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatPhysicalDamageMod\":55,\"FlatHPPoolMod\":250},\"effect\":{\"Effect1Amount\":\"18\",\"Effect2Amount\":\"7\",\"Effect3Amount\":\"0\",\"Effect4Amount\":\"40\",\"Effect5Amount\":\"5\",\"Effect6Amount\":\"1\"},\"depth\":3},\"3901\":{\"name\":\"Fire at Will\",\"description\":\"Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).\",\"colloq\":\"\",\"plaintext\":\"Cannon Barrage gains extra waves\",\"consumed\":true,\"consumeOnFull\":true,\"requiredChampion\":\"Gangplank\",\"image\":{\"full\":\"3901.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":384,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"3902\":{\"name\":\"Death's Daughter\",\"description\":\"Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds. \",\"colloq\":\"\",\"plaintext\":\"Cannon Barrage fires a mega-cannonball\",\"consumed\":true,\"consumeOnFull\":true,\"requiredChampion\":\"Gangplank\",\"image\":{\"full\":\"3902.png\",\"sprite\":\"item2.png\",\"group\":\"item\",\"x\":432,\"y\":432,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"3903\":{\"name\":\"Raise Morale\",\"description\":\"Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.\",\"colloq\":\"\",\"plaintext\":\"Cannon Barrage hastes allies\",\"consumed\":true,\"consumeOnFull\":true,\"requiredChampion\":\"Gangplank\",\"image\":{\"full\":\"3903.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":0,\"purchasable\":true,\"total\":0,\"sell\":0},\"tags\":[],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{}},\"3905\":{\"name\":\"Twin Shadows\",\"description\":\"<stats>+70 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Spectral Pursuit:</unique> Summons 2 spooky ghosts that hunt down nearby champions, revealing and Haunting them on contact. <br><br>Haunted enemies are slowed by 40% for up to 5 seconds based on the distance the ghosts travel. (90 second cooldown).\",\"colloq\":\";spooky;spooky ghosts\",\"plaintext\":\"Increases Ability Power and Movement Speed\",\"from\":[\"3108\",\"3113\"],\"image\":{\"full\":\"3905.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":650,\"purchasable\":true,\"total\":2400,\"sell\":1680},\"tags\":[\"SpellDamage\",\"Active\",\"CooldownReduction\",\"Slow\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentMovementSpeedMod\":0.07,\"FlatMagicDamageMod\":70},\"effect\":{\"Effect1Amount\":\"10\",\"Effect2Amount\":\"35\",\"Effect3Amount\":\"8\",\"Effect4Amount\":\"0.2\",\"Effect5Amount\":\"0.5\",\"Effect6Amount\":\"10\",\"Effect7Amount\":\"2100\",\"Effect8Amount\":\"10\",\"Effect9Amount\":\"90\",\"Effect10Amount\":\"60\",\"Effect11Amount\":\"150\",\"Effect12Amount\":\"0.1\",\"Effect13Amount\":\"40\",\"Effect14Amount\":\"5\",\"Effect15Amount\":\"2\",\"Effect16Amount\":\"7\"},\"depth\":3},\"3907\":{\"name\":\"Spellbinder\",\"description\":\"<stats>+120 Ability Power<br>+10% Movement Speed<br></stats><br><unique>UNIQUE Passive:</unique> Nearby allied and enemy spellcasts charge Spellbinder up to a cap (100 maximum). <br><unique>UNIQUE Active:</unique> Gain a maximum of 80 Ability Power and 50% decaying Movement Speed for 4 seconds. <br><br>Each spellcast stored contributes +0.8 Ability Power and +0.5% Movement Speed to the effect. (60 second cooldown).\",\"colloq\":\"\",\"plaintext\":\"Stores nearby spellcasts and can consume them to grant Movement Speed and Ability Power.\",\"from\":[\"1058\",\"3113\"],\"image\":{\"full\":\"3907.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":800,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"SpellDamage\",\"Active\",\"NonbootsMovement\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"PercentMovementSpeedMod\":0.1,\"FlatMagicDamageMod\":120},\"effect\":{\"Effect1Amount\":\"10\",\"Effect2Amount\":\"100\",\"Effect3Amount\":\"0.5\",\"Effect4Amount\":\"4\",\"Effect5Amount\":\"0.8\",\"Effect6Amount\":\"60\",\"Effect7Amount\":\"4\",\"Effect8Amount\":\"80\",\"Effect9Amount\":\"50\",\"Effect10Amount\":\"120\",\"Effect11Amount\":\"1800\"},\"depth\":3},\"3916\":{\"name\":\"Oblivion Orb\",\"description\":\"<stats>+20 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Touch of Death:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a>\",\"colloq\":\"\",\"plaintext\":\"Increases magic damage\",\"stacks\":0,\"from\":[\"1028\",\"1052\"],\"into\":[\"3165\"],\"image\":{\"full\":\"3916.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":765,\"purchasable\":true,\"total\":1600,\"sell\":1120},\"tags\":[\"Health\",\"MagicPenetration\",\"SpellDamage\"],\"maps\":{\"10\":true,\"11\":true,\"12\":true},\"stats\":{\"FlatHPPoolMod\":200,\"FlatMagicDamageMod\":20},\"effect\":{\"Effect1Amount\":\"15\"},\"depth\":2},\"4001\":{\"name\":\"Ghostwalkers (Melee Only)\",\"description\":\"<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Active:</unique> Become Ghostly for 6 seconds, ignoring terrain collision. While inside terrain, gain 125 movement speed and become untargetable, stealthed, and silenced (60 second cooldown).<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><br><rules>(Ghostwalkers are unaffected by the Predator Rune.)</rules>\",\"colloq\":\";\",\"plaintext\":\"Enhances Movement Speed and grants temporary wall walking.\",\"from\":[\"1001\"],\"image\":{\"full\":\"4001.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":700,\"purchasable\":true,\"total\":1000,\"sell\":700},\"tags\":[\"Boots\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatMovementSpeedMod\":45},\"effect\":{\"Effect1Amount\":\"6\",\"Effect2Amount\":\"125\",\"Effect3Amount\":\"125\",\"Effect4Amount\":\"60\"},\"depth\":2},\"4003\":{\"name\":\"Lifeline\",\"description\":\"<stats>+20 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +8 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Active:</unique> Mark the ground beneath you. After 4 seconds, you will return to the marked location (120 second cooldown).\",\"colloq\":\";lethality\",\"plaintext\":\"Marks the ground, and returns you there after a few moments\",\"from\":[\"1036\",\"2420\"],\"into\":[\"4004\"],\"image\":{\"full\":\"4003.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":550,\"purchasable\":true,\"total\":1500,\"sell\":1050},\"tags\":[\"Damage\",\"NonbootsMovement\",\"ArmorPenetration\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":20},\"effect\":{\"Effect1Amount\":\"8\",\"Effect2Amount\":\"4\",\"Effect3Amount\":\"120\"},\"depth\":2},\"4004\":{\"name\":\"Spectral Cutlass\",\"description\":\"<stats>+70 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Active:</unique> Mark your current location. After 4 seconds, you will return to the marked location (60 second cooldown).\",\"colloq\":\";lethality\",\"plaintext\":\"Marks the ground, and returns you there after a few moments\",\"from\":[\"4003\",\"3134\"],\"image\":{\"full\":\"4004.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":3000,\"sell\":2100},\"tags\":[\"Armor\",\"Damage\",\"NonbootsMovement\",\"ArmorPenetration\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":70},\"effect\":{\"Effect1Amount\":\"18\",\"Effect2Amount\":\"4\",\"Effect3Amount\":\"60\"},\"depth\":3},\"4101\":{\"name\":\"Pridestalker's Blade\",\"description\":\"<unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks vs. monsters deal 40 bonus damage.  Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 80 magic damage.<mana> While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana.</mana><br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\";jungle;Jungle;jangle\",\"plaintext\":\"Kill monsters faster\",\"into\":[\"4102\",\"4103\",\"4104\",\"4105\"],\"image\":{\"full\":\"4101.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":450,\"sell\":315},\"tags\":[\"LifeSteal\",\"ManaRegen\",\"Slow\",\"OnHit\",\"NonbootsMovement\",\"Jungle\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"}},\"4102\":{\"name\":\"Enchantment: Warrior\",\"description\":\"<stats>+65 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Tons of Damage\",\"from\":[\"3133\",\"4101\"],\"hideFromAll\":true,\"image\":{\"full\":\"4102.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":1075,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":65},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":3},\"4103\":{\"name\":\"Enchantment: Cinderhulk\",\"description\":\"<stats>+350 Health<br>+10% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters.<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Increases bonus Health and burns nearby enemies\",\"from\":[\"3751\",\"4101\"],\"hideFromAll\":true,\"image\":{\"full\":\"4103.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"gold\":{\"base\":1275,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":350},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":3},\"4104\":{\"name\":\"Enchantment: Runic Echoes\",\"description\":\"<stats>+80 Ability Power<br>+10% Cooldown Reduction<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 25% of your missing Mana.<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Spells explode for bonus damage\",\"from\":[\"3108\",\"1027\",\"4101\"],\"hideFromAll\":true,\"image\":{\"full\":\"4104.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":925,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatMPPoolMod\":300,\"FlatMagicDamageMod\":80},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":3},\"4105\":{\"name\":\"Enchantment: Bloodrazor\",\"description\":\"<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\"\",\"plaintext\":\"Attacks deal bonus damage based on the target's maximum Health\",\"from\":[\"1043\",\"4101\"],\"hideFromAll\":true,\"image\":{\"full\":\"4105.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":1175,\"purchasable\":true,\"total\":2625,\"sell\":1838},\"tags\":[],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"PercentAttackSpeedMod\":0.5},\"effect\":{\"Effect1Amount\":\"80\",\"Effect2Amount\":\"30\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"8\",\"Effect5Amount\":\"40\",\"Effect6Amount\":\"0.1\",\"Effect7Amount\":\"2\",\"Effect8Amount\":\"-0.2\"},\"depth\":3},\"4201\":{\"name\":\"Doran's Lost Shield\",\"description\":\"<stats>+100 Health</stats><br><br><passive>Passive: </passive>Restores 15 Health every 5 seconds.<br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.<br><unique>UNIQUE Passive:</unique> Regain an additional 20 health over 10 seconds after taking damage from an enemy champion.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\";dshield\",\"plaintext\":\"Good defensive starting item\",\"image\":{\"full\":\"4201.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":450,\"sell\":180},\"tags\":[\"Health\",\"HealthRegen\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":100,\"FlatHPRegenMod\":3},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"2\"}},\"4202\":{\"name\":\"Doran's Lost Blade\",\"description\":\"<stats>+8 Attack Damage<br>+80 Health<br>+8% Life Steal</stats><br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\";dblade\",\"plaintext\":\"Good starting item for attackers\",\"image\":{\"full\":\"4202.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":450,\"sell\":180},\"tags\":[\"Damage\",\"Health\",\"Lane\",\"LifeSteal\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":8,\"FlatHPPoolMod\":80,\"PercentLifeStealMod\":0.08},\"effect\":{\"Effect1Amount\":\"10\"}},\"4203\":{\"name\":\"Doran's Lost Ring\",\"description\":\"<stats>+60 Health<br>+15 Ability Power<br><mana>+10 Mana per 5 seconds</mana></stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\";dring\",\"plaintext\":\"Good starting item for casters\",\"image\":{\"full\":\"4203.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"Health\",\"Lane\",\"ManaRegen\",\"SpellDamage\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":60,\"FlatMagicDamageMod\":15},\"effect\":{\"Effect1Amount\":\"0\",\"Effect2Amount\":\"5\"}},\"4204\":{\"name\":\"Doran's Lost Idol\",\"description\":\"<stats>+10 Ability Power<br><mana>+75% Base Mana Regen </mana><br>+5% Heal and Shield Power</stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 12 physical damage to minions on hit.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\";didol\",\"plaintext\":\"Good starting item for Enchanters\",\"image\":{\"full\":\"4204.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"SpellDamage\",\"ManaRegen\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatMagicDamageMod\":10},\"effect\":{\"Effect1Amount\":\"0.05\",\"Effect2Amount\":\"12\"}},\"4301\":{\"name\":\"Philosopher's Medallion\",\"description\":\"<stats>+10% Cooldown Reduction<br>+50% Base Health Regen <br>+5 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>40</font> gold or <font color='#44DDFF'>10%</font> missing mana (minimum 20). Cannon minions always drop coins.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\";Ancient Coin;Nomad's Medallion;Support\",\"plaintext\":\"Grants gold and mana when nearby minions die that you didn't kill\",\"image\":{\"full\":\"4301.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":450,\"purchasable\":true,\"total\":450,\"sell\":180},\"tags\":[\"HealthRegen\",\"ManaRegen\",\"GoldPer\",\"CooldownReduction\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{},\"effect\":{\"Effect1Amount\":\"40\",\"Effect2Amount\":\"10\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"0\",\"Effect10Amount\":\"10000\",\"Effect11Amount\":\"50\",\"Effect12Amount\":\"0.1\",\"Effect13Amount\":\"20\",\"Effect14Amount\":\"10\"}},\"4302\":{\"name\":\"Heart of Targon\",\"description\":\"<stats>+60 Health<br>+50% Base Health Regen <br>+5 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+40 per level) Health. Killing a minion heals the owner and the nearest allied champion for 25 Health (+2% missing health) and grants them kill Gold. 50% healing if the owner is ranged. These effects require a nearby ally. Recharges every 20 seconds. Max 3 charges.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>\",\"colloq\":\";Targon's Brace;Relic Shield;Support\",\"plaintext\":\"Kill minions periodically to heal and grant gold to a nearby ally\",\"image\":{\"full\":\"4302.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":400,\"purchasable\":true,\"total\":400,\"sell\":160},\"tags\":[\"Health\",\"HealthRegen\",\"Aura\",\"GoldPer\",\"Lane\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatHPPoolMod\":60},\"effect\":{\"Effect1Amount\":\"200\",\"Effect2Amount\":\"25\",\"Effect3Amount\":\"5\",\"Effect4Amount\":\"0\",\"Effect5Amount\":\"0\",\"Effect6Amount\":\"0\",\"Effect7Amount\":\"0\",\"Effect8Amount\":\"0\",\"Effect9Amount\":\"5\",\"Effect10Amount\":\"0\",\"Effect11Amount\":\"5000\",\"Effect12Amount\":\"20\",\"Effect13Amount\":\"3\",\"Effect14Amount\":\"0\",\"Effect15Amount\":\"40\",\"Effect16Amount\":\"0.02\",\"Effect17Amount\":\"0.5\",\"Effect18Amount\":\"10\"}},\"4401\":{\"name\":\"Force of Nature\",\"description\":\"<stats>+90 Magic Resist<br>+200% Base Health Regen <br>+8% Movement Speed</stats><br><br><unique>UNIQUE Passive:</unique> Regenerate 1.5% maximum Health every second.\",\"colloq\":\";fon\",\"plaintext\":\"Movement Speed, Magic Resist, and max Health Regeneration\",\"from\":[\"1057\",\"1057\",\"1006\",\"1006\"],\"image\":{\"full\":\"4401.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":1160,\"purchasable\":true,\"total\":2900,\"sell\":2030},\"tags\":[\"SpellBlock\",\"HealthRegen\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"PercentMovementSpeedMod\":0.08,\"FlatSpellBlockMod\":90},\"effect\":{\"Effect1Amount\":\"0.015\"},\"depth\":3},\"4402\":{\"name\":\"Innervating Locket\",\"description\":\"<stats>+400 Health<br><mana>+300 Mana</mana><br>+30 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><br><unique>UNIQUE Passive:</unique> After using an ability, restore 8% missing Health and 3% missing Mana over 3 seconds.<br><br><rules><font color='#447777'>''Cast down the Noxians'' - Bobdyr, Temple Guardsman</font></rules>\",\"colloq\":\";\",\"plaintext\":\"Cast spells to heal\",\"from\":[\"3010\",\"3133\"],\"image\":{\"full\":\"4402.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"gold\":{\"base\":600,\"purchasable\":true,\"total\":2800,\"sell\":1960},\"tags\":[\"Health\",\"HealthRegen\",\"Damage\",\"Mana\",\"ManaRegen\",\"CooldownReduction\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":30,\"FlatHPPoolMod\":400,\"FlatMPPoolMod\":300},\"effect\":{\"Effect1Amount\":\"3\",\"Effect2Amount\":\"0.08\",\"Effect3Amount\":\"0.03\",\"Effect4Amount\":\"25\",\"Effect5Amount\":\"0.2\",\"Effect6Amount\":\"0.15\"},\"depth\":3},\"4403\":{\"name\":\"Stat-Stick of Stoicism\",\"description\":\"<stats>+250 Health<br><mana>+250 Mana</mana><br>+100% Base Health Regen <br><mana>+100% Base Mana Regen </mana><br>+30 Armor<br>+30 Magic Resist<br>+120 Ability Power<br>+70 Attack Damage<br>+50% Attack Speed<br>+30% Critical Strike Chance<br>+10% Life Steal<br>+10% Movement Speed<br>+20% Cooldown Reduction</stats><br><br><rules><font color='#447777'>''What if we only bought some of the stats?''<br>''Declined, we must have ALL of them.''</font></rules>\",\"colloq\":\";\",\"plaintext\":\"Has ALL the stats\",\"from\":[\"1038\",\"1053\",\"3086\",\"1058\",\"3067\",\"3105\"],\"image\":{\"full\":\"4403.png\",\"sprite\":\"item3.png\",\"group\":\"item\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"gold\":{\"base\":687,\"purchasable\":true,\"total\":7237,\"sell\":5066},\"tags\":[\"Health\",\"SpellBlock\",\"HealthRegen\",\"Armor\",\"Damage\",\"CriticalStrike\",\"AttackSpeed\",\"LifeSteal\",\"SpellDamage\",\"Mana\",\"ManaRegen\",\"CooldownReduction\",\"NonbootsMovement\"],\"maps\":{\"10\":false,\"11\":false,\"12\":false},\"stats\":{\"FlatPhysicalDamageMod\":70,\"FlatCritChanceMod\":0.3,\"PercentMovementSpeedMod\":0.1,\"FlatHPPoolMod\":250,\"FlatSpellBlockMod\":30,\"FlatMPPoolMod\":250,\"FlatMagicDamageMod\":120,\"PercentAttackSpeedMod\":0.5,\"FlatArmorMod\":30,\"PercentLifeStealMod\":0.1},\"depth\":3}},\"groups\":[{\"id\":\"HuntersTalismanGroup\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"HuntersMacheteGroup\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"BaseJungleItems\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"Boots\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"BootsOfSpeed\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"BootsWithoutActives\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"BuildsFromStopwatchGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"Consumable\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"Default\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"DoransItems\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"Elixir\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"GangplankRUpgrade01\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"GangplankRUpgrade02\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"GangplankRUpgrade03\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"GoldItems\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"GuardianItems\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"ItemGroupSwapToSummonerDot\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"ItemGroupSwapToSummonerFlash\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"ItemGroupSwapToSummonerHaste\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"ItemGroupSwapToSummonerHeal\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"ItemGroupSwapToSummonerSmite\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"ItemGroupSwapToSummonerTeleport\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"JungleEnchantments\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"JungleItems\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"LegendaryClearingItems\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"NewDoransItems\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"NonItem\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"OdysseySustainItems\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"OrnnItems\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"PerksElixir\",\"MaxGroupOwnable\":\"0\"},{\"id\":\"PerksElixirAdvanced\",\"MaxGroupOwnable\":\"0\"},{\"id\":\"Potion\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"SLIMEStarterItems\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"SiegeEmergencyShieldGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegeFlashZoneGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegeLaserAffixGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegeMissileBarrageGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegePortableBarracksGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegeRefundGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegeShieldGeneratorGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegeSniperCannonGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegeTeleportPadGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SiegeTimefieldGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"SightstoneActiveItems\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"SightstoneDisableGroup\",\"MaxGroupOwnable\":\"0\"},{\"id\":\"StopwatchGroup\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"TheBlackSpear\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"TotalBiscuit\",\"MaxGroupOwnable\":\"0\"},{\"id\":\"Trinket\",\"MaxGroupOwnable\":\"-1\"},{\"id\":\"ViktorHexCore\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"WardGreen\",\"MaxGroupOwnable\":\"1\"},{\"id\":\"WardPink\",\"MaxGroupOwnable\":\"1\"}],\"tree\":[{\"header\":\"START\",\"tags\":[\"LANE\",\"JUNGLE\"]},{\"header\":\"TOOLS\",\"tags\":[\"GOLDPER\",\"CONSUMABLE\",\"VISION\"]},{\"header\":\"DEFENSE\",\"tags\":[\"HEALTH\",\"HEALTHREGEN\",\"ARMOR\",\"SPELLBLOCK\"]},{\"header\":\"ATTACK\",\"tags\":[\"LIFESTEAL\",\"CRITICALSTRIKE\",\"ATTACKSPEED\",\"DAMAGE\"]},{\"header\":\"MAGIC\",\"tags\":[\"MANA\",\"SPELLDAMAGE\",\"COOLDOWNREDUCTION\",\"MANAREGEN\"]},{\"header\":\"MOVEMENT\",\"tags\":[\"BOOTS\",\"NONBOOTSMOVEMENT\"]},{\"header\":\"UNCATEGORIZED\",\"tags\":[\"ACTIVE\",\"SPELLVAMP\",\"MAGICPENETRATION\",\"ARMORPENETRATION\",\"AURA\",\"ONHIT\",\"TRINKET\",\"SLOW\",\"STEALTH\",\"TENACITY\"]}]}");

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