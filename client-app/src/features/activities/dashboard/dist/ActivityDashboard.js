"use strict";
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityList_1 = require("./ActivityList");
var mobx_react_lite_1 = require("mobx-react-lite");
var LoadingComponent_1 = require("../../../app/layout/LoadingComponent");
var activityStore_1 = require("../../../app/stores/activityStore");
var ActivityDashboard = function () {
    var activityStore = react_1.useContext(activityStore_1["default"]);
    react_1.useEffect(function () {
        activityStore.loadActivities();
    }, [activityStore]);
    if (activityStore.loadingInitial)
        return react_1["default"].createElement(LoadingComponent_1.LoadingComponent, { content: 'Loading activities...' });
    return (react_1["default"].createElement(semantic_ui_react_1.Grid, null,
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            react_1["default"].createElement(ActivityList_1["default"], null)),
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            react_1["default"].createElement("h2", null, "Activity filters"))));
};
exports["default"] = mobx_react_lite_1.observer(ActivityDashboard);
