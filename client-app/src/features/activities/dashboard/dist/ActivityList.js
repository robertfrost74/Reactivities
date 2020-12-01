"use strict";
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var mobx_react_lite_1 = require("mobx-react-lite");
var activityStore_1 = require("../../../app/stores/activityStore");
var ActivityListItem_1 = require("./ActivityListItem");
var ActivityList = function () {
    var activityStore = react_1.useContext(activityStore_1["default"]);
    var activitiesByDate = activityStore.activitiesByDate;
    return (react_1["default"].createElement(react_1.Fragment, null, activitiesByDate.map(function (_a) {
        var group = _a[0], activities = _a[1];
        return (react_1["default"].createElement(react_1.Fragment, { key: group },
            react_1["default"].createElement(semantic_ui_react_1.Label, { size: 'large', color: 'blue' }, group),
            react_1["default"].createElement(semantic_ui_react_1.Item.Group, { divided: true }, activities.map(function (activity) { return (react_1["default"].createElement(ActivityListItem_1.ActivityListItem, { key: activity.id, activity: activity })); }))));
    })));
};
exports["default"] = mobx_react_lite_1.observer(ActivityList);
