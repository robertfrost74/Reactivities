"use strict";
exports.__esModule = true;
exports.ActivityList = void 0;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
exports.ActivityList = function (_a) {
    var activities = _a.activities, selectActivity = _a.selectActivity, deleteActivity = _a.deleteActivity, submitting = _a.submitting, target = _a.target;
    return (react_1["default"].createElement(semantic_ui_react_1.Segment, { clearing: true },
        react_1["default"].createElement(semantic_ui_react_1.Item.Group, { divided: true }, activities.map(function (activity) { return (react_1["default"].createElement(semantic_ui_react_1.Item, { key: activity.id },
            react_1["default"].createElement(semantic_ui_react_1.Item.Content, null,
                react_1["default"].createElement(semantic_ui_react_1.Item.Header, { as: 'a' }, activity.title),
                react_1["default"].createElement(semantic_ui_react_1.Item.Meta, null, activity.date),
                react_1["default"].createElement(semantic_ui_react_1.Item.Description, null,
                    react_1["default"].createElement("div", null, activity.description),
                    react_1["default"].createElement("div", null,
                        activity.city,
                        ", ",
                        activity.venue)),
                react_1["default"].createElement(semantic_ui_react_1.Item.Extra, null,
                    react_1["default"].createElement(semantic_ui_react_1.Button, { onClick: function () { return selectActivity(activity.id); }, floated: 'right', content: 'View', color: 'blue' }),
                    react_1["default"].createElement(semantic_ui_react_1.Button, { name: activity.id, loading: target === activity.id && submitting, onClick: function (e) { return deleteActivity(e, activity.id); }, floated: 'right', content: 'Delete', color: 'red' }),
                    react_1["default"].createElement(semantic_ui_react_1.Label, { basic: true, content: activity.category }))))); }))));
};
