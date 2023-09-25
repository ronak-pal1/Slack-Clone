import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { auth } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import Login from './components/Login'
import { ClimbingBoxLoader } from 'react-spinners';

const override = {
    display: "block",
    margin:"0 auto",
}

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading)
  {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://www.vectorlogo.zone/logos/slack/slack-ar21.png" alt="" />
          
          <ClimbingBoxLoader cssOverride={override}/>

        </AppLoadingContents>
      </AppLoading>
    )
  }
  
  return (
    <div className="app">
      <Router>
        {!user ? <Login /> : (

        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />}/>                
            </Routes>
          </AppBody>
        </>

        )}
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
      display: flex;
      height: 100vh;
`

const AppLoading = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const AppLoadingContents = styled.div`
    padding: 100px;
    background-color:white;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24);
    >img{
        width: 350px;
    }
`