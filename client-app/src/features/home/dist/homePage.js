"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var semantic_ui_react_1 = require("semantic-ui-react");
var HomePage = function () {
    return (react_1["default"].createElement(semantic_ui_react_1.Container, { style: { marginTop: '7em' } },
        react_1["default"].createElement("h1", null, "Home page"),
        react_1["default"].createElement("h3", null,
            "Go to ",
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/activities' }, "Activities"))));
};
exports["default"] = HomePage;
