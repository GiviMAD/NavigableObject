"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navigable = /** @class */ (function () {
    function Navigable(pathTo) {
        if (pathTo === void 0) { pathTo = []; }
        this.pathTo = pathTo;
    }
    Navigable.prototype.to = function (path) {
        return new Navigable(this.pathTo.concat([path]));
    };
    Navigable.prototype.getPath = function () {
        return this.pathTo;
    };
    return Navigable;
}());
exports.Navigable = Navigable;
