import { BigNumber, ethers } from "ethers";

export const toEth = (amount: string) => {
	return ethers.utils.formatEther(amount);
};

export const toWei = (amount: string) => {
	return ethers.utils.parseEther(amount);
};
