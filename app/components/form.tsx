
'use client'
import { account, walletClient } from '@/config'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState  , useEffect} from "react";

// import {uuid} from 'uuid'
import { publicClient } from '@/config';
export default function MintForm(){
  
  const [form, setForm] = useState({ name: "", imgUrl: "" , description : "" });

    const [isOpen ,setIsOpen] = useState(false)

  useEffect(()=>{
    async function switchfn(){

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xAA36A7" }], // Sepolia (11155111 in hex)
      });
    }
    switchfn()
  }, [isOpen])
    function getRandomInt(min : number = 1, max : number = 1000000) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const submit = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const {name , imgUrl , description} = form
      const tokenId = getRandomInt();
  
          const metadataUrl = JSON.stringify({
            name , description , imgUrl
          })
         
          if (!name && !imgUrl && !description){
            throw new Error("Please provide all the details required")
          }
      try {
        const { request } = await publicClient.simulateContract({
          address: '0x743F49311A82fe72eb474c44e78Da2A6e0AE951c',
          abi : [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"checkId","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"metadataUrl","type":"string"}],"name":"mint","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}],
          functionName: 'mint',
          args: [BigInt(tokenId) , metadataUrl ],
          account  , 
          
        })
        
        const txHash =  await walletClient.writeContract(request)
        
        const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });

        if (receipt.status == 'success'){
          setIsOpen(true)

        }
          
          
      } catch (error) {
        console.log('failed ' , error);
        alert('failed to fulfil transaction')
      }
        

        
    }
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
      setForm({...form , [e.target.name] : e.target.value})
    }


    useEffect(()=>{
    console.log('is open is '  , isOpen)
    }, [isOpen])
    return   <>
    
     <section className="max-w-2xl mx-auto p-4">
    <Card className="bg-[#11131a] border-gray-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Mint Your NFT</h2>
        <div className="space-y-4">
          <form  className="space-y-4" onSubmit={submit} >

          <div>
            <label className="block text-sm mb-2 text-gray-400">NFT Name</label>
            <Input name= 'name' className="bg-[#1a1d28] border-gray-800" placeholder="Enter NFT name" onChange={handleChange}/>
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-400">Description</label>
            <Input onChange={handleChange} name='description' className="bg-[#1a1d28] border-gray-800 min-h-[100px]" placeholder="Describe your NFT" />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-400">Image URL</label>
            <Input onChange={handleChange} className="bg-[#1a1d28] border-gray-800" placeholder="Enter image URL" name="imgUrl"/>
          </div>
          <Button
            type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
            Mint NFT
          </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  </section>

      {/* the dialog box */}
      <Dialog open = {isOpen} onOpenChange={setIsOpen}>
          <DialogTitle> </DialogTitle>
          <DialogContent className="bg-gray-900 border border-gray-800 p-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-green-500 mb-2">NFT Minted Successfully!</h2>
              <p className="text-gray-400 text-sm mb-6">Your NFT has been created and added to your collection</p>
  
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mint%20Success-ujhaEiVy50Bn9WdfThnLKCm2zalORd.png"
                  alt="Minted NFT Preview"
                  width={400}
                  height={300}
                  className="w-full aspect-video object-cover"
                />
              </div>
  
              <div className="text-left space-y-2 mb-6">
                <p className="text-sm text-gray-400">NFT Name</p>
                <p className="font-medium">Celestial Harmony #004</p>
                <p className="text-sm text-gray-400">Description</p>
                <p className="text-sm text-gray-300">A mesmerizing blend of cosmic elements and digital artistry</p>
                <p className="text-sm text-gray-400">NFT ID</p>
                <p className="font-mono text-sm text-purple-400">#8F3E2A1</p>
              </div>
  
              <div className="flex gap-4">
                <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800">
                  Share
                </Button>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Mint Another</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      {/* end of dialog box */}
    </> 
   
}