import { GiSoccerBall } from "react-icons/gi"
import './Home.css'
import bg from '../../grama.jpeg'

function Home() {
    return (
        <div>
            <div className="cabecalho-pagina">
                <GiSoccerBall className="icone-cabecalho" />
                <h1>React Futs</h1>
                <p className='lead text-center'>Dados de partidas, times e jogadores em um só lugar!</p>
            </div>
            <h2>Projeto para Web 1</h2>
            <div>
                Desenvolvido por:

                - Jardel
                - Pessoa 2

            </div>
            <img className="bg" src={bg} alt="" />
        </div>
    );
}

export default Home;
