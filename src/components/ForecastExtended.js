import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transforForecast from './../services/transformForecast';
import './styles.css';

const days=[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]
const data ={
    temperature:10,
    humidity:10,
    weatherState: 'normal',
    wind:'normal',
};



const api_key = "94c47bc54fa48611447617e6c98469bb";
const url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state ={forecastData:null}
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !==this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        //fetch or axios
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weahter_data =>{
                console.log(weahter_data);
                const forecastData = transforForecast(weahter_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        )
    }

    renderForecastItemDays(forecastData){        
        return forecastData.map(forecastData=>
            (<ForecastItem 
                key={`${forecastData.weekDay}${forecastData.hour}`}
                weekDay ={forecastData.weekDay} 
                hour={forecastData.hour} 
                data={forecastData.data}>                    
            </ForecastItem>));
    }

    renderProgress = ()=>{
        return <h3>Cargando Pronostico extendido</h3>;
    }


    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
        <div>
            <h2 className='forecast-title'>Pronostico Extendido para {city} </h2>
            {forecastData ?
                this.renderForecastItemDays(forecastData) :
                this.renderProgress()}
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;