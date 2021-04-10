(self["webpackChunk_pareto_engineering_template_react"] = self["webpackChunk_pareto_engineering_template_react"] || []).push([["app.site"],{

/***/ "./src/app/SSRSuspense.js":
/*!********************************!*\
  !*** ./src/app/SSRSuspense.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/* eslint-disable import/no-mutable-exports -- required */

let SSRSuspense;

if (typeof window === 'undefined') {
  SSRSuspense = props => props.children;
} else SSRSuspense = react__WEBPACK_IMPORTED_MODULE_0__.Suspense;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSRSuspense);

/***/ }),

/***/ "./src/app/site/pages/__generated__/HomeHelloQuery.graphql.js":
/*!********************************************************************!*\
  !*** ./src/app/site/pages/__generated__/HomeHelloQuery.graphql.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeHelloQueryVariables = {||};
export type HomeHelloQueryResponse = {|
  +hello: ?string
|};
export type HomeHelloQuery = {|
  variables: HomeHelloQueryVariables,
  response: HomeHelloQueryResponse,
|};
*/

/*
query HomeHelloQuery {
  hello
}
*/

const node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }];
  return {
    "fragment": {
      "argumentDefinitions": [],
      "kind": "Fragment",
      "metadata": null,
      "name": "HomeHelloQuery",
      "selections": v0
      /*: any*/
      ,
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [],
      "kind": "Operation",
      "name": "HomeHelloQuery",
      "selections": v0
      /*: any*/

    },
    "params": {
      "cacheID": "d70ab4598f61cd49034335ad4a502d17",
      "id": null,
      "metadata": {},
      "name": "HomeHelloQuery",
      "operationKind": "query",
      "text": "query HomeHelloQuery {\n  hello\n}\n"
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'e768452537af6384ade953a8b6324992';
module.exports = node;

/***/ }),

/***/ "./src/app/site/pages/Home.jsx":
/*!*************************************!*\
  !*** ./src/app/site/pages/Home.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SSRSuspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SSRSuspense */ "./src/app/SSRSuspense.js");
/* harmony import */ var react_relay_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-relay/hooks */ "./node_modules/react-relay/hooks.js");
/* harmony import */ var react_relay_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_relay_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pareto-engineering/design-system */ "./node_modules/@pareto-engineering/design-system/dist/es/index.js");
var _HomeHelloQuery;

/* @pareto-engineering/generator-front 1.0.7 */







function FetcherExample() {
  const data = (0,react_relay_hooks__WEBPACK_IMPORTED_MODULE_3__.useLazyLoadQuery)(_HomeHelloQuery !== void 0 ? _HomeHelloQuery : (_HomeHelloQuery = __webpack_require__(/*! ./__generated__/HomeHelloQuery.graphql */ "./src/app/site/pages/__generated__/HomeHelloQuery.graphql.js"), _HomeHelloQuery.hash && _HomeHelloQuery.hash !== "e768452537af6384ade953a8b6324992" && console.error("The definition of 'HomeHelloQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _HomeHelloQuery), {} // {id: 4},
  // {fetchPolicy: 'store-only'},
  );
  return JSON.stringify(data);
}

const Home = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_4__.Page, {
  id: "page-home"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_4__.Page.Section, {
  id: "head"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_4__.Title, {
  heading: "SSR Template",
  headingAs: "h1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Helmet SSR title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
  name: "description",
  content: "This is an example of a meta description.\nThis will often show up in search results. This is set up using Helmet."
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_4__.Page.Section, {
  id: "main"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Welcome to this SSR template. Here is a list of features that should work out of the box."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "GraphQL SSR :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SSRSuspense__WEBPACK_IMPORTED_MODULE_2__.default, {
  fallback: "Loading..."
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetcherExample, null))), "This should also appear in the source code of the page, as well as in", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "window.__RELAY_PAYLOADS__"), ". Also, if not using SSR mode, no queries should be sent over the network (store hydrated from query)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Helmet (view source of page. The", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "title"), ' ', "tag should be set up to \"Helmet Title\")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Preloading of JS and CSS resources. Look at the source code. Essential CSS/JS resources should have both a preload link and a loading link."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Inclusion of the design system :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_4__.Button, null, "Test Button")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Routing.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
  to: "/team"
}, "Click here to test.")))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/app/site/pages/Team.jsx":
/*!*************************************!*\
  !*** ./src/app/site/pages/Team.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pareto-engineering/design-system */ "./node_modules/@pareto-engineering/design-system/dist/es/index.js");
/* @pareto-engineering/generator-front 1.0.7 */




const Team = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_1__.Page, {
  id: "page-team"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_1__.Page.Section, {
  id: "head"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_1__.Title, {
  heading: "Team",
  headingAs: "h1"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pareto_engineering_design_system__WEBPACK_IMPORTED_MODULE_1__.Page.Section, {
  id: "main"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
  to: "/"
}, "Back home.")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);

/***/ })

}]);
//# sourceMappingURL=app.site.js.map