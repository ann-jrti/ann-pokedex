import React, { useState, useEffect } from "react";
import PokeCard from "../poke-card";
import { getPokemonsFromApi } from "../../data";
import "./style.css";
import { useParams, Link } from "react-router-dom";
import searchIcon from "../../assets/icons/magnifier.png";

function PokeList() {
  const pathParams = useParams();
  const [pokemons, updatePokemons] = useState([]);
  const [filteredPokemons, udpateFilteredPokemons] = useState([]);
  let [urlApi, updateUrlApi] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPokemons, updateNextPokemons] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=$20&limit=20`
  );
  const [prevPokemons, updatePrevPokemons] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=$&limit=20`
  );
  pathParams.page = parseInt(pathParams.page);
  pathParams.page = 0;

  const filterByPokemon = (e) => {
    const newFilter = pokemons.filter((p) =>
      p.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    udpateFilteredPokemons(newFilter);
  };

  const handleOnClickNextPage = () => {
    pathParams.page++;
    updatePokemons([]);
    udpateFilteredPokemons([]);
    updateUrlApi(nextPokemons);
  };

  const handleOnClickPrevPage = () => {
    pathParams.page--;
    updatePokemons([]);
    udpateFilteredPokemons([]);
    updateUrlApi(prevPokemons);
  };
  useEffect(() => {
    getPokemonsFromApi(urlApi).then((d) => {
      updateNextPokemons(d.next);
      updatePrevPokemons(d.previous === null ? "" : d.previous);
      d.results.map((o) => {
        fetch(o.url)
          .then((res) => res.json())
          .then((p) => {
            pokemons.push(p);
            pokemons.sort((a, b) => a.id - b.id)
            updatePokemons([...pokemons]);
            udpateFilteredPokemons([...pokemons]);
          });
      });
    });
    return () => updateUrlApi();
  }, [urlApi]);
  const printPokemonCard = filteredPokemons.map((pokemon) => {
    return (
      <PokeCard
        key={pokemon.id}
        img={pokemon.sprites.other.home.front_default}
        name={pokemon.name}
        types={pokemon.types[0].type.name}
        id={pokemon.id}
        detailsId={pokemon.id}
      ></PokeCard>
    );
  });

  return (
    <React.Fragment>
      <div className="input-search-container">
        <input
          className="input-search"
          onChange={filterByPokemon}
          type="text"
          placeholder="Search pokemon"
        ></input>
        <img src={searchIcon} className="search-icon"></img>
      </div>
      <div className="next-page-button-container">
        {prevPokemons !== "" ? (
          <button
            onClick={handleOnClickPrevPage}
            className="next-page-button"
          >
            Previous page
          </button>
        ) : (
          ""
        )}
        <Link to={`/home/pokemon/page/${pathParams.page}`}>
          <button
            onClick={handleOnClickNextPage}
            className="next-page-button"
          >
            Next page
          </button>
        </Link>
      </div>
      {pokemons.length === 0 ? <h2>Cargando...</h2> : printPokemonCard}
    </React.Fragment>
  );
}

export default PokeList;
