import './style.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function PokemonDetail({name, img, imgReverse, height, hp, attack, defense, spAttack, spDefense, speed}) {
//onMouseOver={e => (e.currentTarget.src = imgReverse)} onMouseLeave={e => (e.currentTarget.src = img)}
const [detailImage, setDetailImage] = useState(null)
console.log(detailImage);
    return(
        <main className="pokemon__detail-container">
            <article className="pokemon__detail">
                <div className="pokemon__detail-img-container imagen bounce">
                    <img src={detailImage ? detailImage : img} className="pokemon__detail__image" ></img>
                </div>
                <button onClick={() => {
                    setDetailImage(detailImage ? null : imgReverse)
                }}>{detailImage ? 'normal version' : 'shinny version'}</button>
                <h2 className="pokemon__detail__name">{name}</h2>
                <h2>Stats</h2>
                <p>Height: {height}</p>
                <p>Hp: {hp}</p>
                <p>Attack: {attack}</p>
                <p>Defense: {defense}</p>
                <p>Special attack: {spAttack}</p>
                <p>Special defense: {spDefense}</p>
                <p>Speed: {speed}</p>
            </article>
        </main>
    )
}

export default PokemonDetail;