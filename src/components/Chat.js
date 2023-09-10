import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";


const Chat = () => {

    const roomId = useSelector(selectRoomId);
    
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#Room name</strong>
                    </h4>
                    <StarBorderOutlined />
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </HeaderRight>
            </Header>

            <ChatMessages>

            </ChatMessages>

            <ChatInput channelId={roomId}>

            </ChatInput>
        </ChatContainer>
    );
}

export default Chat;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    margin-top: 50px;                                                                                                                                                                                                                                                                                                                                                                                                               
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;


    > h4{
        text-transform: lowercase;
    }

    > .MuiSvgIcon-root{
        margin-left: 10px;
        font-size: 18px;
    }
`

const HeaderRight = styled.div`
   > p{
        display: flex;
        align-items: center;
        font-size: 14px;
   }

   > p > .MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size: 16px;
   }
`

const ChatMessages = styled.div`

`

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`