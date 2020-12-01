"use strict";
exports.__esModule = true;
exports.ActivityDetailedSidebar = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var semantic_ui_react_1 = require("semantic-ui-react");
exports.ActivityDetailedSidebar = function () {
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(semantic_ui_react_1.Segment, { textAlign: 'center', style: { border: 'none' }, attached: 'top', secondary: true, inverted: true, color: 'teal' }, "3 People Going"),
        react_1["default"].createElement(semantic_ui_react_1.Segment, { attached: true },
            react_1["default"].createElement(semantic_ui_react_1.List, { relaxed: true, divided: true },
                react_1["default"].createElement(semantic_ui_react_1.Item, { style: { position: 'relative' } },
                    react_1["default"].createElement(semantic_ui_react_1.Label, { style: { position: 'absolute' }, color: 'orange', ribbon: 'right' }, "Host"),
                    react_1["default"].createElement(semantic_ui_react_1.Image, { size: 'tiny', src: '/assets/user.png' }),
                    react_1["default"].createElement(semantic_ui_react_1.Item.Content, { verticalAlign: 'middle' },
                        react_1["default"].createElement(semantic_ui_react_1.Item.Header, { as: 'h3' },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "#" }, "Bob")),
                        react_1["default"].createElement(semantic_ui_react_1.Item.Extra, { style: { color: 'orange' } }, "Following"))),
                react_1["default"].createElement(semantic_ui_react_1.Item, { style: { position: 'relative' } },
                    react_1["default"].createElement(semantic_ui_react_1.Image, { size: 'tiny', src: '/assets/user.png' }),
                    react_1["default"].createElement(semantic_ui_react_1.Item.Content, { verticalAlign: 'middle' },
                        react_1["default"].createElement(semantic_ui_react_1.Item.Header, { as: 'h3' },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "#" }, "Tom")),
                        react_1["default"].createElement(semantic_ui_react_1.Item.Extra, { style: { color: 'orange' } }, "Following"))),
                react_1["default"].createElement(semantic_ui_react_1.Item, { style: { position: 'relative' } },
                    react_1["default"].createElement(semantic_ui_react_1.Image, { size: 'tiny', src: '/assets/user.png' }),
                    react_1["default"].createElement(semantic_ui_react_1.Item.Content, { verticalAlign: 'middle' },
                        react_1["default"].createElement(semantic_ui_react_1.Item.Header, { as: 'h3' },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "#" }, "Sally"))))))));
};
