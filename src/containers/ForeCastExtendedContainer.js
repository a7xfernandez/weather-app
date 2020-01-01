import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getForecastDataFromCities, getCity} from './../reducers'
import ForecastExtended from '../components/ForecastExtended';



class ForeCastExtendedContainer extends Component {
    render() {
        const {city, forecastData}= this.props;
        return (
            city &&
            <ForecastExtended city = {city} forecastData={forecastData}/>
        );
    }
}

ForeCastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};
const mapStateToProps = state =>({city: getCity(state), forecastData: getForecastDataFromCities(state)});

export default connect(mapStateToProps,null)(ForeCastExtendedContainer);