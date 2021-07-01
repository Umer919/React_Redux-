import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';

const AppContainer = styled.div`
 ${tw`
     w-full
    h-full
    flex
    flex-col
    justify-center
       

 `}`;


function App() {
  return <div className="align items-center">
   <AppContainer> <HomePage /> </AppContainer></div>
   
}

export default App;
