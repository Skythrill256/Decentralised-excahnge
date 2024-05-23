"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllHistory = exports.increaseAllowance = exports.getTokenAddress = exports.getTokenBalance = exports.swapTokenToToken = exports.swapTokenToEth = exports.hasValidAllowance = exports.swapEthToToken = void 0;
var ethers_1 = require("ethers");
var contract_1 = require("./contract");
var utils_1 = require("./utils");
var console_1 = require("console");
var contractAddress = "fun";
var swapEthToToken = function (tokenName, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var tx, contractObj, data, reciept, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                tx = { value: (0, utils_1.toWei)(amount) };
                return [4 /*yield*/, (0, contract_1.contract)()];
            case 1:
                contractObj = _a.sent();
                if (!contractObj) {
                    console.error('Contract object is undefined');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contractObj.swapToEth(tokenName, tx)];
            case 2:
                data = _a.sent();
                return [4 /*yield*/, data.wait()];
            case 3:
                reciept = _a.sent();
                return [2 /*return*/, reciept];
            case 4:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.swapEthToToken = swapEthToToken;
var hasValidAllowance = function (owner, tokenName, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var contractObj, address, tokenContractObj, data, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, (0, contract_1.contract)()];
            case 1:
                contractObj = _a.sent();
                if (!contractObj) {
                    console.error('Contract object is undefined');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contractObj.getTokenAddress(tokenName)];
            case 2:
                address = _a.sent();
                return [4 /*yield*/, (0, contract_1.tokenContract)(address)];
            case 3:
                tokenContractObj = _a.sent();
                if (!tokenContractObj) {
                    console.error('Token contract object is undefined');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, tokenContractObj.allowance(owner, contractAddress)];
            case 4:
                data = _a.sent();
                result = ethers_1.BigNumber.from(data.toStrng()).gte(ethers_1.BigNumber.from((0, utils_1.toWei)(amount)));
                return [2 /*return*/, result];
            case 5:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.hasValidAllowance = hasValidAllowance;
var swapTokenToEth = function (tokenName, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var contractObj, data, reciept, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, (0, contract_1.contract)()];
            case 1:
                contractObj = _a.sent();
                if (!contractObj) {
                    console.error("Contract object is undefined");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contractObj.swapTokenToEth(tokenName, (0, utils_1.toWei)(amount))];
            case 2:
                data = _a.sent();
                return [4 /*yield*/, data.wait()];
            case 3:
                reciept = _a.sent();
                return [2 /*return*/, reciept];
            case 4:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.swapTokenToEth = swapTokenToEth;
var swapTokenToToken = function (srcToken, destToken, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var contractObj, data, reciept, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, (0, contract_1.contract)()];
            case 1:
                contractObj = _a.sent();
                if (!contractObj) {
                    console.error(console_1.error);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contractObj.swapTokenToToken(srcToken, destToken, amount)];
            case 2:
                data = _a.sent();
                return [4 /*yield*/, data.wait()];
            case 3:
                reciept = _a.sent();
                return [2 /*return*/, reciept];
            case 4:
                e_4 = _a.sent();
                console.log(e_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.swapTokenToToken = swapTokenToToken;
var getTokenBalance = function (tokenName, address) { return __awaiter(void 0, void 0, void 0, function () {
    var contractObj, balance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, contract_1.contract)()];
            case 1:
                contractObj = _a.sent();
                if (!contractObj) {
                    console.error(console_1.error);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contractObj.getBalance(tokenName, address)];
            case 2:
                balance = _a.sent();
                return [2 /*return*/, balance];
        }
    });
}); };
exports.getTokenBalance = getTokenBalance;
var getTokenAddress = function (tokenName) { return __awaiter(void 0, void 0, void 0, function () {
    var contractObj, tokenAddress, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, (0, contract_1.contract)()];
            case 1:
                contractObj = _a.sent();
                if (!contractObj) {
                    console.error(console_1.error);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contractObj.getTokenAddress(tokenName)];
            case 2:
                tokenAddress = _a.sent();
                return [2 /*return*/, tokenAddress];
            case 3:
                e_5 = _a.sent();
                console.log(console_1.error);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTokenAddress = getTokenAddress;
var increaseAllowance = function (tokenName, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var contractObj, address, tokenContractObj, data, receipt, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, (0, contract_1.contract)()];
            case 1:
                contractObj = _a.sent();
                if (!contractObj) {
                    console.error(console_1.error);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contractObj.getTokenAddress(tokenName)];
            case 2:
                address = _a.sent();
                return [4 /*yield*/, (0, contract_1.tokenContract)(address)];
            case 3:
                tokenContractObj = _a.sent();
                if (!tokenContractObj) {
                    console.error(console_1.error);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contract_1.tokenContract.approve(contractAddress, (0, utils_1.toWei)(amount))];
            case 4:
                data = _a.sent();
                return [4 /*yield*/, data.wait()];
            case 5:
                receipt = _a.sent();
                return [2 /*return*/, receipt];
            case 6:
                e_6 = _a.sent();
                console.log(console_1.error);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.increaseAllowance = increaseAllowance;
var getAllHistory = function () { return __awaiter(void 0, void 0, void 0, function () {
    var contractObj, getAllHistory_1, historyTransaction, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, (0, contract_1.contract)()];
            case 1:
                contractObj = _a.sent();
                if (!contractObj) {
                    console.error(console_1.error);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, contractObj.getAllHistory()];
            case 2:
                getAllHistory_1 = _a.sent();
                historyTransaction = getAllHistory_1.map(function (history) { return ({
                    historyId: history.historyId.toNumber(),
                    tokenA: history.tokenA,
                    tokenB: history.tokenB,
                    inputValue: (0, utils_1.toEth)(history.inputValue),
                    outputValue: (0, utils_1.toEth)(history.outputValue),
                    userAddress: history.userAddress,
                }); });
                return [2 /*return*/, historyTransaction];
            case 3:
                e_7 = _a.sent();
                console.log(console_1.error);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAllHistory = getAllHistory;
var towei = function (amount) {
    var toWei = ethers_1.ethers.utils.parseUnits(amount.toString());
    return toWei;
};
