"use strict";
exports.__esModule = true;
exports.LoadingComponent = void 0;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
exports.LoadingComponent = function (_a) {
    var _b = _a.inverted, inverted = _b === void 0 ? true : _b, content = _a.content;
    return (react_1["default"].createElement(semantic_ui_react_1.Dimmer, { active: true, inverted: inverted },
        react_1["default"].createElement(semantic_ui_react_1.Loader, { content: content })));
};
