import React, { Component } from 'react';
import CirculaProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import{api_weather} from './../../constants/api_url';
import Location from './Location';  
import WeatheData from './WeatherData';
import './styles.css';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';


const api_key = "94c47bc54fa48611447617e6c98469bb";
const url = "https://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component{
constructor({city}){
    super();    
    this.state ={
      city,
      data:null,
    };
}
/*
componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
}

componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");    
}

    handleUpdateClick = () =>{
        const api_weather = getUrlWeatherByCity(this.state.city);        
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        
            
        }).then(data=>{
            const newWheater = transformWeather(data);
            console.log(newWheater);
            this.setState({
                data:newWheater
            });
            
        });
    }
    */
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

    render =() =>{
        const {onWeatherLocationClick} = this.props;
        const{city,data}=this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatheData data={data}/> : 
                    <CirculaProgress size={70} thickness={7} />
                }
            </div>);

    };
}

WeatherLocation.propTypes = {
    // eslint-disable-next-line no-undef
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;