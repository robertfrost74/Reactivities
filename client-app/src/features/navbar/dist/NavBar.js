"use strict";
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var activityStore_1 = require("../../app/stores/activityStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var NavBar = function () {
    var activityStore = react_1.useContext(activityStore_1["default"]);
    return (react_1["default"].createElement(semantic_ui_react_1.Menu, { fixed: 'top', inverted: true },
        react_1["default"].createElement(semantic_ui_react_1.Container, null,
            react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { header: true },
                react_1["default"].createElement("img", { src: "/assets/logo.png", alt: "logo", style: { marginRight: 10 } }),
                "Reactivities"),
            react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { name: 'Activities' }),
            react_1["default"].createElement(semantic_ui_react_1.Menu.Item, null,
                react_1["default"].createElement(semantic_ui_react_1.Button, { onClick: activityStore.openCreateForm, positive: true, content: 'Create Activity' })))));
};
exports["default"] = mobx_react_lite_1.observer(NavBar);
