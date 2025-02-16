'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { config } from "@/config";
import { WagmiProvider } from "wagmi";

export function WagmiProviderWrapper({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>

        {/* <RainbowKitProvider > */}
            {children}
            {/* </RainbowKitProvider> */}
        </QueryClientProvider>
      </WagmiProvider>
    );
  }