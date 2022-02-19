import './App.css';
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/not-found';
import PokeHeader from './components/poke-header';
import PokemonDetails from './pages/detail';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        {/* <PokeHeader></PokeHeader> */}
        <Routes>
          <Route path="/home" element={<Home></Home>} ></Route>
          <Route path="*" element={<NotFound></NotFound>} ></Route>
          <Route path='/home/:id' element={<PokemonDetails></PokemonDetails>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
