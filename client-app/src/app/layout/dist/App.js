"use strict";
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
require("semantic-ui-css/semantic.min.css");
var NavBar_1 = require("../../features/navbar/NavBar");
var ActivityDashboard_1 = require("../../features/activities/dashboard/ActivityDashboard");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_router_dom_1 = require("react-router-dom");
var HomePage_1 = require("../../features/home/HomePage");
var ActivityForm_1 = require("../../features/activities/form/ActivityForm");
var ActivityDetails_1 = require("../../features/activities/details/ActivityDetails");
var App = function (_a) {
    var location = _a.location;
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/', component: HomePage_1["default"] }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: '/(.+)', render: function () { return (react_1["default"].createElement(react_1.Fragment, null,
                react_1["default"].createElement(NavBar_1["default"], null),
                react_1["default"].createElement(semantic_ui_react_1.Container, { style: { marginTop: '7em' } },
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/activities', component: ActivityDashboard_1["default"] }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/activities/:id', component: ActivityDetails_1["default"] }),
                    react_1["default"].createElement(react_router_dom_1.Route, { key: location.key, path: ['/createActivity', '/manage/:id'], component: ActivityForm_1["default"] })))); } })));
};
exports["default"] = react_router_dom_1.withRouter(mobx_react_lite_1.observer(App));
