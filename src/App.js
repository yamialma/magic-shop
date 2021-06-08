import './App.css';
import React from 'react';
import { ButtonAppBar } from '../src/components/NavBar/NavBar';
import { ItemListContainer } from '../src/components/ItemList/ItemList';

const App = () => {

  return <>
  
    <ButtonAppBar />
    <ItemListContainer />
  </>
}

export default App;
