import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styled from "styled-components";


const Header = () =>{
    return(
        <HeaderMain>
            <HeaderLeft>
                <Avatar  className="avatar"/>
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
    top: 0;
    background-color: #3F0F3F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
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
    border-radius: 4px;
    padding: 10px;

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
    }

`

const HeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    justify-content: flex-end;

    > .MuiSvgIcon-root{
        color: white;
    }
`

export default Header;