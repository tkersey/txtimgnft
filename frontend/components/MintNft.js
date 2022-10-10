import React from "react";
import SignInButton from "./SignIn";

const MintNft = (isSignedIn, signIn, mintNft) => {
    return !isSignedIn ? <SignInButton onClick={signIn}/> : <button onClick={mintNft}>Mint NFT</button>;
}
export default MintNft;