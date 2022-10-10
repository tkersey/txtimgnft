import {Button} from "@mui/material";

const SignOutButton = ({accountId, onClick}) => {
    return <Button variant="contained" onClick={onClick}>Sign out {accountId}</Button>
}

export default SignOutButton;
