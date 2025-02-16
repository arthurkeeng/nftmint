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

## Api routes

FOR LACK OF TIME , ONLY TWO API ROUTES WERE IMPLEMENTED
  - /api/nfts    - this routes for both get and post requests. 
      The get request on this route gets all the nfts
      The post request stores the nft metadata on mongodb
