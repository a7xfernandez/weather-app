import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';



const renderForecastItemDays = (forecastData) => {        
    return forecastData.map(forecastData=>
        (<ForecastItem 
            key={`${forecastData.weekDay}${forecastData.hour}`}
            weekDay ={forecastData.weekDay} 
            hour={forecastData.hour} 
            data={forecastData.data}>                    
        </ForecastItem>));
}

const renderProgress = ()=>{
    return <h3>Cargando Pronostico extendido</h3>;
}

const  ForecastExtended =({city,forecastData}) => ( 
        <div>
            <h2 className='forecast-title'>Pronostico Extendido para {city} </h2>
            {forecastData ?
                renderForecastItemDays(forecastData) :
                renderProgress()}
        </div>
    
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData:PropTypes.array,
}

export default ForecastExtended;