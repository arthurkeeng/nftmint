import * as React from 'react'
import {  useConnect } from 'wagmi'

export function WalletOptions() {
    const [showOptions, setShowOptions] = React.useState(false);
  const { connectors, connect } = useConnect()

    return <div className="flex flex-col space-y-2 relative">
        {!showOptions ? (
        <button
          onClick={() => setShowOptions(true)}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Connect Wallet
        </button>
      ) : (
        // Wallet Options (Appear After Clicking Connect)
        <div className="absolute top-full text-center mt-2 w-auto px-2 py-2 shadow-lg rounded-lg border border-gray-200 -left-40">
        <div className="flex flex-col space-y-2 ">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
            >
              {connector.name}
            </button>
          ))}
  </div>
          <button onClick={() => setShowOptions(false)} className='pt-2 text-center items-center'>
            <span>
               X  
            </span>
            </button>
  </div>
  )

    }
    </div>
}
