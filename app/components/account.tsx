import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (<div className='text-center'>
  <div className='px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition'>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address.slice(0, 6)}...${address.slice(-4)}</div>}
    </div>
      <button 
      className='px-3 py-1 my-2 bg-blue-300 text-white font-medium rounded-lg hover:bg-blue-700 transition'
      onClick={() => disconnect()}>Disconnect</button>
  </div>
    
  )
}