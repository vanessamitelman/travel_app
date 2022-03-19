import React, { useState, useEffect, createRef, useContext } from 'react';
import { TravelContext } from '../../TravelContext';
import { Grid, Typography, FormControl } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles'; //useStyles is a hook
import TypeControl from './TypeControl';
import RatingControl from './RatingControl';
import Progress from './Progress';
import ListTitle from './ListTitle';

const List = () => {
  const { places, childClicked, isLoading, filteredPlaces } =
    useContext(TravelContext);
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
      <ListTitle />
      {isLoading ? (
        <Progress />
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <TypeControl />
          </FormControl>
          <FormControl className={classes.formControl}>
            <RatingControl />
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, index) => (
              <Grid item ref={elRefs[index]}  key={index} xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === index}
                  place={place}
                  refProp={elRefs[index]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
