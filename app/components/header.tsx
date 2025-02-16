'use client'
import { CuboidIcon as Cube } from "lucide-react"
import { WalletOptions } from "./walletOptions";
import { useAccount } from "wagmi";
import { Account } from "./account";

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}
export default function Header() {

return <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Cube className="w-6 h-6 text-purple-500" />
        </div>
        {/* <Button className="bg-pink-500 hover:bg-pink-600">Connect Wallet</Button> */}
        {/* <ConnectButton accountStatus="address" /> */}

        {/* <WalletOptions/> */}
        <ConnectWallet/>
</header>
}