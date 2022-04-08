import './style.css';
import { Link } from 'react-router-dom';

function PokeHeader() {
  return (
    <nav>
      <div className="pokemon__header">
        <Link className="pokemon__link-home" to="/home">
          <h1 className="pokemon__pokedex-title">Ann's Pokédex</h1>
        </Link>
      </div>
    </nav>
  );
}

export default PokeHeader;
