// React
import React from 'react';
import {createRoot} from 'react-dom/client';
import {CssBaseline, ThemeProvider} from "@mui/material";
import App from './App';
import theme from "./theme";

// NEAR
import {NEARNft} from './near/interface';
import {Wallet} from './near/wallet';

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({createAccessKeyFor: process.env.CONTRACT_NAME})

// Abstract the logic of interacting with the contract to simplify your flow
const nearNft = new NEARNft({contractId: process.env.CONTRACT_NAME, walletToUse: wallet});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Setup on page load
window.onload = async () => {
    const isSignedIn = await wallet.startUp()

    root.render(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App isSignedIn={isSignedIn} nearNft={nearNft} wallet={wallet}/>
        </ThemeProvider>
    );
}