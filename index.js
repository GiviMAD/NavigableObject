"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigable = void 0;
var Navigable = /** @class */ (function () {
    function Navigable(pathTo) {
        if (pathTo === void 0) { pathTo = []; }
        this.pathTo = pathTo;
    }
    Navigable.prototype.to = function (path) {
        return new Navigable(__spreadArray(__spreadArray([], this.pathTo, true), [path], false));
    };
    Navigable.prototype.getPath = function () {
        return __spreadArray([], this.pathTo, true);
    };
    return Navigable;
}());
exports.Navigable = Navigable;
