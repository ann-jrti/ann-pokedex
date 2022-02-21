import './index.css'
import './App.css'
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/not-found';
import PokeHeader from './components/poke-header';
import PokemonDetails from './pages/detail';
import Contact from './pages/contact';
import React from 'react';

function App() {

  return (

    <React.Fragment>

      <div className="App">


        <BrowserRouter>
          <PokeHeader></PokeHeader>
          <Routes>
            <Route path="/home" element={<Home></Home>} ></Route>
            <Route path='/home/pokemon/:id' element={<PokemonDetails></PokemonDetails>}></Route>
            <Route path='/home/pokemon/page/:page' element={<Home></Home>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path="*" element={<NotFound></NotFound>} ></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
