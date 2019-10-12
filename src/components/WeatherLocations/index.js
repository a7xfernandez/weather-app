import React, { Component } from 'react';
import CirculaProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import{api_weather} from './../../constants/api_url';
import Location from './Location';  
import WeatheData from './WeatherData';
import './styles.css';


class WeatherLocation extends Component{
constructor(){
    super();
    this.state ={
      city: 'San Juan',
      data:null,
    };
    console.log("constructor");
}

componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
}

componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");    
}

    handleUpdateClick = () =>{        
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        
            
        }).then(data=>{
            console.log("Resultado del handleUpdateClick");
            const newWheater = transformWeather(data);
            console.log(newWheater);
            this.setState({
                data:newWheater
            });
            
        });
    }
    render() {
        console.log("render");
        const{city,data}=this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? 
                    <WeatheData data={data}></WeatheData> : 
                    <CirculaProgress size={70}></CirculaProgress>
                }
            </div>
        );

    }
};

export default WeatherLocation;