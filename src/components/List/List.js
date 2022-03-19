import React, { useState, useEffect, createRef, useContext } from 'react';
import { TravelContext } from '../../TravelContext';
import { Typography } from '@material-ui/core';
import useStyles from './styles'; //useStyles is a hook
import TypeControl from './TypeControl';
import RatingControl from './RatingControl';
import PlacesGrid from './PlacesGrid';
import Progress from './Progress';

const List = () => {
  const { places, isLoading, filteredPlaces } = useContext(TravelContext);
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const newPlace = filteredPlaces.length ? filteredPlaces : places;
  useEffect(() => {
    setElRefs((refs) =>
      Array(newPlace?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [newPlace]);

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <Progress />
      ) : (
        <>
          <TypeControl />
          <RatingControl />
          <PlacesGrid />
        </>
      )}
    </div>
  );
};

export default List;
