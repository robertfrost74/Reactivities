"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var ScrollToTop = function (_a) {
    var children = _a.children, pathname = _a.location.pathname;
    react_1.useEffect(function () {
        window.scrollTo(0, 0);
    }, [pathname]);
    return children;
};
exports["default"] = react_router_dom_1.withRouter(ScrollToTop);
