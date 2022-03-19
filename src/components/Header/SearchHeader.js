import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles'; //useStyles is a hook

const SearchHeader = () => {
  const classes = useStyles();
  return (
    <Typography variant='h6' className={classes.title}>
      Explore new places
    </Typography>
  );
};

export default SearchHeader;
