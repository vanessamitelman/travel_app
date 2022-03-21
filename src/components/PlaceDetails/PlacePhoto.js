import React from 'react';
import { CardMedia } from '@material-ui/core';

const PlacePhoto = ({ place }) => {
  return (
    <CardMedia
      style={{ height: 220 }}
      image={
        place.photo
          ? place.photo.images.large.url
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
          : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
      }
      title={place.name}
    />
  );
};

export default PlacePhoto;
