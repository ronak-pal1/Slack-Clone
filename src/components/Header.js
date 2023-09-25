import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";


const Header = () =>{

    const [user] = useAuthState(auth);

    return(
        <HeaderMain>
            <HeaderLeft>
                <HeaderAvatar onClick={() => auth.signOut()} alt={user?.displayName} src={user?.photoURL}></HeaderAvatar>
                <AccessTime className="access__icon" />
            </HeaderLeft>

            <HeaderMiddle>
                <Search />
                <input placeholder="Search for group"></input>
            </HeaderMiddle>

            <HeaderRight>
                <HelpOutline />
            </HeaderRight>

        </HeaderMain>
    );
}

const HeaderMain = styled.div`
    position:fixed;
    width: 100%;
    background-color: #3F0F3F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.3;
    justify-content: space-between;

    > .avatar{
        cursor: pointer;
    }

    > .access__icon{
        color: white;
        cursor: pointer;
        margin-right: 30px;
    }
`

const HeaderMiddle = styled.div`

    display: flex;
    flex: 0.4;
    align-items: center;
    border: 1px solid whitesmoke;
    border-radius: 6px;
    text-align: center;
    padding: 0 50px;

    > .MuiSvgIcon-root{
        color: white;
    }

    ::placeholder{
        color: whitesmoke;
    }

    > input{
        color: whitesmoke;
        width: 100%;
        border: none;
        outline: none;
        background: transparent;
        margin-left: 10px;
        text-align: center;
    }

`

const HeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;
    margin-right: 30px;

    > .MuiSvgIcon-root{
        color: white;
        margin-left: auto;
        margin-right: 20px;
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    margin-left: 30px;
    :hover{
        opacity: 0.8;
    }
`

export default Header;