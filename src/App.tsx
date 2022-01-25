import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Auth from './components/Auth/Auth';
import Landing from './components/Landing/Landing';
import NotFound from './components/NotFound/NotFound';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background-color: #F1F3F8;
  }
`;

export default function App() {

  return (
    <BrowserRouter> 
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/authorization" element={<Auth />} /> 
        
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  )
}