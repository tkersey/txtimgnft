import {Button} from "@mui/material";

const SignInButton = ({onClick}) => {
    return <Button variant="contained" onClick={onClick}>Sign in with NEAR Wallet</Button>
}

export default SignInButton;
