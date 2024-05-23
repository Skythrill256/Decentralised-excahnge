"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toWei = exports.toEth = void 0;
var ethers_1 = require("ethers");
var toEth = function (amount) {
    return ethers_1.ethers.utils.formatEther(amount);
};
exports.toEth = toEth;
var toWei = function (amount) {
    return ethers_1.ethers.utils.parseEther(amount);
};
exports.toWei = toWei;
