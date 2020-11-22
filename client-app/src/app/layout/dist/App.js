"use strict";
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
require("semantic-ui-css/semantic.min.css");
var NavBar_1 = require("../../features/navbar/NavBar");
var ActivityDashboard_1 = require("../../features/activities/dashboard/ActivityDashboard");
var LoadingComponent_1 = require("./LoadingComponent");
var activityStore_1 = require("../stores/activityStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var App = function () {
    var activityStore = react_1.useContext(activityStore_1["default"]);
    react_1.useEffect(function () {
        activityStore.loadActivities();
    }, [activityStore]);
    if (activityStore.loadingInitial)
        return react_1["default"].createElement(LoadingComponent_1.LoadingComponent, { content: 'Loading activities...' });
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement(semantic_ui_react_1.Container, { style: { marginTop: '7em' } },
            react_1["default"].createElement(ActivityDashboard_1["default"], null))));
};
exports["default"] = mobx_react_lite_1.observer(App);
