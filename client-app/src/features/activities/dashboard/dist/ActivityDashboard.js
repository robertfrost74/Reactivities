"use strict";
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityList_1 = require("./ActivityList");
var ActivityDetails_1 = require("../details/ActivityDetails");
var ActivityForm_1 = require("../form/ActivityForm");
var mobx_react_lite_1 = require("mobx-react-lite");
var activityStore_1 = require("../../../app/stores/activityStore");
var ActivityDashboard = function () {
    var activityStore = react_1.useContext(activityStore_1["default"]);
    var editMode = activityStore.editMode, selectedActivity = activityStore.selectedActivity;
    return (react_1["default"].createElement(semantic_ui_react_1.Grid, null,
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            react_1["default"].createElement(ActivityList_1["default"], null)),
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            selectedActivity && !editMode && (react_1["default"].createElement(ActivityDetails_1["default"], null)),
            editMode && (react_1["default"].createElement(ActivityForm_1["default"], { key: (selectedActivity && selectedActivity.id) || 0, activity: selectedActivity })))));
};
exports["default"] = mobx_react_lite_1.observer(ActivityDashboard);
