import React, {useState} from "react";
import {Box} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import HardwareIcon from "@mui/icons-material/Hardware";

const MintNftButton = ({mintNft, imagePath}) => {
    const [loading, setLoading] = useState(false);

    return (<Box sx={{m: 0, p: 0, backgroundColor: 'white', borderRadius: '4px'}}>
        <LoadingButton loading={loading} variant="contained"
                       onClick={() => {
                           setLoading(true);
                           mintNft(imagePath)
                           setLoading(false);
                       }}><HardwareIcon/></LoadingButton>
    </Box>);
}

export default MintNftButton;