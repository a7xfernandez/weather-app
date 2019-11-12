import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForeCastExtendedContainer from './containers/ForeCastExtendedContainer';

const cities = [
  'Tegucigalpa,hn',
  'Dublin,irl',
  'San Pedro Sula,hn',
  'La Ceiba,hn',
  'Tela,hn',
  'Madrid,es',
  'Buenos Aires,ar',
  'New York,us',
  'Santiago,chl',
];

class App extends Component {
  
  render(){
    
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6} >
              <LocationListContainer cities={cities}></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                     <ForeCastExtendedContainer></ForeCastExtendedContainer>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}



export default App;