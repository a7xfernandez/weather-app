import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import {setCity, setSelectedCity} from './../actions';

class LocationListContainer extends Component {
  
    handleSelectedLocation = city => {
      this.props.setCity(city);
    }
    render() {
        return (
            <LocationList cities={this.props.cities} 
                onSelectedLocation={this.handleSelectedLocation}>                  
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDiscpachToPropsActions = dispatch =>(
    {
    setCity: value =>dispatch(setSelectedCity(value))
    }
  );
export default  connect(null,mapDiscpachToPropsActions)(LocationListContainer);