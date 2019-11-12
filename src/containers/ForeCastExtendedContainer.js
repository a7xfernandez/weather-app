import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import {connect} from 'react-redux';

class ForeCastExtendedContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForecastExtended city = {this.props.city} />
        );
    }
}

ForeCastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};
const mapStateToProps = ({city}) =>({city});

export default connect(mapStateToProps,null)(ForeCastExtendedContainer);