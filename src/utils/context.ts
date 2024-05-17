import { BigNumber,ethers } from "ethers"
import { contract,tokenContract } from "./contract"
import {toEth, toWei} from './utils'

const contractAddress: string = "fun"

export const swapToEth = async (tokenName: string , amount: string): Promise<void> =>{
  try{
    let tx = {value: toWei(amount)}
    const contractObj = await contract()
 if (!contractObj) {
      console.error('Contract object is undefined');
      return;
    }
    
    const data = await contractObj.swapToEth(tokenName,tx)
    const reciept = await data.wait()
  }
  catch(e){
    console.log(e)
  }
}

export const hasValidAllowance = async (owner: string , tokenName: string ,amount: string): Promise<void | boolean> =>{

  try {
    const contractObj = await contract()
    if (!contractObj) {
      console.error('Contract object is undefined');
      return ;
    }
    const address = await contractObj.getTokenAddress(tokenName)
    const tokenContractObj = await tokenContract(address)
    if (!tokenContractObj) {
      console.error('Token contract object is undefined');
      return ;
    }
    const data = await tokenContractObj.allowance(owner,contractAddress)
    const result = BigNumber.from(data.toStrng()).gte(BigNumber.from(toWei(amount)))
    return result
  } catch (e) {
    console.log(e)
  }
}
