import './style.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import PokemonDetail from './components/detail-info';

// https://pokeapi.co/api/v2/pokemon/1

function PokemonDetails() {
  const pathParams = useParams();
  const [pokemon, updatePokemon] = useState('')

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pathParams.id}`)
      .then(res => res.json())
      .then(data => updatePokemon(data))
  }, []);

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
        {pokemon ? printPokemonDetail(pokemon) : <h2>Cargando...</h2>}

      </div>
    </React.Fragment>

  )
}

export default PokemonDetails;