"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFunction = void 0;
const asyncFunction = (Func) => (req, res, next) => {
    Promise.resolve(Func(req, res, next)).catch(next);
};
exports.asyncFunction = asyncFunction;
