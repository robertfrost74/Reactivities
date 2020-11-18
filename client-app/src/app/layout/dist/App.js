"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
require("semantic-ui-css/semantic.min.css");
var NavBar_1 = require("../../features/navbar/NavBar");
var ActivityDashboard_1 = require("../../features/activities/dashboard/ActivityDashboard");
var agent_1 = require("../api/agent");
var LoadingComponent_1 = require("./LoadingComponent");
var App = function () {
    var _a = react_1.useState([]), activities = _a[0], setActivities = _a[1];
    var _b = react_1.useState(null), selectedActivity = _b[0], setSelectedActivity = _b[1];
    var _c = react_1.useState(false), editMode = _c[0], setEditMode = _c[1];
    var _d = react_1.useState(true), loading = _d[0], setLoading = _d[1];
    var _e = react_1.useState(false), submitting = _e[0], setSubmitting = _e[1];
    var _f = react_1.useState(''), target = _f[0], setTarget = _f[1];
    var handleSelectActivity = function (id) {
        setSelectedActivity(activities.filter(function (a) { return a.id === id; })[0]);
        setEditMode(false);
    };
    var handleOpenCreateForm = function () {
        setSelectedActivity(null);
        setEditMode(true);
    };
    var handleCreateActivity = function (activity) {
        setSubmitting(true);
        agent_1["default"].Activities.create(activity).then(function () {
            setActivities(__spreadArrays(activities, [activity]));
            setSelectedActivity(activity);
            setEditMode(false);
        }).then(function () { return setSubmitting(false); });
    };
    var handleEditActivity = function (activity) {
        setSubmitting(true);
        agent_1["default"].Activities.update(activity).then(function () {
            setActivities(__spreadArrays(activities.filter(function (a) { return a.id !== activity.id; }), [activity]));
            setSelectedActivity(activity);
            setEditMode(false);
        }).then(function () { return setSubmitting(false); });
    };
    var handleDeleteActivity = function (event, id) {
        setSubmitting(true);
        setTarget(event.currentTarget.name);
        agent_1["default"].Activities["delete"](id).then(function () {
            setActivities(__spreadArrays(activities.filter(function (a) { return a.id !== id; })));
        }).then(function () { return setSubmitting(false); });
    };
    react_1.useEffect(function () {
        agent_1["default"].Activities.list()
            .then(function (response) {
            var activities = [];
            response.forEach(function (activity) {
                activity.date = activity.date.split('.')[0];
                activities.push(activity);
            });
            setActivities(activities);
        }).then(function () { return setLoading(false); });
    }, []);
    if (loading)
        return react_1["default"].createElement(LoadingComponent_1.LoadingComponent, { content: 'Loading activities...' });
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(NavBar_1.NavBar, { openCreateForm: handleOpenCreateForm }),
        react_1["default"].createElement(semantic_ui_react_1.Container, { style: { marginTop: '7em' } },
            react_1["default"].createElement(ActivityDashboard_1.ActivityDashboard, { activities: activities, selectActivity: handleSelectActivity, selectedActivity: selectedActivity, editMode: editMode, setEditMode: setEditMode, setSelectedActivity: setSelectedActivity, createActivity: handleCreateActivity, editActivity: handleEditActivity, deleteActivity: handleDeleteActivity, submitting: submitting, target: target }))));
};
exports["default"] = App;
