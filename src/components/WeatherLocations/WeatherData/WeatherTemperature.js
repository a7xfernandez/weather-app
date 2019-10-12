import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';
import './styles.css';

const icons ={
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
}

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];

    const sizeIcon = "4x" ;

    if(icon)
        return <WeatherIcons className = "wicon" name={icon} size="2x"/>;
    else
        return <WeatherIcons className = "wicon" name={"day-sunny"} size="2x"/>;
}

const WeatherTemperature =({temperature, weatherState})=>(
    <div className="weatherTempetureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className = "tempeture">{`${temperature}`}</span>
        <span className = "tempetureType">{`C°`}</span>
    </div>
);

WeatherTemperature.prototypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;