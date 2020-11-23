"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
require("./app/layout/styles.css");
var App_1 = require("./app/layout/App");
var reportWebVitals_1 = require("./reportWebVitals");
var ScrollToTop_1 = require("./app/layout/ScrollToTop");
react_dom_1["default"].render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(ScrollToTop_1["default"], null,
        react_1["default"].createElement(App_1["default"], null))), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
