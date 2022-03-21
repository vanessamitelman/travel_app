import React from 'react';
import TravelContextProvider from './TravelContext';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  return (
    <>
      <TravelContextProvider>
        <CssBaseline />
        <Header />
        <Grid container spacing={0} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      </TravelContextProvider>
    </>
  );
};

export default App;
