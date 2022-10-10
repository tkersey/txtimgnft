txtimgnft
==================

This app was initialized with [create-near-app] and modified to source images from Dall-e 2 searches and mint them as NFTs on the NEAR blockchain.

Quick Start
===========
1. `npm install`
1. `cp frontend/env.example frontend/.env`
    * update the `.env` by changing `CONTRACT_NAME=txtimgnft.<YOUR-ACCOUNT>.testnet`
1.  A Bearer Token is needed from the [Dall-e website](https://labs.openai.com) app to use for the API.
    1. Open https://labs.openai.com/ and Right Click to inspect. Go to network. You may need to refresh the page first.
       ![](https://user-images.githubusercontent.com/54872601/184540063-596133d6-c259-44a5-bbc3-df471636e822.png)
    1. Input something and click generate.
       ![](https://user-images.githubusercontent.com/54872601/184540072-7495c659-6269-4aae-a9c6-8425cb824277.png)
    1. Find the Tasks, and scroll down to see your token.
       ![](https://user-images.githubusercontent.com/54872601/184540087-0b78ebb8-014a-47f7-b178-eec9a01b89eb.png)
    1. Copy everything after `authorization: Bearer ` (usually starts with `sess-`) and add it to your `frontend/.env` like `BEARER_TOKEN=<YOUR-BEARER-TOKEN>`
1. `npm run build`
1. `npm run deploy`
1. `brew install direnv`
1. `cp envrc.example .envrc`
    * update the `.envrc` by changing `BEARER_TOKEN=<YOUR-BEARER-TOKEN>`
    * update the `.envrc` by changing `CONTRACT_NAME=txtimgnft.<YOUR-ACCOUNT>.testnet`
    * `direnv allow`
1. initialize the contract
    `near call $CONTRACT_NAME init '{"owner_id": "'$CONTRACT_NAME'"}' --accountId $CONTRACT_NAME`
1. `npm start`