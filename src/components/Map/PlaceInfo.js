import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles'; //useStyles is a hook

const PlaceInfo = ({ place }) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography
        className={classes.typography}
        variant='subtitle2'
        gutterBottom
      >
        {place.name}
      </Typography>
      <img
        className={classes.pointer}
        src={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        alt={place.name}
      />
      <Rating size='small' value={Number(place.rating)} ReadOnly />
    </Paper>
  );
};

export default PlaceInfo;
