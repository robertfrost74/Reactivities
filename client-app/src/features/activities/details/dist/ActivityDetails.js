"use strict";
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var activityStore_1 = require("../../../app/stores/activityStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var ActivityDetails = function () {
    var activityStore = react_1.useContext(activityStore_1["default"]);
    var activity = activityStore.selectedActivity, openEditForm = activityStore.openEditForm, cancelSelectedActivity = activityStore.cancelSelectedActivity;
    return (react_1["default"].createElement(semantic_ui_react_1.Card, { fluid: true },
        react_1["default"].createElement(semantic_ui_react_1.Image, { src: "/assets/categoryImages/" + activity.category + ".jpg", wrapped: true, ui: false }),
        react_1["default"].createElement(semantic_ui_react_1.Card.Content, null,
            react_1["default"].createElement(semantic_ui_react_1.Card.Header, null, activity.title),
            react_1["default"].createElement(semantic_ui_react_1.Card.Meta, null,
                react_1["default"].createElement("span", null, activity.date)),
            react_1["default"].createElement(semantic_ui_react_1.Card.Description, null, activity.description)),
        react_1["default"].createElement(semantic_ui_react_1.Card.Content, { extra: true },
            react_1["default"].createElement(semantic_ui_react_1.Button.Group, { widths: 2 },
                react_1["default"].createElement(semantic_ui_react_1.Button, { onClick: function () { return openEditForm(activity.id); }, basic: true, color: 'blue', content: 'Edit' }),
                react_1["default"].createElement(semantic_ui_react_1.Button, { onClick: cancelSelectedActivity, basic: true, color: 'grey', content: 'Cancel' })))));
};
exports["default"] = mobx_react_lite_1.observer(ActivityDetails);
