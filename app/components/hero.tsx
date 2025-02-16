'use client'

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Hero() {
 
return <section className="max-w-4xl mx-auto text-center px-4 py-16">
<h1 className="text-4xl md:text-6xl font-bold mb-4">
  Discover & Collect
  <br />
  Extraordinary NFTs
</h1>
<p className="text-gray-400 mb-8">
  Enter the world of digital art and collectibles. Explore unique NFTs created by artists worldwide.
</p>
<div className="flex gap-4 justify-center">
  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
    Start Creating
  </Button>
  <Button  className="gap-2 bg-gradient-to-r from-pink-300 to-purple-200 hover:from-pink-600 hover:to-purple-600">
    <Play className="w-4 h-4" /> Watch Demo
  </Button>
</div>
</section>

}