import React, { useState, useEffect } from "react";
import PokeCard from "../poke-card";
import { getPokemonsFromApi } from "../../data";
import PokeHeader from "../poke-header";
import './style.css'
import { useParams } from "react-router-dom";

function PokeList() {
  const pathParams = useParams();
  const [pokemons, updatePokemons] = useState([]);
  const [filteredPokemons, udpateFilteredPokemons] = useState([]);
  let [urlApi, updateUrlApi] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPokemons, updateNextPokemons] = useState(`https://pokeapi.co/api/v2/pokemon?offset=${pathParams.page}&limit=20`);
  const [prevPokemons, updatePrevPokemons] = useState(`https://pokeapi.co/api/v2/pokemon?offset=${pathParams.page}&limit=20`);

  const filter = e => {
    const newFilter = pokemons.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()));
    udpateFilteredPokemons(newFilter)
  }

  const handleOnClickNextPage = () => {
    updatePokemons([])
    udpateFilteredPokemons([])
    updateUrlApi(nextPokemons)
  }
  

  const handleOnClickPrevPage = () => {
    updatePokemons([])
    udpateFilteredPokemons([])
    updateUrlApi(prevPokemons)
  }
  useEffect(() => {
    getPokemonsFromApi(urlApi)
      .then(d => {
        updateNextPokemons(d.next);
        updatePrevPokemons(d.previous === null ? '' : d.previous);
        d.results.map((o) => {
          fetch(o.url)
            .then(res => res.json())
            .then(p => {
              pokemons.push(p);
              updatePokemons([...pokemons]);
              udpateFilteredPokemons([...pokemons])
            })
        })
      })
      return () => updateUrlApi();
  }, [urlApi]);
  

  const printPokemonCard = filteredPokemons.map(pokemon => {
    return <PokeCard
      key={pokemon.id}
      img={pokemon.sprites.other.home.front_default}
      name={pokemon.name}
      types={pokemon.types[0].type.name}
      id={pokemon.id}
      detailsId={pokemon.id}
    ></PokeCard>
  })

  console.log(nextPokemons);
  console.log(prevPokemons);
  return (
    <React.Fragment>
      <PokeHeader filterByPokemon={filter}></PokeHeader>
      <div className="next-page-button-container">
      {prevPokemons !== '' ? <button onClick={handleOnClickPrevPage} className="next-page-button">Previous page</button> : ''}
          <button onClick={handleOnClickNextPage} className="next-page-button">Next page</button>
        </div>
      <main className="pokemon__home-container">
        {pokemons.length === 0 ? <h2>Cargando...</h2> : printPokemonCard}
      </main>
      
    </React.Fragment>
  );
}


export default PokeList;