import 'regenerator-runtime/runtime';
import React, {useState} from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import styles from './styles.module.css'

import './assets/global.css';
import NftList from "./components/NftList";
import {Box, Container} from "@mui/material";
import {Dalle} from "./api/dalle";
import SignInButton from "./components/SignIn";
import SignOutButton from "./components/SignOut";

export default function App({isSignedIn, nearNft, wallet}) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const getDalle2 = async () => {
        if (query !== "") {
            setLoading(true);
            const dalle = new Dalle(process.env.BEARER_TOKEN);
            await dalle.generate(query)
                .then((generations) => {
                    setResults(generations.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    }

    const mintNft = (imagePath) => {
        const tokenId = `${query.split(' ').join()}${Date.now()}`;
        const metadata = {
            title: query, description: query, media: imagePath
        }
        const receiverId = wallet.accountId;
        nearNft.nftMint(tokenId, metadata, receiverId, []);
        console.log("Minting NFT with token_id: ", tokenId, metadata, receiverId);
    }

    return (<Container className={styles.html}
                       sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        {isSignedIn
            ? (<>
                <Box sx={{display: 'flex', justifyContent: 'center', width: '80%'}}>
                    <input
                        id="query"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Query"
                        style={{marginRight: '10px', width: '100%'}}
                    />
                    <Box sx={{m: 0, p: 0, backgroundColor: 'white', borderRadius: '4px'}}>
                        <LoadingButton loading={loading} variant="contained"
                                       onClick={getDalle2}>Generate</LoadingButton>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', width: '80%'}}>
                    <NftList nfts={results.map((result) => result.generation)} mintNft={mintNft}/>
                </Box>
                <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()}/>
            </>)
            : <SignInButton onClick={() => wallet.signIn()}/>
        }
    </Container>);
}
