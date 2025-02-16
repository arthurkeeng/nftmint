
import {  createConfig} from 'wagmi'
// import {sepolia} from 'wagmi/chains'
import {injected , metaMask , safe } from 'wagmi/connectors'

import { createPublicClient, createWalletClient, custom, http} from 'viem'
// import { privateKeyToAccount } from 'viem/accounts'
import { sepolia } from 'viem/chains'


declare module 'wagmi' {
    interface Register {
      config: typeof config
    }
  }

  
  export const publicClient = createPublicClient({
    chain: sepolia,
    transport: http()
  })

  
  export const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(window.ethereum!)
  })

  export const [account] = await walletClient.getAddresses()
console.log('the add' , account)
  export const config = createConfig({
    chains : [sepolia],
    transports : {
        [sepolia.id] : http()
    }, 
    connectors : [
        injected() , metaMask(), safe()
    ] , 
    
})