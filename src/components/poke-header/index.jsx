import './style.css'
import { Link } from 'react-router-dom';

function PokeHeader() {

    return (
        <nav>
            <div className="pokemon__header">
                <Link className="pokemon__link-home" to="/home"><h1 className="pokemon__pokedex-title">Pokédex</h1></Link>
                <Link className="pokemon__link-home" to="/contact"><h1 className="pokemon__pokedex-title">Contact</h1></Link>
            </div>
        </nav>
    )
}

export default PokeHeader;