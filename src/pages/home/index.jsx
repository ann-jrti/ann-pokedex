import PokeList from "../../components/poke-list"
import './style.css'

function Home() {
    return (
        <main className="pokemon__cards">
            <PokeList></PokeList>
        </main>
    )
}

export default Home;