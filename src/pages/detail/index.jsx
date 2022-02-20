import './style.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPokemonsFromApi } from '../../data';
import React from 'react';
import PokeCard from '../../components/poke-card';
import PokemonDetail from './components/detail-info';

// https://pokeapi.co/api/v2/pokemon/1

function PokemonDetails() {
    const pathParams= useParams();
    const [pokemons, updatePokemons] = useState([]);
    const [nextPokemons, updateNextPokemons] = useState(`https://pokeapi.co/api/v2/pokemon?offset=$20&limit=20`);
    const [prevPokemons, updatePrevPokemons] = useState(`https://pokeapi.co/api/v2/pokemon?offset=$&limit=20`);
    let [urlApi, updateUrlApi] = useState(`https://pokeapi.co/api/v2/pokemon`)



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
            })
        })
      })
  }, [urlApi]);
  
  const findPokemonById = pokemons.find(pokemon => pokemon.id === parseInt(pathParams.id))

  const printPokemonDetail = (pokemon) => {
    return <PokemonDetail
          img={pokemon.sprites.other.home.front_default}
          imgReverse={pokemon.sprites.other.home.front_shiny}
          name={pokemon.name}
          height={pokemon.height}
          hp={pokemon.stats[0].base_stat}
          attack={pokemon.stats[1].base_stat}
          defense={pokemon.stats[2].base_stat}
          spAttack={pokemon.stats[3].base_stat}
          spDefense={pokemon.stats[4].base_stat}
          speed={pokemon.stats[5].base_stat}
          id={pokemon.id}
          detailsId={pokemon.id}
        ></PokemonDetail>
  }

    return (
        <React.Fragment>
            <div className="pokemon__detail">
                {findPokemonById ? printPokemonDetail(findPokemonById) : <h2>Cargando...</h2> }
                
            </div>          
        </React.Fragment>
       
    )
}

export default PokemonDetails;