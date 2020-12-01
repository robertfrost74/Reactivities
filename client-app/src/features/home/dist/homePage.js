"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var semantic_ui_react_1 = require("semantic-ui-react");
var HomePage = function () {
    return (react_1["default"].createElement(semantic_ui_react_1.Segment, { inverted: true, textAlign: 'center', vertical: true, className: 'masthead' },
        react_1["default"].createElement(semantic_ui_react_1.Container, { text: true },
            react_1["default"].createElement(semantic_ui_react_1.Header, { as: 'h1', inverted: true },
                react_1["default"].createElement(semantic_ui_react_1.Image, { size: 'massive', src: '/assets/logo.png', alt: 'logo', style: { marginBottom: 12 } }),
                "Reactivities"),
            react_1["default"].createElement(semantic_ui_react_1.Header, { as: 'h2', inverted: true, content: 'Welcome to Reactivities' }),
            react_1["default"].createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: '/activities', size: 'huge', inverted: true }, "Take me to the activities!"))));
};
exports["default"] = HomePage;
