import React, { useState, useContext } from 'react';
import { TravelContext } from '../../TravelContext';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import useStyles from './styles'; //useStyles is a hook
import AutocompleteField from './AutocompleteField';
import HeaderTitle from './HeaderTitle';
import SearchHeader from './SearchHeader';

const Header = () => {
  const classes = useStyles();
  const { setCoords } = useContext(TravelContext);
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
        <HeaderTitle />
        <Box display='flex'>
          <SearchHeader />
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <AutocompleteField />
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
