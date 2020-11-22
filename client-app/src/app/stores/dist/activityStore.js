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
exports.__esModule = true;
var mobx_1 = require("mobx");
var react_1 = require("react");
var agent_1 = require("../api/agent");
mobx_1.configure({ enforceActions: 'always' });
var ActivityStore = /** @class */ (function () {
    function ActivityStore() {
        var _this = this;
        this.activityRegistry = new Map();
        this.activities = [];
        this.loadingInitial = false;
        this.editMode = false;
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
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.createActivity = function (activity) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
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
                            _this.editMode = false;
                            _this.submitting = false;
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        mobx_1.runInAction(function () {
                            _this.submitting = false;
                        });
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.editActivity = function (activity) { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
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
                            _this.selectedActivity = activity;
                            _this.editMode = false;
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
        this.deleteActivity = function (event, id) { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
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
                        error_4 = _a.sent();
                        mobx_1.runInAction(function () {
                            _this.submitting = false;
                            _this.target = '';
                        });
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.openCreateForm = function () {
            _this.editMode = true;
            _this.selectedActivity = undefined;
        };
        this.openEditForm = function (id) {
            _this.selectedActivity = _this.activityRegistry.get(id);
            _this.editMode = true;
        };
        this.cancelSelectedActivity = function () {
            _this.selectedActivity = undefined;
        };
        this.cancelFormOpen = function () {
            _this.editMode = false;
        };
        this.selectActivity = function (id) {
            _this.selectedActivity = _this.activityRegistry.get(id);
            _this.editMode = false;
        };
    }
    Object.defineProperty(ActivityStore.prototype, "activitiesByDate", {
        get: function () {
            return Array.from(this.activityRegistry.values()).sort(function (a, b) { return Date.parse(a.date) - Date.parse(b.date); });
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        mobx_1.observable
    ], ActivityStore.prototype, "activityRegistry");
    __decorate([
        mobx_1.observable
    ], ActivityStore.prototype, "activities");
    __decorate([
        mobx_1.observable
    ], ActivityStore.prototype, "selectedActivity");
    __decorate([
        mobx_1.observable
    ], ActivityStore.prototype, "loadingInitial");
    __decorate([
        mobx_1.observable
    ], ActivityStore.prototype, "editMode");
    __decorate([
        mobx_1.observable
    ], ActivityStore.prototype, "submitting");
    __decorate([
        mobx_1.observable
    ], ActivityStore.prototype, "target");
    __decorate([
        mobx_1.computed
    ], ActivityStore.prototype, "activitiesByDate");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "loadActivities");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "createActivity");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "editActivity");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "deleteActivity");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "openCreateForm");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "openEditForm");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "cancelSelectedActivity");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "cancelFormOpen");
    __decorate([
        mobx_1.action
    ], ActivityStore.prototype, "selectActivity");
    return ActivityStore;
}());
exports["default"] = react_1.createContext(new ActivityStore());
