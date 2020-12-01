"use strict";
exports.__esModule = true;
exports.ActivityDetailedChat = void 0;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
exports.ActivityDetailedChat = function () {
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(semantic_ui_react_1.Segment, { textAlign: 'center', attached: 'top', inverted: true, color: 'teal', style: { border: 'none' } },
            react_1["default"].createElement(semantic_ui_react_1.Header, null, "Chat about this event")),
        react_1["default"].createElement(semantic_ui_react_1.Segment, { attached: true },
            react_1["default"].createElement(semantic_ui_react_1.Comment.Group, null,
                react_1["default"].createElement(semantic_ui_react_1.Comment, null,
                    react_1["default"].createElement(semantic_ui_react_1.Comment.Avatar, { src: '/assets/user.png' }),
                    react_1["default"].createElement(semantic_ui_react_1.Comment.Content, null,
                        react_1["default"].createElement(semantic_ui_react_1.Comment.Author, { as: 'a' }, "Matt"),
                        react_1["default"].createElement(semantic_ui_react_1.Comment.Metadata, null,
                            react_1["default"].createElement("div", null, "Today at 5:42PM")),
                        react_1["default"].createElement(semantic_ui_react_1.Comment.Text, null, "How artistic!"),
                        react_1["default"].createElement(semantic_ui_react_1.Comment.Actions, null,
                            react_1["default"].createElement(semantic_ui_react_1.Comment.Action, null, "Reply")))),
                react_1["default"].createElement(semantic_ui_react_1.Comment, null,
                    react_1["default"].createElement(semantic_ui_react_1.Comment.Avatar, { src: '/assets/user.png' }),
                    react_1["default"].createElement(semantic_ui_react_1.Comment.Content, null,
                        react_1["default"].createElement(semantic_ui_react_1.Comment.Author, { as: 'a' }, "Joe Henderson"),
                        react_1["default"].createElement(semantic_ui_react_1.Comment.Metadata, null,
                            react_1["default"].createElement("div", null, "5 days ago")),
                        react_1["default"].createElement(semantic_ui_react_1.Comment.Text, null, "Dude, this is awesome. Thanks so much"),
                        react_1["default"].createElement(semantic_ui_react_1.Comment.Actions, null,
                            react_1["default"].createElement(semantic_ui_react_1.Comment.Action, null, "Reply")))),
                react_1["default"].createElement(semantic_ui_react_1.Form, { reply: true },
                    react_1["default"].createElement(semantic_ui_react_1.Form.TextArea, null),
                    react_1["default"].createElement(semantic_ui_react_1.Button, { content: 'Add Reply', labelPosition: 'left', icon: 'edit', primary: true }))))));
};
