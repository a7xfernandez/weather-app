import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
import {store} from './store';


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
  
  constructor(){
    super();
    this.state = {city: null};
  }
  
  handleSelectedLocation = city => {
    this.setState({city: city});
    console.log(`handleSelectedLocation ${city}`);    
    
    store.dispatch(setCity(city));
  }

  render(){
    const {city} = this.state;
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
              <LocationList cities={cities} 
                  onSelectedLocation={this.handleSelectedLocation}>                  
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                  {
                    city &&
                     <ForecastExtended city={city}></ForecastExtended>
                  }
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
