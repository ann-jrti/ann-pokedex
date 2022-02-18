import React, { useState, useEffect } from "react";
import PokeCard from "../poke-card";
import { getPokemonsFromApi } from "../../data";
import PokeHeader from "../poke-header";

function PokeList() {
  const [pokemons, updatePokemons] = useState([]);
  const [filteredPokemons, udpateFilteredPokemons] = useState([]);

  const filter = e => {
    console.log(e);
    const newFilter = pokemons.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()));
    udpateFilteredPokemons(newFilter)
  }

  useEffect(() => {
      getPokemonsFromApi()
      .then(d => 
        {d.results.map((o) => {
          fetch(o.url)
          .then(res => res.json())
          .then(p => {
              pokemons.push(p);
              updatePokemons([...pokemons]);
              udpateFilteredPokemons([...pokemons])
            })
        })
      })
  }, []);

    const printPokemonCard = filteredPokemons.map(pokemon => {
        return <PokeCard
          img={pokemon.sprites.other.home.front_default}
          name={pokemon.name}
          types={pokemon.types[0].type.name}
          id={pokemon.id}
        ></PokeCard>
    })

  return (
    <React.Fragment>
      <PokeHeader filterByPokemon={filter}></PokeHeader>
      {pokemons.length === 0 ? <h2>Cargando...</h2> : printPokemonCard}
    </React.Fragment>
  );
}


export default PokeList;
