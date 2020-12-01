"use strict";
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var activityStore_1 = require("../../../app/stores/activityStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var LoadingComponent_1 = require("../../../app/layout/LoadingComponent");
var ActivityDetailedHeader_1 = require("./ActivityDetailedHeader");
var ActivityDetailedInfo_1 = require("./ActivityDetailedInfo");
var ActivityDetailedChat_1 = require("./ActivityDetailedChat");
var ActivityDetailedSidebar_1 = require("./ActivityDetailedSidebar");
var ActivityDetails = function (_a) {
    var match = _a.match;
    var activityStore = react_1.useContext(activityStore_1["default"]);
    var activity = activityStore.activity, loadActivity = activityStore.loadActivity, loadingInitial = activityStore.loadingInitial;
    react_1.useEffect(function () {
        loadActivity(match.params.id);
    }, [loadActivity, match.params.id]);
    if (loadingInitial || !activity)
        return react_1["default"].createElement(LoadingComponent_1.LoadingComponent, { content: 'Loading activity...' });
    return (react_1["default"].createElement(semantic_ui_react_1.Grid, null,
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            react_1["default"].createElement(ActivityDetailedHeader_1["default"], { activity: activity }),
            react_1["default"].createElement(ActivityDetailedInfo_1.ActivityDetailedInfo, { activity: activity }),
            react_1["default"].createElement(ActivityDetailedChat_1.ActivityDetailedChat, null)),
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            react_1["default"].createElement(ActivityDetailedSidebar_1.ActivityDetailedSidebar, null))));
};
exports["default"] = mobx_react_lite_1.observer(ActivityDetails);
