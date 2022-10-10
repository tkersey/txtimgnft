import React from "react";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import MintNftButton from "./MintNftButton";

const NftList = ({nfts, mintNft}) => {
    return (<ImageList sx={{width: '100%'}} cols={4} rows={1} rowHeight={250}>
        {nfts.map(({image_path}) => (<ImageListItem key={image_path}>
            <img
                src={image_path}
                srcSet={image_path}
                loading="lazy"
                alt="NFT"
            />
            <ImageListItemBar
                title={"Mint NFT?"}
                actionIcon={<MintNftButton mintNft={mintNft} imagePath={image_path}/>}
            />
        </ImageListItem>))}
    </ImageList>);
}

export default NftList;