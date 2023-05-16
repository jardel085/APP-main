import './Jogadores.css'
import { useState } from 'react';
import { BsDownload, BsFillPersonLinesFill, BsSearch } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";

const apiKey = '5b26ee0ecbmsh174f2376ee9040bp194d0cjsnf57ed0d02786';

function Jogadores() {
    const [times, setTimes] = useState([])
    const [pesquisa, setPesquisa] = useState('')

    async function carregarJogadores(pesquisa) {
        setTimes([])
        const query = pesquisa ? `&name=${pesquisa}` : ''
        var api = `https://sportscore1.p.rapidapi.com/players/search?${query}`;
        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
            }
        };
        var data = await fetch(api, options).then(response => response.json())
        setTimes(data.data);
    }
    return (
        <>
            <div className="cabecalho-pagina">
                <BsFillPersonLinesFill className="icone-cabecalho" />
                <h1>Listar Jogadores</h1>
                <p className='lead text-center'>Exibe uma lista com jogadores e suas estatísticas.</p>
                <button className="btn btn-dark mt-3 mx-auto" onClick={() => carregarJogadores()}><BsDownload className='me-2' />Carregar Jogadores</button>
            </div>

            <div className="pesquisarTime">
                <label htmlFor='nomeTime'>
                    <p>Pesquise um Jogador pelo nome</p>
                </label>
                <div className="barra">
                    <input type="text" id='nomeTime' onChange={e => setPesquisa(e.target.value)} />
                    <button className="btn btn-dark mx-auto" onClick={() => carregarJogadores(pesquisa)}><BsSearch /></button>
                </div>
            </div>

            <div className="jogadores gap-5 px-3 py-4 mx-auto mt-4 mb-5">
                {times.map((jogador) =>
                    <div key={jogador.name} className="mx-auto mb-3">
                        <div className="jogador card shadow border-5 rounded-4 px-2 mx-auto">
                            <div className="card-body d-flex flex-column">
                                <img src={jogador.photo} alt="" />
                                <h4>{jogador.name}</h4>
                                <div className="dropdown mt-auto" key={jogador.name}>
                                    <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown">
                                        <ImStatsDots className='me-1' /> Estatísticas
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item">Idade: {jogador.age}</a></li>
                                        <li><a className="dropdown-item">Camisa: {jogador.shirt_number}</a></li>
                                        <li><a className="dropdown-item">País: {jogador.nationality_code}</a></li>
                                        <li><a className="dropdown-item">Rating: {jogador.rating}</a></li>
                                        <li><a className="dropdown-item">Altura: {jogador.height}</a></li>
                                        <li><a className="dropdown-item">Peso: {jogador.weight}kg</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Jogadores