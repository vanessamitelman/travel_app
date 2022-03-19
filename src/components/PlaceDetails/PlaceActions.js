import React from 'react';
import { Button, CardActions } from '@material-ui/core';

const PlaceActions = ({ place }) => {
  return (
    <CardActions>
      <Button
        size='small'
        color='primary'
        onClick={() => window.open(place.web_url, '_blank')}
      >
        Trip Advisor
      </Button>
      <Button
        size='small'
        color='primary'
        onClick={() => window.open(place.website, '_blank')}
      >
        Website
      </Button>
    </CardActions>
  );
};

export default PlaceActions;
