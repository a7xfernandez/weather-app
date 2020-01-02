import React from 'react';
import WeatherLocation from './WeatherLocations';
import { PropTypes } from 'prop-types';
import './styles.css';

const LocationList = ({cities,onSelectedLocation})=> {    
    const handleWeatherLocationClick = city => {   
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponent = cities => (
        cities.map( city => 
                (
                    <WeatherLocation 
                        key={city.key}
                        city={city.name}
                        onWeatherLocationClick={() => handleWeatherLocationClick(city.name)} 
                        data= {city.data}/>))
    );
   return ( <div className="LocationList">
                {strToComponent(cities)}
            </div>);
}

LocationList.propTypes ={
    cities: PropTypes.array.isRequired,
    onSelectedLotation: PropTypes.func,
};

export default LocationList;