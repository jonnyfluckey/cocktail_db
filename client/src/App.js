import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Image, Icon} from 'semantic-ui-react';
import Navbar from './Components/Shared/Navbar';
import RandomCocktail from './Components/RandomCocktail'


function App() {
  
  return (
    <>
    <Navbar/>
    <RandomCocktail />
    </>
  );
}

export default App;
