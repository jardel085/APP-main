import { useState } from "react";
import "./Times.css"
import { BsDownload, BsFillPeopleFill, BsSearch } from "react-icons/bs";

/*
const url = 'https://sportscore1.p.rapidapi.com/teams/1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5b26ee0ecbmsh174f2376ee9040bp194d0cjsnf57ed0d02786',
        'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}*/

const apiKey = '5b26ee0ecbmsh174f2376ee9040bp194d0cjsnf57ed0d02786';

function Times() {
    const [times, setTimes] = useState([])
    const [pesquisa, setPesquisa] = useState('')

    async function carregarTimes(pesquisa) {
        setTimes([])
        const query = pesquisa ? `&name=${pesquisa}` : ''
        var api = `https://sportscore1.p.rapidapi.com/teams/search?${query}&locale=pt&sport_id=1`;
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
                <BsFillPeopleFill className="icone-cabecalho" />
                <h1>Listar Times</h1>
                <p className='lead text-center'>Exibe uma lista com equipes e suas estatísticas. (Clique no botão 'Carregar Times' antes de usar a pesquisa)</p>
                <button className="btn btn-dark mt-3 mx-auto" onClick={() => carregarTimes()}><BsDownload className='me-2' />Carregar Times</button>
            </div>

            <div className="pesquisarTime">
                <label htmlFor='nomeTime'>
                    <p>Pesquise um time pelo nome</p>
                </label>
                <div className="barra">
                    <input type="text" id='nomeTime' onChange={e => setPesquisa(e.target.value)} />
                    <button className="btn btn-dark mx-auto" onClick={() => carregarTimes(pesquisa)}><BsSearch /></button>
                </div>
            </div>

            <div className="d-flex flex-wrap gap-5 px-3 py-4 mx-auto mt-4 mb-5">
                {times?.map((time) =>
                    <div key={time.name} className="pt mx-auto mb-5">
                        <div className="card text-center shadow border-5 rounded-4 px-2 mx-auto">
                            <div className="card-body d-flex flex-column">
                                <img src={time.logo} alt="" />
                                <h4 className="mb-3">{time.name}</h4>
                                <div className="dropdown mt-auto" key={time.name}>
                                    <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown">
                                        Estatísticas
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item">País: {time.country}</a></li>
                                        {/*<li><a className="dropdown-item">{time.treinador}</a></li>
                                        <li><a className="dropdown-item">{time.vitorias}</a></li>
                                        <li><a className="dropdown-item">{time.derrotas}</a></li>*/}
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

export default Times;
