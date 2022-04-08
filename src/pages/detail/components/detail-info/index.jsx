import './style.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PokeHeader from '../../../../components/poke-header';

function PokemonDetail({
  name,
  img,
  imgReverse,
  hp,
  attack,
  defense,
  spAttack,
  spDefense,
  speed,
}) {
  const [detailImage, setDetailImage] = useState(null);
  console.log(detailImage);
  return (
    <React.Fragment>
      <main className="pokemon__detail-container">
        <div className="two">
          <Link to="/home">
            <div className="pokemon__back-home-container">
              <button className="pokemon__details-back-home">
                <span className="arrow">←</span> Back to pokemon list
              </button>
            </div>
          </Link>
        </div>

        <div class="one">
          <article className="pokemon__detail">
            <div class="pokeball__box">
              <img
                class="pokemon__pokeball-background"
                src="https://pokemon-world-imdoug.netlify.app/img/pokeball.svg"
              />
            </div>
            <div className="pokemon__detail-img-container ">
              <img
                src={detailImage ? detailImage : img}
                className="imagen bounce pokemon__detail__image"
              ></img>
            </div>
            <button
              className="pokemon__version"
              onClick={() => {
                setDetailImage(detailImage ? null : imgReverse);
              }}
            >
              {detailImage ? 'switch normal version' : 'switch shinny version'}
            </button>
            <h2 className="pokemon__detail__name">{name}</h2>
            <section className="pokemon__stats-container">
              <div className="pokemon__stats-text-container">
                <h2 className="pokemon__stats-text">Stats</h2>
              </div>

              <div className="pokemon__stats-value-container">
                <p className="pokemon__stat">
                  Hp:<span>{hp}</span>
                </p>
                <p className="pokemon__stat">
                  Attack: <span>{attack}</span>
                </p>
                <p className="pokemon__stat">
                  Defense: <span>{defense}</span>
                </p>
                <p className="pokemon__stat">
                  Special attack: <span>{spAttack}</span>
                </p>
                <p className="pokemon__stat">
                  Special defense: <span>{spDefense}</span>
                </p>
                <p className="pokemon__stat">
                  Speed: <span>{speed}</span>
                </p>
              </div>
              {/* <p className="">Height | <span>{height} cm</span></p>  */}
            </section>
          </article>
        </div>
      </main>
    </React.Fragment>
  );
}

export default PokemonDetail;
