import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { enterRoom } from "../features/appSlice";
import styled from 'styled-components';

const SidebarOption = ({Icon, title, addChannelOption, id}) =>{
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt("Please entet the channel name");

        if(channelName){
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if(id)
        {
            dispatch(enterRoom({
                roomId: id,
            }))
        }
    }   

    return (
        <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize="small" style={{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    >h3{
        font-weight: 500;
    }
`



const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`
