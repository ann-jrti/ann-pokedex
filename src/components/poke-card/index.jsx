import './style.css'

function PokeCard({img, name, types, id}) {


    return (
        <article className="pokemon">
            <div className="pokemon__image-container">
                <div className="pokemon__sprite-container">
                    <div className="pokemon__shape"></div>
                    <img className="pokemon__image" src={img}></img>
                </div>
            </div>
           
            <section className="pokemon__info-container">
                <h2 className="pokemon__name">{name}</h2>
                <div className="pokemon__types-container">
                    <p className="pokemon__types">types</p>
                    <p className="pokemon__types-value">{types}</p>
                </div>
                
                <div className="pokemon__id-container">
                    <div className="pokemon__id-shape"></div>
                    <p className="pokemon__id">{id}</p>
                </div>
                
            </section>
        </article>
    )
}

export default PokeCard;