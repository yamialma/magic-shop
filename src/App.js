import './App.css';
import React from 'react';
import { ButtonAppBar } from '../src/components/NavBar/NavBar';
import { ItemListContainer } from '../src/components/ItemList/ItemList';
import { ItemCount } from './components/ItemCount/ItemCount';

const App = () => {

  return <>
  
    <ButtonAppBar />
    <ItemListContainer />
    <ItemCount />
  </>
}

export default App;
