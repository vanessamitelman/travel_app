import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData, getWeatherData, getAirportData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [airportData, setAirportData] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    if (bounds.ne && bounds.sw) {
      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );
      getAirportData(coords.lat, coords.lng).then((data) =>
        setAirportData(data)
      );
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating('');
        setIsLoading(false);
      });
    }
  }, [type, bounds]);
  return (
    <>
      <CssBaseline />
      <Header setCoords={setCoords} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            type={type}
            rating={rating}
            setType={setType}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
            airportData={airportData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
