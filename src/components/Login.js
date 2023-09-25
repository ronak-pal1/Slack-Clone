import { Button } from "@mui/material"
import styled from "styled-components"
import { auth, provider } from "../firebase";


const Login = () => {

    const signIn =(e) => {
        e.preventDefault();

        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://www.vectorlogo.zone/logos/slack/slack-ar21.png" alt="" />

                <h3>
                    Sign in to RP Community
                </h3>
                <p>RP.slack.com</p>

                <Button onClick={signIn}>Sign in with Google</Button>

            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;

`

const LoginInnerContainer = styled.div`
    padding: 100px;
    background-color:white;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24);
    >img{
        width: 350px;
    }
    >button{
        margin-top: 30px;
    }
`