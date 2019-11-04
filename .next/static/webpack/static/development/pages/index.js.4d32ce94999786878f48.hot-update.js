webpackHotUpdate("static/development/pages/index.js",{

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var MatchData = function MatchData(props) {
  var champion = props.champion,
      person = props.person;

  var championImage = __jsx("img", {
    src: "/static/ddragon/img/champion/".concat(champion.image.full)
  });

  return __jsx("div", {
    className: "match-wrapper"
  }, __jsx(_match_panels_ChampionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    championImage: championImage,
    championId: champion.id
  }), __jsx(_match_panels_ChampionKDA__WEBPACK_IMPORTED_MODULE_2__["default"], {
    stats: person.stats
  }), __jsx(_match_panels_ChampionItems__WEBPACK_IMPORTED_MODULE_1__["default"], {
    stats: person.stats
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MatchData);

/***/ })

})
//# sourceMappingURL=index.js.4d32ce94999786878f48.hot-update.js.map