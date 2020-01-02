import React from 'react';
import CirculaProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';  
import WeatheData from './WeatherData';
import './styles.css';

/*
const api_key = "94c47bc54fa48611447617e6c98469bb";
const url = "https://api.openweathermap.org/data/2.5/weather";

componentWillMount(){
    const {city} = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}`;
    fetch(api_weather).then(data => {
        return data.json();
    }).then(weather_data => {
        const data = transformWeather(weather_data);
        this.setState({data});
    });
}
*/
const WeatherLocation = ({ onWeatherLocationClick, city, data }) =>(
    <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? <WeatheData data={data}/> : 
            <CirculaProgress size={70} thickness={7} />
        }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,    
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;