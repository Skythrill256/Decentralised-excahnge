import { ethers } from "ethers";
import CustomTokenABI from './CustomToken.json'
import CustomDexABI from './CustomDex.json'

const contractAddress: string = "fun"

export const tokenContract = async (address: string): Promise<ethers.Contract | undefined> => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const {ethereum} = window
  if(ethereum){
    const signer = provider.getSigner()
    const contractReader = new ethers.Contract(address, CustomTokenABI.abi, signer)
    return contractReader
  }
}

export const contract = async (): Promise<ethers.Contract | undefined> =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const {ethereum} = window
    if (ethereum) {
      const signer = provider.getSigner()
      const contractReader = new ethers.Contract(contractAddress, CustomDexABI.abi, signer)
    return contractReader
    }
}
