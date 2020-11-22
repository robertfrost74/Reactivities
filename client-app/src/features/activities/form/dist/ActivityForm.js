"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var uuid_1 = require("uuid");
var activityStore_1 = require("../../../app/stores/activityStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var ActivityForm = function (_a) {
    var initialFormState = _a.activity;
    var activityStore = react_1.useContext(activityStore_1["default"]);
    var createActivity = activityStore.createActivity, editActivity = activityStore.editActivity, submitting = activityStore.submitting, cancelFormOpen = activityStore.cancelFormOpen;
    var initializeForm = function () {
        if (initialFormState) {
            return initialFormState;
        }
        else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            };
        }
    };
    var _b = react_1.useState(initializeForm), activity = _b[0], setActivity = _b[1];
    var handleSubmit = function () {
        if (activity.id.length === 0) {
            var newActivity = __assign(__assign({}, activity), { id: uuid_1.v4() });
            createActivity(newActivity);
        }
        else {
            editActivity(activity);
        }
    };
    var handleInputChange = function (event) {
        var _a;
        var _b = event.currentTarget, name = _b.name, value = _b.value;
        setActivity(__assign(__assign({}, activity), (_a = {}, _a[name] = value, _a)));
    };
    return (react_1["default"].createElement(semantic_ui_react_1.Segment, { clearing: true },
        react_1["default"].createElement(semantic_ui_react_1.Form, { onSubmit: handleSubmit },
            react_1["default"].createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'title', placeholder: 'Title', value: activity.title }),
            react_1["default"].createElement(semantic_ui_react_1.Form.TextArea, { onChange: handleInputChange, name: 'description', rows: 2, placeholder: 'Description', value: activity.description }),
            react_1["default"].createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'category', placeholder: 'Category', value: activity.category }),
            react_1["default"].createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'date', type: 'datetime-local', placeholder: 'Date', value: activity.date }),
            react_1["default"].createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'city', placeholder: 'City', value: activity.city }),
            react_1["default"].createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'venue', placeholder: 'Venue', value: activity.venue }),
            react_1["default"].createElement(semantic_ui_react_1.Button, { loading: submitting, floated: 'right', positive: true, type: 'submit', content: 'Submit' }),
            react_1["default"].createElement(semantic_ui_react_1.Button, { onClick: cancelFormOpen, floated: 'right', type: 'button', content: 'Cancel' }))));
};
exports["default"] = mobx_react_lite_1.observer(ActivityForm);
