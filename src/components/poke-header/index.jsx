import './style.css'
import searchIcon from '../../assets/icons/magnifier.png'
import { Link } from 'react-router-dom';

function PokeHeader({ filterByPokemon }) {

    return (
        <nav className="pokemon__header">
            <Link className="pokemon__link-home" to="/home"><h1 className="pokemon__pokedex-title">Pokédex</h1></Link>
            <div className="input-search-container">
                <input className="input-search" onChange={filterByPokemon} type="text" placeholder="Search pokemon"></input>
                <img src={searchIcon} className="search-icon"></img>

            </div>

        </nav>
    )
}

export default PokeHeader;