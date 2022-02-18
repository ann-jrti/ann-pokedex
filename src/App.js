import './App.css';
import PokeList from './components/poke-list';
import PokeHeader from './components/poke-header';
import { getPokemonsFromApi } from './data/index';
import React, { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <main className="pokemon__cards">
        <PokeList></PokeList>
      </main>
    
    </div>
  );
}

export default App;
