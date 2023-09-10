import { Button } from "@mui/material";
import { useRef } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/compat/app";


const ChatInput = ({channelName, channelId}) => {

    const inputRef = useRef(null); // getting the values of the input field when the user types in

    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId)
        {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "ronak paul",
            userImage: "",
        })

    }

    return (
        <ChatInputContainer>    
            <form>
                <input ref={inputRef} placeholder=" Message #ROOM"/>
                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`

    > form{
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button{
        display: none !important;
    }
`