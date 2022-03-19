import React,{useState,useContext} from 'react';
import { TravelContext } from '../../TravelContext';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { Grid } from '@material-ui/core';
import useStyles from './styles'; //useStyles is a hook

const PlacesGrid = () => {
  const classes = useStyles();
  const { places, childClicked } = useContext(TravelContext);
  const [elRefs, setElRefs] = useState([]);

  return (
    <Grid container spacing={3} className={classes.list}>
      {places?.map((place, index) => (
        <Grid ref={elRefs[index]} item key={index} xs={12}>
          <PlaceDetails
            selected={Number(childClicked) === index}
            place={place}
            refProp={elRefs[index]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlacesGrid;
