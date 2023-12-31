import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
import { useEffect, useRef } from "react";


const Chat = () => {

    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);

    const [roomDetails] = useDocument(roomId && db.collection("rooms").doc(roomId));

    const [roomMessage, loading] = useCollection(roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc"));
    

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomDetails && roomMessage && (
            <>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
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
                {roomMessage?.docs.map((doc) => {
                    const {message, timestamp, user, userImage} = doc.data();

                    return(
                        <Message 
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                        />
                    )
                }
                )}

                <ChatBottom ref={chatRef}/> {/* This is for the scrolling effect to the bottom when a new message comes in*/}
            </ChatMessages>

            <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId}>

            </ChatInput>
            </>
            )}
        </ChatContainer>
    );
}

export default Chat;


const ChatBottom = styled.div`
    padding-bottom: 200px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;                                                                                                                                                                                                                                                                                                                                                                                                              
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
    margin-top: 80px;
`