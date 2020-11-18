"use strict";
exports.__esModule = true;
exports.ActivityDashboard = void 0;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityList_1 = require("./ActivityList");
var ActivityDetails_1 = require("../details/ActivityDetails");
var ActivityForm_1 = require("../form/ActivityForm");
exports.ActivityDashboard = function (_a) {
    var activities = _a.activities, selectActivity = _a.selectActivity, selectedActivity = _a.selectedActivity, editMode = _a.editMode, setEditMode = _a.setEditMode, setSelectedActivity = _a.setSelectedActivity, createActivity = _a.createActivity, editActivity = _a.editActivity, deleteActivity = _a.deleteActivity, submitting = _a.submitting, target = _a.target;
    return (react_1["default"].createElement(semantic_ui_react_1.Grid, null,
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            react_1["default"].createElement(ActivityList_1.ActivityList, { activities: activities, selectActivity: selectActivity, deleteActivity: deleteActivity, submitting: submitting, target: target })),
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            selectedActivity && !editMode && (react_1["default"].createElement(ActivityDetails_1.ActivityDetails, { activity: selectedActivity, setEditMode: setEditMode, setSelectedActivity: setSelectedActivity })),
            editMode &&
                react_1["default"].createElement(ActivityForm_1.ActivityForm, { key: (selectedActivity && selectedActivity.id) || 0, setEditMode: setEditMode, activity: selectedActivity, createActivity: createActivity, editActivity: editActivity, submitting: submitting }))));
};
