import React, { useState,useContext } from 'react';
import {TravelContext} from '../../TravelContext'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'; //useStyles is a hook

const Header = () => {
  const { setCoords } = useContext(TravelContext);
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoords({ lat, lng });
  };

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
            <div className={classes.search}>
              <div className={classes.icon}>
                <div style={{ position: 'absolute', top: '4px' }}>
                  <SearchIcon />
                </div>

                <InputBase
                  placeholder='Search...'
                  classes={{ root: classes.root, input: classes.input }}
                  style={{ paddingLeft: '28px' }}
                />
              </div>
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
