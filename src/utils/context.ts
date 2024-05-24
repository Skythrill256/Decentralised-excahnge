import { BigNumber, ethers } from "ethers";
import { contract, tokenContract } from "./contract";
import { toEth, toWei } from "./utils";
import { error } from "console";

const contractAddress: string = "fun";

export const swapEthToToken = async (
	tokenName: string,
	amount: string,
): Promise<void> => {
	try {
		let tx = { value: toWei(amount) };
		const contractObj = await contract();
		if (!contractObj) {
			console.error("Contract object is undefined");
			return;
		}

		const data = await contractObj.swapToEth(tokenName, tx);
		const reciept = await data.wait();
		return reciept;
	} catch (e) {
		console.log(e);
	}
};

export const hasValidAllowance = async (
	owner: string,
	tokenName: string,
	amount: string,
): Promise<void | boolean> => {
	try {
		const contractObj = await contract();
		if (!contractObj) {
			console.error("Contract object is undefined");
			return;
		}
		const address = await contractObj.getTokenAddress(tokenName);
		const tokenContractObj = await tokenContract(address);
		if (!tokenContractObj) {
			console.error("Token contract object is undefined");
			return;
		}
		const data = await tokenContractObj.allowance(owner, contractAddress);
		const result = BigNumber.from(data.toStrng()).gte(
			BigNumber.from(toWei(amount)),
		);
		return result;
	} catch (e) {
		console.log(e);
	}
};

export const swapTokenToEth = async (
	tokenName: string,
	amount: string,
): Promise<void> => {
	try {
		const contractObj = await contract();
		if (!contractObj) {
			console.error("Contract object is undefined");
			return;
		}
		const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));
		const reciept = await data.wait();
		return reciept;
	} catch (e) {
		console.log(e);
	}
};

export const swapTokenToToken = async (
	srcToken: string,
	destToken: string,
	amount: string,
): Promise<void> => {
	try {
		const contractObj = await contract();
		if (!contractObj) {
			console.error(error);
			return;
		}
		const data = await contractObj.swapTokenToToken(
			srcToken,
			destToken,
			amount,
		);
		const reciept = await data.wait();
		return reciept;
	} catch (e) {
		console.log(e);
	}
};

export const getTokenBalance = async (
	tokenName: string,
	address: string,
): Promise<void> => {
	const contractObj = await contract();
	if (!contractObj) {
		console.error(error);
		return;
	}
	const balance = await contractObj.getBalance(tokenName, address);
	return balance;
};

export const getTokenAddress = async (tokenName: string) => {
	try {
		const contractObj = await contract();
		if (!contractObj) {
			console.error(error);
			return;
		}
		const tokenAddress = await contractObj.getTokenAddress(tokenName);
		return tokenAddress;
	} catch (e) {
		console.log(error);
	}
};

export const increaseAllowance = async (
	tokenName: string,
	amount: string,
): Promise<void> => {
	try {
		const contractObj = await contract();
		if (!contractObj) {
			console.error(error);
			return;
		}
		const address = await contractObj.getTokenAddress(tokenName);
		const tokenContractObj = await tokenContract(address);
		if (!tokenContractObj) {
			console.error(error);
			return;
		}
		const data = await tokenContract.approve(contractAddress, toWei(amount));
		const receipt = await data.wait();
		return receipt;
	} catch (e) {
		console.log(error);
	}
};

export const getAllHistory = async (): Promise<
	| {
			historyId: number;
			tokenA: string;
			tokenB: string;
			inputValue: string;
			outputValue: string;
			userAddress: string;
	  }[]
	| void
> => {
	try {
		const contractObj = await contract();
		if (!contractObj) {
			console.error(error);
			return;
		}
		const getAllHistory = await contractObj.getAllHistory();
		const historyTransaction = getAllHistory.map(
			(history: {
				historyId: BigNumber;
				tokenA: string;
				tokenB: string;
				inputValue: string;
				outputValue: string;
				userAddress: string;
			}): {
				historyId: number;
				tokenA: string;
				tokenB: string;
				inputValue: string;
				outputValue: string;
				userAddress: string;
			} => ({
				historyId: history.historyId.toNumber(),
				tokenA: history.tokenA,
				tokenB: history.tokenB,
				inputValue: toEth(history.inputValue),
				outputValue: toEth(history.outputValue),
				userAddress: history.userAddress,
			}),
		);
		return historyTransaction;
	} catch (e) {
		console.log(error);
	}
};

const towei = (amount: string): BigNumber => {
	const toWei = ethers.utils.parseUnits(amount.toString());
	return toWei;
};
