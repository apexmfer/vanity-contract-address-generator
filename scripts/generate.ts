
import {Wallet, utils} from 'ethers'
 
function genWallet(){


    let newWallet = Wallet.createRandom()

    const transactionCount = 0 
    
    const futureAddress = utils.getContractAddress({ 
        from: newWallet.address,
        nonce: transactionCount
      })

    return {
        wallet: newWallet,
        futureAddress: futureAddress
    }

}

function init(){

    console.log('Searching for a match...')
 
    let computed 
    while(true){

        computed = genWallet();

        if(computed.futureAddress.startsWith("0x00000")){ 
            break; 
        }
    }

    console.log('found a match ', JSON.stringify(computed.wallet.privateKey))

}

init()
