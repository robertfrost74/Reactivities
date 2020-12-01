"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var react_1 = require("react");
var agent_1 = require("../api/agent");
mobx_1.configure({ enforceActions: 'always' });
var ActivityStore = /** @class */ (function () {
    function ActivityStore() {
        var _this = this;
        this.activityRegistry = new Map();
        this.activity = null;
        this.loadingInitial = false;
        this.submitting = false;
        this.target = '';
        this.loadActivities = function () { return __awaiter(_this, void 0, void 0, function () {
            var activities_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingInitial = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, agent_1["default"].Activities.list()];
                    case 2:
                        activities_1 = _a.sent();
                        mobx_1.runInAction(function () {
                            activities_1.forEach(function (activity) {
                                activity.date = activity.date.split('.')[0];
                                _this.activityRegistry.set(activity.id, activity);
                            });
                            _this.loadingInitial = false;
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        mobx_1.runInAction(function () {
                            _this.loadingInitial = false;
                        });
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.loadActivity = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var activity, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        activity = this.getActivity(id);
                        if (!activity) return [3 /*break*/, 1];
                        this.activity = activity;
                        return [3 /*break*/, 5];
                    case 1:
                        this.loadingInitial = true;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, agent_1["default"].Activities.details(id)];
                    case 3:
                        activity = _a.sent();
                        mobx_1.runInAction(function () {
                            _this.activity = activity;
                            _this.loadingInitial = false;
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        mobx_1.runInAction(function () {
                            _this.loadingInitial = false;
                        });
                        console.log(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.clearActivity = function () {
            _this.activity = null;
        };
        this.getActivity = function (id) {
            return _this.activityRegistry.get(id);
        };
        this.createActivity = function (activity) { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitting = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, agent_1["default"].Activities.create(activity)];
                    case 2:
                        _a.sent();
                        mobx_1.runInAction(function () {
                            _this.activityRegistry.set(activity.id, activity);
                            _this.submitting = false;
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        mobx_1.runInAction(function () {
                            _this.submitting = false;
                        });
                        console.log(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.editActivity = function (activity) { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitting = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, agent_1["default"].Activities.update(activity)];
                    case 2:
                        _a.sent();
                        mobx_1.runInAction(function () {
                            _this.activityRegistry.set(activity.id, activity);
                            _this.activity = activity;
                            _this.submitting = false;
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        mobx_1.runInAction(function () {
                            _this.submitting = false;
                        });
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.deleteActivity = function (event, id) { return __awaiter(_this, void 0, void 0, function () {
            var error_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitting = true;
                        this.target = event.currentTarget.name;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, agent_1["default"].Activities["delete"](id)];
                    case 2:
                        _a.sent();
                        mobx_1.runInAction(function () {
                            _this.activityRegistry["delete"](id);
                            _this.submitting = false;
                            _this.target = '';
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        mobx_1.runInAction(function () {
                            _this.submitting = false;
                            _this.target = '';
                        });
                        console.log(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        mobx_1.makeObservable(this, {
            activityRegistry: mobx_1.observable,
            activity: mobx_1.observable,
            loadingInitial: mobx_1.observable,
            submitting: mobx_1.observable,
            target: mobx_1.observable
        });
    }
    Object.defineProperty(ActivityStore.prototype, "activitiesByDate", {
        get: function () {
            return this.groupActivitiesByDate(Array.from(this.activityRegistry.values()));
        },
        enumerable: false,
        configurable: true
    });
    ActivityStore.prototype.groupActivitiesByDate = function (activities) {
        var sortedActivities = activities.sort(function (a, b) { return Date.parse(a.date) - Date.parse(b.date); });
        return Object.entries(sortedActivities.reduce(function (activities, activity) {
            var date = activity.date.split('T')[0];
            activities[date] = activities[date] ? __spreadArrays(activities[date], [activity]) : [activity];
            return activities;
        }, {}));
    };
    __decorate([
        mobx_1.computed
    ], ActivityStore.prototype, "activitiesByDate");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "loadActivities");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "loadActivity");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "clearActivity");
    return ActivityStore;
}());
exports["default"] = react_1.createContext(new ActivityStore());
