This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
Next js was used for this project and is deployed to vercel

## Database used

Mongodb database was used for this assignment. 
Mongoose was the ORM used to overlay user and database


## Deploy on Vercel - Frontend link

THE FRONTEND IS DEPLOYED TO VERCE AT 
- [FRONTEND](https://nftminter-dun.vercel.app)
- 
## Deploy on render - Api link
- api route https://nftserver-m3nr.onrender.com

## Minimalistic backend repo link
[backend repo](https://github.com/arthurkeeng/nftserver)

## Loom Video Explanation
[loom video - frontend ](https://www.loom.com/share/f07eb5f55fbe401dbb3f7565f37265ed?sid=d17d08e3-ddf7-4272-8131-4b752472d39c)

[loom video -backend](https://www.loom.com/share/16603a2ca3de40f4a6b5d20e98497d24?sid=13e1be6f-95bc-4b3f-b8c0-1ca0d6baf5cc)

## Api routes

FOR LACK OF TIME , ONLY TWO API ROUTES WERE IMPLEMENTED
  - /api/nfts    - this routes for both GET and POST requests. 
      The get request on this route gets all the nfts
      The post request stores the nft metadata on mongodb
