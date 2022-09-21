import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import PropTypes from  'prop-types';

const ClimaTempo = ({ClimaTempo}) => {
    const [location, setLocation] = useState(false);
    const [resposta, setResposta] = useState(['']);

    const getWeather = async (lat, long) => {
        let res = await axios.get(
            'https://api.openweathermap.org/data/2.5/weather',
            {
                params: {
                    lat: lat,
                    lon: long,
                    appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                    lang: 'pt',
                    units: 'metric',
                },
            }
        );
        setResposta(res.data);
        console.table(resposta);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = position.coords;
            getWeather(pos.latitude, pos.longitude);
            setLocation(true);
        });
    }, []);

    const dataShow = () => {
        const showData = new Date();
        return showData.toLocaleDateString();
    };
    const horaShow = () => {
        const showHora = new Date();
        const hora = showHora.getHours();
        const minutos = showHora.getMinutes();
        // const show =
        return hora + ':' + minutos;
    };

    setInterval(horaShow, 600);

    if (resposta == false) {
        return (
            <>
                <h1>Consultando clima...</h1>
            </>
        );
    } else {
        return (
            <div className="top">
                <h1>Este é o clima em sua região!</h1>
                <div className="layout">
                    <div className="divLayout">
                        <p className="P1">{horaShow()}</p>
                        <p className="P2">{dataShow()}</p>
                    </div>
                    <div className="divLayout2">
                       
                        <span>Temperatura atual: ({resposta['main']['temp']})º</span>
                        <span>Temperatura máxima: ({resposta['main']['temp_max']})º</span>
                        <span>Temperatura minima: ({resposta['main']['temp_min']})º</span>
                        

                        
                    </div>
                    
                </div>
            </div>
        );
    }
};
ClimaTempo.propTypes = {
    ClimaTempo:PropTypes.func.isRequired,
}

export default ClimaTempo;
