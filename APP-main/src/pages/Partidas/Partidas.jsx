import './Partidas.css'
import { useEffect, useState } from 'react';
import { BsCalendarEvent, BsClock, BsDownload, BsListStars } from "react-icons/bs";

const apiKey = 'test_706fb8737ecacbade477c8040c46c3'; //SUBSTITUI PELA APIKEY LIVE QUANDO FOR SUBIR PRO VERCEL

function Partidas() {
    const [partidas, setPartidas] = useState([])
    const [campeonato, setCampeonato] = useState({})

    console.log(campeonato)

    useEffect(() => {
        const getChampionship = async () => {
            var api = 'https://api.api-futebol.com.br/v1/campeonatos/10';
            const options = {
                method: 'GET',
                headers: {
                    cookie: 'PHPSESSID=jdjtchg10d1pv76rv1o5rrhdle',
                    Authorization: `Bearer ${apiKey}`
                }
            };
            var data = await fetch(api, options).then(response => response.json())
            setCampeonato(data);
        }
        getChampionship();
    }, [])

    async function carregarRodada() {
        var api = `https://api.api-futebol.com.br/v1/campeonatos/${campeonato.campeonato_id}/rodadas/${campeonato.rodada_atual.rodada}`;
        const options = {
            method: 'GET',
            headers: {
                cookie: 'PHPSESSID=jdjtchg10d1pv76rv1o5rrhdle',
                Authorization: `Bearer ${apiKey}`
            }
        };
        var data = await fetch(api, options).then(response => response.json())
        setPartidas(data.partidas);
    }
    return (
        <>
            <div className="cabecalho-pagina">
                <BsListStars className="icone-cabecalho" />
                <h1>Listar Partidas</h1>
                <p className='lead text-center'>Clique no botão para exibir a lista de partidas nas datas próximas.</p>
                <button className="btn btn-dark mt-3 mx-auto" onClick={carregarRodada}><BsDownload className='me-2' />Carregar partidas</button>
            </div>

            <div className="d-flex flex-wrap gap-5 px-3 py-4 mx-auto mt-4 mb-5">
                {partidas.map((partida) =>
                    <div key={partida.partida_id} className="pt mx-auto mb-5">
                        <div className="partida card rounded-4 shadow border-5">
                            <div className="card-body d-flex flex-column">
                                <h6 className="d-flex align-items-center justify-content-center"><BsCalendarEvent className='me-1' />{partida.data_realizacao} - {partida.hora_realizacao}h <BsClock className='ms-1' /></h6>
                                <h6 className="mb-3 mx-auto text-center">{partida.placar}</h6>
                                <div className="text-center d-flex">
                                    <img className="escudo-time mx-auto" src={partida.time_mandante.escudo} alt="" />
                                    <span className="mx-auto my-auto"><b>X</b></span>
                                    <img className="escudo-time mx-auto" src={partida.time_visitante.escudo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Partidas;
