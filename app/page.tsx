import { Card, CardContent } from "@/components/ui/card"

import Image from "next/image"
import Header from "./components/header"
import Hero from "./components/hero"
import MintForm from "./components/form"

export default function Page() {
 

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
        <Hero/>

      {/* Mint Form */}
      <MintForm/>

      {/* NFT Gallery */}
      <section className="max-w-6xl mx-auto p-4 mb-16">
        <h2 className="text-2xl font-bold mb-6">Your NFT Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-[#11131a] border-gray-800 overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="aspect-video bg-gradient-to-r from-pink-500 to-purple-500" />
              <div className="p-4">
                <h3 className="font-bold mb-1">Cosmic Dreams #001</h3>
                <p className="text-sm text-gray-400">A journey through digital dimensions</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#11131a] border-gray-800 overflow-hidden">
            <CardContent className="p-0 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mint%20NFT-c2g3fnEJ2wQyMlyWqxQRDhgMqTEncf.png"
                alt="Neo Genesis"
                width={400}
                height={225}
                className="aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-1">Neo Genesis #002</h3>
                <p className="text-sm text-gray-400">Digital evolution manifested</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#11131a] border-gray-800 overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-300" />
              <div className="p-4">
                <h3 className="font-bold mb-1">Digital Horizon #003</h3>
                <p className="text-sm text-gray-400">Where reality meets digital art</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

