"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navigable = (function () {
    function Navigable(container, pathTo) {
        if (container === void 0) { container = {}; }
        if (pathTo === void 0) { pathTo = []; }
        this.container = container;
        this.pathTo = pathTo;
    }
    Navigable.prototype.item = function (index) {
        return new Navigable({}, this.getPathToChild(index));
    };
    Navigable.prototype.to = function (path) {
        return new Navigable(this.container[path], this.getPathToChild(path));
    };
    Navigable.prototype.getPath = function () {
        return this.pathTo;
    };
    Navigable.prototype.getPathToChild = function (pathSegment) {
        var newPath = this.pathTo.concat([pathSegment]);
        return newPath;
    };
    return Navigable;
}());
exports.Navigable = Navigable;
