webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.8602f78b296d42365ecb.hot-update.js.map