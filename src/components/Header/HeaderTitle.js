import React from 'react';
import {  Typography} from '@material-ui/core';
import useStyles from './styles'; //useStyles is a hook

const HeaderTitle = () => {
  const classes = useStyles();
  return (
    <Typography variant='h5' className={classes.title}>
      Travel Advisor
    </Typography>
  );
};

export default HeaderTitle;
