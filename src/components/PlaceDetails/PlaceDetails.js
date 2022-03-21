import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import PlacePhoto from './PlacePhoto';
import PlaceTitle from './PlaceTitle';
import PlaceRating from './PlaceRating';
import PlacePrice from './PlacePrice';
import PlaceRanking from './PlaceRanking';
import PlaceAddress from './PlaceAddress';
import PlacePhone from './PlacePhone';
import PlaceActions from './PlaceActions';
import PlaceAwards from './PlaceAwards';
import PlaceCuisine from './PlaceCuisine';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <Card elevation={6}>
      <PlacePhoto place={place} />

      <CardContent>
        <PlaceTitle place={place} />
        <PlaceRating place={place} />
        <PlacePrice place={place} />
        <PlaceRanking place={place} />

        {place?.awards?.map((award, i) => (
          <PlaceAwards key={i} award={award} />
        ))}
        {place?.cuisine?.map(({ name }) => (
          <PlaceCuisine key={name} label={name} />
        ))}
        {place?.address && <PlaceAddress place={place} />}
        {place?.phone && <PlacePhone place={place} />}
        <PlaceActions place={place} />
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
